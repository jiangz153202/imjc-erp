import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		historyDataList:[]
	},
	mutations:{
		SET_HISTORY_LIST(state,historyList){
			
			state.historyDataList = historyList
		}
	},
	actions:{
		set_history_list({commit,state},historyList){
			let oldValList = state.historyDataList;
			oldValList.unshift(historyList);
			
			commit('SET_HISTORY_LIST',oldValList)
		}
	}
})
export default store