import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { goTo } from 'pods/actions';
import Layout from './layout';

function mapStateToProps(state) {
  return {
    title: state.fullText[0].title,
    article: state.fullText[0].article,
    summaryDate: state.fullText[0].summaryDate,
    publishDate: state.fullText[0].publishDate,
    author: state.fullText[0].author,
    url: state.fullText[0].url,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    goTo,
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
