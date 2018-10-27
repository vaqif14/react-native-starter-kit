import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpComponent from './SignUpComponent';

class SignUp extends PureComponent {
  static propTypes = {
    authenticated: PropTypes.bool,
  };

  static defaultProps = {
    authenticated: false,
  };

  renderSignUp() {
    const { authenticated } = this.props;
    const mapPropsToComponent = {
      authenticated,
    };
    return <SignUpComponent {...mapPropsToComponent} />;
  }

  render() {
    return this.renderSignUp();
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated,
});

export default connect(
  mapStateToProps,
  {},
)(SignUp);
