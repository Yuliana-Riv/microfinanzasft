<template>
  <div id="Login">
    <div class="content_login"> 

      <div class="B1">

        <div class="fondo-logo">
          <img src="../assets/default/logo.png" alt="Logo sitio web">
        </div>

        <div class="B1F2">
            <div class="form_login">
              <p class="B1Text">INGRESA EL CÓDIGO QUE FUE ENVIADO A TU CORREO ELECTRÓNICO</p>
              <form id="logincodeapp"  > 
                  <input 
                      id="code" 
                      v-model="code_form" 
                      type="text" 
                      name="code" 
                      required
                      placeholder="Código"
                  >
                  <input class="Vbuton" type="button"  @click="verify()" value="VERIFICAR">
                  <p class="form-reenviar-codigo" >¿Problemas? <br> <span @click="sendCode()"> Solicita un nuevo código aquí</span> </p>
                  
                  <p v-if="status=='error'" class="error-code">{{message}}</p>
              </form>
            </div>
        </div>
       
      </div>

      <div class="B2">
         <img src="">
      </div>

    </div>
  </div>
</template>
<script>


import userService from '../services/user.service'

export default {
  name: 'autentificacion',
  data: () => ({
    code_form: "",
    status:'',
    message:''
  }),
  created(){
 this.getIdentity()
  },
  computed:{
    identity() {
      return this.$store.getters['admin/getIdentity'];
    },
  },
  methods: {
      getIdentity: async function (){
          let response =  await this.$store.dispatch("admin/getData");
          return response
      },

      delMsg(){
        this.status='' 
        this.message=''
      },
       refresh: function () {
        setTimeout(() => this.delMsg(), 1500);
        },


    async  verify(){
        this.getIdentity()
        let identity= this.identity
      
   
          let code = String(identity.code)
          let id = String(identity.sub)

             let data ={
                "id":code,
                "id_user":id,
                "type":identity.role,
                "code":this.code_form
               
              }

                  

            let result = await this.$store.dispatch("main/addItem",  {option:'session', item:data});
                   
                  



          if(result.status == 'success'){
             let ath = await userService.createAuth();

             if(ath.status=='success'){
                 userService.setAth(ath.result);
                    
               this.$router.push("/administrador").catch(err => {});
             }else{
               this.status ='error'
               this.message='Ha ocurrido un error.'
                  this.refresh()
             }
             
            
       
             
          }else{
            this.status='error' 
            this.message='El codigo no coincide.'
             this.refresh()
          }
      },
      
     

     
      async sendCode() {
        
         this.getIdentity()
        let identity= this.identity
      try {
        

        await this.$store.dispatch("admin/resendCode", {
            email: identity.email,
            name: identity.name,
            code: identity.code
        });
        //console.log(identity.code);

         if(result.data.status !='success'){
             localStorage.removeItem('tkn')
             this.$router.push("/login").catch(err => {});
         }
       
      } catch (error) {
        this.status ='error'
      }
    }
  }
}
</script>


<style scoped>
.message_error {
  display: flex;
  background: #057D38;
  margin-top: 3.8229166666666667vw;
  border-radius: 10vw;
  width: 69.04871794871795vw;
}
.message_error p {
  margin-bottom: 0vw !important;
  margin-top: 0vw;
  border: 0vw;
  width: 90%;
  padding: 2.5vw 0vw;
  color: var(--color-5);
  font-weight: 400;
  text-align: center;
  font-size: 3.3333333333333335vw;
  font-style: normal;
  font-family: var(--Poppins);

  transition: all 300ms;
}
.message_error img {
  width: 4vw;
  height: 4vw;
  margin-top: 4vw;
}

.content_login {
  display: block;
  height: 100vh;
}
.B1 {
  background-color: white;
  width: 100%;
  text-align: center;
  
  padding-top: 14.872vw;
  padding-bottom: 19.231vw;
}
#Login {
  background: linear-gradient(180deg, #04692f 0%, #114125 100%);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: var(--Poppins);
}

/* .fondo-logo{
 background: var(--color-2);
  } */
.fondo-logo img {
  width: 60.513vw;
  height: auto;
}

.B1F2 {
}

.logos_ {
  display: flex;
}

.form_login h1 {
  height: 8.9vw;
  color: #057D38;
  font-weight: 800;
  font-size: 8.974358974358974vw;
  line-height: 2.2916666666666665vw;
  text-align: center;
  margin-bottom: 5.641025641025641vw !important;
  font-family: "Plus Jakarta Sans";
}

.form_login form {
  display: inline-grid;
}

.form_login input {
  border-radius: 20vw;
  background-color: transparent;
  border: 0.052083333333333336vw solid #057D38;
    width: 70vw;
  height: 12.86923076923077vw;
  font-size: 3.3333333333333335vw;
  color: #057D38!important;
  margin-bottom: 4.817948717948718vw !important;
  padding: 0;
  text-indent: 6vw;
  font-family: var(--Lato);
}

.form_login input:first-child {
  margin-bottom: 1.0416666666666665vw;
}

.form_login ::placeholder {
  color: #057D38!important;
  font-size: 3.3333333333333335vw;
  font-weight: 600;
}
p.form-reenviar-codigo {
    font-weight: 600;
    font-size: 3.846vw;
    line-height: 4.872vw;
    color: #057D38;
    font-family: 'Plus Jakarta Sans';
}
.form_login .Vbuton{
  background: #FA8F21;
  border: 0vw;
  height: 12.821vw;
  color: white!important;
  font-weight: 600;
  text-align: center;
  font-size: 3.590vw;
  font-style: normal;
  font-family: "Plus Jakarta Sans";
  line-height: 1.0473958333333333vw;
  cursor: pointer;
  border-radius: 2.1vw;
  letter-spacing: 0.3vw;
  text-indent: 0;
}

.B2 {
  width: 100%;
  height: 88.46153846153845vw;
  display: block;
  background: var(--color2);
  margin-top: 33.230769230769234vw;
}
.B2 img {
  width: 92.82051282051282vw;
  height: auto;
  float: right;
  margin-top: -12.5vw;
  z-index: 3;
}
 
.B1Text {
    width: 69vw;
    font-weight: 800;
    font-size: 3.590vw;
    line-height: 4.615vw;
    font-family: 'Plus Jakarta Sans';
    color: #FA8F21;
    margin: 11.026vw auto 6.154vw;
}

@media (min-width: 768px) {
  #Login {
    /*background: url('../assets/bkl1pc.png'); */
  }
 

  .B1 {
    /* width: 100%;*/ 
    width: 28.021vw;
    text-align: -webkit-center; 
    padding-top: 2.708vw;
    padding-bottom: 2.708vw;
    margin-top: 14.872vw;
    margin-bottom: 19.231vw;
    border-radius: 1.042vw;
  }
  .content_login {
    display: flex !important;
    justify-content: center;
    height: auto;
  }
  .fondo-logo img {
    width: 20vw;
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
  .form_login form {
    display: inline-grid;
    justify-items: center;
  }
  .form_login h1 {
    height: 4.4vw;
    color: #057a38;
    font-weight: 800;
    font-size: 1.8229166666666667vw;
    line-height: 2.2916666666666665vw;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0 !important;
  }
  .form_login input {
    border-radius: 1.563vw;
    width: 20.469vw;
    height: 2.708vw;
    font-size: 0.938vw; 
    margin-bottom: 1.875vw !important;
    padding: 0vw;
    text-indent: 1.62vw;
  }
  .form_login input:first-child {
    margin-bottom: 1.0416666666666665vw !important;
  }
  .form_login ::placeholder { 
    font-size: 0.838vw;
    line-height: 1.6770833333333334vw;
    font-weight: 600;
  }
.form_login .Vbuton { 
    border: 0vw; 
    width: 15.989583333333332vw;
    height: 3.125vw; 
    font-weight: 800;
    text-align: center;
    font-size: 0.729vw;
    font-style: normal; 
    line-height: 1.0473958333333333vw;
    cursor: pointer;
    border-radius: .5vw;
    letter-spacing: 0.1vw;
  }

  .B2 {
    display: none !important;
  }
  .B1Text {
    font-size: 0.938vw;
    line-height: 1.198vw;
    width: 19vw;
    margin: 2.656vw 0 1.563vw;
}
p.form-reenviar-codigo {
    font-size: 0.677vw;
    line-height: 0.833vw;
}
p.form-reenviar-codigo br{
  display: none;
}
}
</style>
