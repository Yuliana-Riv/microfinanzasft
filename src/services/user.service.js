import axios from "axios";

import dayjs from 'dayjs';

import {url,endpointCodes} from '../global/index'; 

var userToken="";
export default {
  
  
  setToken(token) {
    localStorage.setItem("tkn", token);
  },

  getToken() {
    let token = localStorage.getItem("tkn");

    if (token && token != "undefined" && token != '') {
      userToken = token;
    } else {
      userToken = null;
    }

    return userToken;
  },


  isAdmin(user){
    let admin = false;
    let type = 'user'

    if(user == undefined || user == null || user == ''){
      return {"admin":admin, "type":type}
    }

    if(user.role == undefined || user.role == null || user.role ==''){
      return {"admin":admin, "type":type}
    }

    if(user.role != 'admin' && user.role != 'legrafica' ){
      return {"admin":admin, "type":type}
    }

    //si es admin.
    admin = true
    type = user.role

     return {"admin":admin, "type":type}


  },

  isRes(user){
    let res = false;
    let type = 'user'

    if(user == undefined || user == null || user == ''){
      return {"res":res, "type":type}
    }

    if(user.role == undefined || user.role == null || user.role ==''){
      return {"res":res, "type":type}
    }

    if(user.role != 'restaurante' ){
      return {"res":res, "type":type}
    }

    //si es res.
    res = true
    type = user.role

     return {"res":res, "type":type}


  },

  isEmp(user){
    let emp = false;
    let type = 'user'

    if(user == undefined || user == null || user == ''){
      return {"emp":emp, "type":type}
    }

    if(user.role == undefined || user.role == null || user.role ==''){
      return {"emp":emp, "type":type}
    }

    if(user.role != 'empleado' ){
      return {"emp":emp, "type":type}
    }

    //si es emp.
    emp = true
    type = user.role

     return {"emp":emp, "type":type}


  },

  isCli(user){
    let cli = false;
    let type = 'user'

    if(user == undefined || user == null || user == ''){
      return {"cli":cli, "type":type}
    }

    if(user.role == undefined || user.role == null || user.role ==''){
      return {"cli":cli, "type":type}
    }

    if(user.role != 'cliente' ){
      return {"cli":cli, "type":type}
    }

    //si es cli.
    cli = true
    type = user.role

     return {"cli":cli, "type":type}


  },



  async tokenexp(){  
    let exp = false;


    
   let response = await this.getData()

   if(response.status =='error'){
     return true
   }
    
   let identity = response.result;

   let identity_exp = identity.exp; // fecha de expiración
   let date = dayjs().format(); // fecha actual
   date < identity_exp? exp : exp = true; 

   
    return exp;
  },


  

  async getData(){ 
 

    try {              
      

      let token = this.getToken()

      if(token==null){
          return {
              status:'error',
              message:'Sesión no valida',
              result:''
          }
      }


      let headers =  {'Authorization': token} ;
    
      let response = await axios.post(`/${endpointCodes.post}/info_usr`, {"data":token}, {headers});
    
      
      return response.data;

      } catch (error) {
          return {
            status:'error',
            message:'Error al intentar obtener la sesión.',
            result:''
        }
      }

} ,


async createAuth(){

       try{
        let token = this.getToken()

        if(token==null){
            return {
                status:'error',
                message:'Sesión no valida',
                result:''
            }
        }
        let headers =  {'Authorization': token} ;
      
        let response = await axios.post(`/${endpointCodes.post}/create-auth`, {"data":token}, {headers});
      
        
        return {
          status:'success',
          result:response.data.result
        };
       }catch (error) {
          return {
            status:'error',
            result:''
          }
       }
      
    },

    setAth(ath) {
    localStorage.setItem("ath", ath);
    }, 

    async   getAth() {
    let ath = localStorage.getItem("ath");

    let valid = false;

    if (ath  && ath  != "undefined") {
      try{
        let token = this.getToken()

        if(token==null){
            return {
                status:'error',
                message:'Sesión no valida',
                result:''
            }
        }
        let headers =  {'Authorization': token} ;
      
        let response = await axios.post(`/${endpointCodes.post}/get-auth`, {"token":ath }, {headers});
      
       response.data.status == 'success' ? valid=true :   valid= false

       
      }catch (error){
        valid= false;
      }


    } else {
      valid= false;
    }

       return valid;
    },

    validateIMG: async function(option, img){
      let response = true
      if(!img)return false;
      try{
        const urlback = url+'/'+endpointCodes.get +'/'+option+'/'+img
        response = await axios.get(urlback);
        
        response.data.message ? response = false : response = true
      }catch(err){
        console.log(err)
        return false
      }

      return response
    }




};

