<template >
    <div id="EditSct">
               
               <div class="form-content">
            <form @submit.prevent="
                submit(
                 added.name ,
                 added.id_category 
                )
              ">
                   
                     <div class="grup-form dflx">
                        <div class="boxform">
                            <label for="name" class="name">Nombre </label>
                            <input v-model="added.name" type="text" id="name" name="name"    required class="in1">
                        </div>
                      
                      
                        
                    </div>
                    <div class="grup-form dflx">
          <!--categoría-->
          <div class="boxform">
            <label for="category" class="category">Subcategoría</label>

            <input
              v-model="added.category_name"
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
                        @click="
                          (added.category_name = prm.name),
                            (added.parent_cat_name = prm.parent_name),
                            (added.id_category = prm.id)
                        "
                      >
                        <!--parent_cat_name-->
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
                               <button class="alta" type="submit">Editar </button>
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


                     
          


        </div>

               

                
            <div v-if="viewModal" class="modal_view">
           
            <div id="modal_edit">
                <div class="body dflx">
                     
                           <h3>Subcategoría actualizada </h3>
                           <img src="../../assets/default/add.png" alt="icono alerta">
                </div>
           
            <div class="modal_edit_btns dflx">
                <p @click="wait()" class="otro">Aceptar</p> <!-- <p  @click="back()" class="inicio">Inicio</p>-->
            </div>
          </div>
        </div> 

    </div>
</template>
<script>

import {mapActions} from 'vuex';
export default {
    name:'EditSct',
    
    data(){
        return{
           status:'',
           message:'',
            active: false,
          
            viewModal:false,

             id_category: 1,
             cat_name: "NINGUNA",
              value: "",
              value1: "",
          
        }
    },
   async created(){
        await  this.getAllInfoCtg("category");
   },
    computed:{
        added(){
            return this.$store.getters["subcategory/getAdded"]
        },
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
        ...mapActions("subcategory", ["getInfoByIdSct"]),
             submit: async function(  name ,id_category ){
                 this.status =''
                 this.message =''
            let subcategory ={
                    "id":this.added.id,
                    "name":name,
                    id_category
                   
                   
                    }

                   

                        let result = await this.$store.dispatch("subcategory/editItemSct",  {option:'subcategory', item: subcategory});
                    
                        if(result.status=='error'){
                            this.status='error'
                            this.message= result.message
                        }else{ // success
                         this.showModal()
                          
                        } 
             

            
    },
   closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },
     delStatus: function () {
            setTimeout(() => this.delMsgs()
            ,2000);
           
            
        },
        delMsgs: function(){
            this.status=""
            this.message=""
             this.status2=""
            this.message2=""
        },


      showModal: function(){
         this.viewModal=true
     },
    closeModal:function(){
        this.viewModal=false;
        this.setAddedSct('')
        this.setHistoryOptionSct('Default')
    },
    Edit:function(){
        this.viewModal=false;
    },
    back:function(){
       setTimeout(() => this.$router.go(), 200);
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


   }


}
</script>
<style scoped>

  
   
    #EditSct label{
        color: var(--color-2);
        font-weight: 700;
        font-size: 0.7291666666666666VW;
        margin-bottom: .3vw;
    }

    #EditSct input, #EditSct select{
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