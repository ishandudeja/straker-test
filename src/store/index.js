import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    posts: [],
    users: [],
    loading: false,
    errored: false,
    message:"",
}

const getters = {
    allPosts: (state) => state.posts,
    allUsers: (state) => state.users,
    
}


const actions = {

    getPosts({ commit }) {
        Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
                state.loading=true;
            })
            .catch((error) => {
                    console.log(error);
                    state.errored = true;
                    state.message=error;
                  })
                  .finally(() => (this.loading = false));
    },
    getUsers({ commit }) {
        Vue.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('SET_USERS', response.data)
            })
            .catch((error) => {
                console.log(error);
                state.errored = true;
                state.message=error;
              })
              .finally(() => (this.loading = false));
    }


}


const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_USERS(state, users) {
        state.users = users
    }
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})