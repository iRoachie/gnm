import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Appbar, FAB } from 'react-native-paper';
import { ListItem, ThemeProvider, CheckBox } from 'react-native-elements';

import { Theme } from '../../util';
import NoteItem from './components/NoteItem';
import Section from './components/Section';
import BlockValue from './components/BlockValue';

import { comments } from './mock';

const ViewContact: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const editContact = () => {
    //
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Action icon="arrow-back" onPress={() => navigation.pop()} />
        <Appbar.Content {...Theme.Appbar.Content} />
      </Appbar.Header>

      <View
        style={{
          backgroundColor: Theme.primary,
          paddingLeft: 16,
          paddingTop: 8,
          paddingBottom: 16,
          paddingRight: 16,
          zIndex: 2,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontFamily: Theme.fonts.semibold,
            fontSize: 30,
            marginBottom: -4,
          }}
        >
          Patricia Cumberbatch
        </Text>

        <Text
          style={{
            color: '#fff',
            fontFamily: Theme.fonts.regular,
            fontSize: 20,
          }}
        >
          Interest
        </Text>

        <FAB
          color={Theme.primary}
          theme={{
            colors: {
              accent: '#fff',
            },
          }}
          small
          style={styles.fab}
          icon="edit"
          onPress={editContact}
        />
      </View>

      <View style={{ backgroundColor: '#fff', flex: 1, zIndex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 0 }}>
          <Section>
            <View style={{ flexDirection: 'row' }}>
              <BlockValue label="Age" value="32" />
              <BlockValue label="Sex" value="Female" />
            </View>

            <ThemeProvider
              theme={{
                ListItem: {
                  titleStyle: {
                    fontFamily: Theme.fonts.regular,
                    color: '#000',
                    fontSize: 15,
                  },
                  subtitleStyle: {
                    fontFamily: Theme.fonts.medium,
                    color: Theme.primary,
                    fontSize: 14,
                  },
                },
              }}
            >
              <View
                style={{ marginLeft: -15, marginTop: 16, marginBottom: -14 }}
              >
                <ListItem
                  title="Lot 1, Story Gap, St. Michael"
                  subtitle="Address"
                />
                <ListItem title="444-4444" subtitle="Telephone" />
                <ListItem title="222-4444" subtitle="Cell Phone" />
                <ListItem title="eqegqq@saf.com" subtitle="Email" />
              </View>
            </ThemeProvider>
          </Section>

          <Section title="Lessons Completed">
            <ThemeProvider
              theme={{
                CheckBox: {
                  containerStyle: {
                    marginLeft: 0,
                  },
                  Component: View,
                  checkedColor: Theme.primary,
                },
              }}
            >
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <CheckBox checked title="1" />
                <CheckBox checked title="2" />
                <CheckBox checked title="3" />
                <CheckBox checked={false} title="4" />
                <CheckBox checked={false} title="5" />
                <CheckBox checked={false} title="6" />
                <CheckBox checked={false} title="7" />
              </View>
            </ThemeProvider>
          </Section>

          <Section title="Notes" hideDivider>
            <FlatList
              data={comments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <NoteItem note={item} />}
              ItemSeparatorComponent={() => (
                <View style={{ marginBottom: 24 }} />
              )}
            />
          </Section>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: -16,
    zIndex: 2,
  },
});

export default ViewContact;
