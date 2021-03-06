import React, { useEffect, useState, useContext } from 'react';

import client, { newContactMutation } from '../graphql';
import StateContext from './StateContext';
import { PersonCreateInput } from '../../../core/prisma-client';
import Syncing from '../components/Syncing';

const SyncProvider: React.FunctionComponent = () => {
  const [syncing, setSyncing] = useState(false);
  const { getOfflineContacts, connected, removeOfflineContacts } = useContext(
    StateContext
  );

  useEffect(() => {
    const syncContacts = async (contacts: PersonCreateInput[]) => {
      try {
        await Promise.all(
          contacts.map(data => {
            return client.mutate({
              mutation: newContactMutation,
              variables: { data },
              refetchQueries: ['DashboardQuery', 'ContactsQuery'],
            });
          })
        );
        await removeOfflineContacts();

        setTimeout(() => {
          setSyncing(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchContacts = async () => {
      const contacts = await getOfflineContacts();

      if (connected && contacts) {
        if (contacts.length > 0) {
          setSyncing(true);
          syncContacts(contacts);
        }
      } else {
        setSyncing(false);
      }
    };

    fetchContacts();
  }, [connected, getOfflineContacts, removeOfflineContacts]);

  return syncing ? <Syncing /> : null;
};

export default SyncProvider;
