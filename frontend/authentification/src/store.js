import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)

// Ne pas oublier d'importer vue.use et vuex ici pour pouvoir utiliser le store 

export default new Vuex.Store({
    state: {
        token: null

    },
    mutations: {
        TOKEN_MUTATION(state, thetoken) {
            state.token = thetoken //token c'est la valeur initié dans le state
        },
        TOLOGOUT(state) {
            state.token = null
        }
    },
    actions: {
        SENDTOKEN(context, thetoken) {
            context.commit('TOKEN_MUTATION', thetoken)
        },
        DELETE_TOKEN(context) {
            context.commit('TOLOGOUT')
        }
    }


})