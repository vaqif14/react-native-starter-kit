import React, { PureComponent } from 'react';
import SignOutComponent from './SignOutComponent';

export default class SignOut extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  renderSignOut() {
    const mapPropsToComponent = {};
    return <SignOutComponent {...mapPropsToComponent} />;
  }

  render() {
    return this.renderSignOut();
  }
}
