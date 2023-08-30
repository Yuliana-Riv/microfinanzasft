<template>
  <div id="Login">
    <div class="content_login">
      <!--<div class="B0">
        <img src="">
      </div>-->

      <div class="B1">
        <div class="fondo-logo">
          <img src="../assets/default/logo.png" alt="Logo sitio web" />
        </div>

        <div class="B1F2">
          <div class="form_login">
            <h1>LOGIN</h1>
            <form @submit.prevent="login(email, password)">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                placeholder="Correo electrónico"
                required
              />
              <input
                v-model="password"
                type="password"
                name="pass"
                id="pass"
                minlength="8"
                placeholder="Contraseña"
                required
              />

              <button variant="outline-secondary" type="submit">
                INICIAR SESIÓN
              </button>

              <div class="message_error" v-if="status == 'error'">
                <p>
                  {{ this.message }}
                </p>
                <img src="../assets/default/alert.png" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <!---
      <div class="B2">
        <img src="">
      </div>-->
    </div>
  </div>
</template>
<script>
import userService from "../services/user.service";

export default {
  name: "Login",
  data() {
    return {
      status: "",
      message: "",
      email: "",
      password: "",
    };
  },
  computed: {
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },

  methods: {
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 1500);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },
    async login(email, password) {
      this.status = "";
      this.message = "";

      let result = await this.$store.dispatch("admin/login", {
        email,
        password,
      });

      if (result.status == "success") {
        let response = await this.$store.dispatch("admin/getData");

        if (response.status == "success") {
          if (
            response.result.role == "legrafica" ||
            response.result.role == "admin"
          ) {
            let isAdmin = userService.isAdmin(response.result);

            if (isAdmin.admin == true) {
              // para el administrador
              this.$router.push("/auth").catch((err) => {});
            } else {
              this.wait();
            }
          } else {
            this.$router.push("/").catch((err) => {});
          }
        } else {
          this.status = "error";
          this.message = response.message;
          this.delStatus();
          this.wait();
        }
      } else {
        this.status = "error";
        this.message = result.message;
        this.delStatus();
      }
    },
  },
};
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
  width: 58.04871794871795vw;
  height: 12.86923076923077vw;
  font-size: 3.3333333333333335vw;
  color: #057D38!important;
  margin-bottom: 4.817948717948718vw !important;
  padding: 0vw 6vw;
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

.form_login button {
  background: #FA8F21;
  border: 0vw;
  height: 12.821vw;
  color: var(--color-5);
  font-weight: 600;
  text-align: center;
  font-size: 3.590vw;
  font-style: normal;
  font-family: "Plus Jakarta Sans";
  line-height: 1.0473958333333333vw;
  cursor: pointer;
  border-radius: 2.1vw;
  letter-spacing: 0.3vw;
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

.B0 {
  display: none;
}

@media (min-width: 768px) {
  #Login {
    /*background: url('../assets/bkl1pc.png'); */
  }
  .message_error {
    display: flex;
    background: var(--color-1);
    width: 19.46875vw;
    margin-top: 1.8229166666666667vw;
  }
  .message_error p {
    margin-bottom: 0vw !important;

    border: 0vw;

    padding: 0.5vw 0vw;
    color: var(--color-5);
    font-weight: 400;
    text-align: center;
    font-size: 0.6333333333333334vw;
    font-style: normal;
    font-family: var(--Poppins);

    transition: all 300ms;
  }
  .message_error img {
    width: 1vw;
    height: 1vw;
    margin-top: 0.3vw;
  }

  .B0 {
    display: block !important;
    width: 56.041666666666664vw;
    height: 56.25vw;
    display: block;
    background: linear-gradient(90deg, #2c2c2c 0%, #e21f1d 100%);
  }
  .B0 img {
    width: 41.822916666666664vw;
    height: auto;
    margin-top: 6.8vw;
    margin-left: 19.2vw;
    z-index: 3;
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
    margin-bottom: 3.281vw;
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
  .form_login button { 
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
}
</style>
