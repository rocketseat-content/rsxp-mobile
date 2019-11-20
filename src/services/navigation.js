import { NavigationActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const goBack = () => {
  navigator.dispatch(NavigationActions.back());
};

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
