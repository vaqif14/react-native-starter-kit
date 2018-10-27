import { Navigation } from 'react-native-navigation';
import reduxStoreWrapper from 'utils/reduxStoreWrapper';
import {
  splashScene, authScene, signUpScene, signOutScene, drawerComponentScene,
} from './constants';
import Splash from './Splash';
import Auth from './Auth';
import SignUp from './SignUp';
import SignOut from './SignOut';
import Drawer from './Drawer';

export default function registerScenes() {
  Navigation.registerComponent(splashScene.id, () => Splash);
  Navigation.registerComponentWithRedux(authScene.id, () => reduxStoreWrapper(Auth));
  Navigation.registerComponentWithRedux(signUpScene.id, () => reduxStoreWrapper(SignUp));
  Navigation.registerComponent(signOutScene.id, () => SignOut);
  Navigation.registerComponent(drawerComponentScene.id, () => Drawer);
}

export function scenesListener() {
  Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {});
}
