import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Theme } from '../../../util';
import { MergedNote } from '../../../types';

interface NoteProps {
  note: MergedNote;
}

const NoteItem: React.StatelessComponent<NoteProps> = ({ note }) => (
  <View style={styles.container}>
    <Text style={styles.comment}>{note.message}</Text>

    <Text style={styles.meta}>{`${note.user.name} • ${note.date}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  comment: {
    fontFamily: Theme.fonts.regular,
    fontSize: 15,
    color: 'rgba(0,0,0,.87)',
  },
  meta: {
    fontFamily: Theme.fonts.regular,
    textAlign: 'right',
    marginTop: 12,
    fontSize: 13,
    color: 'rgba(0,0,0,.54)',
  },
});

export default NoteItem;
