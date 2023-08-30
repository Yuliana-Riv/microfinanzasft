<template >
  <div id="AddCat">
    <div class="form-content">
      <form @submit.prevent="submit(name)">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Atributo </label>
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
             
              required
              class="in1"
            />
          </div>
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Guardar</button>
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
            <h3>Atributo agregado</h3>
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
  name: "AddAtt",
  data() {
    return {
      status: "",
      message: "",
      name: "",
      id_parent: 1,
      parent_name: "NINGUNA",
      search_value: "",
      updsearchcli: "",
      active: false,
          value1:'',

      //MODAL

      viewModal: false,
    };
  },
  created() {
    this.getAllInfoAtt("atributo");
  },
  updated() {
    if (this.search_value != this.updsearchcli) {
      this.updsearchcli = this.search_value;

      let option = "atributo";

      let value = this.search_value;

      let payload = {
        option: option,
        search: value,
      };
      if (value != "") {
        this.$store.dispatch("atributo/searchAtt", payload);
      } else {
        this.getAllInfoIng("atributo");
      }
    }
  },
  computed: {
    atributo() {
      let allctg = this.$store.getters["atributo/data"];
      let result = [];
      let model;
      for (var i = 0; i < allctg.length; i++) {
          model = {
            id: allctg[i].id,
            name: allctg[i].name,
          };
        result.push(model);
      }

      return result;
    },
  },
  methods: {
    ...mapActions("atributo", ["getAllInfoAtt"]),
    ...mapActions("atributo", ["setAddedAtt"]),
    ...mapActions("atributo", ["setHistoryOptionAtt"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    submit: async function (name) {
      this.status = "";
      this.message = "";
      let data = {
        name: name,
      };

      let result = await this.$store.dispatch("atributo/addItemAtt", {
        option: "atributo",
        item: data,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        this.setAddedAtt(result.added);
        this.showModal();
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

        includesItem(search, name){
      if(search ==''){
        return true
      }
      name = name.toLowerCase()
      search= search.toLowerCase()
      if(search ==''){
          return false;
      }
      return name.includes(search)
    },


    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedAtt("");
      this.setHistoryOptionAtt("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = "";

      this.viewModal = false;
      this.setAddedAtt("");
    },
    toEdit: function () {
      this.setHistoryOptionAtt("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
  },
};
</script>
<style scoped>
.grup-form{
    align-items: flex-start;
}
#AddCat label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddCat input,
#AddCat select {
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
</style>