<template >
  <div id="EditGlp">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            added.send_type,
            added.shipping_price,
            added.free_shipping,
            added.texto
          )
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="shipping_price" class="shipping_price"
              >Precio fijo envio {{ added.send_type }}</label
            >
            <input
              v-model="added.shipping_price"
              type="number"
              name="shipping_price"
              min="0"
              step="any"
              required
            />
          </div>
          <div class="boxform">
            <label for="free_shipping" class="free_shipping"
              >Envío gratis a partir de
              <span>**Para desactivar <b>envios gratis</b> indicar '0'.</span>
            </label>
            <input
              v-model="added.free_shipping"
              type="number"
              name="free_shipping"
              min="0"
              step="any"
              required
            />
          </div>
        </div>
        <div class="boxform">
          <label for="texto" class="texto">TEXTO</label>
          <textarea v-model="added.texto" name="texto"></textarea>
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Editar</button>
        </div>

        <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>
      </form>
    </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Información actualizada</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "EditGlp",

  data() {
    return {
      status: "",
      message: "",
      active: false,

      viewModal: false,
    };
  },

  computed: {
    added() {
      return this.$store.getters["global_params/getAdded"];
    },
  },
  methods: {
    ...mapActions("global_params", ["setAddedGlp"]),
    ...mapActions("global_params", ["setHistoryOptionGlp"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("global_params", ["getInfoByIdGlp"]),
    submit: async function (send_type, shipping_price, free_shipping, texto) {
      this.status = "";
      this.message = "";
      let data = {
        id: this.added.id,
        send_type,
        shipping_price,
        free_shipping,
        texto,
      };

      let result = await this.$store.dispatch("global_params/editItemGlp", {
        option: "global_params",
        item: data,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        this.showModal();
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
      this.status2 = "";
      this.message2 = "";
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedGlp("");
      this.setHistoryOptionGlp("Default");
    },
    Edit: function () {
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
  },
};
</script>
<style scoped>
#EditGlp label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditGlp input,
#EditGlp select {
  height: 2.5vw;
  width: 14.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-4);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
}

#select-role {
  height: 2.5vw;
  width: 13.716667vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-4);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
  display: flex;
  align-items: center;
  background-image: url("../../assets/blueflecha.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 12.6vw;
}
#select-role.rounded {
  border-radius: 0vw 1.5vw 0vw 0vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0.052083vw solid var(--color-2);
  border-bottom: 0;
}
#select-ch:checked ~ .options-cont {
  display: flex;
  position: absolute;
  padding: 0.573vw 1.25vw;
  flex-direction: column;
  background-color: white;
  width: 12.3vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0;
  border-bottom: 0.052083vw solid var(--color-2);
}
.free_shipping span {
  color: gray;
  font-size: 0.5vw;
  margin-left: 1vw;
}
.form-content textarea {
  resize: none;
  width: 35vw;
  height: 7vw;
  border-radius: 0 2vw 2vw 0;
  font-family: inherit;
  border: 0.052083vw solid var(--color-2);
  color: var(--color-4);
  font-size: 0.7291666666666666vw;
  padding: 1vw;
}
</style>