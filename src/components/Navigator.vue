<template >
  <div
    class="Navigator"
    :class="{ adjust: scrollP > 0, white: ($route.name == '404') &&  (scrollP == 0) }"
  >
    <div class="nav-cont" :class="{ pdd: scrollP > 0 }">
      <!--<img :src="pcLogo" alt="logo" class="logo pc" :class="{'logodis':scrollP > 0}"/>
      <img :src="moLogoHor" alt="logo" class="logo pc" :class="{'hht':scrollP > 0,'logodis':scrollP < 400}"/>-->
      <a href="/"
        ><div
          class="logo"
          :class="{ hht: scrollP > 0, logodis: scrollP > 0 }"
        ></div
      ></a>
      <img
        src="../assets/custom/bars.svg"
        alt=""
        class="bars mo"
        :class="{ filt: scrollP > 0 }"
        @click="open = true"
      />
      <div class="menu-cont" :class="{ activated: open }">
        <img
          src="../assets/custom/cross.svg"
          alt=""
          class="bars mo"
          @click="open = false"
        />
        <a href="/" class="menu-a first active">Inicio</a>
        <a href="#simulador" @click="open = false" class="menu-a second"
          >Simulador de crédito</a
        >
        <a href="#nosotros" @click="open = false" class="menu-a">Nosotros</a>
        <a href="#servicios" @click="open = false" class="menu-a">Servicios</a>
        <a href="#contacto" @click="open = false" class="menu-a">Contacto</a>
        <!--<a href="/carrito" @click="open = false" class="menu-a cart">Carrito</a>-->
        <!--<a href="#sucursales" @click="open = false" class="menu-a">SUCURSALES</a>-->
        <!--<div class="search-cont" v-if="buscador">
          <button><img src="../assets/lupa.svg" alt="" class="lupa" /></button>
          <input type="search" id="site-search" name="q" />
        </div>
          -->
        <div class="sm-cont">
          <a
            href="https://www.facebook.com/profile.php?id=100086257311977"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/custom/fb-i.svg"
              alt="sm"
              class="sm-i"
              :class="{ ylw: scrollP > 0 || $route.name == '404' }"
            />
          </a>
          <a
            href="https://www.instagram.com/microfinanzas.financiera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/custom/ig-i.svg"
              alt="sm"
              class="sm-i"
              :class="{ ylw: scrollP > 0 || $route.name == '404' }"
            />
          </a>
          <!--<a
            href="https://www.tiktok.com/@lourdescoyotas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/custom/tt-i.svg"
              alt="sm"
              class="sm-i"
              :class="{ ylw: scrollP > 0 || $route.name == '404' }"
            /> </a
          >-->
        </div>
        <!--
        <div class="user-bar">
          <a href="/carrito">
            <img src="../assets/custom/cart1.svg" alt="sm" class="cart" />
          </a>
          <a href="/" class="c-div" v-if="identity.role == 'cliente'">
            <img src="../assets/custom/user1.svg" alt="sm" class="user" />
            <span>¡Hola! {{ identity.fullname }}</span>
          </a>
          <a href="/administrador" class="c-div" v-else-if="identity.role == 'admin'">
            <img src="../assets/custom/user1.svg" alt="sm" class="user" />
            <span>¡Hola! {{ identity.fullname }}</span>
          </a>
          <a href="/administrador" class="c-div" v-else-if="identity.role == 'legrafica'">
            <img src="../assets/custom/user1.svg" alt="sm" class="user" />
            <span>¡Hola! {{ identity.fullname }}</span>
          </a>
          <a href="/login" class="c-div" v-else>
            <img src="../assets/custom/user1.svg" alt="sm" class="user" /> 
            <span class="mo">Inicia sesión</span>
          </a>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import pcLogo from "../assets/logonav.png";
import moLogo from "../assets/logonav-mo.png";
import moLogoHor from "../assets/logosticky.png";
export default {
  data() {
    return {
      buscador: true /* Activar buscador */,
      moLogo,
      pcLogo,
      moLogoHor,
      open: false,
      scrollP: 0,
    };
  },
  async created() {
    await this.getIdentity();
  },
  computed: {
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },
  methods: {
    scroll(event) {
      let number = event.target.documentElement.scrollTop;
      let offset = number * 1;
      localStorage.setItem("scroll", offset);
      this.scrollP = localStorage.getItem("scroll");
    },
    getIdentity: async function () {
      let response = await this.$store.dispatch("admin/getData");
      return response;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style scoped>
.pc {
  display: block;
}
.mo {
  display: none;
}
.Navigator {
  transition: 0.5s;
  width: 100%;
  position: fixed;
  z-index: 1300;
  background-color: white;
}
.nav-cont {
  transition: 0.5s;
  width: 88.698vw;
  margin: 0 auto;
  padding: 2.796vw 0 2.344vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Navigator .logo {
  width: auto;
  height: 8.021vw;
  transition: 0.65s;
}
.menu-cont {
  display: flex;
  align-items: center;
}
/**items menu */
.menu-a {
  font-family: var(--font-titulo1);
  font-size: var(--fs-menupc);
  color: var(--co-menui);
  margin: 0 1.25vw;
  transition: 0.5s;
  font-weight: 600;
}
.menu-a:hover {
  color: var(--co-menui-active);
  font-weight: 700;
}
/**buscador */
.search-cont {
  width: 8.542vw;
  height: 1.771vw;
  display: flex;
  align-items: center;
  border: var(--im-border);
  border-radius: 1.563vw;
}
.search-cont button {
  background: none;
  border: none;
  padding: 0;
  width: 1.785vw;
}
.search-cont button img {
  width: 0.885vw;
  background: none;
  border: none;
  margin-left: 0.732vw;
  display: flex;
  filter: var(--lupapc-color);
}
.search-cont input#site-search {
  width: 100%;
  height: auto;
  background: none;
  border: none;
  font-family: var(--font-titulo2);
  font-size: var(--fs-menupc);
  color: var(--co-menui);
}

/**social media cont */
.sm-cont {
  width: 3.469vw;
  /* width: 5.469vw;*/
  height: 1.406vw;
  margin-left: 0.886vw;
  display: flex;
  justify-content: space-between;
}
.sm-cont a {
  display: flex;
}
.sm-cont img {
  width: 1.354vw;
  filter: invert(66%) sepia(86%) saturate(2584%) hue-rotate(345deg)
    brightness(103%) contrast(96%);
}
.sm-cont img.ylw {
  filter: var(--sm-icon-color);
}
.sm-cont img:hover {
  filter: var(--sm-icon-hover);
}
.adjust {
  background-color: var(--fondo-menufijo);
}
.adjust .menu-a {
  color: var(--co-txtmefi);
}
.adjust .menu-a:hover {
  color: var(--co-menui-active);
}
@media (min-width: 768px) {
  
.Navigator.white{
  background-color: transparent;
}
  .menu-a.cart {
    display: none;
  }
  .hht {
    height: 4.221vw !important;
  }
  .pdd {
    padding: 0.4vw 0 0.4vw !important;
  }
  .Navigator .logo {
    background-image: url("../assets/logonav.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 19.479vw;
  }
  .logodis {
    background-image: url("../assets/logosticky.png") !important;
    width: 10.122396vw !important;
  }
  .user-bar {
    display: flex;
    margin-left: 2.708vw;
  }
  .user-bar .c-div {
    display: flex;
    align-items: center;
    margin-left: 0.99vw;
  }
  .user-bar .c-div span {
    font-size: 0.625vw;
    line-height: 0.781vw;
    margin-left: 0.729vw;
    color: var(--co-menui);
    font-family: var(--Inter);
    font-weight: 700;
  }
  .user-bar .cart {
    width: 1.667vw;
  }
  .user-bar .user {
    width: 1.094vw;
  }
  .user-bar .c-div span.mo {
    display: none;
  }
}
/**MOBILE STYLES */
@media (max-width: 768px) {
  .menu-a.second {
    margin-top: 13.068vw;
  }
  .menu-a.first {
    display: none;
  }
  .user-bar .c-div span.mo {
    display: block;
  }
  .menu-a.cart {
    display: block;
  }
  .user-bar .cart {
    display: none;
  }
  .user-bar .user {
    width: 7.246vw;
  }
  .Navigator .logo {
    background-image: url("../assets/logonav.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 42.995vw;
    height: 16.021vw !important;
  }
  .logodis {
    background-image: url("../assets/logosticky.png") !important;
    width: 42.995vw !important;
    height: 16.021vw !important;
  }
  .pc {
    display: none;
  }
  .mo {
    display: block;
  }
  .bars {
    width: 10.628vw;
    filter: var(--menu-bars);
  }
  .bars.filt {
    filter: invert(61%) sepia(16%) saturate(2846%) hue-rotate(337deg)
      brightness(100%) contrast(96%);
  }
  .activated {
    display: flex !important;
  }
  .activated .bars {
    filter: var(--co-menui-mo);
  }
  .activated .sm-cont img {
    filter: var(--co-menuism-mo);
  }
  .activated .bars {
    width: 7.488vw;
  }
  .activated .sm-cont img {
    width: 14.251vw;
  }
  .menu-cont {
    display: none;
    position: fixed;
    background: var(--fondo-bk);
    top: 0;
    right: 0;
    width: 54.831vw;
    height: 100%;
    z-index: 100;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;
    padding: 10.386vw 7.971vw 10.386vw 14.493vw;
  }
  .nav-cont {
    width: 86.715vw;
    margin: 0 auto;
    padding: 4.106vw 0 4.831vw;
  }
  .menu-a {
    font-family: var(--font-titulo1);
    font-size: var(--fs-menumo);
    color: #000000 !important;
    font-weight: 700;
    margin: 0 0 5.556vw;
    transition: 0.5s;
    text-align: right;
    letter-spacing: 0.5vw;
  }
  .menu-a.first {
    margin: 18.841vw 0 4.71vw !important;
  }
  .divlogo {
    display: none;
  }
  /*.Navigator .logo {
    width: auto;
    height: 23.430vw;
  }*/
  .hht {
    height: 16.184vw !important;
  }
  .search-cont {
    width: 54.831vw;
    height: 16.908vw;
    border-radius: 7.246vw;
    border: var(--im-border-mo);
    margin-top: 11.836vw;
  }
  .search-cont button {
    width: 15.744vw;
  }
  .search-cont button img {
    width: 8.744vw;
    margin-left: 6.498vw;
    filter: var(--lupamo-color);
  }
  .search-cont input#site-search {
    font-family: var(--font-parrafo);
    font-size: var(--fs-menumo);
    color: var(--color-menumo);
  }
  .sm-cont {
    /*width: 54.831vw;*/
    width: 30.831vw;
    height: 13.527vw;
    margin-top: 7.488vw;
    margin-bottom: 14.251vw;
    margin-left: 0.886vw;
    display: flex;
    justify-content: space-between;
  }
  .sm-cont img {
    width: 14.251vw;
  }
  .user-bar span {
    font-weight: 700;
    font-size: 3.623vw;
    line-height: 4.348vw;
    letter-spacing: 0.3vw;
    color: var(--co-userbartxt);
    padding-left: 3.865vw;
  }
  .user-bar .c-div {
    display: flex;
    align-items: center;
    width: 56vw;
  }
}
</style>