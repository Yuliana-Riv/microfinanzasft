import axios from "axios";

    

import {endpointCodes} from '../global/index'; 

const cDel = 'adN_FqY/dh8-H2q'

export default {

    login(user, headers){
        return axios.post(`/${endpointCodes.post}/login`, user, headers);
    },

    getInfoUser(data, headers){
      return axios.post(`/${endpointCodes.post}/info_usr`, data, {headers});
    },
    
  getAllInfo(option, headers){
    return axios.get(`/${endpointCodes.get}/${option}`, {headers});
  },

  getStatusImage(payload, headers){
    return axios.get(`/${endpointCodes.get}/${payload.option}-img/${payload.image}`, {headers});
  },
  
  getInfoById(payload, headers){
    return axios.get(`/${endpointCodes.get}/${payload.option}/${payload.id}`, {headers});
  },
 
  search(data, headers){
    return axios.get(`/${endpointCodes.get}/buscar/${data.normalizedOpt}/${data.search}`, {headers});
  },

  searchById(data, headers){
    return axios.get(`/${endpointCodes.get}/buscar/${data.normalizedOpt}/${data.id}/${data.search}`, {headers});
  },


 
  enviarMailContacto(data, headers){
    return axios.post('j43-wdrDE4s_wffs2/contacto', data, headers);
  },
  //metodos de eliminar, editar y agregar
  deleteItem(payload,token){
    return axios.delete(`/${endpointCodes.del}/${payload.option}/delete`, {
        data: {
          id:payload.id
        },
        headers: {
          Authorization: token 
        } 
      });
  },
  
  editItem(payload,token){
    let  headers = {
      Authorization: token
    }
    return axios.put(`/${endpointCodes.put}/${payload.option}/update`, payload.item, {headers} );
  },

  addItem(payload,token){
    let  headers = {
      Authorization: token
    }
    return axios.post(`/${endpointCodes.post}/${payload.option}/create`, payload.item, {headers});
  },

  editImage(payload,token){
    let  headers = {
      Authorization: token
    }
    return axios.put(`/${endpointCodes.put}/${payload.option}/upload/image/${payload.id}`, payload.item, {headers} );
  },
  deleteItemCar(payload,token){
    return axios.delete(`/${cDel}/${payload.option}/delete`, {
        data:payload.item,
        headers: {
          Authorization: token 
        } 
      });
  },


}