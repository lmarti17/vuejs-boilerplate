/* ============
* Vuex Store
* ============
*
* The store of the application
*
* http://vuex.vuejs.org/en/index.html
*/

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

// Modules


import example from './modules/example';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	/**
	* Assign the actions to the store
	*/
	actions,

	/**
	* Assign the getters to the store
	*/
	getters,


	/**
	* Assign the modules to the store
	*/
	modules: {
		example,
	},

	/**
	* If strict mode should be enabled
	*/
	strict: debug,

});
