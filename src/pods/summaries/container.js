import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from './layout';

// question: when should i map state to props and when should i use data straight out of state
function mapStateToProps(state) {
  return {
    summaries: state.summaries,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
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
