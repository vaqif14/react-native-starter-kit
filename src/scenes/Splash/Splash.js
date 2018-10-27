import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import { authScene } from 'scenes/constants';
import SplashComponent from './SplashComponent';

export default class Splash extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  static options(passProps) {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  componentDidMount() {
    setTimeout(
      () => Navigation.setStackRoot(this.props.componentId, {
        component: {
          name: authScene.id,
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      }),
      2000,
    );
  }

  renderSplash() {
    return <SplashComponent />;
  }

  render() {
    return this.renderSplash();
  }
}
