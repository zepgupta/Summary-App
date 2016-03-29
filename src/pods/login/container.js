import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login, registerUser, displayError, authed } from 'pods/actions';
import Layout from './layout';

// question: when should i map state to props and when should i use data straight out of state
function mapStateToProps(state) {
  if (state.error.length > 0) {
    return {
      error: state.error[state.error.length-1].error,
    };
  }
  else {
    return {
      error: '',
    };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    authed,
    registerUser,
    displayError,
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps) {
  return Object.assign({}, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Layout);
