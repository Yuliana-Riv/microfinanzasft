 <template >
  <div class="error-404">
    <Navigator />
     <div class="box_error">
 <img src="../assets/Framepc.png" alt="404" class="err_pc" />
      <div class="cnt_bx_err">
            <p style="font-style: italic;" class="title">Algo salió mal...</p>
              <p class="subt">No hemos logrado encontrar el contenido que buscas. </p>
            <p class="subt"> Utiliza el siguiente enlace para encontrar <a href="/"> el camino de regreso.</a></p>
      </div>
      <img src="../assets/Frame.png" alt="404" class="err_mv" />
     </div>
    <Footer />
  </div>
</template>
<script>
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
export default {
  name: "Error404",
  data() {
    return {
      status: "error",
      message: "",
    };
  },
  metaInfo() {
    return {
      title: "Error 404",
      titleTemplate: "%s | Microfinanzas",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Microfinanzas.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
  components: {
    Navigator,
    Footer,
  },
};
</script>
<style scoped>
.error-404 {
 
}
.err_mv{
  display: none;
  width: 85.99033816425121vw;
  margin-top: 7.246376811594203vw;
  margin-bottom: 7.246376811594203vw;
}
.box_error{
 padding-top: 10.229vw;
 margin-bottom: 0;
 margin-left: 0;
 display: flex;
}
img.err_pc{
  position: absolute;
  width: 43.072916666666664vw;
  height: auto;
  margin-left: 5.625vw;
  margin-right: 9.739583333333334vw;
}
.cnt_bx_err{
  width: 34.115vw;
  height: 44.427vw;
    margin-left: 56.198vw;
}
.cnt_bx_err p.title{
  font-family: "Plus Jakarta Sans";
  color:#008000;
  font-size: 3.802vw;
  font-weight: 800;
  margin-top: 16.908212560386474vw;
  margin-bottom: 4.583vw;
  text-align: center;
}
.cnt_bx_err  p.subt{
  font-family: "Plus Jakarta Sans";
 color: #4A4A4A;
 font-weight: 700;
 text-align: center;
 font-size: 1.042vw;

}
.cnt_bx_err  p.subt a{
 color: #FA8433;
 text-decoration: underline;
}

@media (min-width:769px) {
  .box_error {
  /*height: 44.07vw;*/
  height: 39.531vw;
    overflow: hidden;
    align-items: flex-end;
}.cnt_bx_err { 
    position: relative;
    z-index: 100;
}
}

@media (max-width: 768px) {
  .err_pc{
  display: none;
  width:43.072916666666664vw;
}
.err_mv{
  display: block;
}

.box_error{
  display:block;
  padding-top: 16.908vw;
  margin-bottom: 0;
}

.cnt_bx_err{
  width: 82.850vw;
  margin-left: auto;
  margin-right: auto;
  height: 51.083vw;
}

.cnt_bx_err p.title{
  font-size: 8.454vw;
}
.cnt_bx_err  p.subt{
font-size: 4.831vw;

}
.cnt_bx_err  p.subt a{
}


img.err_mv{
    width: 85.99vw;
    height: 82.609vw;
    margin: 7.246376811594203vw auto 7.246376811594203vw;
}




}

</style>