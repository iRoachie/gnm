import { createStackNavigator } from 'react-navigation';

import Settings from './Settings';
import Teams from '../Teams';

export default createStackNavigator(
  {
    Settings,
    Teams,
  },
  {
    headerMode: 'none',
  }
);
