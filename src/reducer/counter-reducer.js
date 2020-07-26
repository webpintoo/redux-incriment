const initState = {
	count:0,
}

const CounterReducer = (state=initState,action) => {
	switch(action.type) {
		case 'INCREAMENT':
		return {
			count : state.count+1
		}
		case 'DECREAMENT':
		return {
			count : state.count-1
		}
		case 'RESET':
		return {
			count : 0
		}
		default :
		return state
	}
}

export default CounterReducer;