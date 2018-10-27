import React, { PureComponent } from 'react';
import DrawerComponent from './DrawerComponent';

export default class Drawer extends PureComponent {
  renderDrawer() {
    const mapPropsToComponent = {};
    return <DrawerComponent {...mapPropsToComponent} />;
  }

  render() {
    return this.renderDrawer();
  }
}
