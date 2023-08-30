<template >
  <div class="miCarrito">
    <Navigator /> 
    <div class="mycart-body">
      <div class="mycart-cont">
        <!--<p class="dir">
          <a href="/">Home</a> > <a href="/">Tienda</a> >
          <span class="blue"><a href="/carrito">Carrito</a></span>
        </p>-->
        <div class="grid-mycart">
          <p class="titulo-p">Mi carrito </p>
          <div class="empty-car-cont" v-if="carrito.items == ''">
            <p class="adv-empty">Tu carrito aún está vacío.</p>
            <div class="btn-return" @click="toHome()"> 
              <p class="t">VOLVER AL INICIO</p>
            </div>
          </div>
          <div class="table-cart-cont" v-if="carrito.items != ''">
            <div class="list-cart-cont">
              <div class="list-cart">
                <div class="head-lc">
                  <p class="l1">PRODUCTO</p>
                  <p class="l2">CANTIDAD</p>
                  <p class="l3">PRECIO</p>
                </div>
                <div
                  v-for="(item, key) in update.items"
                  :key="key"
                  class="product-cart"
                >
                  <div @click="deleteItem(key)" class="close-btn">X</div>
                  <!-- enviar la key -->
                  <div class="pro-c-cont">
                    <div class="img-pro-cont">
                      <div class="img-c">
                        <img v-if="item.item.image !== ''"
                          :src="
                            url + '/' + endpointCodes.get + '/product-img/' +
                           isWebp(regexImg(item.item.image), item.item.image) 
                          "
                          alt="pro"
                          class="pro-img"
                        />
                        <!--<img v-else
                          src="../../assets/defaultimg.png"
                          alt="pro"
                          class="pro-img"
                        />-->
                      </div>
                      <div class="pro-info">
                        <p class="name-pro">
                          <b>{{ item.item.name+(item.item.product_atributo_valores !== null ? " ("+item.item.product_atributo_valores[0].valor+" "+item.item.product_atributo_valores[0].atributo+")"
                :'') }}</b>
                        </p>
                        <p class="cant-pro">{{ item.item.descr }}</p>
                      </div>
                    </div>

                    <div class="c-pr-cont">
                      <div class="change-cant-cont">
                        <div
                          class="sign-c"
                          @click="item.cantidad -= 1 "
                          :class="{ eventBlock: item.cantidad == 0 }"
                        >
                          -
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="num-pro"
                          v-model="item.cantidad"
                        />
                        <div class="sign-c" @click="item.cantidad += 1">+</div>
                      </div>
                      <p class="price-pro">
                        ${{ calcTotal(item.item.price, item.cantidad) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dflx"> 
                <!--<div class="btn-return" @click="toShop()">
                <p class="t">	
                   <span>&#10094;</span> IR A TIENDA</p>
              </div>---> 
              <div class="btn-return" :class="{'inac' : upd == false}" @click="actualizarCarrito(update)">
                <!--<img src="../../assets/refresh.svg" alt="cart" class="icon" />-->
                <p class="t">Actualizar carrito</p>
              </div>
              </div>
             
            </div>
            <div class="miPedido-cont">
              <div class="header-mp">
                <p>MI PEDIDO</p>
              </div>
              <div class="miPedido-body">
                <div class="products-mp-c">
                  <div class="header-mp-c">
                    <p class="m1">Producto</p>
                    <p class="m2">Precio</p>
                  </div>
                  <div
                    v-for="(item2, key2) in carrito.items"
                    :key="key2"
                    class="product-mp"
                  >
                    <div class="c1">
                      <p class="titulo">
                        <b>{{ item2.item.name }}</b>
                      </p>
                      <p class="titulo">{{ item2.item.brand_name }}</p>
                      <p class="titulo azul-span">
                        <b>x{{ item2.cantidad }}</b>
                      </p>
                    </div>
                    <div class="c2">
                      <p class="precio">
                        <b>
                          ${{ calcTotal(item2.item.price, item2.cantidad) }}
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="totals-mp-c">
                  <div class="sb-mp">
                    <p class="gray">Subtotal</p>
                    <p class="precio">${{ carrito.subtotal }}</p>
                  </div>
                 <!-- <div class="sb-mp">
                    <p class="gray">Envio</p>
                    <p class="precio"> - ${{ carrito.envio }} </p>
                  </div> --->
                  <div class="sb-mp">
                    <p class="gray">Cupón</p>
                    <p class="precio">-${{ carrito.descupon }}</p>
                  </div>
                  <div class="cupon-cont">
                    <input
                      type="text"
                      name="cupon"
                      id="cupon"
                      placeholder="#CUPÓN"
                      class="cupon-txt"
                      v-model="cupon"
                    />
                    <input
                      @click="aplicarCupon(cupon)"
                      type="button"
                      class="cupon-btn"
                      value="Aplicar"
                    />
                  </div>
                  <div class="cupon-list">
                    <div
                      class="cupon-item dflx"
                      v-for="(cupon, index) in carrito.cupon"
                      :key="index"
                    >
                      <p>#{{ cupon.code }}</p>
                      <img
                        src="../../assets/eliminar_cupon.svg"
                        alt="eliminar cupon"
                        @click="deleteCupon(cupon.code)"
                      />
                    </div>
                  </div>
                </div>
                <div class="total-mp-c">
                  <p class="totale">TOTAL</p>
                  <p class="total precio">${{ carrito.total }}</p>
                </div>
                <div class="btn-return" @click="toCheckout()">
                  <!--<img
                    src="../../assets/carrito-i-w.svg"
                    alt="cart"
                    class="icon"
                  />-->
                  <p class="t">Continuar</p>
                </div>

              </div>
            </div>
          </div>

          <div v-if="status != ''" class="status_messages">
            <div v-if="status == 'success'" class="msg msg_success">
              <p>{{ message }}</p>
            </div>
            <div v-if="status == 'error'" class="msg msg_error">
              <p>{{ message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigator from "../../components/Navigator.vue";
import Footer from "../../components/Footer.vue"; 
let { url, endpointCodes } = require("../../global/index");
import { mapActions } from "vuex";

export default {
  components: {
    Navigator,
    Footer,
    //RouteDir,
  },
  data() {
    return {
      numPro: 1,
      url: url,
      endpointCodes: endpointCodes,
      status: "",
      message: "",
      cupon: "",
      cart: 
      localStorage.getItem("cart"),
      upd: false,
    };
  },
  async created() {
    await this.obtenerCarritos();
    await this.getIdentity();
  },
  computed: {
    carrito() {
      return this.$store.getters["carrito/getcar"];
    },
    update() {
      let data  = this.$store.getters["carrito/getupd"]; 
     
     
       if(Array.isArray(data.items)){
          for (var i=0; i<data.items.length; i++) {
           
           if(data.items[i].cantidad != this.carrito.items[i].cantidad){
            
            this.upd = true
            break
          }else{
            this.upd = false
          }
        }

      }
      return data
    },
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },
  methods: {
    ...mapActions("carrito", ["getCart"]),
    ...mapActions("carrito", ["getCartCopy"]),
    calcTotal(precio, cantidad) {
      let total = precio * cantidad;

      return total.toFixed(2);
    },
    async obtenerCarritos() {
      await this.getCart();
      await this.getCartCopy();
    },
    toHome() {
      return this.$router.push("/").catch((err) => {});
    },
    actualizarCarrito: async function (carrito) {
      let payload = {
        carrito,
      };
      let result = await this.$store.dispatch("carrito/editItemCrt", {
        option: "upt_item",
        item: payload,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message =
          "Ha ocurrido un error al intentar actualizar el carrito."; // result.message;
        this.delStatus();
      } else {
        // success

        this.status = "success";
        this.message = "Carrito actualizado";
        this.delStatus();
        await this.obtenerCarritos();
      }
    },

    deleteItem: async function (index) {
      let payload = {
        index,
        _ctk: localStorage.getItem("_ctk"),
      };
      console.log(payload)
      let result = await this.$store.dispatch("carrito/deleteItemCrt", {
        option: "del_item",
        item: payload,
      });
      console.log(result)
      if (result.status == "error") {
        this.status = "error";
        this.message = "Ha ocurrido un error al intentar eliminar el producto."; // result.message;
        this.delStatus();
      } else {
        // success

        this.status = "success";
        this.message = "Producto eliminado.";
        this.delStatus();
        this.wait()
        //await this.obtenerCarritos();
      }
    },

    aplicarCupon: async function (cupon) {
      //VDNQYUBWD6VNCM5OJ96X
      if (cupon != "") {
        let cliente = {
          sub: null,
          email: "",
        };
        if (this.identity?.sub) {
          cliente = this.identity;
        }

        let payload = {
          cupon,
          cliente,
          _ctk: localStorage.getItem("_ctk"),
        };
        let result = await this.$store.dispatch("carrito/editItemCrt", {
          option: "add_cupon",
          item: payload,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message; // result.message;
          this.delStatus();
        } else {
          // success

          this.status = "success";
          this.message = "Cupón agregado con éxito.";
          this.delStatus();
          await this.obtenerCarritos();
        }
      }
    },
    deleteCupon: async function (cupon) {
      if (cupon != "") {
        let payload = {
          cupon,
          _ctk: localStorage.getItem("_ctk"),
        };
        let result = await this.$store.dispatch("carrito/deleteItemCrt", {
          option: "del_cupon",
          item: payload,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message; // result.message;
          this.delStatus();
        } else {
          // success

          this.status = "success";
          this.message = "Cupón eliminado con éxito.";
          this.delStatus();
          await this.obtenerCarritos();
        }
      }
    },
    toShop(){
      return this.$router.push("/").catch((err) => {});
    },

    toCheckout: async function () {
      await this.obtenerCarritos();
      let payload = {
        carrito: this.carrito,
      };
      let result = await this.$store.dispatch("carrito/validateCrt", {
        option: "valid_cart",
        item: payload,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message; // result.message;
        this.delStatus();
      } else {
        // success
        //si todo esta correcto redireccionar.
        localStorage.getItem('lastv')
        localStorage.setItem('lastv', 'car')
        return this.$router.push("/check-out").catch((err) => {});
      }
    },
       wait: function(){
            setTimeout(() => this.$router.go(), 200);
        },

    getIdentity: async function () {
      let response = await this.$store.dispatch("admin/getData");
      return response;
    },

    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },
    carItems(){
      localStorage.setItem("cart", this.update.items.length);
    },
    regexImg(txt) {
      let s = txt.split(".");
      return s[0] + ".webp";
    },
    isWebp(webpImg, pngImg) {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("chrome") > -1) {
        return webpImg; // Chrome
      } else if (ua.indexOf("firefox") > -1) {
        return webpImg; // Firefox
      } else if (ua.indexOf("opera") > -1) {
        return webpImg; // Opera
      } else if (ua.indexOf("safari") > -1) {
        return pngImg; // Safari
      }
    },
  },
  mounted() {
    this.carItems
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        let name = this.titulo;
        document.title = to.meta.title || `Mi Carrito - Coyotas Lourdes`;
      },
    },
  },
};
</script>
<style scoped>
.btn-return .icon {
  width: 1.094vw;
  height: 1.094vw;
}
.miCarrito {
  overflow: hidden;
}
.eventBlock {
  pointer-events: none;
  opacity: 0.5;
}
.mycart-cont {
  width: 76.875vw;
  margin: 17.760vw auto 8.125vw;
}
p.dir,
p.dir a {
  font-style: normal;
  font-weight: 400;
  font-size: 0.938vw;
  line-height: 194.5%;
  color: #bebebe;
  text-decoration-color: transparent;
}
span.blue a {
  color: #3ebdb1;
  text-decoration-color: #3ebdb1;
}
p.dir {
  margin: 0 0 4.635vw;
}
p.titulo-p {
  font-family: var(--font-MyCar);
  font-style: normal;
font-weight: 700;
  font-size: 2.083vw;
  line-height: 2.5vw;
  color: var(--co-htlMyCar);
  margin: 0;
}
.empty-car-cont {
  margin-top: 1.719vw;
  padding-top: 3.177vw;
  border-top: 1px solid gainsboro;
}
p.adv-empty {
  margin: 0 0 3.177vw;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25vw;
  line-height: 1.771vw;
  color: #909090;
}
.btn-return {
    width: 12.188vw;
    height: 2.656vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--co-btnMyCar);
  cursor: pointer;
  margin-right: 1vw;
    border-radius: 3vw;
}

.inac {
 
  background-color: #909090;

}
.btn-return .t {
  font-family: var(--font-MyCar);
  font-style: normal;
  padding-left: 0.521vw;
  font-weight: 700;
  font-size: 0.833vw;
  line-height: 2.031vw;
  color: #ffffff;
}
.btn-return .t span {
  font-family: var(--font-MyCar);
  font-style: normal;
  padding-right: 1vw;
  font-weight: 800;
  font-size: 0.833vw;
  line-height: 2.031vw;
  color: #ffffff;
}

.products-mp-c {
  border-bottom: 1px solid gainsboro;
  margin-bottom: 1.094vw;
}
/*****/
.table-cart-cont {
  display: flex;
  justify-content: space-between;
  margin-top: 1.719vw;
  padding-top: 3.177vw;
  border-top: 1px solid gainsboro;
}
.head-lc {
  display: flex;
}
.list-cart-cont {
  width: 47.24vw;
}
.head-lc p {
  font-style: normal;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 1.198vw;
  color: #909090;
  margin: 0;
}
.head-lc p.l1 {
  margin-left: 2.344vw;
}
.head-lc p.l2 {
  margin-left: 20.298vw;
}
p.l3 {
  margin-left: 6.865vw;
}
.list-cart {
  margin-bottom: 2vw;
  position: relative;
  left: -0.7vw;
}
.pro-c-cont {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 41.302vw;
  border: 0.5px solid #c4c4c4;
  padding: 2.292vw 1.51vw;
  position: relative;
  top: 0.833vw;
  left: 0.833vw;
  margin-bottom: 1.4583333333333333vw;
}
.img-pro-cont {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
}
.c-pr-cont {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.pro-info {
  width: 16.25vw;
}
.img-c {
  width: 8.594vw;
}
.pro-img {
    width: 5.885vw;
  height: fit-content;
}
p.name-pro,
p.cant-pro {
  font-size: 0.781vw;
  line-height: 129.5%;
    color: #8E8E8E;
  margin: 0;
}
.change-cant-cont {
  display: flex;
  align-items: center;
}
.sign-c {
    font-size: 0.667vw;
    line-height: 0.667vw;
    font-weight: 600;
    border-radius: 12vw;
    border: 0.052vw solid grey;
    height: 0.667vw;
    width: 0.667vw;
  margin: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: grey;
}
.num-pro {
  margin: 0;
  font-weight: 700;
  font-size: 1.042vw;
  line-height: 146%;
  text-align: center;
  color: #25252d;
  width: 2.771vw;
  padding: 0;
  border: none;
}
p.price-pro {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 1.042vw;
  line-height: 129.5%;
  text-align: right;
  color: gray; 
    width: 8vw;
    text-align: center;
}
.close-btn {
  height: 1.667vw;
  width: 1.667vw;
  font-size: 0.677vw;
  line-height: 0.833vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--co-btnMyCar);
  border-radius: 2.604vw;
  color: white;
  position: absolute;
  z-index: 19;
  cursor: pointer;
}
.header-mp {
  width: 25.885vw;
  height: 4.219vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--co-htlMyCar);
  border-radius: 1.4vw 1.4vw 0 0;
}
.header-mp p {
 font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.51vw;
  text-align: center;
  color: #ffffff;
  margin: 0;
}
.miPedido-body {
  padding: 2.5vw 2.74vw;
  width: 20.208vw;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
}
.header-mp-c {
  display: flex;
  justify-content: space-between;
}
.header-mp-c p {
 font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 0.938vw;
  line-height: 1.146vw;
  color: #25252d;
}
.product-mp {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.833vw;
}
.product-mp .titulo {
  margin: 0;
 font-family: var(--font-MyCar);
  font-style: normal;
  font-size: 0.729vw;
  line-height: 0.885vw;
  color: #25252d;
}
.azul-span {
  color: gray !important;
}
.miPedido-body p.precio {
  margin: 0;
 font-family: var(--font-MyCar);
  font-style: normal;
  font-size: 1.042vw;
  line-height: 1.25vw;
  text-align: right;
  color: gray;
}
p.total.precio {
  font-weight: 700;
}
.sb-mp {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.417vw;
}
.sb-mp p.gray {
  margin: 0;
 font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 0.99vw;
  color: #828282;
}
.cupon-cont {
  display: flex;
  margin-top: 1.146vw;
}
p.totale {
 font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.51vw;
  color: #25252d;
  margin: 0;
}
.cupon-txt {
  width: 13.177vw;
  height: 1.719vw;
  padding: 0 0vw 0 0.833vw;
  border: 1px solid #d3d3d3;
 font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 0.781vw;
  color: #d3d3d3;
  border-radius: 0.25vw 0 0 0.25vw;
}
.cupon-btn {
  width: 7.188vw;
  height: auto;
  background: var(--co-btnMyCar);
  border: none;
 font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 0.625vw;
  line-height: 0.781vw;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  border-radius: 0 2vw 2vw 0;
}
.total-mp-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.302vw;
  padding-top: 1.302vw;
  border-top: 1px solid gainsboro;
}
.miPedido-body .btn-return {
  width: 12.188vw;
  margin-top: 1.563vw;
  margin-left: auto;
  margin-right: auto;
}

.cupon-item {
  background: #d9d9d9;
  width: 100%;
  border-radius: 0.25vw 0.25vw 0.25vw 0.25vw;
  margin-bottom: 0.78125vw;
}
.cupon-item:first-child {
  margin-top: 1.1979166666666667vw;
}
.cupon-item p {
  padding-top: 0.3645833333333333vw;
  padding-bottom: 0.3125vw;
  padding-left: 0.6770833333333334vw;
  padding-right: 0.6322916666666667vw;
  color: #929292;
  font-size: 0.84vw;
  margin: 0vw;
  width: 70%;
  overflow: auto;
}
.cupon-item img {
  margin-left: 3.354167vw;
  cursor: pointer;
}

@media (max-width: 768px) {
  .cupon-item {
    background: #d9d9d9;
    width: 100%;
    border-radius: 1vw 1vw 1vw 1vw;
    margin-bottom: 3.78125vw;
  }
  .cupon-item:first-child {
    margin-top: 4.197917vw;
  }
  .cupon-item p {
    padding-top: 2.364583vw;
    padding-bottom: 2.3125vw;
    padding-left: 2.677083vw;
    padding-right: 2.632292vw;
    font-size: 2.84vw;
    width: 76%;
  }
  .cupon-item img {
    margin-left: 3.354167vw;
    cursor: pointer;
  }

  p.dir,
  p.dir a {
    font-size: 4.348vw;
  }
  p.dir {
    margin: 0 0 25.845vw;
  }
  p.titulo-p {
    font-size: 9.662vw;
    line-height: 11.594vw;
    padding-bottom: 7.971vw;
    border-bottom: 1px solid #c4c4c4;
    width: 74vw;
    margin: auto;
  }
  .empty-car-cont {
    margin-top: 7.971vw;
    padding-top: 11.353vw;
  }
  p.adv-empty {
    font-size: 5.607vw;
    line-height: 8.213vw;
    margin: 0 0 11.353vw;
  }
  .btn-return {
    /*width: 69.860vw;*/
    
    width: 63.285vw;
    height: 16.184vw; 
    justify-content: center;
    border-radius: 15vw; 
    margin-left: auto;
    margin-right: auto;
  }
  .btn-return .t {
    font-size: 4.348vw;
    line-height: 4.348vw;
    margin: 0;
    padding-left: 2.804vw;
  }
  .btn-return .icon {
    width: 3.623vw;
    height: auto;
  }
  .mycart-cont {
    width: 87.383vw;
    margin: 38.164vw auto 32.85vw;
  }
  /****/
  .pro-c-cont {
    height: fit-content; 
    width: 75.604vw;
    padding: 6.28vw 3.971vw 6.28vw 7.971vw;
    top: 3.865vw;
    left: 3.865vw;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .table-cart-cont {
    margin-top: 7.971vw;
    padding-top: 0;
    flex-direction: column;
    border: none;
  }
  .list-cart-cont {
    width: 100%;
  }
  .close-btn {
    height: 7.729vw;
    width: 7.729vw;
    border-radius: 20vw;
    font-size: 4.677vw;
    line-height: 6.833vw;
  }
  .pro-img {
    padding-right: 6.763vw;
    width: 23.430vw;
  }
  p.name-pro  {
    font-size: 5.607vw;
  }
  p.cant-pro {
    font-size: 4.348vw;
  }
  .img-pro-cont {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  .c-pr-cont {
    display: flex;
    justify-content: space-between;
    width: auto; 
  }
  .img-c {
    width: auto;
  }
  .pro-info {
    width: auto;
  }
  .num-pro {
    font-size: 5.607vw;
    width: 13.575vw;
  }
  .sign-c {
    font-size: 4.831vw;
    line-height: 5vw;
    height: 4.831vw;
    width: 4.831vw;
    border-radius: 24vw;
  }
  p.price-pro {
    font-size: 5.797vw;
    margin-left: 25.411vw;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    width: auto;
    /*margin-right: 2vw;*/
  }
  /*.change-cant-cont {
    margin-left: 22.464vw;
  }*/
  .list-cart {
    margin-bottom: 12vw;
    left: 0vw;
    width: fit-content;
    height: auto;
    margin: 0 auto;
    position: relative;
    left: -4vw;
  }
  .list-cart-cont .btn-return {
    margin: 8.645vw auto 0;
  }
  .header-mp {
    width: 100%;
    height: 19.565vw;
  border-radius: 5.4vw 5.4vw 0 0;
  }
  .header-mp p {
    font-size: 4.206vw;
    line-height: 5.314vw;
  }
  .miPedido-cont {
    margin-top: 11.594vw;
  }
  .miPedido-body {
    padding: 9.662vw 9.112vw;
    width: 68.7vw;
  }
  .header-mp-c p {
    font-size: 4.206vw;
    line-height: 5.314vw;
  }
  .product-mp .titulo {
    font-size: 4.206vw;
    line-height: 5.314vw;
    margin-bottom: 1vw;
  }
  .miPedido-body p.precio {
    font-size: 4.206vw;
    line-height: 5.14vw;
  }
  .head-lc {
    display: none;
  }
  .sb-mp p.gray {
    font-size: 4.206vw;
    line-height: 5.14vw;
  }
  .totals-mp-c {
    border-top: 1px solid gainsboro;
    padding-top: 4.907vw;
  }
  p.totale {
    font-size: 5.607vw;
    line-height: 6.776vw;
  }
  .total-mp-c {
    margin-top: 4.206vw;
    padding-top: 4.206vw;
    border-top: 1px solid gainsboro;
  }
  .cupon-txt {
    width: 36.682vw;
    height: 12.077vw;
    font-size: 2.625vw;
    line-height: 3.781vw;
    color: #d3d3d3;
    border-radius: 1vw 0 0 1vw;
  }

  .cupon-btn {
    width: 32.243vw;
    font-size:3.382vw;
    line-height: 3.382vw;
    border-radius: 0 9vw 10vw 0;
  }
  .cupon-cont {
    margin-top: 4.439vw;
  }
  .miPedido-body .btn-return {
  width: 63.285vw;
    margin-top: 9.346vw;
   
  }
  .sb-mp {
    margin-bottom: 1.168vw;
  }
  .products-mp-c {
    border: none;
  }
}
</style>