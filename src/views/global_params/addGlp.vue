<template >
  <div id="AddGlp">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(send_type, shipping_price, free_shipping, texto)
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="role" class="role">Tipo de envío </label>
            <div class="select-container">
              <input
                type="checkbox"
                name="select-ch"
                id="select-ch"
                v-model="active"
                :true-value="true"
                :false-value="false"
              />
              <label for="select-ch">
                <div id="select-role" :class="{ rounded: active }">
                  {{ send_type }}
                </div>
              </label>
              <div class="options-cont" @click="closeSelect()">
                <div
                  v-for="(si, i) in selectitems"
                  :key="i"
                  class="option-btn"
                  @click="selectOP(si.option)" 
                >
                  {{ si.option }}
                </div>
              </div>
            </div>
          </div>
          <div class="boxform">
            <label for="shipping_price" class="shipping_price"
              >Precio fijo envio
              <!--local--></label
            >
            <input
              v-model="shipping_price"
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
              <span
                >**Para desactivar <b>envios gratis</b> indicar '0'.</span
              ></label
            >
            <input
              v-model="free_shipping"
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
          <textarea v-model="texto" name="texto"></textarea>
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit " :class="{ ava: isav == true }">
            Guardar
          </button>
          <label v-if="isav"
            >**Ya existe configuración para envío {{ send_type }}.</label
          >
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

      <div v-if="viewModal" class="modal_view">
        <div id="modal_add">
          <div class="body dflx">
            <h3>Información guardada</h3>
            <img src="../../assets/add.png" alt="icono alerta" />
          </div>

          <div class="modal_add_btns dflx">
            <p @click="Add()" class="otro">Aceptar</p>
            <p @click="toEdit()" class="editar">Editar</p>
            <p @click="back()" class="inicio">Inicio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddGlp",
  data() {
    return {
      status: "",
      message: "",

      send_type: "Selecciona el tipo de envío.",
      shipping_price: "",
      free_shipping: "",
      texto: "",
      active: false,

      selectitems: [
        {
          option: "LOCAL",
        },
        {
          option: "ESTATAL",
        },
        {
          option: "NACIONAL",
        },
      ],
      isav: false,
      //MODAL

      viewModal: false,
    };
  },
  async created() {
    await this.getAllInfoGlp("global_params");
  },
  computed: {
    data() {
      let array = this.$store.getters["global_params/data"];
      return array;
    },
  },
  methods: {
    ...mapActions("global_params", ["setAddedGlp"]),
    ...mapActions("global_params", ["setHistoryOptionGlp"]),
    ...mapActions("global_params", ["getAllInfoGlp"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    selectOP: async function(send_type){
      this.send_type = send_type;
      let arr = this.data;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].send_type !== this.send_type){ 
          this.isav = false;
        } else{
          this.isav = true;
        }
      }
    },
    submit: async function (send_type, shipping_price, free_shipping, texto) {
      this.status = "";
      this.message = "";
      let data = {
        send_type,
        shipping_price,
        free_shipping,
        texto,
      };
      if (send_type == "Selecciona el tipo de envío.") {
        this.status = "error";
        this.message = "Selecciona el tipo de envío.";
      } else {
        let result = await this.$store.dispatch("global_params/addItemGlp", {
          option: "global_params",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.setAddedGlp(result.added);
          this.showModal();
        }
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedGlp("");
      this.setHistoryOptionGlp("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = "";

      this.viewModal = false;
      this.setAddedGlp("");
    },
    toEdit: function () {
      this.setHistoryOptionGlp("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
  },  
};
</script>
<style scoped>
#AddGlp label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddGlp input,
#AddGlp select {
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

.ava {
  pointer-events: none;
  opacity: 0.5;
}
</style>