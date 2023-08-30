<template >
    <div id="AddSct">
       
        <div class="form-content">
            <form @submit.prevent="
                submit(
                 name,
                 id_category
                )
              ">
         
    

                    <div class="grup-form dflx">
                        <div class="boxform">
                            <label for="name" class="name">Nombre </label>
                            <input v-model="name" type="text" id="name" name="name"    required class="in1">
                        </div>
                        
                       
                       
                    </div>
                   <div class="grup-form dflx">
                      <div class="boxform">
            <label for="category" class="role">Subcategoría</label>

            <input
              v-model="cat_name"
              type="text"
              id="category"
              name="category"
              disabled
              required
            />

            <div class="content-tbl-items">
              <div class="tblitems">
                <div class="bodytbl-items tbl_item">
                  <div
                    v-if="
                      categorias.length>0
                    "
                  >
                    <div v-for="(prm, key) in categorias" :key="key">
                      <p
                        v-if="includesItem(value1, prm.name)"
                        class="itemp cp"
                        @click="(cat_name = prm.name), (id_category = prm.id)"
                      >
                        {{ prm.name }}
                      </p>
                    </div>
                  </div>
                  <div v-else>
                    <p class="item cp">No se encontraron coincidencias.</p>
                  </div>
                </div>
              </div>
              <div class="buscador-items dflx">
                <input
                  v-model="value1"
                  type="search"
                  id="inputbusqueda"
                  class="form-control searching-it"
                  :placeholder="'Búsqueda'"
                />
                <div class="icon_buscar">
                  <img src="../../assets/default/Search.png" alt="icono buscar" />
                </div>
              </div>
            </div>
          </div>
                   </div>

                    
                   
                   
                
                   
                    



                    
                        <div class="dflx">
                               <p @click="wait()" class="btnRegresar">Regresar</p>
                                  <button class="alta" type="submit">Guardar </button>
                        </div>
                     

                        <div v-if="status !=''" class="status_messages">
                            <div v-if="status =='success'" class="msg msg_success">
                                 <p>{{message}}</p>
                            </div>
                            <div  v-if="status =='error'" class="msg msg_error">
                                <p>{{message}}</p>
                            </div>
                        </div>
            </form>
     


        <div v-if="viewModal" class="modal_view">
           
            <div id="modal_add">
                <div class="body dflx">
                     
                           <h3>Subcategoría agregada</h3>
                           <img src="../../assets/default/add.png" alt="icono alerta">
                </div>
           
            <div class="modal_add_btns dflx">
                <p @click="Add()" class="otro">Aceptar</p> <p  @click="toEdit()" class="editar">Editar</p>  <p  @click="back()" class="inicio">Inicio</p>
            </div>
          </div>
        </div> 

        </div>
           
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'AddSct',
    data(){
        return{
           status:'',
           message:'',
           name:"" ,
           id_category: "",
           cat_name: "NINGUNA",
        
      active: false,


           //MODAL

            viewModal:false,


        value1: "",


        }
    },
   async created() {
      await this.getAllInfoCtg("category");
   },


  computed: {
    categorias() {
      let arr = this.$store.getters["category/data"];
      if(Array.isArray(arr)){
        return arr
      }else{
        return []
      }
    
    },
   
  },
  
    methods:{
        ...mapActions("category", ["getAllInfoCtg"]),
 
         ...mapActions('subcategory', ['setAddedSct']),
         ...mapActions('subcategory', ['setHistoryOptionSct']),
          wait: function(){
            setTimeout(() => this.$router.go(), 200);
        },
        submit: async function( name,  id_category ){
                 this.status =''
                 this.message =''
           let data ={
                    name,
                    id_category
             
                  }

                  

                    let result = await this.$store.dispatch("subcategory/addItemSct",  {option:'subcategory', item: data});
                   
                    if(result.status=='error'){
                        this.status='error'
                        this.message= result.message
                    }else{ // success
                         this.setAddedSct(result.added )
                       this.showModal()
                        
                       
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

     showModal: function(){
         this.viewModal=true
     },
    closeModal:function(){
        this.viewModal=false;
        this.setAddedSct('')
        this.setHistoryOptionSct('Default')
    },
    Add:function(){
        this.status='';
           this.message='';
           this.name="" ;
           this.id_category ='';
           this.cat_name = "NINGUNA";
         
         
        this.viewModal=false;
        this.setAddedSct('');
    },
    toEdit:function(){
        
        
        this.setHistoryOptionSct('Edit')
         this.viewModal=false;
    },
    back:function(){
        setTimeout(() => this.$router.go(), 200);
    }
    


   }
}
</script>
<style scoped>


    
    #AddSct label{
        color: var(--color-2);
        font-weight: 700;
        font-size: 0.7291666666666666VW;
        margin-bottom: .3vw;
    }

    #AddSct input, #AddSct select{
        height: 2.5VW;
        width: 14.716666666666668VW;
        border: 0.052083vw solid var(--color-2);
        border-radius: 0vw  1.5vw 1.5vw  0vw ;
        color: var(--color-4);
        font-size: 0.7291666666666666VW;
        font-weight: 500;
        padding-left: 1.09375VW;
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
}#select-ch:checked ~ .options-cont {
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