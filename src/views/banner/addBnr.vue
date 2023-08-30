<template >
  <div id="AddCat">
    <div class="form-content">
      <form @submit.prevent="submit(link, file1, file2)">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Link </label>
            <input
              v-model="link"
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
            <h3>Se agregó un banner</h3>
            <img src="../../assets/add.png" alt="icono alerta" />
          </div>

          <div class="modal_add_btns dflx">
            <p @click="Add()" class="otro">Aceptar</p>
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
  name: "AddCat",
  data() {
    return {
      status: "",
      message: "",
      link:"",
      parent_name: "NINGUNA",
      search_value: "",
      updsearchcli: "",
      updsearchcli2: "",
      active: false,
      value1: "",
      value2: "",
      archivo: "No se eligió archivo",
      file1: null,
      archivo2: "No se eligió archivo",
      file2: null,


      //MODAL

      viewModal: false,
    };
  },
  created() {
    this.getAllInfoBnr("banner");
  },
  updated() {
    if (this.search_value != this.updsearchcli) {
      this.updsearchcli = this.search_value;

      let option = "banner";

      let value = this.search_value;

      let payload = {
        option: option,
        search: value,
      };
      if (value != "") {
        this.$store.dispatch("banner/searchBnr", payload);
      } else {
        this.getAllInfoIng("banner");
      }
    }
    
  },
  computed: {
    banner() {
      let allctg = this.$store.getters["banner/data"];
      let result = [];
      let model;
      for (var i = 0; i < allctg.length; i++) {
          model = {
            id: allctg[i].id,
            link: allctg[i].link,
          };
        result.push(model);
      }

      return result;
    },
  },
  methods: {
    ...mapActions("banner", ["getAllInfoBnr"]),
    ...mapActions("banner", ["setAddedBnr"]),
    ...mapActions("banner", ["setHistoryOptionBnr"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    submit: async function (link, image, image_mv) {
      this.status = "";
      this.message = "";
      let data = [];

      if (image == null) {
        data = {
          link: link,
          /*image: image,
          image_mv: image_mv,*/
        };
      } else {
         data = new FormData();
        data.append("link", link);
        data.append("image", image);
        data.append("image_mv", image_mv);
        data.append("_method", "POST");
      }
      let result = await this.$store.dispatch("banner/addItemBnr", {
        option: "banner",
        item: data,
      });
      console.log(result)
      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        this.setAddedBnr(result.added);
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

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedBnr("");
      this.setHistoryOptionBnr("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.link = "";
      this.image = "";
      this.image_mv = "";

      this.viewModal = false;
      this.setAddedBnr("");
    },
    toEdit: function () {
      this.setHistoryOptionBnr("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    previewFiles(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
    },
    previewFiles2(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file2 = files[0];
      this.archivo2 = this.file2.name;
    },
  },
};
</script>
<style scoped>
.grup-form {
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
  color: var(--color-2);
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