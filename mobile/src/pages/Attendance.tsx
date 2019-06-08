import React, { useState } from 'react';
import { View, Platform, Alert, Text, StyleSheet } from 'react-native';
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { Query } from 'react-apollo';
import { NavigationScreenProps } from 'react-navigation';
import { CalendarList, DateObject } from 'react-native-calendars';
import Modal from 'react-native-modal';

import { Theme } from '../util';
import client, {
  personAttendanceQuery,
  markAttendanceMutation,
} from '../graphql';
import { MergedPerson } from '../types';
import { Attendance as AttendanceModel } from '../../../core/prisma-client';

interface ScreenParams {
  person: MergedPerson;
}

const Attendance: React.StatelessComponent<
  NavigationScreenProps<ScreenParams>
> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const person = navigation.getParam('person');

  const confirmAttendance = (
    date: DateObject,
    attendances: { [x: string]: any }
  ) => {
    if (!attendances[date.dateString]) {
      Alert.alert(
        'Confirm Attendance',
        `Mark ${person.name} as present on ${date.dateString}?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'OK', onPress: () => markAttendance(date.dateString) },
        ]
      );
    }
  };

  const markAttendance = async (date: string) => {
    setErrorMessage('');

    try {
      setLoading(true);

      await client.mutate({
        mutation: markAttendanceMutation,
        variables: {
          date,
          id: person.id,
        },
        refetchQueries: ['PersonAttendanceQuery'],
      });

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        setErrorMessage("Couldn't mark attendance at this time.");
      }, 1000);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Attendance"
          subtitle={person.name}
          {...Theme.Appbar.Content}
        />
      </Appbar.Header>

      <View
        style={{
          paddingVertical: 8,
          backgroundColor: '#f8f8f8',
          elevation: 2,
        }}
      >
        <Text style={[styles.message, !!errorMessage && styles.errorMessage]}>
          {errorMessage || 'Select a date below'}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Query
          query={personAttendanceQuery}
          variables={{ id: person.id }}
          notifyOnNetworkStatusChange
          fetchPolicy="no-cache"
        >
          {({ error, data, networkStatus }) => {
            if (networkStatus === 1) {
              return <ActivityIndicator style={{ marginTop: 16 }} />;
            }

            if (networkStatus !== 1 && !error && data && data.attendance) {
              const attendance = data.attendance.data.reduce(
                (curr: {}, next: AttendanceModel) => {
                  return {
                    ...curr,
                    [next.date.substring(0, next.date.indexOf('T'))]: {
                      selected: true,
                    },
                  };
                },
                {}
              );

              return (
                <View style={{ flex: 1, position: 'relative' }}>
                  <CalendarList
                    minDate="2019-05-19"
                    pastScrollRange={1}
                    futureScrollRange={1}
                    maxDate={new Date()}
                    onDayPress={a => confirmAttendance(a, attendance)}
                    theme={{
                      selectedDayBackgroundColor: Theme.primary,
                      textDayFontFamily: Theme.fonts.regular,
                      textMonthFontFamily: Theme.fonts.semibold,
                      textMonthFontWeight:
                        Platform.OS === 'ios' ? '600' : '400',
                      textDayHeaderFontFamily: Theme.fonts.regular,
                    }}
                    markedDates={attendance}
                  />

                  <Modal
                    isVisible={loading}
                    onBackButtonPress={() => setLoading(false)}
                    coverScreen
                    hasBackdrop={false}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    style={{
                      backgroundColor: 'rgba(255,255,255,.4)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 0,
                    }}
                  >
                    <ActivityIndicator />
                  </Modal>
                </View>
              );
            }

            return null;
          }}
        </Query>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Theme.fonts.medium,
    color: '#000',
  },
  errorMessage: {
    color: Theme.error,
  },
});

export default Attendance;
