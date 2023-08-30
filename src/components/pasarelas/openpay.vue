<template>
  <div id="checkout_view">
    <div v-if="!viewModal">
      <form id="payment-form">
        <input type="hidden" name="token_id" id="token_id" />
        <input
          type="hidden"
          name="use_card_points"
          id="use_card_points"
          value="false"
        />
        <div class="pymnt-itm card active">
          <div class="pymnt-cntnt">
            <p class="title-op">Método de Pago</p>
            <div class="card-expl dflx">
              <div class="box-card credit">
                <h4>Tarjetas de <span>crédito</span></h4>
                <img
                  src="../../assets/TDC.svg"
                  alt="Iconos tarjetas de crédito aceptadas."
                />
              </div>
              <div class="box-card debit">
                <h4>Tarjetas de <span> débito</span></h4>
                <img
                  src="../../assets/TDD.svg"
                  alt="Iconos tarjetas de débito aceptadas."
                />
              </div>
            </div>
            <div class="sctn-row">
              <div class="sctn-col grp1 l">
                <label>Nombre del titular</label
                ><input
                  v-model="name"
                  type="text"
                  placeholder="Como aparece en la tarjeta"
                  autocomplete="off"
                  data-openpay-card="holder_name"
                />
              </div>
              <div class="sctn-col grp1">
                <label>Número de tarjeta</label
                ><input
                  v-model="tarjeta"
                  type="text"
                  autocomplete="off"
                  data-openpay-card="card_number"
                  placeholder="4242424242424242"
                />
              </div>
            </div>
            <div class="sctn-row dflx">
              <div class="sctn-col grp2 l">
                <label>Fecha de expiración</label>
                <div
                  class="expc dflx"
                  :class="{
                    err_inp: this.err_mm || this.err_yy,
                    act_inp:
                      (this.act_mm == true || this.act_yy == true) &&
                      this.err_mm == false &&
                      this.err_yy == false,
                  }"
                >
                  <div class="sctn-col half l">
                    <input
                      v-model="expmonth"
                      class="inp1"
                      :class="{
                        err_inp: this.err_mm || this.err_yy,
                        act_inp:
                          (this.act_mm == true || this.act_yy == true) &&
                          this.err_mm == false &&
                          this.err_yy == false,
                      }"
                      type="text"
                      placeholder="MM"
                      data-openpay-card="expiration_month"
                    />
                  </div>
                  <div class="sctn-col half l">
                    <input
                      v-model="expyear"
                      :class="{
                        err_inp: this.err_mm || this.err_yy,
                        act_inp:
                          (this.act_mm == true || this.act_yy == true) &&
                          this.err_mm == false &&
                          this.err_yy == false,
                      }"
                      class="inp2"
                      type="text"
                      placeholder="YY"
                      data-openpay-card="expiration_year"
                    />
                  </div>
                </div>
              </div>
              <div class="sctn-col grp3 cvv">
                <label>CVV</label>
                <div class="sctn-col half l">
                  <input
                    v-model="cvv"
                    type="text"
                    :class="{
                      err_inp: this.err_cvv,
                      act_inp: this.act_cvv == true && this.err_cvv == false,
                    }"
                    autocomplete="off"
                    data-openpay-card="cvv2"
                  />
                </div>
              </div>
            </div>
            <div class="openpay">
              <div class="logo dflx">
                <p>Transacciones realizadas vía:</p>
                <img src="../../assets/openpaylogo.svg" alt="Icono openpay" />
              </div>
              <div class="shield dflx">
                <img src="../../assets/security.svg" alt="Icono escudo." />
                <p>
                  Tus pagos se realizan de forma segura con encriptación de 256
                  bits
                </p>
              </div>
            </div>
            <div class="sctn-row btncp">
              <a
                v-if="wait == false"
                class="button rght"
                id="pay-button"
                @click="validar(name, tarjeta, expmonth, expyear, cvv)"
                >Pagar</a
              >
              <p class="button rght"  v-if="wait" id="pay-button2">
                <img src="../../assets/Cargando0.gif" alt="cargando gif" />
              </p>
            </div>

            <p id="error_msg" v-if="status == 'error'">
              {{ message }}
            </p>
          </div>
        </div>
      </form>
    </div>
    <div v-else class="view-error">
      <div class="ve-cnt">
        <!--    <img class="" src="" alt="icono app"> icono app -->
        <div class="ve-body">
          <!--    <img src="">  icono triste -->
          <p>
            LO SENTIMOS HA OCURRIDO UN ERROR AL INTENTAR REALIZAR TU PAGO,
            INTENTALO DE NUEVO.
          </p>
        </div>
        <a v-on:click="refre()"
          ><p class=""><span>Aceptar</span></p></a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "checkout",
  data() {
    return {
      status: "",
      message: "",
      name: "",
      tarjeta: "",
      expmonth: "",
      expyear: "",
      cvv: "",
      wait: false,
      viewModal: false,

      err_cvv: false,
      err_mm: false,
      err_yy: false,
      err_num: false,
      err_nam: false,
      act_cvv: false,
      act_mm: false,
      act_yy: false,
      act_num: false,
      act_nam: false,
    };
  },
  /*
     4242424242424242
    */
  mounted() {
    $(document).ready(function () {
      /* OpenPay.setId('m0k8wleehyy9vgb1p4ie');
            OpenPay.setApiKey('pk_50ce9f4f4be54881864d9a78eb925d48');
            OpenPay.setSandboxMode(false);*/
      OpenPay.setId("m8ckqeb3piuvny68ca2o");
      OpenPay.setApiKey("pk_44853576427b46cdb5d45336669555ce");
      OpenPay.setSandboxMode(true);
      //Se genera el id de dispositivo
      var deviceSessionId = OpenPay.deviceData.setup(
        "payment-form",
        "deviceIdHiddenFieldName"
      );

      $("#pay-button").on("click", function (event) {
        event.preventDefault();
        $("#pay-button").prop("disabled", true);
        OpenPay.token.extractFormAndCreate(
          "payment-form",
          sucess_callbak,
          error_callbak
        );
      });

      var sucess_callbak = function (response) {
        var token_id = response.data.id;
        $("#token_id").val(token_id);
        // $('#payment-form').submit();
        //ENVIAR a otra pagina.
        let isval = execute();

        if (isval.status == "success") {
          charge(deviceSessionId, token_id);
        } else {
          showMessage(isval.message);
        }

        //console.log(token_id)
        //console.log(deviceSessionId)
      };

      var error_callbak = function (response) {
        var desc =
          response.data.description != undefined
            ? response.data.description
            : response.message;
        let message = desc; //"ERROR [" + response.status + "] : " +
        showMessage(message);
        //console.log(message)
        $("#pay-button").prop("disabled", false);
      };
    });

    let showMessage = (error) => {
      this.status = "error";
      this.message = error;
      this.delStatus();
    };

    let charge = (deviceSessionId, token_id) => {
      this.wait = true;
      this.createCharge(deviceSessionId, token_id);
    };

    let execute = () => {
      return this.validar(
        this.name,
        this.tarjeta,
        this.expmonth,
        this.expyear,
        this.cvv
      );
    };
  },
  watch: {
    cvv: function (value) {
      let arr = value.split("");

      let str = "";
      let count = 0;
      for (const ctr of arr) {
        if (!isNaN(ctr) && count < 4 && ctr != " ") {
          str += ctr;
          count++;
        }
      }

      this.cvv = str;
      if (this.cvv.length > 2) {
        this.act_cvv = true;
        this.err_cvv = false;
      } else if (this.cvv) {
        this.err_cvv = true;
      } else {
        this.err_cvv = false;
        this.act_cvv = false;
      }
    },

    expmonth: function (value) {
      let arr = value.split("");

      let str = "";
      let count = 0;
      for (const ctr of arr) {
        if (!isNaN(ctr) && count < 2 && ctr != " ") {
          let newstr = str + ctr;
          newstr = parseInt(newstr);
          if (newstr <= 12) {
            str += ctr;
            count++;
          }
        }
      }

      this.expmonth = str;

      if (this.expmonth) {
        this.act_mm = true;
      } else {
        this.act_mm = false;
      }
    },

    expyear: function (value) {
      let arr = value.split("");

      let str = "";
      let count = 0;
      for (const ctr of arr) {
        if (!isNaN(ctr) && count < 2 && ctr != " ") {
          str += ctr;
          count++;
        }
      }

      this.expyear = str;
      if (this.expyear) {
        this.act_yy = true;
      } else {
        this.act_yy = false;
      }
    },
    tarjeta: function (value) {
      let arr = value.split("");

      let str = "";
      let count = 0;

      for (const ctr of arr) {
        if (!isNaN(ctr) && count < 16 && ctr != " ") {
          str += ctr;
          count++;
        }
      }

      this.tarjeta = str;

      this.tarjeta = str;
      if (this.tarjeta.length > 15) {
        this.act_num = true;
        this.err_num = false;
      } else if (this.tarjeta) {
        this.err_num = true;
      } else {
        this.err_num = false;
        this.act_num = false;
      }
    },
    name: function () {
      if (this.name) {
        this.act_nam = true;
      } else {
        this.act_nam = false;
      }
    },
  },
  computed: {
    payment() {
      return this.$store.getters["pasarela/getAdded"];
    },
  },
  methods: {
    ...mapActions("pasarela", ["setHistoryOptionPsl"]),
    ...mapActions("carrito", ["setCart"]),
    ...mapActions("pasarela", ["setAddedPsl"]),
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 5000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },

    refre: function () {
      setTimeout(() => this.$router.go(), 200);
      this.setHistoryOptionPsl("Default");
    },
    createCharge: async function (device, source) {
      this.setHistoryOptionPsl("createCharge");
      let infopayment = this.payment;

      let data = {
        _ctk: infopayment._ctk,
        method: infopayment.method,
        shipping_option: infopayment.shipping_option,
        id_user: infopayment.id_user,
        name: infopayment.name,
        lastname: infopayment.lastname,
        email: infopayment.email,
        phone: infopayment.phone,
        address: infopayment.address,
        country: infopayment.country,
        state: infopayment.state,
        city: infopayment.city,
        postal_code: infopayment.postal_code,
        notes: infopayment.notes,
        facturar: infopayment.facturar,
        f_postal_code: infopayment.f_postal_code,
        f_country: infopayment.f_country,
        f_state: infopayment.f_state,
        f_city: infopayment.f_city,
        f_email: infopayment.f_email,
        f_phone: infopayment.f_phone,
        reason_social: infopayment.reason_social,
        fiscal_address: infopayment.fiscal_address,
        rfc: infopayment.rfc,
        terminos: infopayment.terminos,
        email_list: infopayment.email_list,
        source_id: source,
        device_session_id: device,
        carrier: infopayment.carrier,
      };

      let result = await this.$store.dispatch("payment/addItemPym", {
        option: "payment",
        item: data,
      });

      //console.log(result)

      if (result.status != "success") {
        this.viewModal = true;
      } else {
        //si todo es correcto.
        this.wait = false;
        this.setAddedPsl(result.result);
        //this.setHistoryOptionPsl("Finalizando"); 
        console.log(result.result)
        let payload = {
          option: "set_cart",
          item: { id_cliente: null },
        };
        localStorage.setItem('voucher', JSON.stringify(result.result))
        this.setCart(payload);
        this.$router.push("/finalizado").catch(err => {});

        //const url = result.result.receipt.body.payment_method.url;

       // window.location.href = url;
      }
    },

    toThankYou: async function () {
      return this.$router.push("/finalizado").catch((err) => {});
    },
    validar(name, tarjeta, expmonth, expyear, cvv) {
      let srt = "";
      let count = 0;
      if (name == "" || !name) {
        srt += " El nombre es requerido.";
        count++;
        this.err_nam = true;
        this.act_nam = false;
      }

      if (tarjeta == "" || !tarjeta || tarjeta.length < 16) {
        srt += " La tarjeta es requerida.";
        count++;
        this.err_num = true;
        this.act_num = false;
      }

      if (expmonth == "" || !expmonth) {
        srt += " El mes es requerido.";
        count++;
        this.err_mm = true;
        this.act_mm = false;
      }

      if (expyear == "" || !expyear) {
        srt += " El año es requerido. ";
        count++;
        this.err_yy = true;
        this.act_yy = false;
      }

      if (cvv == "" || !cvv) {
        srt += " El cvv es requerido. ";
        count++;
        this.err_cvv = true;
        this.act_cvv = false;
      }

      if (count > 0) {
        return {
          status: "error",
          message: srt,
        };
      } else {
        return {
          status: "success",
          message: "",
        };
      }
    },
  },
};
</script>
<style scoped>
#checkout_view {
  padding-top: 3.385vw;
  width: 100%;
  margin: auto;
  /*margin-top: 5.384615384615385VW;*/
}
p.title-op {
  font-family: var(--Inter);
  font-style: normal;
  font-weight: 700;
  color: #828282;
}
.box-card:first-child {
  width: 48%;
  border-right: 0.5px solid #bebebe;
}
.box-card {
  margin-bottom: 3.358974vw;
}

.card-expl h4 {
  font-family: var(--Inter);
  font-size: 0.729vw;
  color: gray;
  font-weight: 500;
  margin: 0vw;
  margin-bottom: 0.582051vw;
}
.card-expl h4 span {
  font-weight: 700;
}

.grp1 {
  margin-bottom: 0.530769vw;
}
.grp1 label {
  display: grid;
}

#payment-form label {
  font-size: 0.729vw;
  color: gray;
  font-weight: 700;
  font-family: var(--Inter);
  margin-bottom: 0.51282vw;
  padding-left: 0;
}

.grp1 input {
  width: 17.917vw;
  height: 1.719vw;
  font-family: var(--Inter);
  font-style: normal;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 0.781vw;
  background-color: var(--bk-inputOPay);
  color: var(--co-txtOPay);
  border: 1px solid transparent;
  margin-bottom: 0.469vw;
  border-radius: 12vw;
}
#payment-form input::placeholder {
  color: var(--co-txtOPay);
  font-style: italic;
  font-family: var(--Inter);
  font-size: 0.625vw;
  font-weight: 400;
}

.grp2 {
  /* width: 57%; */
}

.grp3 {
  margin-left: 1.2999999999999994vw;
}

.grp2 input {
  width: 17.917vw;
  height: 1.719vw;
  font-family: var(--Inter);
  font-style: normal;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 0.781vw;
  background-color: var(--bk-inputOPay);
  color: var(--co-txtOPay);
  border: 1px solid transparent;
  margin-bottom: 0;
  border-radius: 12vw;
}

.grp3 input {
  width: 5.7vw;
  height: 1.719vw;
  font-family: var(--Inter);
  font-style: normal;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 0.781vw;
  background-color: var(--bk-inputOPay);
  color: var(--color-2);
  border: 1px solid transparent;
  margin-bottom: 0.469vw;
  border-radius: 12vw;
}

input.inp1 {
  width: 4.5vw;
  margin-right: 0.5vw;
}
input.inp2 {
  width: 4.5vw;
}

.openpay {
  width: 100%;
  border-bottom: 0.5px solid #bebebe;
  border-top: 0.5px solid #bebebe;
  margin-top: 1.351282vw;
  margin-bottom: 2.351282vw;
  padding-top: 0.58974vw;
  padding-bottom: 0.58974vw;
}

.logo p {
  font-size: 0.7vw;
  margin-top: 1vw;
  width: 11vw;
  color: rgba(134, 134, 134, 1);
  font-weight: 600;
}

.logo img {
  width: 7.717949vw;
  height: 3.205128vw;
  margin-left: 0vw;
  padding-top: 0vw;
}

.shield p {
  color: rgba(134, 134, 134, 1);
  font-size: 0.729vw;
  margin-left: 0.5vw;
  width: 16vw;
  margin-top: 0vw;
}

.shield img {
  width: 1.948718vw;
  height: 1.487179vw;
  padding-top: 0.3vw;
}

.expc {
    background-color: var(--bk-inputOPay);
    color: var(--co-txtOPay);
    border-radius: 10vw;
}

a#pay-button {
  background: var(--color-1);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;

  font-family: var(--Inter);
  font-style: normal;
  font-weight: 700;
  font-size: 0.833vw;
  line-height: 0.833vw;
  color: #ffffff;

  padding: 1.5vw 7.82vw;

  text-align: center;
  border-radius: 10vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: fit-content;
}

p#pay-button2 {
  background: var(--color-1);
  color: rgba(255, 255, 255, 1);
  font-size: 2.076923076923077vw;
  font-weight: 800;
  /* padding: 1vw 1vw; */
  /* margin-left: 25%; */
  text-align: center;
  padding: 0vw;
  margin: 0vw auto;
    border-radius: 10vw;
    width: 6vw;
}
p#pay-button2 img {
  width: 5vw;
  height: 1.5vw;
  padding-top: 0vw;
}

.box-card img {
  width: 6.974359vw;
  height: 3.076923vw;
  padding-left: 0;
}

#error_msg {
  background: var(--color-7);
  color: rgba(255, 255, 255, 1);
  font-size: 0.76923vw;
  padding: 0.5vw;
  text-align: center;
  width: 90.4%;
  margin-top: 1.5vw;
}

/** modal error */
.ModalOut {
  width: 67.6923076923077vw;
  height: 97.94871794871794vw;
  background-color: #ffffff;
  border-radius: 7.6923076923076925vw;
  position: absolute !important;
  /*margin-left: 16vw;
    margin-top: 59vw;*/
}
.MContent2 {
  width: 51.7948717948718vw;
  height: 40.897436vw;
  border: 0.6vw solid #f54c49;
  border-radius: 7.6923076923076925vw;
  text-align: center;
  margin-left: 7vw;
}
.MContent2 img {
  width: 11.025641025641026vw;
  height: 11.025641025641026vw;
  margin-top: 4.615384615384616vw;
}
.MContent2 p {
  width: 41vw;
  margin-inline: auto;
  font-size: 3.076923076923077vw;
  color: #215675;
  line-height: 3.6923076923076925vw;
  font-weight: 600;
}
p.GH {
  font-size: 3.5897435897435894vw;
  color: #215675;
  font-weight: 500;
  text-align: center;
  margin-top: 8.461538461538462vw;
}
.GH span {
  font-weight: 800;
}
  .view-error p {
    font-size: .9vw; 
}
.view-error a p {
    padding: 1.5vw 7.82vw;
    background: var(--color-1);
    color: #ffffff;
    font-weight: 700;
    border-radius: 15vw;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
@media (min-width: 768px) {
  .box-card:first-child{
    margin-right: 1.927vw;
    padding-right: 1.927vw;
  }
}
@media (max-width: 768px) {
.view-error p { 
  font-size: 3.076923076923077vw;
    color: #8e8e8e;
    font-family: 'Inter';
}
.view-error a p {
    padding: 5.556vw 25.604vw;
}
.box-card:last-child {
  padding-left: 8.937vw;
}

  .card-expl h4 {
    /*padding-left: 2vw;*/
    font-size: 3.6vw;

    margin: 0vw;
    margin-bottom: 0.582051vw;
  }
  .box-card {
    margin-bottom: 9.42vw;
  }
  .box-card.credit {
    padding-right: 8.937vw;
  }
  .grp1:nth-child(2) {
    padding-top: 5vw;
  }
  .sctn-row {
    padding-top: 5vw;
  }

  .box-card img {
    width: 27.295vw;
    height: 18.076923vw;
    /* padding-left: 0.5vw; */
  }

  #payment-form label {
    font-size: 4vw;
    margin-bottom: 1.208vw;
  }

  .grp1 input {
    width: 100%;
    height: 9.719vw;
    text-indent: 3vw;
    font-size: 3.625vw;
  }

  #payment-form input::placeholder {
    font-size: 3.625vw;
  }

  input.inp1 {
    width: 18.5vw;
    margin-right: 0.5vw;
  }
  input.inp2 {
    width: 18.5vw;
  }

  .grp2 input,
  .grp3 input {
    height: 9.719vw;
    font-size: 3.625vw;
    text-indent: 2vw;
  }

  .grp3 input {
    width: 27.7vw;
  }

  .openpay {
    width: 100%;
    border-bottom: 0.5px solid #bebebe;
    border-top: 0.5px solid #bebebe;
    margin-top: 7.351282vw;
    margin-bottom: 11.351282vw;
    padding-top: 1.58974vw;
    padding-bottom: 1.58974vw;
  }

  .logo p[data-v-f0fbe0ca] {
    font-size: 3vw;
    color: rgba(134, 134, 134, 1);
    font-weight: 600;
    margin-top: 2vw;
    width: 47vw;
  }

  .logo img {
    width: 20.717949vw;
    height: 9.205128vw;
    margin-left: 3vw;
    padding-top: 0vw;
  }

  .shield p {
    color: rgba(134, 134, 134, 1);
    font-size: 2.7vw;
    margin-left: 0.5vw;
    width: 90%;
    margin-top: 0vw;
  }

  .shield img {
    width: 9.948718vw;
    height: 9.487179vw;
    padding-top: 0vw;
  }

  p.title-op {
    font-size: 3.865vw;
    line-height: 4.589vw;
  }
  a#pay-button {
    font-size: 3.833vw;
    padding: 5.556vw 25.604vw;
  }

  p#pay-button2 {
    /*padding: 5.5vw 28.3vw;  */
    padding: 0;
    width: 21vw;
    font-size: 8vw;
  }
  p#pay-button2 img {
    width: 18vw;
    padding-top: 0vw;
    height: 5vw;
  }

  #error_msg {
    font-size: 2.76923vw;
    padding: 0.5vw;

    width: 99%;
    margin-top: 6.5vw;
  }
}
</style>