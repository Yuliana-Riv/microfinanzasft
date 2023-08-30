<template >
  <!--MODAL BODY-->
  <div class="modalCar" @click="close" v-if="carrito.items">
    <!--MODAL CONTAINER-->
    <div class="modalc" @click.stop>
      <div class="carr-b"
         >
        <!--TITLE-->
        <div class="tlc">
          <p class="title">
            Carrito de la compra
            <span v-if="carrito">{{ carrito.items.length }}</span>
          </p>
          <img
            src="../../assets/cross.svg"
            alt="cross"
            class="cross"
            @click="close"
          />
        </div>
        <!--PRODUCT LIST-->
        <div
          class="prod-list"
          :class="{ scroll: carrito.items.length > 2 }"
        >
          <div class="product-c" v-for="(c, i) in carrito.items" :key="i">
            <!--PRODUCT INFO-->
            <div class="dflx proinfo">
              <img
                :src="
                  url + '/' + endpointCodes.get + '/product-img/' + c.item.image
                "
                alt="product"
                class="prod"
                v-if="c.item.image !== ''"
              />
              <img
                src="../../assets/noimg.png"
                alt="product"
                class="prod"
                v-else
              />
              <section>
                <p class="tl">{{ c.item.name+(c.item.product_atributo_valores !== null ? " ("+c.item.product_atributo_valores[0].valor+" "+c.item.product_atributo_valores[0].atributo+")"
                :'') }}</p>
                <p class="sbtl">
                  {{ c.item.descr }}
                </p>
              </section>
            </div>
            <!--COUNTER AND PRICE CONTAINER-->
            <div class="c-p-cont">
              <div class="counter" v-if="carrito.items">
                <p
                  class="btn"
                  @click="(c.cantidad -= 1) && (acta = true)"
                  :class="{ eventBlock: c.cantidad == 0 }"
                >
                  -
                </p>
                <input
                  type="text"
                  name="number"
                  id="text"
                  class="text"
                  v-model="c.cantidad"
                />
                <p class="btn" @click="(c.cantidad += 1) && (acta = true)">+</p>
              </div>
              <hr />
              <div class="price">${{ c.item.price * c.cantidad }}</div>
            </div>
          </div>
        </div>
        <!--SUBTOTAL-->
        <div class="subt-c">
          <p>
            Subtotal: <span>${{ carrito.subtotal }}</span>
          </p>
        </div>
        <!--FINALIZAR COMPRA-->
        <div class="dflx">
          <div
            class="btn-fc yll"
            @click="actualizarCarrito(carrito)"
            :class="{ eventBlock: acta == false }"
          >
            Actualizar carrito
          </div>
          <div class="btn-fc" @click="toCheckout()">Finalizar compra</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { url, endpointCodes } from "../../global/index";
export default {
  data() {
    return {
      url: url,
      endpointCodes,
      acta: false,
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
      let data = this.$store.getters["carrito/getupd"];

      if (Array.isArray(data.items)) {
        for (var i = 0; i < data.items.length; i++) {
          if (data.items[i].cantidad != this.carrito.items[i].cantidad) {
            this.upd = true;
            break;
          } else {
            this.upd = false;
          }
        }
      }
      return data;
    },
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },
  methods: {
    ...mapActions("carrito", ["getCart"]),
    ...mapActions("carrito", ["getCartCopy"]),
    close() {
      this.$router.push("/").catch((err) => {});
      this.$emit("close");
    },
    async obtenerCarritos() {
      await this.getCart();
      await this.getCartCopy();
    },
    getIdentity: async function () {
      let response = await this.$store.dispatch("admin/getData");
      return response;
    },

    toCheckout: async function () {
      //await this.obtenerCarritos();
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
        //this.delStatus();
      } else {
        // success
        //si todo esta correcto redireccionar.
        localStorage.getItem("lastv");
        localStorage.setItem("lastv", "car");
        return this.$router.push("/check-out").catch((err) => {});
      }
    },

    actualizarCarrito: async function (carrito, key) {
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
      } else {
        // success

        await this.obtenerCarritos();
        this.status = "success";
        this.message = "Carrito actualizado";
        this.acta = false;
        if (this.update.items.length == 0) { 
          this.close();
        }
      }
    },
  },
};
</script>
<style>
.eventBlock {
  pointer-events: none;
  opacity: 0.5;
}
.modalCar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
}
.modalCar .modalc {
  background: #ffffff;
  height: 100vh;
  width: 100%;
}
.modalCar .carr-b {
  padding: 9.662vw 5.556vw 5.556vw;
}
.modalCar .tlc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 6.039vw;
  margin-bottom: 13.043vw;
}
.modalCar .tlc .title {
  margin: 0;
  font-weight: 700;
  font-size: 4.831vw;
  line-height: 111%;
  color: var(--co-tlMCar);
  font-family: var(--font-tlMCar);
}
.modalCar .tlc .cross {
  width: 8.696vw;
  height: 8.696vw;
}
.modalCar .tlc .title span {
  margin-left: 5.072vw;
  padding: 2.415vw 4.348vw;
  background-color: var(--bk-cantMCar);
  color: var(--co-cantMCar);
  border-radius: 10vw;
}
.modalCar .prod-list.scroll {
  overflow-y: scroll;
}
.modalCar .prod-list {
  height: 89.13vw;
  padding-bottom: 15.942vw;
  border-bottom: 0.1vw solid gainsboro;
  overflow-y: scroll;
}
.modalCar .proinfo .prod {
  width: 20.773vw;
  height: 20.773vw;
}
.modalCar .proinfo section {
  width: 60.386vw;
  padding-left: 4.106vw;
}
.modalCar .proinfo .tl {
  font-weight: 700;
  font-size: 5.556vw;
  line-height: 111%;
  color: var(--co-ptlMCar);
  font-family: var(--font-ptlMCar);
  margin: 0;
}
.modalCar .proinfo .sbtl {
  margin: 0;
  font-weight: 400;
  font-size: 4.348vw;
  line-height: 111%;
  color: var(--co-stlMCar);
}
.modalCar .c-p-cont {
  display: flex;
  align-items: center;
}
.modalCar .c-p-cont .counter {
  display: flex;
  align-items: center;
}
.modalCar .c-p-cont .counter .btn {
  font-size: 6.237vw;
  line-height: 2.237vw;
  font-weight: 700;
  color: var(--co-btncMCar);
  border: 0.242vw solid var(--co-btncMCar);
  width: 6.237vw;
  height: 6.237vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8vw;
  cursor: pointer;
}
.modalCar .c-p-cont .counter #text {
  font-weight: 700;
  font-size: 7.246vw;
  width: 13.575vw;
  height: 7.246vw;
  border: 0;
  text-align: center;
  font-family: var(--font-ptlMCar);
  color: var(--co-txtcMCar);
  padding-left: 0;
}
.modalCar .c-p-cont hr {
  border-width: 1vw;
  width: 34.058vw;
  border-color: gainsboro;
  border-style: dotted;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  margin: 0 3vw;
}
.modalCar .c-p-cont .price {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.053vw;
  height: 9.565vw;
  color: var(--co-priceMCar);
  background-color: var(--bk-priceMCar);
  font-weight: 700;
  font-size: 4.348vw;
  line-height: 111%;
  border-radius: 20vw;
}
.modalCar .subt-c p {
  padding: 3.14vw 0 5.314vw;
  margin: 0;
  font-weight: 700;
  font-size: 4.831vw;
  line-height: 111%;
  display: flex;
  justify-content: space-between;
  color: var(--co-sbtMCar);
}
.modalCar .subt-c span {
  font-size: 7.246vw;
  color: var(--co-sbtpMCar);
}
.modalCar .btn-fc {
  width: 49.517vw;
  height: 12.319vw;
  background: var(--bk-fcMCar);
  color: var(--co-fcMCar);
  border-radius: 9.662vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 3.382vw;
  line-height: 111%;
  margin-left: auto;
  cursor: pointer;
}
.modalCar .btn-fc.yll {
  background: var(--bk-fcMCarYll);
}
.modalCar .product-c {
  padding-bottom: 10.87vw;
}
@media (max-width: 769px) {
  .modalCar .btn-fc.yll {
    width: 35.024vw;
  }
}
@media (min-width: 768px) {
  .modalCar {
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(150, 150, 150, 0.8);
  }
  .modalCar .modalc {
    width: 28.646vw;
    margin-left: auto;
    position: relative;
    right: -40vw;
    transition: 0.75s;
  }
  .modalCar.transitionL .modalc {
    right: 0;
  }
  .modalCar .carr-b {
    padding: 3.125vw 1.563vw 1.927vw;
  }
  .modalCar .tlc {
    padding-bottom: 1.25vw;
    margin-bottom: 2.552vw;
  }
  .modalCar .tlc .title,
  .modalCar .proinfo .tl,
  .modalCar .subt-c p {
    font-size: 1.042vw;
  }
  .modalCar .tlc .title span {
    padding: 0.521vw 0.938vw;
    margin-left: 1.094vw;
  }
  .modalCar .tlc .cross {
    display: none;
  }
  .modalCar .proinfo .prod {
    width: 4.479vw;
    height: 4.479vw;
  }
  .modalCar .proinfo .sbtl {
    font-size: 0.729vw;
  }
  .modalCar .proinfo section {
    width: 15.521vw;
    padding-left: 0.885vw;
  }
  .modalCar .c-p-cont .counter .btn {
    width: 0.667vw;
    height: 0.667vw;
    font-size: 0.667vw;
    line-height: 0.354vw;
    border: 0.0242vw solid var(--co-btncMCar);
  }
  .modalCar .c-p-cont .counter #text {
    font-size: 1.042vw;
    height: 1.242vw;
    width: 2.771vw;
  }
  .modalCar .c-p-cont hr {
    border-width: 0.2vw;
    width: 13.281vw;
    margin: 0 1vw;
  }
  .modalCar .c-p-cont .price {
    font-size: 0.938vw;
    width: 4.324vw;
    height: 2.061vw;
  }
  .modalCar .prod-list.scroll {
    overflow-y: scroll;
  }
  .modalCar .prod-list {
    height: 61.11111111111111vh;
    padding-bottom: 0;
    border-bottom: 0.1vw solid gainsboro;
    /*overflow-y: scroll;*/
  }
  .modalCar .product-c {
    padding-bottom: 3.021vw;
    padding-left: 1vw;
    padding-right: 1vw;
    border-bottom: 0.1vw solid gainsboro;
    margin-bottom: 3.021vw;
  }
  .modalCar .product-c:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
  .modalCar .subt-c span {
    font-size: 1.563vw;
  }
  .modalCar .subt-c p {
    padding: 1.302vw 0 1.667vw;
  }
  .modalCar .btn-fc {
    width: 12.188vw;
    height: 2.656vw;
    font-size: 0.729vw;
  }
}
</style>