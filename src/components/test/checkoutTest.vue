<template>

  <div id="checkout_view">
   
    <div>
      <form  id="payment-form">
        <input type="hidden" name="token_id" id="token_id" />
        <input
          type="hidden"
          name="use_card_points"
          id="use_card_points"
          value="false"
        />
        <div class="pymnt-itm card active">
          
          <div class="pymnt-cntnt">
            <div class="card-expl dflx">
              <div class="box-card credit">
                  <h4>Tarjetas de <span>crédito</span></h4>
                  <img src="../../assets/TDC.svg" alt="Iconos tarjetas de crédito aceptadas.">
              </div>
              <div class="box-card debit">
                  <h4>Tarjetas de <span> débito</span></h4>
                   <img src="../../assets/TDD.svg" alt="Iconos tarjetas de débito aceptadas.">
                </div>
            </div>
            <div class="sctn-row">
              <div class="sctn-col grp1 l">
                <label>Nombre del titular</label
                ><input
                  v-model="name"
                  type="text"
                  placeholder="Como aparece en la tarjeta"
                  autocomplete="off"
                  data-openpay-card="holder_name"
                />
              </div>
              <div class="sctn-col grp1">
                <label>Número de tarjeta</label
                ><input
                  v-model="tarjeta"
                  type="text"
                  autocomplete="off"
                  data-openpay-card="card_number"
                  
                />
              </div>
            </div>
            <div class="sctn-row  dflx">
              <div class="sctn-col grp2  l">
                <label>Fecha de expiración</label>
                <div class="dflx">
                   <div class="sctn-col half l">
                  <input
                  v-model="expmonth"
                   class="inp1"
                    type="text"
                    placeholder="MM"
                    data-openpay-card="expiration_month"
                  />
                </div>
                <div class="sctn-col half l">
                  <input
                  v-model="expyear"
                  class="inp2"
                    type="text"
                    placeholder="YY"
                    data-openpay-card="expiration_year"
                  />
                </div>
                </div>
              </div>
              <div class="sctn-col grp3 cvv">
                <label>CVV</label>
                <div class="sctn-col half l">
                  <input
                  v-model="cvv"
                    type="text"
                    placeholder="3 dígitos"
                    autocomplete="off"
                    data-openpay-card="cvv2"
                  />
                </div>
              </div>
            </div>
            <div class="openpay">
              <div class="logo dflx">
                <p>Transacciones realizadas vía:</p>
                <img src="../../assets/openpay.svg" alt="Icono openpay">
              </div>
              <div class="shield dflx">
                 <img src="../../assets/security.svg" alt="Icono escudo.">
                <p>Tus pagos se realizan de forma segura con encriptación de 256
                bits</p>
               
              </div>
            </div>
            <div class="sctn-row">
             <a v-if="wait==false" class="button rght" id="pay-button">Pagar</a> 
               <p  v-if="wait" class="button rght" id="pay-button2"><img src="../../assets/Cargando0.gif" alt="cargando gif"></p>
            </div>

            <p id="error_msg" v-if="status=='error'" >
              {{message}}
            </p>
          </div>
        </div>
      </form>
    </div>

        <div v-if="viewModal" class="modal_view_log">
            <div class="ModalOut">
                <img class="ml_logo" src="" alt="icono app"> <!-- icono app -->
                <div class="MContent2">
                    <img src=""> <!-- icono triste -->
                    <p>LO SENTIMOS HA OCURRIDO UN ERROR AL INTENTAR REALIZAR TU PAGO, INTENTALO DE NUEVO.</p>
                </div>
                <a v-on:click="viewModal=false, refre()"><p class="GH"><span>ACEPTAR</span></p></a>
            </div>
        </div>
  </div> 
</template>
<script>

import {mapActions} from 'vuex';

export default {
    name:'checkout'
    ,
    data(){
      return{
        status:'',
        message:'',
        name:'',
        tarjeta:'',
        expmonth:'',
        expyear:'',
        cvv:'',
        wait:false,
        viewModal: false,
      }
    },
    /*
     4242424242424242
    */
    mounted() {
       
         $(document).ready(function() {

            OpenPay.setId('m153lscp7j3hfbrapwqm');
            OpenPay.setApiKey('pk_9a72747ad861466da7dcca4297cdc600');
            OpenPay.setSandboxMode(true);
            //Se genera el id de dispositivo
            var deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
            
            $('#pay-button').on('click', function(event) {
                event.preventDefault();
                $("#pay-button").prop( "disabled", true);
                OpenPay.token.extractFormAndCreate('payment-form', sucess_callbak, error_callbak);                
            });

            var sucess_callbak = function(response) {
            
              var token_id = response.data.id;
              $('#token_id').val(token_id);
             // $('#payment-form').submit();
             //ENVIAR a otra pagina.
              let isval = execute()
             
              if(isval.status=='success'){
                // charge(deviceSessionId,token_id)
              }else{
                 showMessage(isval.message)
              }
              
             
             console.log(token_id)
             console.log(deviceSessionId)
     
            };

            var error_callbak = function(response) {
              
                var desc = response.data.description != undefined ? response.data.description : response.message;
                let message =  desc; //"ERROR [" + response.status + "] : " +
               showMessage(message)
              //console.log(message)
               $("#pay-button").prop("disabled", false);
            };

        });

        let showMessage =(error)=>{
           this.status ='error'
           this.message = error
           this.delStatus()
        } 

        let  charge =(deviceSessionId,token_id)=>{
            this.wait = true
            this.createCharge(deviceSessionId,token_id)
        }

        let execute= () => {
         return   this.validar( this.name, this.tarjeta, this.expmonth, this.expyear, this.cvv)
        }
    },
    watch:{
        cvv: function(value){
        
          let arr = value.split('')
       
          let str =''
          let count =0;
          for (const ctr of arr) {
              
              if(!isNaN(ctr) && count<3 && ctr !=' '){
                str += ctr
                count++
              } 
          }

          this.cvv= str
          
        },

        expmonth: function(value){
        
          let arr = value.split('')
       
          let str =''
          let count =0;
          for (const ctr of arr) {
             
            
              if(!isNaN(ctr) && count<2 && ctr !=' '){
                let newstr = str + ctr
               newstr = parseInt(newstr)
               if(newstr <=12){
                str += ctr
                count++
               }

              } 
          }

          this.expmonth= str
          
        },

         expyear: function(value){
        
          let arr = value.split('')
       
          let str =''
          let count =0;
          for (const ctr of arr) {
     
              if(!isNaN(ctr) && count<2 && ctr !=' '){
                str += ctr
                count++
              } 
          }

          this.expyear= str
          
        },
        tarjeta: function(value){
        
          let arr = value.split('')
       
          let str =''
          let count =0;
         
          for (const ctr of arr) {
     
              if(!isNaN(ctr) && count<19  && ctr !=' '){
                str += ctr
                count++
              } 
          }

          this.tarjeta= str
          
        }
    },
    computed:{
         payment(){
                return this.$store.getters["conekta/getAdded"]
         },
    },
    methods:{
          ...mapActions('conekta', ['setHistoryOptionCnk']),
     
        ...mapActions('conekta', ['setAddedCnk']),
        delStatus: function () {
            setTimeout(() => this.delMsgs()
            ,5000);
        },
        delMsgs: function(){
            this.status=""
            this.message=""
        },

         refre: function(){
            setTimeout(() => this.$router.go(), 200);
        },
        createCharge: async function(device, source){
            let infopayment = this.payment

            let data ={
              "source": source, 
              "device": device,
              "name": infopayment.name,
              "email": infopayment.email,
              "items": infopayment.items,
              "cliente": infopayment.cliente,
              "mesa": infopayment.mesa,
              "restaurante": infopayment.restaurante,
              "planta": infopayment.planta,
              "mesero": infopayment.mesero,
              "propina": infopayment.propina,
              "subtotal":infopayment.subtotal,
              "total": infopayment.total,
              "metodo": infopayment.metodo,
              "invitado": infopayment.invitado
            }


              let result = await this.$store.dispatch("payment/addItemPym", {
                option: 'payment_card',
                item: data,
              });

              if(result.status !='success'){
                    this.viewModal=true
              }else{
                 //si todo es correcto.
                 this.wait=false
                 this.setAddedCnk('')
                 this.setHistoryOptionCnk('Tarjeta')
                   this.$socket.emit("mesa:openpay",{id:this.$route.params.id}); 
              }
            /*
            
             */
            
        },
        validar(name, tarjeta, expmonth, expyear, cvv){
          let srt =''
          let count =0
           if(name==''){
              srt +=' El nombre es requerido.'
              count++
           }

           if(tarjeta==''){
              srt +=' La tarjeta es requerida.'
              count++
           }

           if(expmonth==''){
              srt +=' El mes es requerido.'
              count++
           }

           if(expyear==''){
              srt +=' El año es requerido. '
              count++
           }

           if(cvv==''){
              srt +=' El cvv es requerido. '
              count++
           }

           if(count >0){
           // this.status='error'
           // this.message =srt
            return {
              status:'error',
              message: srt
            }
            }else{
                  return {
               status:'success',
              message: ''
               }
            }
        }

    }

};
</script>
<style scoped>
#checkout_view{
    
    width: 85%;
    margin: auto;
   margin-top: 5.384615384615385VW;
}


.box-card:first-child{
        width: 48%;
      border-right: 0.5px solid #bebebe;
      padding-left: 2vw;
}.box-card:last-child{
         width: 42.6%;
          padding-left: 7.435897435897436VW;
}

.box-card{
  margin-bottom: 14.358974358974358VW;
}

.card-expl h4{
  font-family: 'Lato';
  font-size: 3.5897435897435894VW;
  color: var(--color-2);
  font-weight: 500;
  margin: 0vw;
  margin-bottom: 1.282051282051282VW;
}.card-expl h4 span{
  font-weight: 700;
}

.grp1{
  margin-bottom: 4.5307692307692315VW;
}
.grp1 label{
  display: grid;
}

#payment-form label{
  font-size: 3.5897435897435894VW;
  color: var(--color-2);
  font-weight: 700;
  font-family: 'Lato';
  margin-bottom: 2.051282051282051VW;
      padding-left: 4vw;
}

.grp1 input{
   border-radius: 7.5vw 7.5vw 7.5vw 7.5vw;
              border: .2vw solid var(--color-2) ;
              height: 4VW;
              width: 94.5%;
              padding-left: 3.523076923076923VW;
              padding-top: 2.4871794871794872VW;
              padding-bottom: 2.4871794871794872VW;
}
#payment-form input::placeholder{
   color: var(--color-2);
   font-style: italic;
   font-family: 'Lato';
   font-size: 3.5897435897435894VW;
   font-weight: 400;
}

.grp2{
  width: 57%;
}

.grp3{
  margin-left: 3.2999999999999994VW;
}

.grp2 input{

   border: .2vw solid var(--color-2) ;

    height: 4VW;
           
    padding-left: 3.523076923076923VW;
    padding-top: 2.4871794871794872VW;
    padding-bottom: 2.4871794871794872VW;
}

.grp3{
  padding-left: 1vw;
}

.grp3 input{
  border-radius: 7.5vw 7.5vw 7.5vw 7.5vw;
   border: .2vw solid var(--color-2) ;
   width: 81%;
    height: 4VW;
           
    padding-left: 3.523076923076923VW;
    padding-top: 2.4871794871794872VW;
    padding-bottom: 2.4871794871794872VW;
    margin-left: 3vw;
}

input.inp1{
    border-radius: 7.5vw 0vw 0vw 7.5vw;
   
    width: 78%;
}
input.inp2{
    border-radius:0vw 7.5vw  7.5vw  0vw;
    
     width: 78%;
}

.openpay{
  border-bottom: 0.5px solid #bebebe;
  border-top: 0.5px solid #bebebe;
  margin-top: 7.351282051282052VW;
  margin-bottom: 8.205128205128204VW;
  padding-top: 4.358974358974359VW;
  padding-bottom: 4.358974358974359VW;
}

.logo p{
font-size: 3.5VW;
 color: rgba(134, 134, 134, 1);
 font-weight: 600;
}

.logo img{
  width: 28.717948717948715VW;
  height: 8.205128205128204VW;
  margin-left: 3vw;
  padding-top: 1vw;
}

.shield p{
   color: rgba(134, 134, 134, 1);
   font-size: 3.5VW;
   margin-left: 1.5vw;
}

.shield img{
  width: 7.948717948717948VW;
  height: 9.487179487179487VW;
  padding-top: 4vw;
  
}

a#pay-button{
  background: var(--color-1);
   border-radius: 7.5vw 7.5vw 7.5vw 7.5vw;
   color:rgba(255, 255, 255, 1) ;
   font-size: 3.076923076923077VW;
   font-weight: 800;
      padding: 3vw 16vw;
    margin-left: 25%;
   text-align: center;
}


p#pay-button2{
  background: var(--color-1);
   border-radius: 7.5vw 7.5vw 7.5vw 7.5vw;
   color:rgba(255, 255, 255, 1) ;
   font-size: 3.076923076923077VW;
   font-weight: 800;
      padding: 1vw 1vw;
    margin-left: 25%;
   text-align: center;
   width: 46.4%;
}
p#pay-button2 img{
     width: 21vw;
    height: 5.5vw;
    padding-top: 1vw;
}

.box-card img{
  width: 28.974358974358978VW;
  height: 13.076923076923078VW;
}

#error_msg{
  background: var(--color-1);
     color:rgba(255, 255, 255, 1) ;
   font-size: 3.076923076923077VW;
   padding: 2vw;
   text-align: center;
   margin-top: 5vw;
   border-radius: 7.5vw 7.5vw 7.5vw 7.5vw;
}


/** modal error */
.ModalOut {
    width: 67.6923076923077VW;
    height: 97.94871794871794VW;
    background-color: #FFFFFF;
    border-radius: 7.6923076923076925VW;
    position: absolute !important;
    /*margin-left: 16vw;
    margin-top: 59vw;*/
}
.MContent2 {
    width: 51.7948717948718VW;
    height: 40.897436VW;
    border: 0.6vw solid #F54C49;
    border-radius: 7.6923076923076925VW;
    text-align: center;
    margin-left: 7vw;
}
.MContent2 img {
    width: 11.025641025641026VW;
    height: 11.025641025641026VW;
    margin-top: 4.615384615384616VW;
}
.MContent2 p {
    width: 41vw;
    margin-inline: auto;
    font-size: 3.076923076923077VW;
    color: #215675;
    line-height: 3.6923076923076925VW;
    font-weight: 600;
}
p.GH {
    font-size: 3.5897435897435894VW;
    color: #215675;
    font-weight: 500;
    text-align: center;
    margin-top: 8.461538461538462VW;
}
.GH span {
    font-weight: 800;
}
</style>