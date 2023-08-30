<template>
  <div id="Sections">
    <HeaderSec />
    <div v-if="historyOption == 'Usuarios'">
      <Usuarios />
    </div>
    <div v-if="historyOption == 'Personalizacion'">
      <Perfil />
    </div>
     <div v-if="historyOption == 'category'">
             <Category/>
         </div>
          <div v-if="historyOption == 'subcategory'">
             <Subcategory/>
         </div>
           <div v-if="historyOption == 'type'">
             <Type/>
         </div>
           <div v-if="historyOption == 'product'">
             <Product/>
         </div>
   <div v-if="historyOption == 'Banner'">
            <Banner/>
         </div>
          <div v-if="historyOption == 'sucursal'">
            <Sucursal/>
         </div>
         <div v-if="historyOption == 'suscripciones'">
            <Suscripciones/>
         </div> 
          <div v-if="historyOption == 'Atributo'">
            <Atributo/>
         </div> 
 <div v-if="historyOption == 'clientes'">
             <Clientes/>
         </div>
          <div v-if="historyOption == 'globalparams'">
             <GlobalParams/>
         </div>
         <div v-if="historyOption == 'Cupon'">
            <Cupon/>
         </div>
          <div v-if="historyOption == 'Pedidos'">
            <Pedidos/>
         </div> 
  </div>
</template>
<script>
import { mapActions } from "vuex";

import Banner from '../views/banner/banner.vue';

import HeaderSec from "../components/HeaderSec.vue";
import Usuarios from "../views/usuarios/usuarios.vue";
import Perfil from "../views/profile/profile.vue";
import Category from '../views/category/category.vue';
import Subcategory from '../views/subcategory/subcategory.vue';
import Type from '../views/type/type.vue';
import Product  from '../views/products/productos.vue'
import Sucursal from '../views/sucursal/sucursal.vue';
import Suscripciones from '../views/suscripciones/suscripciones.vue';
import Atributo from '../views/products/atributo.vue';


import Pedidos from '../views/pedidos/pedidos.vue'; 
import Cupon from '../views/shopcar/cupon.vue';
import GlobalParams from "../views/global_params/globalparams.vue";
import Clientes from '../views/usuarios/clientes.vue';

export default {
  name: "Sections",
  components: {
    HeaderSec,
    Usuarios,
    Perfil,
    Category,
    Type,
     Banner,
    Product,
    Sucursal,
    Subcategory,
      Atributo,
      Suscripciones,
      Cupon, 
      Clientes,
      Pedidos,
      GlobalParams
  },

  data() {
    return {
      search_value: "",
      status: "",
      message: "",
      option: "Default",
    };
  },
  computed: {
    historyOption() {
      return this.$store.getters["main/getHistoryOption"];
    },
  },
  created() {
    let option = localStorage.getItem("nav");
    if (option != undefined && option != null && option != "") {
      this.option = option;
      this.setHistoryOptionMain(option);
    }
  },
  methods: {
    ...mapActions("main", ["setHistoryOptionMain"]),
    ...mapActions("main", ["getHistoryOption"]),
  },
};
</script>
<style scoped>
#Sections {
  background: var(--color-5);
  min-height: 59.25vw;
  width: 73.177083vw;
  margin-left: 4.166666666666666vw;
}

.proximamente p {
  color: var(--color-1);
  font-weight: 700;
  font-size: 5vw;
  margin-top: 11.5vw;
  margin-left: 15vw;
}
</style>
