'use strict'

import api from '@/api/api';
import userService from '../../services/user.service'
 
const GETTING_INFO      = 'GET_INFO',
      SET_ADDED = 'SET_ADDED',
      GETTING_CAT  = 'GETTING_CAT',
      GETTING_SUB  = 'GETTING_SUB',
      GETTING_CLA  = 'GETTING_CLA',
      GETTING_PAC  = 'GETTING_PAC',
      SET_CATEGORIES = 'SET_CATEGORIES',
      SET_SUBCATEGORIES = 'SET_SUBCATEGORIES',
      SET_CLASSES = 'SET_CLASSES',
      SET_PACKAGINGS = 'SET_PACKAGINGS',
      GETTING_CAR  = 'GETTING_CAR',
      GETTING_QUO  = 'GETTING_QUO',
      SET_CARRIERS = 'SET_CARRIERS',
      SET_QUOTATIONS = 'SET_QUOTATIONS',
      GET_INFO_SUCCESS  = 'GET_INFO_SUCCESS',
      SET_HISTORY_OPTION = 'SET_HISTORY_OPTION';

export default {
    namespaced: true,
    state:{
    
        data: [],
        added:'',
        historyOption: 'Default',
        categories:[],
        subcategories:[],
        classes:[],
        packagings:[],
        carriers:[],
        quotations:[],
    },
    getters: {
       
        data(state) {
            return state.data;
        },
        categories(state) {
            return state.categories;
        },
        subcategories(state) {
            return state.subcategories;
        },
        classes(state) {
            return state.classes;
        },
        packagings(state) {
            return state.packagings;
        },
        carriers(state) {
            return state.carriers;
        },
        quotations(state) {
            return state.quotations;
        }, 
        getAdded(state){
            return state.added
        },
        getHistoryOption(state){
            return state.historyOption
        },
    },
    mutations: {
        [GETTING_INFO](state) {
            state.data = [];
        },
        [GET_INFO_SUCCESS](state, change) {
            state.data = change;
        },
    
        [SET_ADDED](state, change){
            state.added = change;
        },

        [GETTING_CAT](state){
            state.categories = [];
        },
        [GETTING_SUB](state){
            state.subcategories = [];
        },
        [GETTING_CLA](state){
            state.classes = [];
        },
        [GETTING_PAC](state){
            state.packagings = [];
        },
        [GETTING_CAR](state){
            state.carriers = [];
        },
        [GETTING_QUO](state){
            state.quotations = [];
        },
        [SET_CATEGORIES](state, change){
            state.categories = change;
        },
        [SET_SUBCATEGORIES](state, change){
            state.subcategories = change;
        },
        [SET_CLASSES](state, change){
            state.classes = change;
        },
        [SET_PACKAGINGS](state, change){
            state.packagings = change;
        },
        [SET_QUOTATIONS](state, change){
            state.quotations = change;
        },
        [SET_CARRIERS](state, change){
            state.carriers = change;
        },
        [SET_HISTORY_OPTION](state, change){
            state.historyOption = change;
        },
    },
    actions:{
        setAddedSmt({commit}, payload){
            commit(SET_ADDED, payload);  
        },

        setHistoryOptionSmt({commit}, payload){
            commit(SET_HISTORY_OPTION, payload);  
        },
        async getAllInfoSmt({ commit }, payload) {
            commit(GETTING_INFO);
            //console.log(payload)
            let normalizedOpt = payload.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g, ""); 
           
            
    
            try {               
             
                let token = userService.getToken() 

                /* if(token==null){
                    return {
                        status:'error',
                        message:'Sesión no valida',
                        result:''
                    }
                }*/
                let headers =  {'Authorization': token} ;

                let response = await api.getAllInfo(normalizedOpt, headers);

                if(response.data.status =='success'){
                    commit(GET_INFO_SUCCESS, response.data.result);
                }else{
                    commit(GET_INFO_SUCCESS, response.data.result);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },
      

        async getInfoByIdSmt({ commit }, payload) {
            commit(GETTING_INFO);
            try {              
                let token = userService.getToken() 
                let headers =  {'Authorization': token} ;

                let response = await api.getInfoById(payload, headers);
                commit(GET_INFO_SUCCESS, response.data.result);
                //console.log(response.data.result)
                return response.data.result;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },


        async getPackagings({ commit }) {
            commit(GETTING_PAC);
            //console.log(payload)

            try {               
             
                let token = userService.getToken() 

              
                let headers =  {'Authorization': token} ;

                let response = await api.getConsignmentNotePackagings( headers);

                if(response.data.status =='success'){
                    commit(SET_PACKAGINGS, response.data.result);
                }else{
                    commit(SET_PACKAGINGS, []);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async getCategories({ commit }) {
            commit(GETTING_CAT);
            commit(GETTING_SUB);
            commit(GETTING_CLA);
            //console.log(payload)

            try {               
             
                let token = userService.getToken() 

              
                let headers =  {'Authorization': token} ;

                let response = await api.getConsignmentNoteCategories( headers);

                if(response.data.status =='success'){
                    commit(SET_CATEGORIES, response.data.result);
                }else{
                    commit(SET_CATEGORIES, []);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async getSubcategories({ commit }, payload) {
            commit(GETTING_SUB);
            commit(GETTING_CLA);
            //console.log(payload)

            try {               
             
                let token = userService.getToken() 

              
                let headers =  {'Authorization': token} ;

                let response = await api.getConsignmentNoteSubcategories(payload, headers);

                if(response.data.status =='success'){
                    commit(SET_SUBCATEGORIES, response.data.result);
                }else{
                    commit(SET_SUBCATEGORIES, []);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async getClasses({ commit }, payload) {
            commit(GETTING_CLA);
            //console.log(payload)

            try {               
             
                let token = userService.getToken() 

              
                let headers =  {'Authorization': token} ;

                let response = await api.getConsignmentNoteClasses(payload, headers);

                if(response.data.status =='success'){
                    commit(SET_CLASSES, response.data.result);
                }else{
                    commit(SET_CLASSES, []);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async getCarriers({ commit }, payload) {
            commit(GETTING_CAR);
            //console.log(payload)

            try {               
             
                let token = userService.getToken() 

              
                let headers =  {'Authorization': token} ;

                let response = await api.getCarriers(payload, headers);
                  
                if(response.data.status =='success'){
                    commit(SET_CARRIERS, response.data.result);
                }else{
                    commit(SET_CARRIERS, []);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async getQuotations({ commit }, payload) {
            commit(GETTING_QUO);
            //console.log(payload)

            try {               
             
                let token = userService.getToken() 

              
                let headers =  {'Authorization': token} ;

                let response = await api.getQuotations(payload, headers);

                if(response.data.status =='success'){
                    commit(SET_QUOTATIONS, response.data.result);
                }else{
                    commit(SET_QUOTATIONS, []);
                }
               


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

      


      

       
   
    },
}