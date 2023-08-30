<template >
  <div id="EditarSucursal">

    

    <div class="form-content">

      
 


      <form
        @submit.prevent="
          submit(
            added.id,
            added.name,
            added.address,
            added.phone,
            added.wlink,
            file1,
          
          )
        "
      >
    
        <div class="grup-form dflx">
          <!--nombre-->
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="added.name"
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
              v-model="added.phone"
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
              v-model="added.address"
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
              v-model="added.wlink"
              id="wlink"
              name="wlink"
          
              
              class="in1"
            />
          </div>
        </div>


       


        

        <!--imagen-->
        <div class="grup-form dflx">
          <div class="boxform">
            <label>Imagen</label>
            <div class="dflx">
              <label class="filelabel" for="file1">
                <span>Seleccionar Archivo</span>
              </label>
              <label class="filelabelname tbl_item" for="file1">
                {{ added.image }}
              </label>
            </div>

            <input
              @change="previewFiles"
              :v-model="added.image"
              type="file"
              id="file1"
              name="uploadimg"
              class="fileinput"
            />
          </div>
        </div>
     
        <img class="img_item" v-if="validateIMG(added.image)" :src="url+'/'+ endpointCodes.get +'/sucursal-img/'+added.image" alt="">

   
     


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
    </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Sucursal actualizada</h3>
          <img src="../../assets/default/add.png" alt="icono alerta" />
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
let {url, endpointCodes} = require("../../global/index");
import userService from '../../services/user.service'
export default {
  name: "EditPro",

  data() {
    return {
      url:url,
      endpointCodes:endpointCodes,
      status: "",
      message: "",
    
      name: "",
      id_category: 1,
      id_type: 1,
      descr: "",
      price: null,
      image: "",

      cat_name: "NINGUNA",
      type_name: "NINGUNA",


      search_value: "",
      updsearchcli: "",


    
      active: false,
      value: "",
      value1: "",
      value2: "",
    
      archivo: "No se eligió archivo",
     
      file1: null,
    

      //MODAL

      viewModal: false,
 

    
    };
  },
  async created() {
 
  },

  
  computed: {
  
    
     
    added() {
      return this.$store.getters["sucursal/getAdded"];
    },
    
   
  },
  methods: {
 
 
  


    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },

  validateIMG: async function (img){
      const result = await userService.validateIMG('sucursal-img', img)
      return result
    },

  

 
    submit: async function ( id, name,  address, phone, wlink, image  ) {
      this.status = "";
      this.message = "";
      let data = [];

      if (image == null) {
        data = {
          id, name,  address, phone, wlink
        
        };
      } else {
        data = new FormData();
        data.append("id", id);
        data.append("name", name);
        data.append("address", address);
        data.append("phone", phone);
        data.append("wlink", wlink);
        data.append("image", image);
  

        data.append("_method", "PUT");
      }
      let result = await this.$store.dispatch("sucursal/editItemScl", {
        option: "sucursal",

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
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },

    showModal: function () {
      this.viewModal = true;
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




#EditarSucursal label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}
.sp{
  justify-content: space-between
  ;
}
#EditarSucursal input,
#EditarSucursal select {
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