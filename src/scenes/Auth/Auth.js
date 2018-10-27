import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthComponent from './AuthComponent';

class Auth extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    authenticated: PropTypes.bool,
  };

  static defaultProps = {
    user: {},
    authenticated: false,
  };

  renderAuth() {
    const { user, authenticated } = this.props;
    const mapPropsToComponent = {
      user,
      authenticated,
    };
    return <AuthComponent {...mapPropsToComponent} />;
  }

  render() {
    return this.renderAuth();
  }
}

const mapStateToProps = ({ auth: { user, authenticated } }) => ({
  user,
  authenticated,
});

export default connect(
  mapStateToProps,
  {},
)(Auth);
