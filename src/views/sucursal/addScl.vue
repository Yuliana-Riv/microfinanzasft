<template >
  <div id="AddScl">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            name, address, phone, wlink, file1
           
          )
        "
      >
        <div class="grup-form dflx">
          <!--nombre-->
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              
              required
              class="in1"
            />
          </div>

            <div class="boxform">
            <label for="phone" class="phone">Teléfono </label>
            <input
              v-model="phone"
              type="text"
              id="phone"
              name="phone"
              minlength="10"
              maxlength="10"
              size="10"
              pattern="\d*"
              required
            />
          </div>

           </div>

       
 <div class="grup-form dflx">
          <!--addressipcion-->
          <div class="boxform">
            <label for="address" class="address">Dirección </label>
            <textarea
              v-model="address"
              id="address"
              name="address"
          
              
              class="in1"
            />
          </div>
        </div>
        <div class="grup-form dflx">
          <!--addressipcion-->
          <div class="boxform">
            <label for="wlink" class="wlink">Whatsapp Link </label>
            <textarea
              v-model="wlink"
              id="wlink"
              name="wlink"
          
              
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
    
         

          <div class="boxform">
            <label>Imagen</label>
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
            />
          </div>
        </div>

      

        <!--regresar/guardar-->
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
            <h3>Sucursal agregada</h3>
            <img src="../../assets/default/add.png" alt="icono alerta" />
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
  name: "AddScl",
  data() {
    return {
      status: "",
      message: "",
     
     
       name: "",
       address: "",
        wlink: "",
        phone: '',
    
      
    
   
     
      url: "",
    

      search_value: "",
      updsearchcli: "",
    
   

      
      active: false,
      value1: "",
      value2: "",
      archivo: "No se eligió archivo",
      file1: null,

      //MODAL

      viewModal: false,
    };
  },
  created() {
    
  },
 


  methods: {
    ...mapActions("sucursal", ["getAllInfoScl"]),
    ...mapActions("sucursal", ["setAddedScl"]),
    ...mapActions("sucursal", ["setHistoryOptionScl"]),
 
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    submit: async function (
      name, address, phone, wlink,image
    ) {
      this.status = "";
      this.message = "";
      let data = [];

      if (image == null) {
        data = {
          name: name,
          wlink: wlink,
          address: address,
          phone: phone,
          
        };
      } else {
         data = new FormData();
        data.append("name", name);
 
        data.append("wlink", wlink);
        data.append("address", address);
        data.append("phone", phone);
        data.append("image", image);
        data.append("_method", "POST");
      }
      let result = await this.$store.dispatch("sucursal/addItemScl", {
        option: "sucursal",
        item: data,
      });
      console.log(result)

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        this.setAddedScl(result.added);
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

    includesItem2(search, name) {
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
      this.setAddedScl("");
      this.setHistoryOptionScl("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = ""
   

      this.wlink =''
      this.phone =''
    
      this.address=''

      this.phone=''

      this.file1=null
  

      this.viewModal = false;
      this.setAddedScl("");
    },
    toEdit: function () {
      this.setHistoryOptionScl("Edit");
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
  },
};
</script>
<style scoped>
.grup-form {
  align-items: flex-start;
}
#AddScl label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddScl input,
#AddScl select {
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
  background-image: url("../../assets/default/blueflecha.svg");
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