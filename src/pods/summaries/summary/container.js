import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from './layout';

// question: when should i map state to props and when should i use data straight out of state
function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, dispatchProps, ownProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Layout);
