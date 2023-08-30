<template >
  <div id="EditCat">
    <div class="form-content">
      <form @submit.prevent="submit(added.link, file1, file2)">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Link </label>
            <input
              v-model="added.link"
              type="text"
              id="name"
              required
              name="name"
              class="in1"
            />
          </div>

          <div class="boxform">
            <label>Imagen PC</label>
            <div class="dflx">
              <label class="filelabel" for="uploadimg">
                <span>Seleccionar Archivo</span></label
              >
              <label class="filelabelname tbl_item" for="uploadimg">
                {{ archivo }}</label
              >
            </div>

            <input
              @change="previewFiles"
              :v-model="added.image"
              type="file"
              id="uploadimg"
              name="uploadimg"
              required
              class="fileinput"
            />
          </div>

          <div class="boxform">
            <label>Imagen Movil</label>
            <div class="dflx">
              <label class="filelabel" for="uploadimg2">
                <span>Seleccionar Archivo</span></label
              >
              <label class="filelabelname tbl_item" for="uploadimg2">
                {{ archivo2 }}</label
              >
            </div>

            <input
              @change="previewFiles2"
              :v-model="added.image_mv"
              type="file"
              id="uploadimg2"
              name="uploadimg2"
              required
              class="fileinput"
            />
          </div>
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
          <h3>Banner actualizado</h3>
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
  name: "EditCat",

  data() {
    return {
      status: "",
      message: "",
      active: false,
      value1:"",
      viewModal: false,
    };
  },
  created() {
    this.getAllInfoCat("category");
  },
  computed: {
    added() {
      return this.$store.getters["category/getAdded"];
    },
    categorias() {
      return this.$store.getters["category/data"];
    },
  },
  methods: {
    ...mapActions("category", ["getAllInfoCat"]),
    ...mapActions("category", ["setAddedCat"]),
    ...mapActions("category", ["setHistoryOptionCat"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("category", ["getInfoByIdCat"]),
    submit: async function (name, id_parent) {
      this.status = "";
      this.message = "";
      let category = {
        id: this.added.id,
        name: name,
        id_parent: id_parent,
      };

      let result = await this.$store.dispatch("category/editItemCat", {
        option: "category",
        item: category,
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

    includesItem(search, name) {
      if (search == "") {
        return true;
      }
      name = name.toLowerCase();
      search = search.toLowerCase();
      if (search == "") {
        return false;
      }
      return name.includes(search);
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
      this.setAddedCat("");
      this.setHistoryOptionCat("Default");
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
#EditCat label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditCat input,
#EditCat select {
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