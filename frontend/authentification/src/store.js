import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

// Ne pas oublier d'importer vue.use et vuex ici pour pouvoir utiliser le store 

export default new Vuex.Store({
state: {
    // todos: []
},
mutations: {
    // ADD(state, whatToAdd){
    //     state.todos = whatToAdd
    },
actions : {
        // ADD (context, whatToAdd) {
        //   context.commit('ADD', whatToAdd)
}


})