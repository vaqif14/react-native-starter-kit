import registerScenes from 'scenes/registerScenes';
import { Navigation } from 'react-native-navigation';

registerScenes();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            id: 'splashScene',
            component: {
              name: 'application.splashScene',
            },
          },
        ],
      },
    },
  });
});
