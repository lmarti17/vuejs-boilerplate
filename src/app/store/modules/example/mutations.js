import {
	SET_EXAMPLE,
} from '../../mutation-types';

export default {


	[SET_EXAMPLE](state, example) {

		state.title = example.title ;

	},

};
