
'use strict'

import api from '@/api/api'; 
const _tkn = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MTY1NTkyMzY1Mw.zG6jshf09VgcuRpT3dTtlgvNDH6inT9Y_g4sYf2lik8'

const 

      SET_CTK = 'SET_CTK',
      SET_CAR = 'SET_CAR',
      SET_UPD = 'SET_UPD';
      

export default {
    namespaced: true,
    state:{
        _ctk:'',
        car:'',
        upd:'',
    },
    getters: {
        
        getcar(state) {
            return state.car;
        },
        getupd(state) {
            return state.upd;
        },
        gettkn(state) {
            return state._ctk;
        }
     
    },
    mutations: {
      
   
        [SET_CAR](state, change){
            state.car = change;
        },
        [SET_CTK](state, change){
            state._ctk = change;
        },
        [SET_UPD](state, change){
            state.upd = change;
        },
  
       
    },
    actions:{
        //Asignar el objeto de carrito 
        setCarrito({commit}, payload){
            commit(SET_CAR, payload);  
        },

        setToken({commit}, payload){
            commit(SET_CTK, payload);  
        },

        async setCart({ commit } , payload) {


            try {               
                let token = _tkn 
                let response = await api.addItem(payload, token);
            
               
                if(response.data.status =='success'){
                    commit(SET_CAR, response.data.dec);  
                    commit(SET_CTK, response.data.result);  
                    localStorage.setItem('_ctk', response.data.result)
                }else{  //todo: VALIDAR -> error
                    commit(SET_CAR, '');  
                    commit(SET_CTK, '');  
                }

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
        
        async getCart({ commit }) {


            try {               
                let token = _tkn 

                let _ctk =localStorage.getItem('_ctk')
                let payload={
                    option:'get_cart',
                  item:{  _ctk :  _ctk}
                }

                let response = await api.addItem(payload, token);
              

                if(response.data.status =='success'){
                    commit(SET_CAR, response.data.result);  
                    commit(SET_CTK, _ctk);  
                }else{  //todo: VALIDAR -> error
                    commit(SET_CAR, '');  
                    commit(SET_CTK, '');  
                }

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
        //Mantener una copia en computed.
        async getCartCopy({ commit }) {


            try {               
                let token = _tkn 

                let _ctk =localStorage.getItem('_ctk')
                let payload={
                    option:'get_cart',
                  item:{  _ctk :  _ctk}
                }

                let response = await api.addItem(payload, token);
              

                if(response.data.status =='success'){
                    commit(SET_UPD, response.data.result);  
             
                }

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

        async deleteItemCrt({ commit }, payload) { 
           
            try {               
                let token = _tkn 
                let response = await api.deleteItemCar(payload, token);
                if(response.data.status =='success'){
                    commit(SET_CTK, response.data.result);  
                    localStorage.setItem('_ctk', response.data.result)
                }

                console.log(response.data)
                return response.data;
            } catch (error) {
               console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar eliminar la información.',
                result:''
              }
            }
        },

        
        async editItemCrt({ commit }, payload) { 
           
            try {               
                let token = _tkn 
                let response = await api.editItem(payload, token);
                if(response.data.status =='success'){
                    commit(SET_CTK, response.data.result);  
                    localStorage.setItem('_ctk', response.data.result)
                }
                console.log(response.data)
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

        async addItemCrt({ commit }, payload) { 
         
            
            try {               
                let token = _tkn 
                let response = await api.addItem(payload, token);
                if(response.data.status =='success'){
                    commit(SET_CTK, response.data.result);  
                    localStorage.setItem('_ctk', response.data.result)
                }
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

        async validateCrt({ commit }, payload) { 
         
            
            try {               
                let token = _tkn 
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