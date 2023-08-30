'use strict'

import api from '@/api/api';
import userService from '../../services/user.service'

const GETTING_INFO      = 'GET_INFO',
      GET_INFO_SUCCESS  = 'GET_INFO_SUCCESS',
      GETTING_INFO2      = 'GET_INFO2',
      GET_INFO_SUCCESS2  = 'GET_INFO_SUCCESS2',
      GETTING_IMG        = 'GET_IMG',
      GET_IMG_SUCCESS  = 'GET_IMG_SUCCESS',
      SET_HISTORY_OPTION = 'SET_HISTORY_OPTION',
      SET_ADDED = 'SET_ADDED',
      SET_HISTORY_INDEX = 'SET_HISTORY_INDEX',
      SET_STATUS = 'SET_STATUS',
      GETTING_MSG='GETTING_MSG',
      GET_MSG='GET_MSG';
      
export default {
    namespaced: true,
    state:{
        loading: false,
        data: [],
        loading2: false,
        data2: [],
        loading_img: false,
        img:null,
        historyOption: 'Default',
        historyIndex: 0,
        status: '',
        msg:'Ver Todos',
        added:''
    },
    getters: {
        loading(state) {
            return state.loading;
        },
        data(state) {
            return state.data;
        },
        loading2(state) {
            return state.loading2;
        },
        data2(state) {
            return state.data2;
        },
        loading_img(state) {
            return state.loading_img;
        },
        img(state) {
            return state.img;
        },
        getHistoryOption(state){
            return state.historyOption
        },
        getHistoryIndex(state){
            return state.historyIndex
        },
        getAdded(state){
            return state.added
        },
        status(state){
            return state.status
        },
        msg(state){
            return state.msg
        }, 
    },
    mutations: {
        [GETTING_INFO](state) {
            state.loading = true;
            state.data = [];
        },
        [GET_INFO_SUCCESS](state, change) {
            state.loading = false;
            state.data = change;
        },
        [GETTING_INFO2](state) {
            state.loading2 = true;
            state.data2 = [];
        },
        [GET_INFO_SUCCESS2](state, change) {
            state.loading2 = false;
            state.data2 = change;
        },
        [GETTING_IMG](state) {
            state.loading_img = true;
            state.img = null;
        },
        [GET_IMG_SUCCESS](state, change) {
            state.loading_img = false;
            state.img = change;
        },
        [SET_HISTORY_OPTION](state, change){
            state.historyOption = change;
        },
        [SET_ADDED](state, change){
            state.data = change;
        },
        [SET_STATUS](state, value){
            state.status = value;
        },
        [GET_MSG](state, value){
            state.msg =value
        },
        [GETTING_MSG](state){
            state.msg = 'Cargando...'
        },
    },
    actions:{
        setAddedStk({commit}, payload){
            commit(SET_ADDED, payload);  
        },

        setHistoryOptionStk({commit}, payload){
            commit(SET_HISTORY_OPTION, payload);  
        },
        async getAllInfoStk({ commit }, payload) {
            console.log(payload)
            commit(GETTING_INFO);
            try {               
                let normalizedOpt = payload.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g, ""); 
                let token = userService.getToken() 
                let headers =  {'Authorization': token} ;

                let response = await api.getAllInfo(normalizedOpt, headers);
                commit(GET_INFO_SUCCESS, response.data.result);
              //  console.log(response.data.result)
                return response.data.result;
            } catch (error) {
               // console.log(error);
            }
           
        },
        async getInfoByIdStk({ commit }, payload) {
            commit(GETTING_INFO);
            try {              
                let token = userService.getToken() 
                let headers =  {'Authorization': token} ;

                let response = await api.getInfoById(payload, headers);
                commit(GET_INFO_SUCCESS, response.data.result);
                //console.log(response.data.result)
                return response.data.result;
            } catch (error) {
                //console.log(error);
            }
           
        },
        async getInfoByIdStk2({ commit }, payload) {
            commit(GETTING_INFO2);
            try {              
                let token = userService.getToken() 
                let headers =  {'Authorization': token} ;

                let response = await api.getInfoById(payload, headers);
                commit(GET_INFO_SUCCESS2, response.data.result);
                //console.log(response.data.result)
                return response.data.result;
            } catch (error) {
                //console.log(error);
            }
           
        },

        async searchStk({ commit }, payload) {
            commit(GETTING_INFO);
            commit(GETTING_MSG);
            let option = payload.option
            let search = payload.search;
            //console.log(payload)
    
            try {               
                let normalizedOpt = option.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g, ""); 
                let token = userService.getToken() 
                let headers =  {'Authorization': token} ;

                let data ={
                    normalizedOpt: normalizedOpt,
                    search: search
                }

                let response = await api.search(data, headers);
                commit(GET_INFO_SUCCESS, response.data.result);
                commit(GET_MSG, option);
                //console.log(response.data.result)
                return response.data.result;
            } catch (error) {
                //console.log(error)
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async deleteItemStk({ commit }, payload) { 
            commit(SET_STATUS, 'SUCCESS')
            try {               
                let token = userService.getToken() 
                let response = await api.deleteItem(payload, token);
                //console.log(response.data)
                return response.data;
            } catch (error) {
               //console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar eliminar la información.',
                result:''
              }
            }
        },
        async editItemStk({ commit }, payload) { 
            commit(SET_STATUS, 'SUCCESS')
            try {               
                let token = userService.getToken() 
                let response = await api.editItem(payload, token);
               // console.log(response.data)
                return response.data;
            } catch (error) {
               //console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar editar la información.',
                result:''
              }
            }
           
        },

        async addItemAdr({ commit }, payload) { 
            commit(SET_STATUS, 'SUCCESS')
            try {               
                let token = userService.getToken() 
                let response = await api.addItem(payload, token);
                return response.data;

            } catch (error) {
               //console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar guardar la información.',
                result:''
              }
            }
           
        },
   
    },
}