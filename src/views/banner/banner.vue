<template>
  <div id="Categorias">
    <div v-if="historyOption == 'Default'">
      <div class="dflx">
        <p class="noitems">
          No. de items
          <span v-if="data != 'No se encontraron coincidencias'">{{
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
        <!---
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
              src="../../assets/default/Search.png"
              alt="icono buscar"
            />
          </div>
        </div>--->
      </div>

      <div class="dflx widthbtn">
        <div @click="changeView('Add', '')" class="btn_añadir dflx">
          <p>AGREGAR</p>
          <img src="../../assets/default/add.png" alt="" />
        </div>

        <div @click="actualizarOrden()" class="btn_añadir act-ord dflx">
          <p>ACTUALIZAR ORDEN</p>
          <img src="../../assets/default/add.png" alt="" />
        </div>
      </div>

      <div class="tbl_categorias">
        <div class="tbl_header dflx">
          <div class="tblh tblrad">
            <p>IMAGEN PC</p>
          </div>
          <div class="tblh">
            <p>IMAGEN MOVIL</p>
          </div>
          <div class="tblh">
            <p>LINK</p>
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
            v-if="
              data != 'No se encontraron coincidencias' &&
              data != 'error' &&
              data != ''
            "
          >
            <div
              class="tbl_items dflx"
              v-for="(item, key) in filteredItems"
              :key="key"
            >
              <div class="tbl_item">
                <img
                  :src="
                    url+'/' + endpointCodes.get +
                    '/get-banner-image/' +
                    item.image
                  "
                  alt="image"
                />
              </div>
              <div class="tbl_item">
                <img
                  :src="
                     url+'/' + endpointCodes.get +
                    '/get-banner-image/' +
                    item.image_mv
                  "
                  alt="image"
                />
              </div>
              <div class="tbl_item">
                <p>{{ item.link }}</p>
              </div>
              <div class="icon_eliminar">
                <h2 v-if="key != 0" @click="UpItem(item, key)" class="cp">
                  &#9650;
                </h2>
                <!--  -->
                <h2
                  v-if="key < data.length - 1"
                  @click="DownItem(item, key)"
                  class="cp"
                >
                  &#9660;
                </h2>
                <!--  -->
              </div>

              <div class="icon_eliminar">
                <img
                  @click="showModal(item.id)"
                  src="../../assets/default/i_eliminar.png"
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
            <img src="../../assets/default/Left.png" alt="icono anterior" />
          </button>
          <p class="num-pages">{{ currentPage }} / {{ totalPages }}</p>
          <button @click="next" id="btn-next" class="btn-navigate">
            <img src="../../assets/default/Right.png" alt="icono siguiente" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="historyOption == 'Add'">
      <!-- Agregar categorias -->
      <AddBnr />
    </div>
    <div v-if="historyOption == 'Edit'">
      <!-- Editar categorias -->
      <EditBnr />
    </div>

    <div v-if="status != ''" class="status_messages">
      <div v-if="status == 'success'" class="msg msg_success">
        <p>{{ message }}</p>
      </div>
      <div v-if="status == 'error'" class="msg msg_error">
        <p>{{ message }}</p>
      </div>
    </div>



      <div v-if="viewModal2" class="modal_view">
        <div id="modal_add">
          <div class="body dflx">
            <h3>Se actualizó el orden de los banners</h3>
            <img src="../../assets/default/add.png" alt="icono alerta" />
          </div>

          <div class="modal_add_btns dflx">
            <p @click="wait()" class="otro">Aceptar</p>
          </div>
        </div>
      </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/default/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              este banner?</span
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
import AddBnr from "./addBnr.vue";
import EditBnr from "./editBnr.vue";
import {url, endpointCodes} from '../../global/index'; 
export default {
  name: "Banner",
  components: {
    AddBnr,
    EditBnr,
  },
  data() {
    return {
      url: url,
      endpointCodes,
      status: "",
      message: "",
      item: "",
      search_value: "",
      updsearchcli: "",
      currentPage: 1,
      itemsPerPage: 12,
      active: false,
      viewModal: false,
      viewModal2: false,
      itemDel: "",
      radius: false,
      datab: []
    };
  },
  created() {
    this.getAllInfoBnr("banner");
  },

  updated() {
    if (this.search_value != this.updsearchcli) {
      this.updsearchcli = this.search_value;

      let option = "banner";

      let value = this.search_value;

      let payload = {
        option: option,
        search: value,
      };
      if (value != "") {
        this.$store.dispatch("banner/searchBnr", payload);
      } else {
        this.getAllInfoBnr("banner");
      }
    }
  },
  computed: {
    data() {
      return this.$store.getters["banner/data"];
    },
    historyOption() {
      return this.$store.getters["banner/getHistoryOption"];
    },

    //Paginacion
    allItems() {
      return Object.keys(this.data).map((pid) => this.data[pid]);
    },
    filteredItems() {
      let db = this.allItems.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
      this.datab = db;
      return db;
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
    ...mapActions("banner", ["getAllInfoBnr"]),
    ...mapActions("banner", ["setHistoryOptionBnr"]),
    ...mapActions("banner", ["setAddedBnr"]),
    ...mapActions("main", ["setAddedMain"]),

    UpItem: function (item, key) {
      let banners = this.data;

      let anterior = key - 1;
      let actual = key;
      let item_actual = item;
      let item_anterior = banners[key - 1];

      let array = [];

      for (var i = 0; i < banners.length; i++) {
        if (i == actual) {
          array.push(item_anterior);
        } else if (i == anterior) {
          array.push(item_actual);
        } else {
          array.push(banners[i]);
        }
      }
      //console.log('cup')
      //this.data =array
      //this.datab = array;
      this.setAddedBnr(array);
    },
    DownItem: function (item, key) {
      let banners = this.data;

      let siguiente = key + 1;
      let actual = key;
      let item_actual = item;
      let item_siguiente = banners[key + 1];

      let array = [];

      for (var i = 0; i < banners.length; i++) {
        if (i == actual) {
          array.push(item_siguiente);
        } else if (i == siguiente) {
          array.push(item_actual);
        } else {
          array.push(banners[i]);
        }
      }
      //this.datab = array;
      //console.log('ckr')
      //console.log(array)
      this.setAddedBnr(array);
    },

    changeView(option, item) {
      this.item = item;
      this.setAddedBnr(item);
      this.setHistoryOptionBnr(option);
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

    showModal2: function () {
      this.viewModal = true;
    },
    closeModal2: function () {
      this.viewModal = false;
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
      console.log(id);
      let result = await this.$store.dispatch("banner/deleteItemBnr", {
        option: "banner",
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

    search: async function (value) {
      let option = "banner";

      let payload = {
        option: option,
        search: value,
      };
      if (value != "") {
        this.$store.dispatch("banner/searchBnr", payload);
      } else {
        this.getAllInfoBnr("banner");
      }
    },

    actualizarOrden: async function () {
      let banner = this.data;
      let result = await this.$store.dispatch("banner/editItemBnr", {
        option: "actualizar_orden",
        item: { banner },
      });

      if (result.status == "error") {
        this.msg = result.message;
        this.showModalError();
      } else {
        // success
        this.$store.dispatch("banner/setHistoryOptionBnr", {
          option: "banner",
        });
        this.getAllInfoBnr("banner");
        this.viewModal2 = true;
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
.tbl_categorias {
  margin-top: 1.9791666666666665vw;
  width: 65.8vw;
}

.tbl_items {
  border-bottom: 1px solid var(--color-4);
}

.tbl_item {
  overflow: auto;
}
.tblh {
  width: 19.78125vw;
  height: 2.5vw;
  background: var(--color-2);
  border-right: 1px solid var(--color-5);
}
.tblh2 {
  width: 2.5vw;
  height: 2.5vw;
  background: var(--color-3);
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
  cursor: pointer;
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
  width: 19.78125vw;
  display: flex;
}
.tbl_item img {
  width: 16.78125vw;
  height: auto;
  margin: auto;
}
.tbl_item p {
  padding-left: 1.3541666666666667vw;
}

.mlf {
  margin-left: 59vw !important;
}
.widthbtn {
  width: 65.8vw;
  display: flex;
  justify-content: space-between;
}
.btn_añadir.act-ord {
  width: 19.4vw;
}
</style>
