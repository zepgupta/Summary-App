import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createSummary } from 'pods/summaries/actions';
import Layout from './layout';

function mapStateToProps(state) {
  return {
    currentSummary: state.summaries[0]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createSummary,
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
