<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      colores: "",
    };
  },

  async created() {
    await this.getAllInfoClr("profile");

    this.colores = this.profiles;
    this.actualizarColores();

    let _ctk = localStorage.getItem("_ctk");

    if (!_ctk) {
      let payload = {
        option: "set_cart",
        item: { id_cliente: null },
      };
      this.setCart(payload);
    }
  },
  watch: {
    profiles() {
      this.actualizarColores();
    },
  },
  computed: {
    profiles() {
      return this.$store.getters["profile/data"];
    },
  },
  methods: {
    ...mapActions("colors", ["getAllInfoClr"]),
    ...mapActions("profile", ["getAllInfoPrf"]),
    ...mapActions("carrito", ["setCart"]),
    actualizarColores() {
      const arr = this.$store.getters["colors/data"];

      if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
          if (i == 0) {
            document.documentElement.style.setProperty(
              "--color-1",
              arr[i].code
            );
          } else if (i == 1) {
            document.documentElement.style.setProperty(
              "--color-2",
              arr[i].code
            );
          } else if (i == 2) {
            document.documentElement.style.setProperty(
              "--color-3",
              arr[i].code
            );
          } else if (i == 3) {
            document.documentElement.style.setProperty(
              "--color-4",
              arr[i].code
            );
          } else if (i == 4) {
            document.documentElement.style.setProperty(
              "--color-5",
              arr[i].code
            );
          } else if (i == 5) {
            document.documentElement.style.setProperty(
              "--color-6",
              arr[i].code
            );
          } else if (i == 6) {
            document.documentElement.style.setProperty(
              "--color-7",
              arr[i].code
            );
          }
        }
      }
    },
  },
};
</script>



<style>
@import "./css/default.css";

@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@font-face {
  font-family: "Gilroy-eb";
  src: url("./assets/fonts/Gilroy-ExtraBold.ttf");
  font-display: swap;
}
html {
  scroll-behavior: smooth;
}

:root {
  /** No eliminar los 7 colores */
  --color-1: #057D38;
  --color-2: #005cb9;
  --color-3: #a7a7a7;
  --color-4: #f5f5f5;
  --color-5: #ffffff;
  --color-6: #d9d9d9;
  --color-7: #ffffff;

  --Sans: "Source Sans Pro", sans-serif;
  --Open_Sans: "Open Sans", sans-serif;
  --Sora: "Sora", sans-serif;
  --Mukta: "Mukta", sans-serif;
  --Inter: "Inter", sans-serif;

  /* Tipografias */
  --font-titulo1: "Plus Jakarta Sans";
  --font-titulo2: "Plus Jakarta Sans" ;
  --font-parrafo: "Plus Jakarta Sans";
  --font-parrafo2: "Plus Jakarta Sans";

  /* Header */

  /**validaciones */
  --fs-val: 0.6770833333333334vw;
  --fs-val-mo: 3.864734299516908vw;
  --error-val: #fa8f21;
  --success-val: #55cd00;

  /* Menu PC */
  --fs-menupc: 0.938vw;
  --menu-bars: invert(61%) sepia(50%) saturate(1281%) hue-rotate(344deg) brightness(99%) contrast(98%);

  --co-menui-active: #F98433;
  --co-menui:#040404;
  --im-border: 0.026vw solid #005cb9;
  --lupapc-color: invert(17%) sepia(70%) saturate(4084%) hue-rotate(199deg)
    brightness(100%) contrast(101%);
  --fondo-menufijo: #ffffff;
  --co-txtmefi:#040404;
  --font-menusec: "Inter";

  /* Menu MO */
  --fondo-bk: #ffffff;
  --fs-menumo: 6.522vw;
  --color-menumo:#FFA400;
  --co-menui-mo: invert(61%) sepia(50%) saturate(1281%) hue-rotate(344deg) brightness(99%) contrast(98%);
  --co-menuism-mo: invert(22%) sepia(93%) saturate(4199%) hue-rotate(147deg) brightness(88%) contrast(96%);
  --im-border-mo: 0.121vw solid #1E7E8B;
  --lupamo-color: invert(37%) sepia(78%) saturate(403%) hue-rotate(139deg) brightness(95%) contrast(95%);
  --co-userbartxt: #005cb9;

  /* Social Media Icon */
  --sm-icon-color: invert(77%) sepia(37%) saturate(6139%) hue-rotate(337deg) brightness(99%) contrast(97%);
  --sm-icon-hover: invert(70%) sepia(99%) saturate(2429%) hue-rotate(343deg)
    brightness(98%) contrast(99%);
  --sm-icon-color2: invert(23%) sepia(100%) saturate(1620%) hue-rotate(195deg)
    brightness(94%) contrast(103%);
  --sm-icon-hover: invert(70%) sepia(99%) saturate(2429%) hue-rotate(343deg)
    brightness(98%) contrast(99%);

  /* Menu Movil */
  --fs-menumv: 16.521739130434782vw;

  /* Generales */
  --fs-idseccionpc: 0.625vw;
  --fs-idseccionmv: 2.657004830917874vw;
  --co-hr1seccion: #000000;
  --co-hr2seccion: #057D38;
  --co-hr3seccion: #057D38;
  --co-h51seccion: white;
  --co-h52seccion: #057D38;
  --co-h53seccion: #057D38;
  /* Seccion 1 PC */

  /* Seccion 1 Mov */

  /* Slide principal */
  --labelsl-color: #ffffff;
  --buttonsl-color: #FA8F21;

  /* Seccion Nosotros PC */
  --fs-t1noso: 2.865vw;
  --co-t1noso: #057D38;
  --fs-p2noso: 0.729vw;
  --fs-p2noso2: 0.729vw;
  --co-p2noso:#4A4A4A;
  --co-p3noso:#040404;

  /* Seccion Nosotros Mov */
  --fs-t1nosomv: 8.454vw;
  --fs-p1nosomv: 4.1062801932367154vw;
  --fs-p2nosomv: 4.348vw;

  /***Seccion Menú */
  --ct-titulo-menu: #ff4713;
  --ct-descr-menu: #8e8e8e;
  --c-item-menu: #005cb9;
  --c-precio-menu: #ff4713;
  --ct-precio-menu: #ffffff;
  --c-cathover-menu: #ff4713;

  /* Seccion Servicios */
  --co-bgservicios:#F6F6F6;
  --fs-t1serv: 2.344vw;
  --co-t1serv:#057D38;
  --fs-t2serv: 0.9375vw;
  --co-t2serv:#040404;
  --co-t2servpc:#040404;
  --fs-h3serv: 0.9895833333333333vw;
  --co-h3serv: #55cd00;
  --fs-pserv: 0.7291666666666666vw;
  --co-pserv: #ffffff;
  --co-btnserv: #fa8f21;
  --co-third:#2DC7CA;
  --co-prox1:#D9D9D9;
  --co-prox2:#8E8E8E;

  /* Seccion Servicios Movil*/
  --fs-t1servmv: 8.454106280193237vw;
  --fs-t2servmv: 4.3478260869565215vw;
  --fs-h3servmv: 5.314009661835748vw;
  --fs-pservmv: 4.3478260869565215vw;
  --fs-btnservmv: 3.864734299516908vw;

  /* Seccion contacto */
  --fs-titconta: 2.864583333333333vw;
  --co-titconta: #000000;
  --fs-titconta1: 2.34375vw;
  --co-titconta1: #ffffff;
  --fs-subconta: 1.0416666666666665vw;
  --fs-paconta: 1.0416666666666665vw;
  --font-txtcon:'Plus Jakarta Sans',

  /* Seccion contacto movil */
  --fs-titcontamv: 10.869565217391305vw;
  --fs-titconta1mv: 8.454106280193237vw;
  --fs-subcontamv: 4.830917874396135vw;
  --fs-pacontamv: 4.830917874396135vw;

  /* Seccion siguenos */
  --co-titsig: #057D38;
  --fs-titsig: 2.864583333333333vw;
  --co-txtsig: #FA8433;
  --fs-txtsig: 1.0416666666666665vw;
  --fs-btnig: 1.042vw;

  /* Seccion siguenos movil*/
  --fs-titsigmv: 7.246376811594203vw;
  --fs-btnigmv: 4.3478260869565215vw;

  /* Seccion formulario */
  --fs-titform: 2.865vw;
  --co-titform: #000000;
  --fs-inpform: 0.8333333333333334vw;
  --co-inpform: #7b7b7b;
  --fs-adpform: 0.7591666666666666vw;
  --co-adpform: #F7E3DB;
  --co-linkadpform: #F7E3DB;
  --fs-pabtnform: 0.9375vw;
  --co-btnform: transparent;
  --co-pabtnform: #fff;

  /* Seccion contacto movil*/
  --fs-titformmv: 8.454vw;
  --fs-inpformmv: 4.830917874396135vw;
  --fs-adpformmv: 4.831vw;
  --fs-pabtnformmv: 4.3478260869565215vw;

  /* Seccion Sucursales */
  --fs-titsucu: 2.864583333333333vw;
  --co-titsucu: #fdcd0a;
  --fs-txtbtnsu: 1.0416666666666665vw;
  --fs-tit2suc: 1.3541666666666667vw;
  --co-txtbtnsu: #0017c5;
  --fs-txtsucu: 0.9375vw;
  --co-txtsucu: #8e8e8e;
  --fo-btnwhasu: #0017c5;

  /* Seccion Sucursales Movil */
  --fs-titsucumv: 8.454106280193237vw;
  --fs-txtbtnsumv: 4.830917874396135vw;
  --fs-tit2sucmv: 6.280193236714976vw;
  --fs-txtsucumv: 3.6231884057971016vw;

  /*Seccion footer */
  --font-foohover: #FA8F21;
  --fs-bgfooter: linear-gradient(180deg, #04692F 0%, #114125 100%);;
  --fs-titsecfo: 0.8333333333333334vw;
  --co-titsecfo: #FA8F21;
  --fs-titinfofo: 0.8333333333333334vw;
  --co-titinfofo: #FA8F21;
  --fs-txtinfofo: 0.8333333333333334vw;
  --co-txtinfofo: #ffffff;
  --fs-txtmenufo: 0.7291666666666666vw;
  --co-txtmenufo:#D9D9D9;

  /*Seccion footer Movil */
  --fs-titsecfomv: 5.314vw;
  --fs-pinfofomv: 3.865vw;
  --fs-txtmenufomv: 4.831vw;

  /* Copyright */
  --fs-txtcopy: 0.6770833333333334vw;
  --co-txtcopy: #057D38;

  /* Copyright movil */
  --fs-txtcopymv: 3.140096618357488vw;

  /* Seccion TIKTOK */
  --co-txttik: #ffffff;
  --co-txtbtntik: #005CB9;
  --co-txtbtntikpc: #ffffff;
  --fs-tiitik: 2.864583333333333vw;
  --fs-txth5: 1.3541666666666667vw;
  --fs-btntik: 1.0416666666666665vw;

  /* Seccion Movil TIKTOK */
  --co-txttik: #ffffff;
  --fs-tiitik: 6.763285024154589vw;
  --fs-txth5mv: 4.830917874396135vw;
  --fs-btntik: 4.830917874396135vw;



  /**Modal carrito */
  --co-tlMCar: #005CB9;
  --font-tlMCar: 'Inter';
  --co-cantMCar: white;
  --bk-cantMCar: #FF4713; 
  --font-ptlMCar: 'Inter';
  --co-ptlMCar: #005CB9;
  --co-stlMCar:#BABABA;
  --co-btncMCar: #FF4713;
  --co-txtcMCar: #005CB9;
  --co-priceMCar: white;
  --bk-priceMCar: #FF4713; 
  --font-sbtMCar: 'Inter';
  --co-sbtMCar:#BABABA;
  --co-sbtpMCar: #FF4713; 
  --bk-fcMCar: #005CB9;
  --bk-fcMCarYll: #ffa400; 
  --co-fcMCar: white;


/**MI CARRITO */
--co-btnMyCar: #005CB9;
  --co-htlMyCar: #FF4713;
  --co-tlMyCar: white;
  --font-MyCar: 'Inter';


/**CHECKOUT */
--co-btnMyCar: #005CB9;
  --co-htlMyCar: #FF4713; 
  --co-COutTYC: #ffa400; 


/**FINISHED  */
--co-btnMyCar: #005CB9;
  --co-fintlMyCar: #FF4713; 


/**OPENPAY  */
--bk-inputOPay:  #F5F5F5; 
--co-txtOPay: #7E7E7E;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0vw;
}

body {
  margin: 0vw;
}

html {
  scroll-behavior: smooth;
}

input:focus-visible {
  outline: none !important;
}

input,
textarea,
select {
  padding-left: 0.5vw;
  outline: none;
}

.dflx {
  display: flex;
}

.pointer {
  cursor: pointer;
}

.jcsb {
  justify-content: space-between;
}

.fdc{
  flex-direction: column;
}

/* INICIO CSS VUE CAROUSEL */

@media (min-width: 1024px) {
  .sectionservicios .servs-c.pc .VueCarousel-inner { 
    width: 41.510vw;
}
  .menu-p .c-1 .p.var {
    font-size: 1.042vw;
  } 
  .menu-p .precio {
    width: auto !important;
    min-width: 3vw;
  }
  .menu-p .price-cont {
    padding-right: 0.521vw;
  }
  .sectionsucursales .VueCarousel-inner {
    flex-wrap: wrap;
  }
  .Desktop .VueCarousel-slide {
    display: flex;

    flex-flow: wrap;
  }
  .Desktop .VueCarousel-inner {
    width: 84vw;
  }
  .sectionsucursales
    button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
    width: 2.604166666666667vw !important;
    height: 2.604166666666667vw !important;
  }

  .sectionsucursales
    button.VueCarousel-navigation-button.VueCarousel-navigation-next {
    width: 2.604166666666667vw !important;
    height: 2.604166666666667vw !important;
  }

  .Desktop .VueCarousel {
    flex-direction: column-reverse;
  }
  .sectionsucursales .VueCarousel-navigation {
    position: initial !important;
    margin-right: 14.6vw !important;
    margin-bottom: 2vw !important;
  }
  .sectionsucursales .VueCarousel-navigation {
    width: 0.15625vw;
  }
}

.sectionsucursales .VueCarousel-navigation {
  position: initial !important;
}
.sectionsucursales .VueCarousel-navigation-button {
  position: initial !important;
  padding: 0 !important;
}
.sectionsucursales .VueCarousel-navigation-button img {
  width: 100%;
}
.sectionsucursales .VueCarousel-navigation {
  display: flex;
  height: fit-content;
  justify-content: space-between;
  margin: auto;
}
.sectionsucursales
  button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  width: 9.178743961352657vw;
  height: 9.178743961352657vw;
  border-radius: 15vw;
  background-color: #d376b9 !important;
  -webkit-appearance: none;
}
.sectionsucursales
  button.VueCarousel-navigation-button.VueCarousel-navigation-next {
  width: 9.178743961352657vw;
  height: 9.178743961352657vw;
  border-radius: 15vw;
  background-color: #d376b9 !important;
  margin-left: -15vw !important;
  -webkit-appearance: none;
}
p.NButton {
  margin: 0vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* FIN CSS VUE CAROUSEL */

#app {
  margin: 0vw;
  height: auto;
  font-family: var(--font-titulo2);
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: inherit;
}

.VueCarousel-navigation-button {
  color: var(--labelsl-color) !important;
  background-color: var(--buttonsl-color) !important;
  width: 1.771vw;
  height: 1.771vw;
  border-radius: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
    font-size: 0.6vw;
}
.VueCarousel-navigation-prev {
    left: -4.063vw!important; 
}
.VueCarousel-navigation-next{
    right: -4.063vw!important; 
}
.cart_msg {
  font-size: var(--fs-val);
  font-family: var(--font-parrafo);
  margin: 0;
}
.cart_success {
  color: var(--success-val);
}
.cart_error {
  color: var(--error-val);
}
@media (max-width: 967px) {
  #app {
    margin: 0vw;
    height: 100vh;
    font-family: var(--font-titulo2);
  }
}

/***MENU */
.slideservicios .VueCarousel-inner {
  width: 60vw;
}
.slideservicios .VueCarousel-navigation {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 3.7vw;
  justify-content: space-between;
}
.slideservicios .VueCarousel-navigation-button {
  position: relative !important;
  top: 2% !important;
  transform: translateY(0%) translateX(0%) !important;
  font-size: 0.61vw;
  padding: 0 !important;
}
.slideservicios .VueCarousel-navigation-button img {
  width: 100%;
}
.menu-h {
  padding-bottom: 5.417vw;
}
.menu-h .titulo {
  font-weight: 400;
  font-size: 1.667vw;
  line-height: 90.5%;
  font-family: var(--font-titulo1);
  color: var(--c-cathover-menu);
  padding-bottom: 0.71vw;
  margin: 0;
}
.menu-p .menu-list {
  /*width: 55vw;*/
  width: 51vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.menu-p p {
  font-weight: 700;
  font-size: 1.302vw;
  line-height: 1.53vw;
  font-family: var(--font-menusec);
  color: var(--c-item-menu);
  margin: 0;
}
.menu-p .por {
  font-size: 0.729vw;
  line-height: 111%;
  color: #8e8e8e;
}
.menu-p .price-cont img {
  width: 5.26vw;
  padding-right: 0.781vw;
}
.menu-p .c-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.885vw;
}
.menu-p .c-1 .por {
  font-size: 0.729vw;
  line-height: 111%;
  color: #8e8e8e;
}
.menu-p .price-cont {
  display: flex;
  align-items: center;
}
.menu-p .product-p {
    padding-bottom: 2.75vw;
    padding-right: 4.042vw;
    width: 23.25vw;   
}
.menu-p .precio {
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 2.061vw;
  background: var(--c-precio-menu);
  color: var(--ct-precio-menu);
  font-weight: 700;
  border-radius: 1.563vw;
  font-size: 0.938vw;
    padding: 0 0.499vw;
} 
.product-p .por {
  transition: 0.5s;
}
.product-p:hover .por {
  color: black;
}
.menu-p .c-1 .p {
  font-weight: 700;
  width: 10.104vw;
  color: var(--c-item-menu);
}
@media (max-width: 1024px) {
  .menu-p .item-pro {
    padding: 0 1.812vw;
  }
  .menu-p .item-pro .p {
    padding-top: 3.623vw;
  }
  .cart_msg {
    font-size: var(--fs-val-mo);
    text-align: center;
    margin: 5.45353vw 0;
  }

  /**MENU  */
  .slideservicios {
    width: 80vw;
    margin: auto;
    height: fit-content !important;
  }
  .slideservicios .VueCarousel-inner {
    /*width: 74.879vw;*/
    width: 82.879vw;
  }
  .slideservicios .VueCarousel-navigation {
    width: 33.7vw !important;
    top: 39vw;
    right: 0;
    left: 25vw;
    order: 1;
    position: absolute !important;
    margin: 0 !important;
  }
  .menu-h {
    height: 50vw;
    padding-bottom: 0;
  }
  .menu-p {
    width: auto;
    padding: 14.976vw 0;
  }
  .menu-p .menu-list {
    width: 79vw;
    flex-wrap: nowrap;
    height: auto !important;
    align-items: center;
  }
  .menu-p .product-p {
    padding-bottom: 12.802vw;
    padding-right: 0;
    width: auto;
  }
  .menu-p .c-1 {
    flex-direction: column;
  }
  .menu-p p {
    font-size: 6.039vw;
    line-height: 90.5%;
  }
  .menu-p .c-1 .p {
    width: auto;
    text-align: center;
  }
  .menu-p .precio {
    border-radius: 7.246vw;
    width: 30.377vw;
    height: 12.077vw;
    font-size: 5.314vw;
  }

  .menu-h .titulo {
    font-size: 7.729vw;
    line-height: 90.5%;
    text-align: center;
    width: 68vw;
    margin: auto;
  }
  .menu-p p.subt {
    text-align: center;
    padding-top: 2vw;
  }
  .menu-p .c-1 img {
    padding: 3.623vw 0;
    width: 24.396vw;
  }
  .menu-p .price-cont {
    padding-top: 3.623vw;
  }
  .menu-p .c-1 .por {
    font-size: 4.348vw;
  }
  .slideservicios .VueCarousel-wrapper {
    order: 2;
  } /**/
  .slideservicios .VueCarousel-navigation-button {
    width: 15.459vw;
    height: 15.459vw;
    border-radius: 11vw;
    font-size: 2.61vw;
    padding: 0;
  }
}
body {
  margin: 0px;
}

input:focus-visible {
  outline: none !important;
}

input,
textarea,
select {
  padding-left: 0.5vw;
  outline: none;
}

.dflx {
  display: flex;
}

.dpl {
  display: none;
}

hr.hrhd {
  width: 70.72916666666667vw;
  margin-left: 0px;
  border-bottom: 0.2px solid #b1b1b1;
  margin-top: 1.6145833333333335vw;
  margin-bottom: 2.9166666666666665vw;
}

/** MENSAJES DE EXITO/ERROR */
.status_messages {
  margin-top: 1vw;
}

.msg p {
  color: var(--color-5);
  width: 20vw;
  padding: 0.5vw;
  font-family: var(--font-titulo2);
  font-size: 0.7333333333333334vw;
  font-style: normal;
}
.msg_success {
  background: var(--color-2);
  width: 20vw;
}

.msg_error p {
  background: var(--color-1);
  width: 20vw;
}

/** FIN MENSAJES DE EXITO/ERROR */

/** NAVIGATE BUTTONS */
#navigate-buttons {
  margin-left: 1.3vw;
  margin-top: 0.1vw;
}

#navigate-buttons button {
  border: 0px;
  background: var(--color-5);
  width: 1.5vw;
  height: 1.5vw;
  cursor: pointer;
  transition: all 300ms;
  color: var(--color-5);
  font-size: 1vw;
  margin-top: 0.7vw;
}

/*#navigate-buttons button:hover{
       
        background: var(--color-2);
       
        
    }*/
p.num-pages {
  color: #797979;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  padding-top: 0.2vw;
  font-size: 0.7vw;
}

/** FIN NAVIGATE BUTTONS */

/** MODAL delete*/

.modal_view {
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0vw;
  right: 0vw;
}
#modal_delete {
  /*background: var(--color-5);*/
  width: 16.383333vw;
  height: 8vw;
  position: absolute;
  top: 17vw;
  right: 40.5vw;
  padding: 0.8854166666666666vw;
}
#modal_delete .body {
  background: var(--color-1);
  width: 16.354166666666668vw;
  height: 6.354166666666666vw;
  border-radius: 1.5vw;
  justify-content: center;
}

#modal_delete h3 {
  font-size: 0.7291666666666666vw;
  color: var(--color-5);
  text-align: center;
  font-weight: 400;
  margin-top: 0vw;
}
#modal_delete h3 span {
  font-weight: 700;
}
#modal_delete img {
  margin-top: 1.0416666666666665vw;
  margin-left: 7.239583333333334vw;
  width: 1.9270833333333335vw;
  height: 1.8229166666666667vw;
}

.modal_del_btns {
  justify-content: center;
}

.modal_del_btns p {
  color: var(--color-2);
  text-decoration: underline;
  cursor: pointer;
  width: 5vw;
  text-align: center;
  padding: 0.5vw;
  margin: 0vw;
  font-size: 0.625vw;
}

/** fin modal delete */

/** modal add */
#modal_add {
  /*background: var(--color-5);*/
  width: 16.383333vw;
  height: 8vw;
  position: absolute;
  top: 17vw;
  right: 40.5vw;
  padding: 0.8854166666666666vw;
}
#modal_add .body {
  background: var(--color-1);
  width: 16.354166666666668vw;
  height: 2.3958333333333335vw;
  border-radius: 1.5vw;
}

#modal_add h3 {
  font-size: 0.7291666666666666vw;
  color: var(--color-5);
  padding-left: 1.5vw;
  font-weight: 400;
  padding-top: 0.6770833333333334vw;
  margin-top: 0vw;
  width: 10vw;
}
#modal_add img {
  padding-top: 0.54vw;
  padding-left: 3vw;
  width: 1.3031249999999999vw;
  height: 1.3031249999999999vw;
}

.modal_add_btns {
  justify-content: center;
}

.modal_add_btns p {
  color: var(--color-2);
  text-decoration: underline;
  cursor: pointer;
  width: 5vw;
  text-align: center;
  padding: 0.5vw;
  margin: 0vw;
  font-size: 0.625vw;
}
/** fin  modal add */

/** modal edit */
#modal_edit {
  /*background: var(--color-5);*/
  width: 16.383333vw;
  height: 8vw;
  position: absolute;
  top: 17vw;
  right: 40.5vw;
  padding: 0.8854166666666666vw;
}
#modal_edit .body {
  background: var(--color-1);
  width: 16.354166666666668vw;
  height: 2.3958333333333335vw;
  border-radius: 1.5vw;
}

#modal_edit h3 {
  font-size: 0.7291666666666666vw;
  color: var(--color-5);
  padding-left: 1.5vw;
  font-weight: 400;
  width: 13vw;
  padding-top: 0.6770833333333334vw;
  margin-top: 0vw;
}
#modal_edit img {
  padding-top: 0.54vw;

  width: 1.3031249999999999vw;
  height: 1.3031249999999999vw;
}

.img-item img {
  max-width: 15vw;
}

.modal_edit_btns {
  justify-content: center;
}

.modal_edit_btns p {
  color: var(--color-2);
  text-decoration: underline;
  cursor: pointer;
  width: 5vw;
  text-align: center;
  padding: 0.5vw;
  margin: 0vw;
  font-size: 0.625vw;
}
/** fin  modal add */

/** modal logout */

#modal_logout {
  /*background: var(--color-5);*/
  width: 16.383333vw;
  height: 8vw;
  position: absolute;
  top: 17vw;
  right: 40.5vw;
  padding: 0.8854166666666666vw;
}
#modal_logout .body {
  background: var(--color-2);
  width: 16.354166666666668vw;
  height: 6.354166666666666vw;
  border-radius: 1.5vw;
  justify-content: center;
}

#modal_logout h3 {
  font-size: 0.7291666666666666vw;
  color: var(--color-5);
  text-align: center;
  font-weight: 400;
  margin-top: 0.5vw;
}
#modal_logout h3 span {
  font-weight: 700;
}
#modal_logout img {
  margin-top: 1.0416666666666665vw;
  margin-left: 7.239583333333334vw;
  width: 1.875vw;
  height: 1.875vw;
}

.modal_log_btns {
  justify-content: center;
}

.modal_log_btns p {
  color: var(--color-2);
  text-decoration: underline;
  cursor: pointer;
  width: 5vw;
  text-align: center;
  padding: 0.5vw;
  margin: 0vw;
  font-size: 0.625vw;
}

p.noitems {
  color: var(--color-6);
  font-size: 0.625vw;
  font-weight: 500;
  width: 4.947916666666666vw;
  margin-right: 1.5625vw;
}
p.noitems span {
  font-weight: 700;
}

#select-items {
  width: 8.90625vw;
  border: 0px;
  background: var(--color-4);
  border-radius: 0.5vw;
  color: var(--color-5);
  font-size: 0.625vw;
  font-weight: 500;
  border: none;
  margin-right: 1.9270833333333335vw;
}
.activeradius {
  border-radius: 0.5vw 0.5vw 0vw 0vw !important;
}

#select-items option {
  background: white;
  color: #8d8d8d;
}
.buscador {
  margin-top: 0.2vw;
  height: 1.5625vw;
  border: 0.052083vw solid var(--color-4);
  border-radius: 0.5vw;
  padding-left: 0.5vw;
}
.buscador input {
  width: 15.312500000000002vw;
  border: none;
  height: 1.5625vw;
  color: #8d8d8d;
}
.icon_buscar img {
  width: 0.8854166666666666vw;
  height: 0.8854166666666666vw;
  padding-top: 0.3vw;
  margin-right: 0.5vw;
}

.btn_añadir {
  cursor: pointer;
  border: none;
  background: var(--color-1);
  color: var(--color-5);
  width: 15.416666666666668vw;
  height: 2.5vw;
  text-align: left;
  border-radius: 1.5vw;
  margin-top: 0.7291666666666666vw;
}
.btn_añadir img {
  width: 1.3031249999999999vw;
  height: 1.3031249999999999vw;
  margin-left: 8.5vw;
  padding-top: 0.6vw;
}
.btn_añadir p {
  font-weight: 500;
  font-size: 0.7291666666666666vw;
  padding-bottom: 0.2vw;
  padding-left: 1.5vw;
}

/** estilos scroll bar */
.tbl_item::-webkit-scrollbar {
  -webkit-appearance: none;
}

.tbl_item::-webkit-scrollbar:vertical {
  width: 0.3645833333333333vw;
}

.tbl_item::-webkit-scrollbar-button:increment,
.tbl_item::-webkit-scrollbar-button {
  display: none;
}

.tbl_item::-webkit-scrollbar:horizontal {
  height: 0.3645833333333333vw;
}

.tbl_item::-webkit-scrollbar-thumb {
  background-color: #797979;
  /*border-radius: 1.0416666666666665VW;*/
  border: 0.10416666666666667vw solid #f1f2f3;
}

.tbl_item::-webkit-scrollbar-track {
  border-radius: 0.3645833333333333vw;
}

.boxform {
  display: grid;
  margin-right: 4.375vw;
  margin-bottom: 0.8854166666666666vw;
}

p.btnRegresar {
  cursor: pointer;
  border: none;
  background: var(--color-1);
  color: var(--color-5);
  width: 6vw;
  padding: 0.7vw 0.7vw;
  text-align: center;
  border-radius: 1.5vw;
  margin-top: 0.7291666666666666vw;
  font-weight: 500;
  font-size: 0.7291666666666666vw;
  margin-right: 2vw;
}

button.alta {
  cursor: pointer;
  border: none;
  background: var(--color-1);
  color: var(--color-5);
  width: 6vw;
  height: 2.5vw;
  border-radius: 1.5vw;
  margin-top: 0.7291666666666666vw;
  font-weight: 600;
  font-size: 0.7291666666666666vw;
}

#uploadimg button {
  border: none !important;
  background: var(--color-5);
}

input[type="file"] {
  display: none;
}

.filelabel {
  padding: 0.8vw 0vw;
  width: 14.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-4) !important;
  font-size: 0.7291666666666666vw;
  font-weight: 500 !important;
  padding-left: 1.09375vw;
  cursor: pointer;
}

.filelabelname {
  padding: 0.8vw 1vw;
  border-left: none;
  width: auto;
  cursor: pointer;

  color: var(--color-4) !important;
  font-size: 0.7291666666666666vw;
  font-weight: 500 !important;
  padding-left: 1.09375vw;
}

/*select */

.select-container {
  margin-right: 1.9270833333333335vw;
}
#select-items {
  width: 8.90625vw;
  height: 1.563vw;
  margin-top: 0.2vw;
  border: 0px;
  background-color: var(--color-4);
  border-radius: 0.5vw;
  color: var(--color-5);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  border: none;
  padding-left: 0.938vw;
  display: flex;
  align-items: center;
  background-image: url("./assets/flecha.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 8.6vw;
}
input#select-ch {
  display: none;
}
.options-cont {
  display: none;
}
#select-ch:checked ~ .options-cont {
  display: flex;
  position: absolute;
  padding: 0.573vw 1.25vw;
  flex-direction: column;
  background-color: #ffffff;
  width: 7.3vw;
}
#select-items.rounded {
  border-radius: 0.5vw 0.5vw 0 0;
}
.option-btn {
  cursor: pointer;
  font-size: 0.625vw;
  line-height: 1.25vw;
}
.option-btn:hover {
  background: gainsboro;
}

.activeradius {
  border-radius: 0.5vw 0.5vw 0vw 0vw !important;
}

#select-items option {
  background: #ffffff;
  color: #8d8d8d;
}

/*select */
</style>
