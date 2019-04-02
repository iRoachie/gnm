import { createStackNavigator } from 'react-navigation';

import Contacts from './Contacts';
import ViewContact from '../ViewContact';

export default createStackNavigator(
  {
    Contacts,
    ViewContact,
  },
  {
    headerMode: 'none',
  }
);
