import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user:{
        Info:{
        input1:'',
        input2:''
        }   
    }
}
const mutations = {
    ShareInfo(state,user){
     state.user.input1=user.input1    
    } 
}
export default new Vuex.Store({
 state,
 mutations
})