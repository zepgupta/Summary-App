import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { summarizeUrl, summarizeText, displayError } from 'pods/actions';
import Layout from './layout';

function mapStateToProps(state) {
  let error;
  if (state.error.length > 0) {
    error = { error: state.error[state.error.length - 1].error };
  } else {
    error = { error: '' };
  }
  return error;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    summarizeText,
    summarizeUrl,
    displayError,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
)(Layout);
