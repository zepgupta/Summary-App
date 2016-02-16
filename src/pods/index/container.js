import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment, doubleAsync } from 'pods/counter/actions';
import Layout from './layout';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    doubleAsync,
  }, dispatch);
}

function mergeProps(stateProps, dispatchProps) {
  return Object.assign({}, stateProps, {
    actions: dispatchProps,
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Layout);
