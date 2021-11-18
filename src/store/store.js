import Vue from "vue";
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        films: [],
        favorite: []
    },
    mutations: {
        SET_FILMS_TO_STATE: (state, films) => {
            state.films = films;
        },
        SET_FAVORITE: (state, film) => {
            if (state.favorite.length) {
                let isFilmExists = false;
                state.favorite.map(function (item) {
                    if (item.id === film.id) {
                        isFilmExists = true;
                        item.quantity++
                    }
                })
                if (!isFilmExists) {
                    state.favorite.push(film)
                }
            } else {
                state.favorite.push(film)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.favorite.splice(index, 1)
        }

    },
    actions: {
        GET_FILMS_FROM_API({commit}) {
            return axios ('http://localhost:3000/films', {
                method: "GET"
            })
                .then((films) => {
                    commit('SET_FILMS_TO_STATE', films.data);
                    return films;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_FAVORITE({commit}, film) {
            commit('SET_FAVORITE', film);
        },
        DELETE_FROM_FAVORITE({commit}, index) {
            commit('REMOVE_FROM_FAVORITE', index)
        }
    },
    getters: {
        FILMS(state) {
            return state.films;
        },
        FAVORITE(state) {
            return state.favorite;
        }
    }
});

export default store;
