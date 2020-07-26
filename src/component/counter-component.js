import React from 'react';
import {increament,decreament,resetData} from '../action/counter-action';
import {connect} from 'react-redux';
class Counter extends React.Component {
	increament = () => {
		this.props.increament();
	}
	decreament = () => {
		this.props.decreament();
	}
	resetData = () => {
		this.props.resetData();
	}
	render(){
		return(
			<>
				<button onClick={this.increament}> + </button>
				{this.props.count}
				<button onClick={this.decreament}> - </button>
				<button onClick={this.resetData}> RESET </button>
			</>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		...state
	}
}
const mapDispatchToProps = {
	increament,
	decreament,
	resetData
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);