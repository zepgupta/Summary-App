import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { summarizeUrl } from 'pods/actions';
import Layout from './layout';


function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    summarizeUrl,
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
