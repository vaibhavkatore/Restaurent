import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Markup from '../components/Markup';
// import actions from '../modules/actions';

class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Markup
			/>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        // isLoading: state.Auth.isLoading,
        // error: state.Auth.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(actions, dispatch),
    };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Container));