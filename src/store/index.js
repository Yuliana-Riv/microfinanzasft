import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import colors from './modules/colors'
import logo from './modules/logo'
import main from './modules/main'
import profile from './modules/profile'
import usuarios from './modules/usuarios'
import category from  './modules/category'
import presentacion from './modules/type'
import product from './modules/product'
import banner from './modules/banner'
import sucursal from './modules/sucursal'
import extra from './modules/extra'
import subcategory from './modules/subcategory'
import suscripciones from './modules/suscripciones'
import atributo from './modules/atributo'
import stock from './modules/stock'
import mirror from './modules/mirror'


import address from './modules/address'
import shopcar  from './modules/shopcar'
import carrito from './modules/carrito'
import pasarela from './modules/pasarela'
import wishlist from './modules/wishlist'
import shipment from './modules/shipment'
import payment from './modules/payment'
import global_params from './modules/global_params'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin: admin,
    main: main,
    usuarios: usuarios,
    profile:profile,
    colors:colors,
    logo:logo,
    category:category,
    type:presentacion,
    product:product,
    banner:banner,
    mirror: mirror,
    sucursal: sucursal,
    extra:extra,
    subcategory:subcategory,
    stock: stock,
    atributo: atributo,
    suscripciones:suscripciones,

    carrito:carrito,
    address:address,
    shopcar: shopcar,
    pasarela: pasarela,
    payment: payment,
    wishlist: wishlist,
    shipment:shipment,
    global_params: global_params
  }
})
