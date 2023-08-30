<template >
  <div class="checkOut">
    <HeaderMenu />
    <!---<RouteDir />-->

    <form
      @submit.prevent="
        createCharge(
          checkOp,
          shipping_option,

          name,
          lastname,
          email,
          phone,
          address,
          country,
          state,
          city,
          postal_code,
          notes,
          facturar,
          f_postal_code,
          f_country,
          f_state,
          f_city,
          f_email,
          f_phone,
          reason_social,
          fiscal_address,
          rfc,
          terminos,
          email_list,
          carrier
        )
      "
    >
      <div class="checkout-cont">
        <div class="row-chOut">
          <div class="head-titulo">
            <p class="header">Detalles de envío</p>
          </div>
        </div>
        <div class="row-chOut dflex-it">
          <div class="col-chOut">
            <!--<p class="ytuc">¿Ya tienes cuenta? <a href="/login">Inicia Sesión</a></p>-->

            <p class="titulo-detail">Información personal</p>
            <div class="sec-details mbottom">
              <label for=""></label>
              <input
                type="text"
                name="email"
                id="email"
                class="input-1"
                placeholder="email para confirmación"
                v-model="email"
              />
            </div>

            <p class="titulo-detail">Opciones de Envío</p>
            <div class="grid-d-cont mbottom send-ops">
              <div
                class="send-option"
                :class="{ checked: shipping_option == 'Ordena y Recoge' }"
                @click="shipping_option = 'Ordena y Recoge'"
              >
                <div class="sop-cont">
                  <p class="titulo">Ordena y Recoge</p>
                  <p>Recoger en <b>Coyotas Lourdes</b></p>
                  <p></p>
                </div>
              </div>

              <div
                v-if="pesoTotal <= 5"
                class="send-option"
                :class="{ checked: shipping_option == 'Envío a domicilio' }"
                @click="shipping_option = 'Envío a domicilio'"
              >
                <div class="sop-cont">
                  <p class="titulo">Envío a domicilio</p>
                  <p>de 3 a 5 días hábiles.</p>
                </div>
              </div>
            </div>

            <div
              v-if="
                shipping_option == 'Envío a domicilio' 
                
              "
            >
            <!--
                &&
                citySelect != 'hermosillo'-->
              <p class="titulo-detail">Selecciona tipo de envío</p>

              <div class="sec-details">
                <label for="stateE"></label>
                <select
                  :disabled="loaded"
                  class="input-2"
                  id="stateE"
                  name="stateE"
                  v-model="send_arr"
                  required
                >
                  <option
                    v-for="(st, key) in precio_envio"
                    v-bind:key="key"
                    v-bind:value="st"
                  >
                    {{ st.send_type }}
                  </option>
                </select>
              </div>


              <!--  <div class="paqueterias">
                <div  @click="carrier == item.attributes.name ? carrier ='': carrier =  item.attributes.name" v-for="(item, index) in carriers" :key="index" >
               <div class="paq-box" v-if="validCarrier(item.attributes.name)"  :class="{'act-box' : carrier == item.attributes.name}">
                  <img class="paqlogo" src="../../assets/skydropx/Estafeta.png" alt="Logo Estafeta" v-if="item.attributes.name == 'Estafeta'">
                <img class="paqlogo" src="../../assets/skydropx/Paquetexpress.png" alt="Logo paquete express" v-if="item.attributes.name == 'Paquetexpress'">
                <img class="paqlogo" src="../../assets/skydropx/Fedex.png" alt="Logo Fedex" v-if="item.attributes.name == 'Fedex'">
                <img class="paqlogo" src="../../assets/skydropx/UPS.png" alt="Logo UPS" v-if="item.attributes.name == 'UPS'">
                <img class="paqlogo" src="../../assets/skydropx/Redpack.png" alt="Logo UPS" v-if="item.attributes.name == 'Redpack'">
                
                
                
                <img class="paqsel" src="../../assets/skydropx/radio_act.png" alt="" v-if="carrier == item.attributes.name">
                <img class="paqsel" src="../../assets/skydropx/radio.png" alt="" v-else>
               </div>
              </div>
            </div> -->





              <!---<div class="hdrpaq">
                <p class="hdr_prov">proveedor</p>
                <p class="hdr_dias">días aprox.</p>
                <p class="hdr_total">total</p>
              </div>
              <div class="paqueterias">
                <div
                  @click="carrier == item ? (carrier = '') : (carrier = item)"
                  v-for="(item, index) in quotations"
                  :key="index"
                >
                  <div class="paq-box" :class="{ 'act-box': carrier == item }">
                    <div class="cnt_paqlogo">
                      <img
                        class="paqlogo"
                        src="../../assets/skydropx/Estafeta.png"
                        alt="Logo Estafeta"
                        v-if="item.provider == 'ESTAFETA'"
                      />
                      <img
                        class="paqlogo"
                        src="../../assets/skydropx/Paquetexpress.png"
                        alt="Logo paquete express"
                        v-if="item.provider == 'PAQUETEXPRESS'"
                      />
                      <img
                        class="paqlogo"
                        src="../../assets/skydropx/Fedex.png"
                        alt="Logo Fedex"
                        v-if="item.provider == 'FEDEX'"
                      />
                      <img
                        class="paqlogo"
                        src="../../assets/skydropx/UPS.png"
                        alt="Logo UPS"
                        v-if="item.provider == 'UPS'"
                      />
                      <img
                        class="paqlogo"
                        src="../../assets/skydropx/Redpack.png"
                        alt="Logo UPS"
                        v-if="item.provider == 'REDPACK'"
                      />
                    </div>

                    <p class="prov_name">{{ item.provider }}</p>
                    <p class="prov_dias">{{ item.days }}</p>
                    <p class="prov_total">${{ item.total_pricing }}</p>
                    <img
                      class="paqsel"
                      src="../../assets/skydropx/radio_act.png"
                      alt=""
                      v-if="carrier == item"
                    />
                    <img
                      class="paqsel"
                      src="../../assets/skydropx/radio.png"
                      alt=""
                      v-else
                    />
                  </div>
                </div>
              </div>--->
            </div>

            <p class="titulo-detail">Dirección de envío</p>
            <div class="grid-d-cont mbottom">
              <div class="sec-details">
                <label for="nameE"></label>
                <input
                  type="text"
                  name="nameE"
                  id="nameE"
                  class="input-2"
                  placeholder="Nombre"
                  v-model="name"
                  :disabled="loaded"
                  required
                />
              </div>
              <div class="sec-details">
                <label for="lastnameE"></label>
                <input
                  type="text"
                  name="lastnameE"
                  id="lastnameE"
                  class="input-2"
                  placeholder="Apellidos"
                  v-model="lastname"
                  :disabled="loaded"
                  required
                />
              </div>
              <div class="sec-details">
                <label for="addressE"></label>
                <input
                  type="text"
                  name="addressE"
                  id="addressE"
                  class="input-1"
                  placeholder="Dirección"
                  v-model="address"
                  :disabled="loaded"
                  required
                />
              </div>
              <div class="sec-details">
                <label for="cityE"></label>
                <input
                  type="text"
                  name="cityE"
                  id="cityE"
                  class="input-1"
                  placeholder="Ciudad"
                  v-model="city"
                  :disabled="loaded"
                  required
                />
              </div>
              <div class="sec-details">
                <label for="countryE"></label>
                <input
                  type="text"
                  name="countryE"
                  id="countryE"
                  class="input-2"
                  placeholder="País"
                  v-model="country"
                  disabled
                  required
                />
              </div>
              <div class="sec-details">
                <label for="stateE"></label>
                <select
                  :disabled="loaded"
                  class="input-2"
                  id="stateE"
                  name="stateE"
                  v-model="state"
                  required
                >
                  <option
                    v-for="(region, key) in regiones"
                    v-bind:key="key"
                    v-bind:value="region"
                  >
                    {{ region }}
                  </option>
                </select>
              </div>

              <div class="sec-details">
                <label for="codeE"></label>
                <input
                  type="text"
                  name="codeE"
                  id="codeE"
                  class="input-1"
                  placeholder="Código Postal"
                  v-model="postal_code"
                  :disabled="loaded"
                  required
                />
              </div>
              <div class="sec-details">
                <label for="phoneE"></label>
                <input
                  type="text"
                  name="phoneE"
                  id="phoneE"
                  class="input-1"
                  placeholder="Teléfono"
                  minlength="10"
                  maxlength="10"
                  size="10"
                  pattern="\d*"
                  v-model="phone"
                  :disabled="loaded"
                  required
                />
              </div>
            </div>

            <!-- {{carriers}} -->

            <div class="opt-cont">
              <input
                class="check-ip"
                type="checkbox"
                id="facturar"
                name="facturar"
                v-model="facturar"
              />
              <label for="facturar">
                <p>¿NECESITA FACTURAR?</p>
              </label>
            </div>

            <p v-if="facturar" class="titulo-detail">
              Dirección de facturación
            </p>
            <div v-if="facturar" class="grid-d-cont mbottom">
              <div class="sec-details">
                <label for="RFC"></label>
                <input
                  type="text"
                  name="RFC"
                  id="RFC"
                  class="input-2"
                  placeholder="RFC"
                  v-model="rfc"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="RazónSocial"></label>
                <input
                  type="text"
                  name="RazónSocial"
                  id="RazónSocial"
                  class="input-2"
                  placeholder="Razón Social"
                  v-model="reason_social"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="address"></label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="input-1"
                  placeholder="Dirección Fiscal"
                  v-model="fiscal_address"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="f_email"></label>
                <input
                  type="text"
                  name="f_email"
                  id="f_email"
                  class="input-1"
                  placeholder="Email"
                  v-model="f_email"
                />
              </div>
              <div class="sec-details">
                <label for="f_city"></label>
                <input
                  type="text"
                  name="f_city"
                  id="f_city"
                  class="input-1"
                  placeholder="Ciudad"
                  v-model="f_city"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="f_country"></label>
                <input
                  type="text"
                  name="f_country"
                  id="f_country"
                  class="input-2"
                  placeholder="País"
                  v-model="f_country"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="f_state"></label>
                <input
                  type="text"
                  name="f_state"
                  id="f_state"
                  class="input-2"
                  placeholder="Estado"
                  v-model="f_state"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="f_postal_code"></label>
                <input
                  type="text"
                  name="f_postal_code"
                  id="f_postal_code"
                  class="input-1"
                  placeholder="Código Postal"
                  v-model="f_postal_code"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
              <div class="sec-details">
                <label for="f_phone"></label>
                <input
                  type="text"
                  name="f_phone"
                  id="f_phone"
                  class="input-1"
                  placeholder="Teléfono"
                  v-model="f_phone"
                  :disabled="loaded"
                  :required="facturar"
                />
              </div>
            </div>

            <p class="titulo-detail notas-pedido">Notas</p>
            <div class="grid-d-cont mbottom">
              <div class="sec-details">
                <label for="notas"></label>
                <textarea
                  type="text"
                  name="notas"
                  id="notas"
                  class="notas"
                  placeholder="Notas, referencias, comentarios."
                  v-model="notes"
                  :disabled="loaded"
                />
              </div>
            </div>
          </div>
          <div class="col-chOut">
            <div class="miPedido-cont">
              <div class="header-mp">
                <p>Mi pedido</p>
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
                  <div class="sb-mp">
                    <p class="gray">Envio</p>
                    <p class="precio">${{ carrito.envio }}</p>
                  </div>
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
                  <p class="totale">Total</p>
                  <p class="total precio">$ {{ carrito.total }}</p>
                </div>
                <div class="payment-options">
                  <div class="products-mp-c">
                    <p class="m1">Opciones de Pago</p>
                    <!--  <div class="opt-cont">
                    
                      <div class="check-c" @click="checkOp = 'efectivo'">
                        <div
                          class="is-check"
                          v-if="checkOp == 'efectivo'"
                        ></div>
                      </div>
                      <label for="efectivo">
                        <p class="t1">Efectivo</p>
                        <p class="t2">Pago contra entrega</p></label
                      >
                    </div> -->
                    <!--  <div class="opt-cont ez1">
                      <div class="check-c" @click="checkOp = 'transfer'">
                        <div
                          class="is-check"
                          v-if="checkOp == 'transfer'"
                        ></div>
                      </div>
                      <label for="transfer">
                        <p class="t1">Transferencia Bancaria</p>
                        <p class="t2">Datos de transferencia</p>
                      </label>
                    </div>
                    <div class="form-transfer" v-if="checkOp == 'transfer'">
                      <input
                        type="text"
                        name="formE"
                        id="name"
                        class="input-3"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="account"
                        class="input-3"
                        placeholder="Account number"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="bank"
                        class="input-3"
                        placeholder="Bank name"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="routing"
                        class="input-3"
                        placeholder="Routing number"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="iban"
                        class="input-3"
                        placeholder="IBAN (internacional)"
                      />
                    </div> -->
                    <div class="opt-cont">
                      <div class="check-c" @click="checkOp = 'Openpay'">
                        <div class="is-check" v-if="checkOp == 'Openpay'"></div>
                      </div>
                      <label for="efectivo">
                        <p class="t1">Tarjeta de Credito/Debito</p>
                      </label>
                    </div>
                    <!-- <div class="form-transfer" v-if="checkOp == 'Openpay'">
                      <input
                        type="text"
                        name="formE"
                        id="cardholder"
                        class="input-3"
                        placeholder="Card holder name"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="cardnum"
                        class="input-3"
                        placeholder="Card number"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="expiry"
                        class="input-3"
                        placeholder="Expiry date"
                      />
                      <input
                        type="text"
                        name="formE"
                        id="cvv"
                        class="input-3"
                        placeholder="Security code(CVV)"
                      />
                    </div> -->
                  </div>
                  <div class="opt-cont" v-if="!viewModal">
                    <input
                      class="check-ip"
                      type="checkbox"
                      id="terms"
                      name="pago"
                      v-model="terminos"
                    />
                    <label for="terms">
                      <p>
                        Acepto los
                        <a
                          href="https://coyotaslourdes.com/terminos-y-condiciones"
                          >Terminos y condiciones</a
                        >,
                        <a href="https://coyotaslourdes.com/aviso-de-privacidad"
                          >Políticas de Privacidad</a
                        >
                      </p>
                    </label>
                  </div>
                  <div class="opt-cont" v-if="!viewModal">
                    <input
                      class="check-ip"
                      type="checkbox"
                      id="terms"
                      name="pago"
                      v-model="email_list"
                    />
                    <label for="terms">
                      <p>Inscríbeme a la lista de correos</p>
                    </label>
                  </div>
                </div>

                <div id="cnt-mdl-checkout" v-if="viewModal">
                  <OpenPayForm />
                </div>
                <button type="submit" class="mtp-btn" v-if="!viewModal">
                  <div class="btn-return">
                    <!--<img
                    src="../../assets/carrito-i-w.svg"
                    alt="cart"
                    class="icon"
                  />-->
                    <p class="t">Pagar</p>
                  </div>
                </button>

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
        </div>
      </div>
    </form>

    <div class="modal_view_checkout"></div>

    <Footer />
  </div>
</template>
<script>
import HeaderMenu from "../../components/Navigator.vue";
import Footer from "../../components/Footer.vue";
//import RouteDir from "../../components/fixedItems/RouteDir.vue";
//let urlpath = require("../../index/url");
import OpenPayForm from "../../components/pasarelas/openpay.vue";
import { mapActions } from "vuex";

export default {
  components: {
    HeaderMenu,
    Footer,
    OpenPayForm,
  },
  data() {
    return {
      //urlpath,
      numPro: 1,
      checkOp: "Openpay",
      status: "",
      message: "",
      cupon: "",
      //datos necesarios.
      method: "Openpay",
      shipping_option: "Ordena y Recoge",
      id_user: "",
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      country: "México",
      state: "Sonora",
      city: "Hermosillo",
      postal_code: "",
      notes: "",
      facturar: false,
      f_postal_code: "",
      f_country: "",
      f_state: "",
      f_city: "",
      f_email: "",
      f_phone: "",
      reason_social: "",
      fiscal_address: "",
      rfc: "",
      source_id: "",
      device_session_id: "",
      loaded: false,
      terminos: false,
      email_list: false,
      pesoTotal: 0,
      viewModal: false,
      carrier: "",
      send_arr:[],
      regiones: [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Ciudad de México",
        "Coahuila",
        "Colima ",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas",
      ],
    };
  },
  async created() {
    await this.getCarriers();
    await this.obtenerCarritos();
    await this.getIdentity();
    await this.getAllInfoGlp("global_params");
    //validar el carrito al entrar.
    this.email = this.identity.email;
    this.name = this.identity.name;
    this.lastname = this.identity.lastname;
    /**let lastv = localStorage.getItem('lastv')*/
    //! Obtener las direcciones
    //! Obtener el cliente por id para llenar los otros campos (telefono)

    if (this.carrito.items.length == 0) {
      this.$router.push("/carrito").catch((err) => {});
    }
    /*else if(lastv == 'car'){
         this.$router.push("/check-out").catch(err => {});
      }*/
  },

  computed: {
    citySelect() {
      let value = this.city;
      value != "" ? (value = value.toLowerCase().trim()) : value;

      return value;
    },
    carriers() {
      const data = this.$store.getters["shipment/carriers"];

      return data;
    },
    carriers() {
      const data = this.$store.getters["shipment/carriers"];

      return data;
    },
    quotations() {
      let data = this.$store.getters["shipment/quotations"];

      if (Array.isArray(data)) {
        const reorder = data.sort((a, b) => a.total_pricing - b.total_pricing);
        data = reorder;
      }
      return data;
    },
    carrito() {
      let carrito = this.$store.getters["carrito/getcar"];

      //recalcular coste de envio segun estado/ciudad.
      let city = this.city;
      city != "" ? (city = city.toLowerCase().trim()) : city;

      let envio_inicial = 0;
      let freeShipping = false;

      for (const cupon of carrito.cupon) {
        if (cupon.freeShipping == "SI") {
          envio_inicial = 0;
          freeShipping = true;
          break;
        }
      }

      ///shipping_option:"Envío a domicilio"

      if (freeShipping == false) {
        if (this.send_arr.send_type == "LOCAL") { // this.state == "Sonora" && city == hermosillo
          this.state = "Sonora";
          this.city = "Hermosillo";
          this.send_arr.shipping_price
            ? (carrito.envio = this.send_arr.shipping_price)
            : (carrito.envio = 50);
        }else  if (this.send_arr.send_type == "ESTATAL") { // this.state == "Sonora" && city == hermosillo
          this.state = "Sonora";
          this.send_arr.shipping_price
            ? (carrito.envio = this.send_arr.shipping_price)
            : (carrito.envio = 50);
        }  /*else if (this.carrier?.total_pricing) {
          carrito.envio = this.carrier.total_pricing;
        }*/ else {
          carrito.envio = envio_inicial;
        }
      }
      if (this.shipping_option == "Ordena y Recoge") {
        carrito.envio = 0;
      } else if (
        !isNaN(this.send_arr.free_shipping) &&
        this.send_arr.free_shipping > 0
      ) {
        if (
          carrito.subtotal >= this.send_arr.free_shipping 
        ) {
          carrito.envio = 0;
        }
      }

      let peso = 0;
      for (const obj of carrito.items) {
        if (obj.item.skd_weight) {
          peso += obj.item.skd_weight * obj.cantidad;
        }
      }
      this.pesoTotal = peso;

      carrito.total = carrito.subtotal + parseFloat(carrito.envio);

      return carrito;
    },

    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
    historyOptionPsl() {
      return this.$store.getters["pasarela/getHistoryOption"];
    },
    precio_envio() {
      let arr = this.$store.getters["global_params/data"];
      console.log(arr);
      let filter = [];
      if (!Array.isArray(arr)) {
        return {};
      } else {
        filter = arr;
      }

      return filter;
    },
  },
  methods: {
    ...mapActions("carrito", ["getCart"]),
    ...mapActions("pasarela", ["setHistoryOptionPsl"]),
    ...mapActions("pasarela", ["setAddedPsl"]),
    ...mapActions("shipment", ["getCarriers"]),
    ...mapActions("shipment", ["getQuotations"]),
    ...mapActions("global_params", ["getAllInfoGlp"]),

    createCharge: async function (
      method,
      shipping_option,

      name,
      lastname,
      email,
      phone,
      address,
      country,
      state,
      city,
      postal_code,
      notes,
      facturar,
      f_postal_code,
      f_country,
      f_state,
      f_city,
      f_email,
      f_phone,
      reason_social,
      fiscal_address,
      rfc,
      terminos,
      email_list,
      carrier
    ) {
      if (!terminos) {
        this.status = "error";
        this.message = "No has aceptado los términos y condiciones.";
        this.delStatus();
        return false;
      }
      /*if (
        !carrier.total_pricing &&
        shipping_option == "Envío a domicilio" &&
        this.citySelect != "hermosillo"
      ) {
        this.status = "error";
        this.message = "No has elejido una paquetería.";
        this.delStatus();
        return false;
      }*/

      this.loaded = true;

      let data = {
        _ctk: localStorage.getItem("_ctk"),
        method,
        shipping_option,
        id_user: this.identity.sub,
        name,
        lastname,
        email,
        phone,
        address,
        country,
        state,
        city,
        postal_code,
        notes,
        facturar,
        f_postal_code,
        f_country,
        f_state,
        f_city,
        f_email,
        f_phone,
        reason_social,
        fiscal_address,
        rfc,
        terminos,
        email_list,
        carrier,
      };

      this.setAddedPsl(data);
      this.setHistoryOptionPsl("Openpay");
      this.viewModal = true;
    },

    calcTotal(precio, cantidad) {
      let total = precio * cantidad;

      return total.toFixed(2);
    },
    async obtenerCarritos() {
      await this.getCart();
    },
    validCarrier(name) {
      if (
        name == "Fedex" ||
        name == "Estafeta" ||
        name == "UPS" ||
        name == "Paquetexpress" ||
        name == "Redpack"
      ) {
        return true;
      } else {
        return false;
      }
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
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        let name = this.titulo;
        document.title = to.meta.title || `Check out - Coyotas Lourdes`;
      },
    },
    postal_code: async function (value) {
      /*
                  weight -> kg
                  height -> cm
                  width  -> cm
                  length -> cm
                   for (const obj of this.carrito.items) {  } 

                */

      let weight = `${this.pesoTotal}`;
      let height = "10";
      let width = "10";
      let length = "10";

      let payload = {
        zip_from: "83160",
        zip_to: value,
        parcel: {
          weight: weight,
          height: height,
          width: width,
          length: length,
        },

        // "carriers": [ { "name": "DHL" },  { "name": "Fedex" } ]
      };

      await this.getQuotations(payload);
    },
  },
};
</script>
<style scoped>
.paqueterias {
  width: 33.68125vw;
  margin-bottom: 5vw;
}
.paq-box {
  border: 1.10883px solid #eeeeee;
  display: flex;
  border-radius: 0.2vw;
  align-items: center;
  height: 2.083333333333333vw;
  margin-bottom: 0.5208333333333333vw;
  cursor: pointer;
}
.act-box {
  background: #f4f4f4;
}
.cnt_paqlogo {
  width: 7vw;
}
.paq-box img.paqlogo {
  margin-left: 0.46875vw;
  width: 6.25vw;
  height: 1.3020833333333335vw;
}
.paq-box img.paqsel {
  width: 0.9375vw;
  height: 0.9375vw;
}
.prov_name {
  color: #525252;
  font-weight: 600;
  font-size: 0.8vw;
  width: 10vw;
}
.prov_dias {
  color: var(--co-htlMyCar);
  font-weight: 600;
  font-size: 0.8vw;
  width: 8vw;
}
.prov_total {
  color: var(--co-htlMyCar);
  font-weight: 600;
  font-size: 0.8vw;
  width: 6vw;
}
.hdrpaq {
  display: flex;
  background: #3ebdb1;
  width: 33.68125vw;
  margin-bottom: 0.5vw;
  border: 1.10883px solid #eeeeee;
  height: 2vw;
  border-radius: 0.2vw;
  align-items: center;
}
.hdrpaq {
  font-size: 0.8vw;
  text-transform: uppercase;
  color: white;
}
p.hdr_prov {
  width: 17vw;
  text-align: center;
}
p.hdr_dias {
  width: 8vw;
}
p.hdr_total {
  width: 8vw;
}
.label_input2 {
  width: 77.542vw;
  height: 14.019vw;
  font-size: 0.781vw;
  font-weight: 400;
  line-height: 0.938vw;
  color: #828282;
  margin-right: 1vw;
}

p {
  margin: 0;
}
.checkout-cont {
  width: 76.875vw;
  margin: 0 auto 0;
  padding-top: 17.76vw;
  padding-bottom: 5.469vw;
}
.row-chOut.dflex-it {
  display: flex;
  justify-content: space-between;
}
.head-titulo .header {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 2.083vw;
  line-height: 2.5vw;
  color: var(--co-htlMyCar);
  margin: 0;
}
.head-titulo {
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 1.823vw;
  margin-bottom: 1.823vw;
}
.ytuc {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.781vw;
  line-height: 160%;
  color: #25252d;
  width: 14.219vw;
  height: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff5ea;
  border: 1px solid #ffe4c7;
  border-radius: 0.156vw;
  margin-bottom: 1.823vw;
}
.ytuc a {
  color: #70a847;
  text-decoration: none;
  padding-left: 0.25vw;
}
.titulo-detail {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 700;
  font-size: 0.833vw;
  line-height: 0.99vw;
  display: flex;
  align-items: center;
  color: gray;
  margin-bottom: 1.51vw;
}
.grid-d-cont {
  width: 33.6vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.sec-details {
  margin-bottom: 0.365vw;
}

.input-1,
.input-2 {
  border: 1px solid gainsboro;
  font-weight: 400;
  font-size: 0.781vw;
  line-height: 0.938vw;
  color: #828282;
}
.input-1 {
  width: 32.9vw;
  height: 2.083vw;
}
.input-2 {
  width: 15.417vw;
  height: 2.083vw;
}
.mbottom {
  margin-bottom: 3.125vw !important;
}
.send-option {
  width: 9.74vw;
  height: 3.906vw;
  background: #f9f9f9;
  border: 1px solid #bdbdbd;
  border-radius: 0.156vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.send-option.checked {
  border: 1px solid #7047eb;
  background: #ffffff;
  background-image: url("../../assets/check-circle.svg");
  background-size: 1.042vw;
  background-repeat: no-repeat;
  background-position-x: 7.708vw;
  background-position-y: 0.573vw;
}
.sop-cont p {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 0.885vw;
  color: #828282;
}
.sop-cont {
  width: 8.948vw;
  height: 2.308vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sop-cont p.titulo {
  font-weight: 500;
  color: #25252d;
}
.grid-d-cont.mbottom.send-ops {
  width: 20.417vw;
}

/*list pedido*/
.header-mp {
  width: 25.885vw;
  height: 4.219vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--co-htlMyCar);
  border-radius: 1vw 1vw 0 0;
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
  color: #8e8e8e;
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
  color: #8e8e8e;
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
  font-weight: 400;
  font-size: 1.25vw;
  line-height: 1.51vw;
  color:#8E8E8E;
  margin: 0;
}
.cupon-txt {
  width: 13.177vw;
  height: 1.719vw;
  padding: 0;
  border: 1px solid #d3d3d3;
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 0.781vw;
  color: #d3d3d3;
    text-indent: 0.5vw;
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
  border-radius: 0 2vw 2vw 0;
  cursor: pointer;
}
.total-mp-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.302vw;
  padding-top: 1.302vw;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 0.938vw;
  margin-bottom: 0.938vw;
}

.mtp-btn {
  display: flex;
  margin: 1.563vw auto 0;
  background-color: var(--co-btnMyCar);
  border: none;
  width: 12.188vw;
  border-radius: 29vw;
  overflow: hidden;
}
.miPedido-body .btn-return {
  width: 100%;
}
.btn-return {
  /*width: 15.573vw;
  height: 3.906vw;*/
  width: 12.188vw;
  height: 2.656vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--co-btnMyCar);
  cursor: pointer;
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
.btn-return .icon {
  width: 1.094vw;
  height: 1.094vw;
}
.products-mp-c {
  border-bottom: 1px solid gainsboro;
  margin-bottom: 1.094vw;
}
.products-mp-c p.m1 {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 0.99vw;
  display: flex;
  align-items: center;
  color: #8e8e8e;
  margin-bottom: 0.885vw;
}
.check-c {
  width: 0.938vw;
  height: 0.938vw;
  border-radius: 4.938vw;
  border: 1px solid gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.729vw;
  cursor: pointer;
}
.is-check {
  background: #fe9128;
  width: 0.402vw;
  height: 0.402vw;
  border-radius: 3vw;
}
.opt-cont {
  display: flex;
}
.opt-cont p {
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 160%;
  color: #828282;
}
.opt-cont p.t1 {
  font-weight: 500;
  color: black;
}
.opt-cont p a {
  color: var(--co-COutTYC);
  text-decoration-color: transparent;
}
.payment-options .products-mp-c {
  padding-bottom: 1.615vw;
}
.opt-cont .check-ip {
  width: 0.833vw;
  height: 0.833vw;
  border: 1px solid gainsboro;
}
.form-transfer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1.094vw 0;
}
.input-3 {
  width: 17.917vw;
  height: 1.719vw;
  font-family: var(--font-MyCar);
  font-style: normal;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 0.781vw;
  color: #828282;
  border: 1px solid gainsboro;
  margin-bottom: 0.469vw;
}
/*.opt-cont.ez1 {
  margin-top: 1.667vw;
}*/

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

.checkOut textarea#notas {
  width: 33vw !important;
  border: 1px solid gainsboro;
  font-weight: 400;
  font-size: 0.781vw;
  line-height: 0.938vw;
  color: #828282;
  min-height: 5vw;
}

p.notas-pedido {
  margin-top: 5vw;
}

@media (max-width: 768px) {
  .paqueterias {
    width: 81.9vw;
    margin-bottom: 13vw;
  }
  .paq-box {
    border: 0.5vw solid #eeeeee;

    border-radius: 1.2vw;
    height: 13.083333vw;
    margin-bottom: 1.520833vw;
  }

  .paq-box img.paqlogo {
    margin-left: 0.46875vw;
    width: 26.25vw;
    height: 5.302083vw;
  }
  .paq-box img.paqsel {
    margin-left: 55%;
    width: 3.9375vw;
    height: 3.9375vw;
  }

  .checkOut textarea#notas {
    width: 77.542vw !important;
    height: 14.019vw;
    font-size: 4.673vw;
    line-height: 5.607vw;
    padding-left: 3.738vw;
    min-height: 29vw;
  }
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

  .row-chOut.dflex-it {
    flex-direction: column;
  }
  .checkout-cont {
    width: 88.164vw;
    padding-top: 29.579vw;
    margin: 0 auto 9.579vw;
    padding-bottom: 5.469vw;
  }
  .grid-d-cont {
    flex-direction: column;
  }
  .head-titulo .header {
    font-size: 9.346vw;
    line-height: 11.215vw;
    width: 48vw;
  }
  .head-titulo {
    padding-bottom: 8.879vw;
    margin-bottom: 8.879vw;
  }
  .ytuc {
    width: 82.477vw;
    height: 13.318vw;
    font-size: 4.673vw;
    margin-bottom: 6.542vw;
  }
  .ytuc a {
    padding-left: 1.25vw;
  }
  .titulo-detail {
    font-size: 4.673vw;
    line-height: 5.607vw;
    margin-bottom: 3.738vw;
  }
  .sec-details {
    margin-bottom: 2.336vw;
  }
  .input-1,
  .input-2 {
    /*width: 81.542vw;*/
    width: 77.542vw;
    height: 14.019vw;
    font-size: 4.673vw;
    line-height: 5.607vw;
    padding-left: 3.738vw;
  }

  .send-option {
    width: 82.477vw;
    height: fit-content;
    border-radius: 1.156vw;
    margin-bottom: 3.738vw;
  }
  .mbottom {
    margin-bottom: 8.178vw !important;
  }
  .sop-cont {
    width: 100%;
    height: auto;
    padding: 3.271vw 5.607vw;
  }
  .sop-cont p {
    font-size: 4.206vw;
    line-height: 5.14vw;
  }
  .grid-d-cont.mbottom.send-ops {
    width: 100%;
  }
  .send-option.checked {
    border: 1px solid #3ebdb1;
    background-size: 4.673vw;
    background-position-x: 73.131vw;
    background-position-y: 2.57vw;
  }
  /****************/
  /****************/

  .header-mp {
    width: 100%;
    height: 19.565vw;
    border-radius: 6vw 6vw 0 0;
  }
  .header-mp p {
    font-size: 4.206vw;
    line-height: 5.314vw;
  }
  .miPedido-cont {
    margin-top: 11.594vw;
  }
  .miPedido-body {
    padding: 9.662vw 7.162vw;
    width: 73.656vw;
  }
  .products-mp-c p.m1 {
    margin-bottom: 3.738vw;
  }
  .header-mp-c p,
  .products-mp-c p.m1 {
    font-size: 4.206vw;
    line-height: 5.314vw;
    font-weight: 700;
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
  .miPedido-body .total-mp-c p.precio {
    font-size: 6.763vw;
    line-height: 6.763vw;
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
    padding-top: 5.797vw;
  }
  p.totale {
    font-size: 5.607vw;
    line-height: 6.776vw;
  }
  .total-mp-c {
    margin-top: 7.246vw;
    padding-top: 7.246vw;
    padding-bottom: 8.879vw;
    margin-bottom: 0;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid white;
  }
  .cupon-txt {
    width: 36.682vw;
    height: 12.077vw;
    font-size: 4.625vw;
    line-height: 4.781vw;
    color: #d3d3d3;
    text-indent: 3vw;
  }
  .cupon-btn {
    width: 36.243vw;
    font-size: 3.382vw;
    line-height: 3.382vw;
    border-radius: 0 7vw 7vw 0;
  }
  .cupon-cont {
    margin-top: 6.522vw;
  }
  /* .miPedido-body .btn-return {
   margin-top: 9.346vw; 
  } */
  .sb-mp {
    margin-bottom: 1.168vw;
  }
  .btn-return {
    /*width: 69.860vw;*/
    width: 72.86vw;
    height: 18.116vw;
    justify-content: center;
  }
  .btn-return .t {
    font-size: 3.865vw;
    line-height: 3.865vw;
    margin: 0;
    padding-left: 2.804vw;
  }
  .btn-return .icon {
    width: 3.623vw;
    height: auto;
  }
  .opt-cont p {
    font-size: 3.738vw;
    line-height: 160%;
  }
  .check-c {
    width: 4.206vw;
    height: 4.206vw;
    border-radius: 14.938vw;
    margin-right: 2.729vw;
  }
  .is-check {
    width: 1.801vw;
    height: 1.801vw;
    border-radius: 6vw;
  }
  .opt-cont {
    margin-left: 4.439vw;
    margin-bottom: 6.542vw;
  }
  .opt-cont .check-ip {
    width: 5.009vw;
    height: 5.009vw;
    margin-right: 3vw;
  }
  .opt-cont label {
    width: fit-content;
  }
  /*.payment-options .products-mp-c {
    padding-bottom: 10.514vw;
    }*/
  .products-mp-c {
    border: none;
    margin-bottom: 5.797vw;
  }
  .input-3 {
    width: 57.009vw;
    height: 14.019vw;
    font-size: 4.206vw;
    line-height: 5.14vw;
    margin-bottom: 2.469vw;
  }
  .mtp-btn {
    width: 63.285vw;
  }
}
</style>