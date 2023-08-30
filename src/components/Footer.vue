<template>
  <div class="bloquefooter">
    <!--modal carrito-->
    <!----->
    <div class="sectionsucursales" id="contacto">
      <div class="col-con1">
        <div class="form-cont">
          <p class="tl">Contacto</p>
          <div class="bloqueform">
            <input
              class="inputbf inputname"
              type="text"
              placeholder="Nombre"
              v-model="name"
            />
            <input
              class="inputbf inputnumber"
              type="number"
              placeholder="Celular"
              v-model="phone"
            />
            <input
              class="inputbf inputemail"
              type="email"
              placeholder="Correo"
              v-model="email2"
            />
            <!--<input
                class="inputbf inputsucursal"
                type="sucursal"
                placeholder="Sucursal"
                v-model="sucursal"
              />-->
            <textarea
              class="texa"
              cols="30"
              rows="10"
              placeholder="Mensaje"
              v-model="mensaje"
            ></textarea>
            <div class="ad-btn">
              <div class="bloqueaviso">
                <input class="inpcheck" type="checkbox" v-model="aviso" />
                <p class="txtaviso">
                  He leído el <a href="https://microfinanzas.com.mx/aviso-de-privacidad">Aviso de Privacidad</a> antes de
                  enviar el formulario.
                </p>
              </div>
              <div type="submit" class="btnform" @click="enviarMail(name, phone, email2, mensaje)">
                <p class="txtbtn">Enviar</p>
              </div>
            </div>

            <div v-if="this.status == 'success'">
              <p class="cart_msg cart_success">{{ this.msg }}</p>
            </div>
            <div v-if="this.status == 'error'">
              <p class="cart_msg cart_error">{{ this.msg }}</p>
            </div>
          </div>
        </div>
      </div>

      <iframe
        class="mapcont"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.102308054951!2d-110.96598303348775!3d29.099639968224324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce8425b5597765%3A0x16cec5ce209c8517!2sC.%20Juan%20Aldama%20162%2C%20San%20Benito%2C%2083190%20Hermosillo%2C%20Son.!5e0!3m2!1sen!2smx!4v1676066797158!5m2!1sen!2smx"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="fila1footer">
      <div class="colmenu">
        <div class="menufooter">
          <h5>Menú</h5>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#simulador">Simulador</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <img class="imgfoomv" src="../assets/logofooter mo.png" />
        <img class="imgfoopc" src="../assets/logofooter mo.png" />
      </div>
      <div class="infofooter">
        <h5>Información</h5>
        <div class="bloqueiff">
          <p class="titpif">Dirección</p>
          <p class="txtpif light">Juan Aldama 162 entre Michoacan y Tabasco </p>
          <!---->
          <p class="txtpif light">Col. San
                  Benito.  CP 83190</p>
          <p class="txtpif ultpif light">Hermosillo, Sonora</p>

          <p class="titpif">Teléfono</p>
          <a href="https://wa.link/e4i0vb"
            target="_blank"
            rel="noopener noreferrer"
            ><p class="txtpif ultpif light"><!--662 210 7484-->662 688 6621</p></a
          >

          <p class="titpif">Horario</p>
          <p class="txtpif ultpif light">Lun - Vie 9:00 AM a 2:00 PM Y de 4:00 a 6:00 PM</p>

          <!--<p class="titpif">Horario</p>
          <p class="txtpif ultpif last light">Lun-Dom <br><span> –</span> 12 pm a 10 pm</p>--->
          <!--<p class="txtpif ultpif last">Domingo – 11:00 am a 6:00 pm</p>-->
        </div>
        <div class="redesfooter">
          <a
            href="https://www.facebook.com/profile.php?id=100086257311977"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="../assets/custom/fb-i.svg" alt="Icono Facebook"
          /></a>
          <a
            class="btnigfo"
            href="https://www.instagram.com/microfinanzas.financiera/"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="../assets/custom/ig-i.svg" alt="Icono Instagram"
          /></a>
          <!--<a class="btnigfo" href="" target="_blank" rel="noopener noreferrer">
            <img src="../assets/custom/tt-i.svg" alt="Icono Tik Tok" />
          </a>-->
        </div>
      </div>
      <div class="newsfooter">
        <div class="fila1newsfo">
          <form @submit.prevent="suscribirse(email)">
            <h5 class="titnewslfo pc">Suscríbete a nuestro newsletter</h5>
            <h5 class="titnewslfo mo">Suscríbete a nuestro newsletter</h5>
            <div class="bloquenewsletter">
              <input
                type="email"
                name=""
                id=""
                placeholder="Correo electrónico"
                v-model="email"
              />
              <button type="submit" class="submitnewsl-btn">Enviar</button>
            </div>
            <div v-if="this.status == 'success'">
              <p class="cart_msg cart_success">{{ this.message }}</p>
            </div>
            <div v-if="this.status == 'error'">
              <p class="cart_msg cart_error">{{ this.message }}</p>
            </div>
          </form>
        </div>
        <div class="fila2newsfo">
          <div class="col1nefo">
            <a href="https://microfinanzas.com.mx/aviso-de-privacidad"><p>Politicas de Privacidad</p></a>
          </div>
          <div class="col2nefo">
            <img src="../assets/logofooter2 mo.png" alt="" class="mo" />
            <img src="../assets/logofooter2 mo.png" alt="" class="pc" />
          </div>
        </div>
      </div>
    </div>
    <div class="fila2footer">
      <p><span>Copyright 2023</span> © Todos los Derechos Reservados.</p>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      email2: "",
      mensaje: "",
      status: "",
      status: "",
      message: "",
    };
  },
  methods: {
    enviarMail: async function (name, phone, email, mensaje) {
      this.msg = "";
      this.status = "";

      if (this.aviso == false) {
        this.msg = "Acepta los términos y condiciones.";
        this.status = "error";
      } else if (name == undefined || name == "" || name == null) {
        this.msg = "El campo nombre no es valido.";
        this.status = "error";
      } else if (phone == undefined || phone == "" || phone == null) {
        this.msg = "El campo medio no es valido.";
        this.status = "error";
      } else if (email == undefined || email == "" || email == null) {
        this.msg = "El campo correo no es valido.";
        this.status = "error";
      } else if (mensaje == undefined || mensaje == "" || mensaje == null) {
        this.msg = "El campo comentarios no es valido.";
        this.status = "error";
      } else {
        let data = {
          name: name,
          phone: phone,
          email: email, 
          mensaje: mensaje,
        };
        let response = await this.$store.dispatch(
          "admin/enviarMailContacto",
          data
        );
        console.log(response);
        if (response.status == "success") {
          this.status = "success";
          this.msg = "Mensaje enviado con exito.";
          this.name = "";
          (this.phone = ""),
            (this.email2 = ""), 
            (this.mensaje = "");
          this.delStatus();
        } else {
          this.status = "error";
          this.msg =
            "Lo sentimos ha ocurrido un error al intentar entregar tu mensaje.";
        }
      }
    },
    suscribirse: async function (email) {
      this.status = "";
      this.message = "";
      let sub_date = dayjs().format("YYYY-MM-DD");
      let data = {
        email,
        sub_date,
      };

      let result = await this.$store.dispatch("suscripciones/addItemSbs", {
        option: "suscripciones",
        item: data,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
        console.log(this.message);
        this.delStatus();
      } else {
        // success
        this.status = "success";
        this.message = "Suscripción exitosa!";
        console.log(this.message);
        this.delStatus();
      }
    },
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 3000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },
  },
};
</script>
<style scoped>
/* FOOOOTER */
.col-con1 {
  width: 51.875vw;
}
.bloqueform {
  width: 29.01vw;
  margin: 0;
}
.inputname,
.inputnumber {
  width: 100%;
  margin-right: 1.4583333333333333vw;
}
.inputbf {
  width: 100%;
  height: 3.229vw;
  margin-bottom: 0.729vw;
  border: 0.078vw solid white;
  text-indent: 5%;
  padding-left: 0;
  color: white;
  background-color: transparent;
  font-size: var(--fs-inpform);
  font-family: "Plus Jakarta Sans";
}
.texa {
  width: 100%;
  height: 5vw;
  margin-bottom: 1.146vw;
  background-color: transparent;
  color: white;
  border: 0.078vw solid white;
  text-indent: 5%;
  padding-left: 0;
  padding-top: 1.406vw;
  font-size: var(--fs-inpform);
  resize: none;
  line-height: 1.0083333333333333vw;
  font-family: "Plus Jakarta Sans";
}
.texa::placeholder,
.inputbf::placeholder {
  font-family: "Plus Jakarta Sans";
  color: white;
}
#contacto .tl {
  font-size: 2.865vw;
  line-height: 90.5%;
  color: white;
  font-weight: 700;
  margin: 7.135vw 0 2.396vw;
  font-family: "Plus Jakarta Sans";
}
#contacto .bloqueaviso {
  display: flex;
  margin-bottom: 2.552vw;
}
#contacto p.txtaviso {
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 174.19%;
  color: white;
  margin: 0 0 0 0.51vw;
}
#contacto p.txtaviso a {
  color: #fa8f21;
}
#contacto .btnform {
  width: 100%;
  height: 4.115vw;
  background: #fa8f21;
  border-radius: 1.042vw;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
#contacto .btnform p {
  font-weight: 700;
  font-size: 0.938vw;
  line-height: 111%;
  margin: 0;
  color: white;
}
#contacto .form-cont {
  padding-left: 12.552vw;
}
.bloquefooter {
  background: var(--fs-bgfooter);
  padding-top: 0;
}

.fila1footer h5 {
  font-family: var(--font-titulo1);
  text-align: center !important;
  /*color: var(--co-titsecfo);*/
  color: #fa8f21;
  font-size: var(--fs-titsecfomv);
  line-height: 7.367vw;
  font-weight: 600;
}
.colmenu {
  text-align: center;
}
.colmenu ul {
  margin: 0;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  padding-inline-start: 0 !important;
}
.colmenu li {
  font-family: var(--font-parrafo2);
  font-size: var(--fs-txtmenufomv);
  color: var(--co-txtmenufo);
  text-align: center;
  list-style: none;
  line-height: 13.553140096618357vw;
  transition: 0.5s;
  font-weight: 500;
}
.colmenu li:hover {
  color: var(--font-foohover);
}
.bloqueiff a p,
.col1nefo a p {
  transition: 0.5s;
}
.bloqueiff a p:hover,
.col1nefo a p:hover {
  color: var(--font-foohover);
}
.imgfoopc {
  display: none;
}
.colmenu img {
  margin-top: 11.5vw;
  width: 40.097vw;
  height: auto;
  margin-bottom: 13.768115942028986vw;
}
.bloqueiff {
  text-align: center;
}
.bloqueiff p {
  font-family: var(--font-parrafo2);
  font-size: var(--fs-pinfofomv);
  margin: 0;
  line-height: 5.36231884057971vw;
  font-weight: 300;
}
.titpif {
  color: var(--co-titinfofo);
  font-weight: 400 !important;
}
.txtpif {
  color: var(--co-txtinfofo);
}
.ultpif {
  margin-bottom: 7.488vw !important;
}
.ultpif.last {
  margin-bottom: 9.179vw !important;
}
.redesfooter {
  text-align: center;
}
.redesfooter img {
  width: 11.816vw;
  height: 11.816vw;
  filter: var(--sm-icon-color);
}
.btnigfo {
  margin-left: 5vw;
}
.infofooter {
  width: 86%;
  padding-bottom: 22.463768115942027vw;
  border-bottom: 1px solid #057d38;
  margin: auto;
}
.newsfooter {
  width: 85%;
  margin: auto;
  padding-top: 11.83574879227053vw;
}
.fila1newsfo {
  padding-bottom: 18.357vw;
  border-bottom: 1px solid #057d38;
}
.titnewslfo {
  font-family: var(--font-titulo2) !important;
  text-align: left !important;
  margin: 0;
  margin-bottom: 8.696vw;
}
.bloquenewsletter {
  height: 20.807vw;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.newsfooter input {
  width: 60%;
  font-size: 4.348vw;
  height: 20.107vw;
  background: transparent;
  border: 0.562vw solid #057d38;
  border-right: 0;
  border-top-left-radius: 7.246376811594203vw;
  border-bottom-left-radius: 7.246376811594203vw;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  text-indent: 6%;
  color: #ffffff !important;
  font-family: var(--font-parrafo2);
  font-weight: 300;
  padding: 0;
  -webkit-appearance: none;
}
.newsfooter input::placeholder {
  color: #ffffff;
  opacity: 0.75;
  font-family: var(--font-titulo2);
  font-weight: 300;
  font-style: italic;
}
.newsfooter button {
  background: #057d38;
  font-family: var(--font-titulo2);
  font-weight: 700;
  height: 20.807vw;
  border: 0.362vw solid #057d38;
  width: 40%;
  font-size: 4.348vw;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;
  border-top-right-radius: 7.246376811594203vw;
  border-bottom-right-radius: 7.246376811594203vw;
  padding: 0;
}
.newsfooter button:hover {
  background: #f7e3db;
  color: #057d38;
  border: 0.0562vw solid #f7e3db;
}
.fila2newsfo {
  display: flex;
  flex-direction: column-reverse;
}
.col2nefo {
  text-align: center;
  padding-top: 8.937198067632849vw;
  padding-bottom: 10.145vw;
}
.col2nefo img {
  width: 48.841vw;
  height: auto;
  margin: auto;
}
.col2nefo img.mo {
  display: flex;
}
.col2nefo img.pc {
  display: none;
}
.col1nefo {
  text-align: center;
  display: block;
}
.col1nefo a {
  width: 100%;
  color: var(--co-titinfofo);
  font-family: var(--font-parrafo2);
  font-size: var(--fs-pinfofomv);
}
.col1nefo a p {
  margin: 0;
  margin-top: 3.5816425120772946vw;
}
.fila2footer {
  margin: auto;
  width: 85%;
  padding-bottom: 19.565vw;
}
.fila2footer p {
  color: var(--co-txtcopy);
  font-family: var(--font-titulo2);
  font-size: var(--fs-txtcopymv);
  text-align: center;
  margin: 0;
  margin-top: 6.763vw;
}
.cart_msg {
  position: relative;
  top: 2vw;
}
.txtpif.light {
  font-weight: 400 !important;
  font-family: var(--font-parrafo2);
}
@media (max-width: 1024px) {
  #contacto .tl {
    margin: 0 0 12.56vw;
    font-size: 8.454vw;
    line-height: 90.5%;
  }
  #contacto .form-cont {
    padding-left: 12.802vw;
    padding-top: 20.773vw;
    padding-bottom: 18.599vw;
  }
  .col-con1 {
    width: 85.155vw;
  }
  .bloqueform {
    width: 100%;
    margin: 0;
  }
  .inputbf {
    height: 14.976vw;
    margin-bottom: 3.729vw;
    text-indent: 5%;
    font-size: 4.831vw;
    line-height: 6.039vw;
    font-family: "Plus Jakarta Sans";
  }
  .texa {
    height: 29.71vw;
    margin-bottom: 3.729vw;
    text-indent: 5%;
    font-size: 4.831vw;
    line-height: 6.039vw;
    font-family: "Plus Jakarta Sans";
  }
  #contacto p.txtaviso {
    font-size: 4.348vw;
    margin: 0 0 0 3.51vw;
    line-height: 174.19%;
  }
  #contacto .btnform {
    height: 19.082vw;
    border-radius: 6.039vw;
  }
  #contacto .inpcheck {
    margin-top: 1.72vw;
  }
  #contacto .bloqueaviso {
    display: flex;
    margin-bottom: 9.42vw;
    align-items: flex-start;
  }
  #contacto .btnform p {
    font-size: 4.348vw;
    line-height: 111%;
  }

  .fila1footer {
    padding-top: 13.285vw;
  }
  .mapcont {
    width: 100vw;
    height: 78.744vw;
  }
  .menufooter h5 {
    display: block;
    margin-top: 0;
    margin-bottom: 3.971vw;
  }
  .infofooter h5 {
    text-align: center !important;
    font-size: 5.314vw;
    margin: 0 0 5.797vw;
    font-family: "Inter";
  }
  .bloqueiff {
    text-align: center;
    width: 59.179vw;
    margin: auto;
  }
  .txtpif span {
    display: none;
  }
  .txtpif br {
    display: block;
  }
  .titnewslfo.mo {
    display: block;
    width: 100%;
  }
  .titnewslfo.pc {
    display: none;
  }
}
@media (min-width: 1024px) {
  .sectionsucursales {
    padding-bottom: 0;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  }
  .mapcont {
    width: 48.125vw;
    height: 45.104vw;
  }
  .titnewslfo {
    font-family: var(--font-titulo1) !important;
  }
  .titnewslfo.mo {
    display: none;
  }
  .titnewslfo.pc {
    display: block;
    text-align: left !important;
  }
  .col2nefo img.mo {
    display: none;
  }
  .col2nefo img.pc {
    display: flex;
  }
  .txtpif span {
    display: inline;
  }
  .txtpif br {
    display: none;
  }
  .col2nefo {
    padding-bottom: 0;
  }
  .titpif {
    color: var(--co-titinfofo);
    font-weight: 600 !important;
  }
  .bloquefooter {
    padding-top: 0;
  }
  .fila1footer {
    display: flex;
    width: 85%;
    border-bottom: 0px solid #55cd00;
    margin: auto;
    padding-left: 8.854166666666668vw;
    height: 20.260416666666668vw;
    padding-top: 2.917vw;
  }
  .colmenu {
    width: 27%;
    display: flex;
    border-right: 1px solid #057d38;
    padding-top: 0.8854166666666666vw;
  }
  .menufooter h5 {
    margin-bottom: 1.7187500000000002vw !important;
  }
  .infofooter {
    width: 13.49vw;
    border-right: 1px solid #057d38;
    margin: 0;
    padding-left: 4.270833333333333vw;
    padding-right: 3.125vw;
    padding-top: 0.8854166666666666vw;
    padding-bottom: 0vw;
    border-bottom: 0px solid #55cd00;
  }
  .newsfooter {
    width: 40%;
    padding-top: 0.8854166666666666vw;
    margin: 0 !important;
    padding-left: 4.270833333333333vw;
  }
  .fila1footer h5 {
    text-align: left !important;
    font-size: 0.938vw;
    line-height: 1vw;
    font-weight: 700;
    margin: 0;
  }
  .colmenu li {
    font-size: var(--fs-txtmenufo);
    text-align: left;
    line-height: 2.0458333333333334vw;
    font-weight: 400;
  }
  .imgfoomv {
    display: none;
  }
  .imgfoopc {
    display: block;
  }
  .colmenu img {
    margin-top: 0;
    width: 10.364vw;
    height: 12.135vw;
    margin-top: 2.448vw;
    margin-bottom: 11.353vw;
    margin-left: 4.792vw;
  }
  .bloqueiff p {
    font-size: var(--fs-txtinfofo);
    margin: 0;
    line-height: 1.1250000000000002vw;
    text-align: left;
    font-family: var(--font-parrafo2);
  }
  .ultpif {
    margin-bottom: 1.3541666666666667vw !important;
    /*display: flex;*/
  }
  .ultpif.last {
    margin-bottom: 0 !important;
  }
  .redesfooter {
    /*padding-top: 1.34375vw; 
    display: none;*/
    width: fit-content;
  }
  .redesfooter img {
    width: 1.875vw;
    height: 1.875vw;
  }
  .btnigfo {
    margin-left: 1vw;
  }
  .infofooter h5 {
    margin-bottom: 1.25vw !important;
  }
  .titnewslfo {
    /*font-family: var(--font-titulo2) !important;*/
    font-weight: 800;
    margin-bottom: 1.0416666666666665vw !important;
  }
  .bloquenewsletter {
    /*height: 2.604166666666667vw;*/
    height: 2.8804166666666666vw;
    display: flex;
    align-items: center;
  }
  .newsfooter input {
    width: 54%;
    height: 2.166666666667vw;
    border-top-left-radius: 7.246376811594203vw;
    border-bottom-left-radius: 7.246376811594203vw;
    text-indent: 8%;
    color: #ffffff !important;
    font-size: 0.729vw;
    border: 0.162vw solid #057d38;
    border-right: none;
  }
  .newsfooter input::placeholder {
    color: #ffffff;
    opacity: 1;
    font-style: normal;
  }
  .newsfooter button {
    height: 2.5vw;
    width: 15%;
    font-size: 0.938vw;
    color: #ffffff;
    border-top-right-radius: 7.246376811594203vw;
    border: 0.162vw solid #057d38;
    border-bottom-right-radius: 7.246376811594203vw;
  }
  .fila1newsfo {
    padding-bottom: 0vw;
    border-bottom: 0px solid #55cd00;
  }
  .fila2newsfo {
    display: flex;
    flex-direction: row;
    /*padding-top: 9.5vw;*/
    padding-top: 10.15vw;
    width: 73%;
  }
  .col1nefo {
    width: 50%;
  }
  .col2nefo {
    width: 50%;
    padding-top: 0vw;
  }
  .col1nefo a {
    width: 30%;
    font-size: var(--fs-txtinfofo);
    text-align: left;
  }
  .col1nefo a p {
    margin: 0;
    margin-top: 0.3125vw;
    font-weight: 300;
  }
  .col2nefo img {
    width: 10.573vw;
    height: auto;
    margin-top: -0.5vw;
  }
  .fila2footer {
    padding-bottom: 2.3958333333333335vw;
    border-top: 1px solid #057d38;
    margin-top: 2vw;
    width: 92%;
  }
  .fila2footer p {
    font-size: var(--fs-txtcopy);
    text-align: center;
    margin: 0;
    margin-top: 1.5625vw;
    width: 92%;
  }
}
</style>
