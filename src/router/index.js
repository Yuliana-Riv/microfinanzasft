import Vue from 'vue'
import VueRouter from 'vue-router'
import userService from '../services/user.service'
Vue.use(VueRouter)

const routes = [

    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/modalcart',
      name: 'CartModal',
      component: () => import('../views/Home'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login'),
      meta :{
        log:false,
        admin : false,
        auth: false,
      }
    },
    
  {
    path: '/auth',
    name: 'autentificacion',
    component: () => import('../views/Autentificacion'),
    meta :{
      log:true,
      admin : true,
      auth: false
    }
  },
  {
    path: '/administrador',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    meta :{
      log:true,
      admin : true,
      auth: true, 
    }
  },

  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/carrito/miCarrito'),
    meta :{
      log:false,
      admin : false,
      auth: false
    }
  },
   
  {
    path: '/openpay/test',
    name: 'testing',
    component: () => import('../components/test/checkoutTest'),
    meta :{
      log:false,
      admin : false,
      auth: false
    }
  },
 
  {
    path: '/check-out',
    name: 'check-out',
    component: () => import('../views/carrito/checkOut'),
    beforeEnter: async (to, from, next) => { 
    
      if(from.path !='/carrito' && from.name !='CartModal' && from.name != 'Producto' && from.name != 'login-cuenta' && from.name != 'Login'){ //solo entrar a esta vista desde mi carrito.
        next('/carrito')
      }else{
        next();  
      }  

    },
    meta :{
      log:true,
      admin : false,
      auth: false
    }
  },
 
  {
    path: '/finalizado',
    name: 'finished',
    component: () => import('../views/carrito/Finished'),
    beforeEnter: async (to, from, next) => { 
    
       if(from.path !='/check-out'){ //solo entrar a esta vista desde mi carrito.
        next('/carrito')
      }else{
        next();  
      }
      /*next() */

    },
    meta :{
      log:true,
      admin : false,
      auth: false
    }
  },
 
  {
    path: '/finalizadoprueba',
    name: 'finished',
    component: () => import('../views/carrito/Finishedpr'),
   /* beforeEnter: async (to, from, next) => { 
    
      /*if(from.path !='/check-out'){ //solo entrar a esta vista desde mi carrito.
        next('/carrito')
      }else{
        next();  
      } */ 
      /*next()*/

    /*},*/
    meta :{
      log:true,
      admin : false,
      auth: false
    }
  },




  {
    path: '/aviso-de-privacidad',
    name: 'Aviso',
    component: () => import('../views/AvisodePrivacidad'),
    meta :{
     log:false,
     admin : false,
     auth: false
    }
  },


  {
    path: '*',
    name: '404',
    component: () => import('../views/Error404'),
    meta :{
     log:false,
     admin : false,
     auth: false
    }
  },

  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms'),
    meta :{
     log:false,
     admin : false,
     auth: false
    }
  },

   

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach( async (to, from, next) => {

  let meta_admin = to.matched.some(record=>record.meta.admin);
  let meta_log = to.matched.some(record=>record.meta.log);
  let meta_auth = to.matched.some(record=>record.meta.auth);

  let tokenexp = await userService.tokenexp()
  let check =false //comprobar si esta logeado
  let admin =false;
  let type =''


  if(tokenexp){ // ver que el token no este expirado.
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath') //limpiar el localstorage
    next()
  }


  let response = await userService.getData()

  if(response.status =='error'){
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
  }


  if(response.status=='success'){ //comprobar que sea un login valido.
    check =true;
    let isAdmin = userService.isAdmin(response.result);
    admin = isAdmin.admin
    type = isAdmin.type
  
  }

  let ath = await userService.getAth();

 
  // borrar el localstorage cada que vayamos a login.
  
  if(to.path==='/login' && check){
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
    
    next()
  }

  if(to.path != '/finalizado'  ){
    localStorage.removeItem('voucher') 
    
    next()
  }

 
  if(meta_log){
    if(check){
      if(meta_admin){
            if(admin){
            
              if(meta_auth){
                if(ath){
                  next();
                }else{
                  localStorage.removeItem('tkn')
                  localStorage.removeItem('ath')
                  next('/login')
                }
              }else{ //...proximamente rutas que no requieran autentificacion
                next()
              }
             
            }else{
              localStorage.removeItem('tkn')
              localStorage.removeItem('ath')
              next('/')
            }
     }else{
        if(admin){ //no requiere admin pero es admin
          next()
         }else{
           next()
         }
      }
    }else{
      next('/login')
    }
    

  }else{
   
    if(check){
      if(admin){
       next()
      }else{
        next();
      }
    }else{
      next();
    }

  }

 
});

const clearLocalStorage =  function(){
    localStorage.removeItem('crt')
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
}


export default router

