import {
	SET_EXAMPLE,
} from './mutation-types';


/* ============
* Vuex Actions
* ============
*
* All the actions that can be used
* inside the store
*/


export const setExample = ({ commit }, example) => {

	commit(SET_EXAMPLE, example);


};
