import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { summarizeUrl, summarizeText, displayError } from 'pods/actions';
import Layout from './layout';

function mapStateToProps(state) {
  if(state.error.length > 0){
  	return {
  		error: state.error[state.error.length-1].error,
  	};
  }
  else{
	return {
	  error: '',
	};
  }
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
