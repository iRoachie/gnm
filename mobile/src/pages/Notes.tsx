import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import { ActivityIndicator, Appbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { Query } from 'react-apollo';
import { NavigationScreenProps } from 'react-navigation';

import { Theme, StateContext } from '../util';
import client, {
  personNotesQuery,
  updateContactMutation,
  viewContactQuery,
} from '../graphql';
import { UserDetails, MergedNote } from '../types';
import {
  PersonUpdateInput,
  PersonWhereUniqueInput,
} from '../../../core/prisma-client';
import NoteItem from './ViewContact/components/NoteItem';

const SendIcon = Animated.createAnimatedComponent(Icon);

interface ScreenParams {
  personId: string;
}

const color = new Animated.Value(0);

const Notes: React.StatelessComponent<NavigationScreenProps<ScreenParams>> = ({
  navigation,
}) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const { getUser } = useContext(StateContext);

  const canSubmit = text.trim().length > 0;

  useEffect(() => {
    const fetchInfo = async () => {
      const user = await getUser();

      if (user) {
        setUserInfo(user);
      }
    };

    fetchInfo();
  }, []);

  useEffect(() => {
    Animated.timing(color, {
      toValue: Number(canSubmit),
      duration: 100,
    }).start();
  }, [text]);

  const addComment = async () => {
    setLoading(true);
    const id = navigation.getParam('personId');

    const data: PersonUpdateInput = {
      notes: {
        create: [
          {
            message: text,
            date: new Date(),
            user: { connect: { id: userInfo!.id } },
          },
        ],
      },
    };

    const where: PersonWhereUniqueInput = {
      id,
    };

    try {
      await client.mutate({
        mutation: updateContactMutation,
        variables: { where, data },
        refetchQueries: [
          {
            query: viewContactQuery,
            variables: { id },
          },
          {
            query: personNotesQuery,
            variables: { id },
          },
        ],
      });

      setTimeout(() => {
        setLoading(false);
        setText('');
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />

        <Appbar.Content title="Notes" {...Theme.Appbar.Content} />
      </Appbar.Header>

      <View style={{ flex: 1 }}>
        <Query
          query={personNotesQuery}
          variables={{ id: navigation.getParam('personId') }}
          notifyOnNetworkStatusChange
        >
          {({ loading, error, data }) => {
            console.log({ loading });
            console.log({ error });
            console.log({ data });
            return (
              !loading &&
              !error && (
                <View style={{ flex: 1 }}>
                  <FlatList<MergedNote>
                    data={data.person.notes}
                    contentContainerStyle={{
                      paddingHorizontal: 15,
                      paddingVertical: 24,
                    }}
                    keyExtractor={item => item.id}
                    keyboardShouldPersistTaps="always"
                    renderItem={({ item }) => <NoteItem note={item} />}
                    ItemSeparatorComponent={() => (
                      <View style={{ marginBottom: 30 }} />
                    )}
                    ListEmptyComponent={
                      <Text
                        style={{
                          textAlign: 'center',
                          marginTop: 16,
                          fontSize: 16,
                          fontFamily: Theme.fonts.medium,
                        }}
                      >
                        No Notes
                      </Text>
                    }
                  />
                </View>
              )
            );
          }}
        </Query>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        style={{ borderTopColor: 'rgba(0,0,0,0.12)', borderTopWidth: 1 }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <TextInput
            multiline
            value={text}
            onChangeText={setText}
            placeholder="Write a note"
            autoFocus
            editable={!loading}
            style={{
              flex: 1,
              fontFamily: Theme.fonts.medium,
              color: loading ? 'rgba(0,0,0,.54)' : 'rgba(0,0,0,.87)',
              fontSize: 17,
              backgroundColor: '#f2f2f2',
              paddingVertical: 7,
              borderRadius: 10,
              paddingHorizontal: 10,
              marginRight: 10,
            }}
          />

          {loading ? (
            <ActivityIndicator style={{ marginBottom: 5 }} />
          ) : (
            <SendIcon
              name="send"
              color={color.interpolate({
                inputRange: [0, 1],
                outputRange: [Theme.background, Theme.primary],
              })}
              containerStyle={{ marginBottom: 6 }}
              {...(canSubmit ? { onPress: addComment } : {})}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Notes;
