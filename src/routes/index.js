import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

const Main = createSwitchNavigator({
  Login,
  ForgotPassword
});

export default createAppContainer(Main);
