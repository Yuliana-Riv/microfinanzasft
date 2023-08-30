<template>
  <div id="Pedidos">
    
    <div v-if="historyOption == 'Default'">
      <div class="dflx">
        <p class="noitems">
          No. de items
          <span v-if="data.length>0">{{
            data.length
          }}</span>
          <span v-else>0</span>
        </p>
        <div class="select-container">
          <input
            type="checkbox"
            name="select-ch"
            id="select-ch"
            v-model="active"
            true-value="true"
            false-value="false"
          />
          <label for="select-ch">
            <div id="select-items" :class="{ rounded: active }">
              Items por página: {{ itemsPerPage }}
            </div>
          </label>
          <div class="options-cont" @click="closeSelect()">
            <div
              class="option-btn"
              v-bind:value="6"
              @click="itemsPerPage = '6'"
            >
              6
            </div>
            <div
              class="option-btn"
              v-bind:value="12"
              @click="itemsPerPage = '12'"
            >
              12
            </div>
            <div
              class="option-btn"
              v-bind:value="18"
              @click="itemsPerPage = '18'"
            >
              18
            </div>
            <div
              class="option-btn"
              v-bind:value="24"
              @click="itemsPerPage = '24'"
            >
              24
            </div>
          </div>
        </div>
        <div class="buscador dflx">
          <input
            v-model="search_value"
            type="search"
            id="input-search"
            class="form-control"
            :placeholder="'Búsqueda'"
          />
          <div class="icon_buscar">
            <img
              @click="search(search_value)"
              src="../../assets/Search.png"
              alt="icono buscar"
            />
          </div>
        </div>
      </div>


      <div class="tbl_pedidos">
        <div class="tbl_header dflx">
          <div class="tblh tblrad">
            <p>No. </p>
          </div>
          <div class="tblh">
            <p>ENVÍO</p>
          </div>
          <div class="tblh">
            <p>ESTATUS</p>
          </div>
          <div class="tblh">
            <p>TOTAL</p>
          </div>
          <div class="tblh">
            <p>CLIENTE</p>
          </div>
          <div class="tblh">
            <p>EMAIL</p>
          </div>
          <div class="tblh">
            <p>FECHA</p>
          </div>
          <div class="tblh2">
            <p>EDITAR</p>
          </div>
          <div class="tblh2 tblh2r">
            <p>BORRAR</p>
          </div>
        </div>
        
        <div tbl_content>
          <div
            v-if="data.length>0">
            <div
              class="tbl_items dflx"
              v-for="(item, key) in filteredItems"
              :key="key"
            >
              <div class="tbl_item">
                <p>{{ item.pay_num }}</p>
              </div>
              <div class="tbl_item">
                <p>{{ item.shipping_option }}</p>
              </div>
              <div class="tbl_item">
                <p>{{ item.status }}</p>
              </div>
              <div class="tbl_item">
                <p>${{ item.total }}</p>
              </div>
              <div class="tbl_item">
                <p>{{ item.name + ' '+ item.lastname }}</p>
              </div>
              <div class="tbl_item">
                <p>{{ item.email }} </p>
              </div>
              <div class="tbl_item">
                <p>{{ item.created_at }}</p>
              </div>

              <div class="icon_editar">
                <img
                  @click="changeView('EditPym', item)"
                  src="../../assets/i_editar.png"
                  alt="icono editar"
                />
              </div>
              <div class="icon_eliminar">
                <img
                  @click="showModal(item.id)"
                  src="../../assets/i_eliminar.png"
                  alt="icono eliminar"
                />
              </div>
            </div>
          </div>
          <div v-else>
            <p class="snu">Aun no hay registros.</p>
          </div>
        </div>
      </div>

      <div id="navigate-buttons" class="mlf">
        <div class="dflx">
          <button @click="prev" id="btn-prev" class="btn-navigate">
            <img src="../../assets/Left.png" alt="icono anterior" />
          </button>
          <p class="num-pages">{{ currentPage }} / {{ totalPages }}</p>
          <button @click="next" id="btn-next" class="btn-navigate">
            <img src="../../assets/Right.png" alt="icono siguiente" />
          </button>
        </div>
      </div>
    </div>
   
    <div v-if="historyOption == 'EditPym'">
      <!-- Editar pedidos -->
        <EditPedido/>
    </div>

    <div v-if="status != ''" class="status_messages">
      <div v-if="status == 'success'" class="msg msg_success">
        <p>{{ message }}</p>
      </div>
      <div v-if="status == 'error'" class="msg msg_error">
        <p>{{ message }}</p>
      </div>
    </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              este pedido?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminar()">Aceptar</p>
          <p @click="closeModal()">Cancelar</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
/**/

import EditPedido from  './editPedido.vue'

export default {
  name: "Pedidos",
  components: {
    EditPedido
  },
  data() {
    return {
      status: "",
      message: "",
      item: "",
      search_value: "",
      updsearchcli: "",
      currentPage: 1,
      itemsPerPage: 12,
      active: false,
      viewModal: false,
      itemDel: "",
      radius: false,
    };
  },
  created() {
    this.getAllInfoPym("payment");
  },

 
  computed: {
    data() {
      let arr = this.$store.getters["payment/data"];
          let filter =[]
              if(!Array.isArray(arr)){
                return []
              }else{
                  if(this.search_value !=''){
                    for (const item of arr) {
                        if(this.includesItem(this.search_value, item.pay_num) || this.includesItem(this.search_value, item.name)){
                          filter.push(item)
                        }
                    }
                  }else{
                    filter = arr
                  }
              }
              
                return filter
    },
    historyOption() {
      return this.$store.getters["payment/getHistoryOption"];
    },

    //Paginacion
    allItems() {
      return Object.keys(this.data).map((pid) => this.data[pid]);
    },
    filteredItems() {
      return this.allItems.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    },
    totalPages() {
      let total = Math.ceil(this.allItems.length / this.itemsPerPage);
      if (total < this.currentPage) {
        this.currentPage = 1;
      }
      return total;
    },
  },
  methods: {
    ...mapActions("payment", ["getAllInfoPym"]),
    ...mapActions("payment", ["setHistoryOptionPym"]),
    ...mapActions("payment", ["setAddedPym"]),
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
    changeView(option, item) {
      this.item = item;
      this.setAddedPym(item);
      this.setHistoryOptionPym(option);
    },
   closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },


    activeRadius() {
      this.radius ? (this.radius = false) : (this.radius = true);
    },

    showModal: function (id) {
      this.itemDel = id;
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.itemDel = "";
    },

    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
      setTimeout(() => this.wait(), 500);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },

    eliminar: async function () {
      let id = this.itemDel;
      this.status = "";
      this.message = "";
      
      let result = await this.$store.dispatch("main/deleteItem", {
        option: "payment",
        id: id,
      });

      if (result.status == "error") {
        this.message = result.message;
        this.status = "error";
        this.delStatus();
      } else {
        this.status = "";
        this.message = "";
        this.wait();
      }
    },

    
    // botones de paginacion.
    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prev() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>
<style scoped>
.tbl_pedidos {
  margin-top: 1.9791666666666665vw;
  width: 95%;
  /** width: 26.8VW; */
}

.tbl_items {
  border-bottom: 1px solid var(--color-4);
}

.tbl_item {
  overflow: auto;
}
.tblh {
  width: 10.78125vw;
  height: 2.5vw;
  background: var(--color-2);
  border-right: 1px solid var(--color-5);
}
.tblh2 {
  width: 2.5vw;
  height: 2.5vw;
  background: var(--color-8);
  border-right: 1px solid var(--color-5);
}
.tblh p {
  padding-left: 1.3541666666666667vw;
  color: var(--color-5);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
}
.tblh2 p {
  padding-top: 0.5vw;
  padding-left: 0.3vw;
  color: var(--color-5);
  font-size: 0.46875vw;
  font-weight: 700;
}

.icon_editar,
.icon_eliminar {
  width: 2.5vw;
  height: 2.5vw;
}

.icon_editar img,
.icon_eliminar img {
  width: 0.8333333333333334vw;
  height: 0.8333333333333334vw;
  padding-top: 0.9vw;
  padding-left: 0.9vw;
  cursor: pointer;
}
.tblrad {
  border-radius: 1.5vw 0vw 0vw 1.5vw;
}

.tblh2r {
  border-radius: 0vw 0.5vw 0.5vw 0vw;
}

.tbl_item {
      width: 9.78125vw;
}
.tbl_item p {
  padding-left: 1.3541666666666667vw;
}

.mlf {
  margin-left: 65vw!important;
}
</style>
