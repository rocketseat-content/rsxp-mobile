import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../src/pages/Login';
import ForgotPassword from '../src/pages/ForgotPassword';

const Main = createSwitchNavigator({
  Login,
  ForgotPassword
});

export default createAppContainer(Main);
