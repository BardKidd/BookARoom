import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
        rooms: [],
        room: {
            descriptionShort: {
                GuestMin: 0
            },
            amenities: []
        },
        status: {
            opencheck: false,
            orderissuccess: false
        }
    },
    mutations: {
        LOADING(state, payload) {
            state.isLoading = payload;
        },
        GETROOMDATA(state, data) {
            state.rooms = data;
        },
        GETONEROOMDATA(state, onedata) {
            state.room = onedata;
            state.room.amenities = onedata.amenities;
        },
        SENDORDER(state, status) {
            state.status.opencheck = status;
            state.status.orderissuccess = status;
        },
        SENDERRORORDER(state) {
            state.status.opencheck = true;
            state.status.orderissuccess = false;
        },
        CLOSECHECK(state, status) {
            state.status.opencheck = status;
        }
    },
    actions: {
        getroomdata({ commit }) {
            commit('LOADING', true);
            axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms').then((response) => {
                commit('GETROOMDATA', response.data.items)
            })
            commit('LOADING', false);
        },
        async getoneroomdata({ commit }, id) {
            commit('LOADING', true);
            await axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`).then((response) => {
                commit('GETONEROOMDATA', response.data.room[0]);
            });
            commit('LOADING', false);
        },
        sendorder({ commit }, payload) {
            const url = `${payload.url}`;
            const token = `${payload.token}`;
            const data = {
                name: payload.name,
                tel: payload.tel,
                date: payload.date
            }
            const headers = {
                Authorization: token,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            };
            commit('LOADING', true);
            axios.post(url, data, headers).then((response) => {
                if(response.data.success) {
                    commit('SENDORDER' ,true)
                }
            }).catch((error) => {
                if(error) {
                    commit('SENDERRORORDER')
                }
            })
            commit('LOADING', false);
        },
        closecheck({ commit }, payload) {
            commit('CLOSECHECK', payload);
        }
    }
})