<template >
    <div id="AddCtg">
       
        <div class="form-content">
            <form @submit.prevent="
                submit(
                 name
                )
              ">
    

                    <div class="grup-form dflx">
                        <div class="boxform">
                            <label for="name" class="name">Nombre </label>
                            <input v-model="name" type="text" id="name" name="name"    required class="in1">
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
                     
                           <h3>Categoría agregada</h3>
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
    name:'AddCtg',
    data(){
        return{
           status:'',
           message:'',
           name:"" ,
        
      active: false,


           //MODAL

            viewModal:false,



        }
    },
  
  
    methods:{
       
         ...mapActions('category', ['setAddedCtg']),
         ...mapActions('category', ['setHistoryOptionCtg']),
          wait: function(){
            setTimeout(() => this.$router.go(), 200);
        },
        submit: async function( name ){
                 this.status =''
                 this.message =''
           let data ={
                    "name":name,
             
                  }

                  

                    let result = await this.$store.dispatch("category/addItemCtg",  {option:'category', item: data});
                   
                    if(result.status=='error'){
                        this.status='error'
                        this.message= result.message
                    }else{ // success
                         this.setAddedCtg(result.added )
                       this.showModal()
                        
                       
                    } 

            
    },
  closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

     showModal: function(){
         this.viewModal=true
     },
    closeModal:function(){
        this.viewModal=false;
        this.setAddedCtg('')
        this.setHistoryOptionCtg('Default')
    },
    Add:function(){
        this.status='';
           this.message='';
           this.name="" ;
         
         
        this.viewModal=false;
        this.setAddedCtg('');
    },
    toEdit:function(){
        
        
        this.setHistoryOptionCtg('Edit')
         this.viewModal=false;
    },
    back:function(){
        setTimeout(() => this.$router.go(), 200);
    }
    


   }
}
</script>
<style scoped>


    
    #AddCtg label{
        color: var(--color-2);
        font-weight: 700;
        font-size: 0.7291666666666666VW;
        margin-bottom: .3vw;
    }

    #AddCtg input, #AddCtg select{
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