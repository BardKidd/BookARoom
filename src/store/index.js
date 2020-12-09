import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        rooms: [],
        room: {
            descriptionShort: {
                GuestMin: 0
            }
        },
        status: {
            opencheck: false,
            orderissuccess: false
        }
    },
    mutations: {
        GETROOMDATA(state, data) {
            state.rooms = data;
        },
        GETONEROOMDATA(state, onedata) {
            state.room = onedata;
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
            axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms').then((response) => {
                commit('GETROOMDATA', response.data.items)
            })
        },
        getoneroomdata({ commit }, id) {
            axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`).then((response) => {
                commit('GETONEROOMDATA', response.data.room[0]);
            });
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
            axios.post(url, data, headers).then((response) => {
                if(response.data.success) {
                    commit('SENDORDER' ,true)
                }
            }).catch((error) => {
                if(error) {
                    commit('SENDERRORORDER')
                }
            })
        },
        closecheck({ commit }, payload) {
            commit('CLOSECHECK', payload)
        }
    }
})