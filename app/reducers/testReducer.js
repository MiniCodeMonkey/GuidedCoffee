import update from 'immutability-helper';
import { TEST_ACTION } from '../actions/testActions';

const initialState = {
	test: false
};

function testReducer(state = initialState, action) {
	switch (action.type) {
		case TEST_ACTION:
			return update(state, { test: {$set: true}});

		default:
			return state;
	}
}

export default testReducer;
