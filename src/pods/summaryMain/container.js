import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout, authUrl, getSummaries } from 'pods/actions';
import Layout from './layout';

// question: when should i map state to props and when should i use data straight out of state
function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout,
    getSummaries,
    authUrl,
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
