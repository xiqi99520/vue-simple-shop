import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
	    isshow: false
	},
	mutations:{
		change(){
			this.state.isshow = !this.state.isshow
		}
	}
})
export default store