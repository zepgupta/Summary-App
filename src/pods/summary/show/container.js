import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from './layout';

function mapStateToProps(state) {
  return {
    summaries: state.summaries,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, dispatchProps, {
    summary: stateProps.summaries.find(summary =>
      summary.id === ownProps.routeParams.summaryId
    ),
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Layout);
