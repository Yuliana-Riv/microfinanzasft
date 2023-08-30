import axios from "axios";
let urlpath = require('../global/url')
const _tkn = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MTY1NTkyMzY1Mw.zG6jshf09VgcuRpT3dTtlgvNDH6inT9Y_g4sYf2lik8'


export default {
    //crear carrito vacio.  
  async createCar(){ 
 

    try {              
      
      let token = _tkn

      let headers =  {'Authorization': token} ;
    
      let response = await axios.post('/61T_knt/ypv-5MH/set_cart/create', {"data":token}, {headers});

      return response.data;

      } catch (error) {
          return {
            status:'error',
            message:'Error al intentar obtener la sesión.',
            result:''
        }
      }

} ,







};

