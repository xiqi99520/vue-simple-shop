import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
      buynum: 1,
	    isshow: false,
      ishide: false
	},
	mutations:{
		change(){
			this.state.isshow = !this.state.isshow;
      this.state.ishide = !this.state.ishide;
      document.getElementsByTagName("body")[0].style.overflow="hidden";
		},
    add(){
      this.state.buynum++
    },
    subtract(){
      this.state.buynum--
    }
	},
  actions:{
    close(){
      let _this = this;
      _this.state.isshow = !_this.state.isshow;
      setTimeout(function(){
        _this.state.ishide = !_this.state.ishide
      },800)
      document.getElementsByTagName("body")[0].style.overflow=""
    }
  }
})
export default store
