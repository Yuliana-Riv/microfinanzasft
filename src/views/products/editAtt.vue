<template >
  <div id="EditCat">
    <div class="form-content">
     
      <form @submit.prevent="submit(added.name)">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Marca </label>
            <input
              v-model="added.name"
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
   
   <!-- Agregar valores -->
    <hr class="hrdr">
   <p class="subtitle">AGREGAR VALORES</p>
  

    <form @submit.prevent="addValue(valor)">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="valor" class="valor">Valor </label>
            <input
              v-model="valor"
              type="text"
              id="valor"
              name="valor"
              required
            />
          </div>
        </div>

        <div class="dflx">
          
          <button class="alta" type="submit">Agregar</button>
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

   <!-- tabla valores -->
   <p class="subtitle">VALORES AGREGADOS</p>


   <div class="header_tbl_valores dflx">
        <p class="tbv-h1">VALOR</p>
        <p class="tbv-h2">ELIMINAR</p>
   </div>
   <div  class="ctn_tblv" v-if="added.values.length>0">
      <div class="body_tbl_valores dflx"  v-for="(item ,key) in added.values" :key="key">
          <p class="tbv-b1">{{item.valor}}</p> 
          <p class="tbv-b2" @click="modalDelete=true, itemDel = item.id">&#10006;</p> 
      </div>
   </div>
   <div class="ctn_tblv"  v-else>
    <div class="body_tbl_valores">
        <p>Sin valores agregados</p>
    </div>
        
   </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Atributo actualizado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
    <div v-if="modalAdd" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Valor agregado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="modalAdd = false" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
    <div v-if="modalEliminado" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Valor eliminado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="modalEliminado = false" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
     <div v-if="modalDelete" class="modal_view">
           
            <div id="modal_delete">
                <div class="body">
                     <img src="../../assets/alert.png" alt="icono alerta">
            <h3 >¿Estás seguro de  <span>eliminar <br> este valor?</span></h3>
                </div>
           
            <div class="modal_del_btns dflx">
                <p @click="eliminarValor()">Aceptar</p>   <p  @click="modalDelete=false, itemDel=''" >Cancelar</p>
            </div>
          </div>
        </div> 
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "EditAtr",
//	&#10006;
  data() {
    return {
      status: "",
      message: "",
      name:"",
      valor:"",
      active: false,
      value1:"",
      viewModal: false,
      modalAdd:false,
      modalEliminado:false,
       itemDel:'',
       modalDelete:false,

    };
  },
  created() {
    this.getAllInfoAtt("atributo");
  },
  computed: {
    added() {
      return this.$store.getters["atributo/getAdded"];
    },
    atributo() {
      return this.$store.getters["atributo/data"];
    },
  },
  methods: {
    ...mapActions("atributo", ["getAllInfoAtt"]),
    ...mapActions("atributo", ["setAddedAtt"]),
    ...mapActions("atributo", ["setHistoryOptionAtt"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("atributo", ["getInfoByIdAtt"]),
    submit: async function (name) {
      this.status = "";
      this.message = "";
      let atributo = {
        id: this.added.id,
        name: name,
      };

      let result = await this.$store.dispatch("atributo/editItemAtt", {
        option: "atributo",
        item: atributo,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
          this.delStatus()
      } else {
        // success
        this.showModal();
      }
    },
    addValue: async function (valor){
       this.status = "";
      this.message = "";

      const data ={id_atributo: this.added.id, valor};

      const payload ={
        option:"atributo",
        id: this.added.id
      }

      let result = await this.$store.dispatch("atributo/addItemAtt", {
        option: "atributo_valor",
        item: data,
      });

      

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
        this.delStatus()
      } else {
        // success
        this.valor =""
          const resultID = await  this.getInfoByIdAtt(payload)
          this.setAddedAtt(resultID)
          this.modalAdd = true
      }


    
  
    },
    eliminarValor: async function (){
      this.modalDelete = false
       let id = this.itemDel
            this.status='';
            this.message='';
          
             let result = await this.$store.dispatch("atributo/deleteItemAtt", {option: 'atributo_valor', id:id});
           
            if(result.status=='error'){
            this.message = result.message;
            this.status='error'
            this.delStatus()
           
            }else{
                this.status='';
                this.message='';
                // success
                 const payload ={
                  option:"atributo",
                  id: this.added.id
                }
                const resultID = await  this.getInfoByIdAtt(payload)
                this.setAddedAtt(resultID)
                this.modalEliminado = true
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
      this.setAddedAtt("");
      this.setHistoryOptionAtt("Default");
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

.header_tbl_valores{
  background: var(--color-1);
  color: var(--color-5);
  font-size: .8vw;
  font-weight: 800;
  width: 40%;
  text-align: center;
  margin-top: 2vw;
  
}
.body_tbl_valores{
  background: var(--color-2);
  color: var(--color-5);
  font-size: .6vw;
  font-weight: 400;
  width: 40%;
  margin-top: .1vw;
}
.header_tbl_valores p , .body_tbl_valores p{
 margin: 0vw;
padding: .5vw .5vw;
}


p.tbv-h1{
  width: 80%;
  border-right: 1px solid white;
}p.tbv-h2{
   width: 20%;
    
}p.tbv-b1{
  width: 80%;
    border-right: 1px solid white;
}p.tbv-b2{
  width: 20%;
  text-align: center;
  cursor: pointer;
}
p.tbv-b2:hover{
  color: var(--color-1);
  font-weight: 800;
}





</style>