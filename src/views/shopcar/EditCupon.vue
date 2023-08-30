<template >
  <div id="AddCat">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            data.name,
            data.descrp,
            data.code,
            data.status,
            data.date_a,
            data.date_b,
            data.freeShipping,
            data.totalAvailable,
            data.totalAvailableCustomer,
            data.minAmount,
            data.maxAmount,
            data.type,
            data.value,
            data.limitCustomers,
            data.ExcludeCustomers,
            data.limitCategories,
            data.ExcludeCategories,
            data.limitProducts,
            data.ExcludeProducts,
            couponRestrictionsCustomers,
            couponRestrictionsProducts,
            couponRestrictionsCategories,
            data.exclusivo
          )
        "
      >

     
        <div class="grup-form dflx">
          <!--nombre-->
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="data.name"
              type="text"
              id="name"
              name="name"
              
              required
              class="in1"
            />
          </div>
            <div class="boxform">
             <label for="exclusivo" class="exclusivo">Exclusivo : <span v-if="data.exclusivo">SI</span> <span v-else>NO</span> </label>
             <input type="checkbox" id="exclusivo"  v-model="data.exclusivo" >
          </div>
        </div>

        <!--categoría-->
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="url" class="url">Descripcion </label>
            <textarea
              v-model="data.descrp"
              id="name"
              name="descrp"
              
              required
              class="in1"
              style="resize: none"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <!--codigo-->
          <div class="boxform">
            <label for="code" class="code">Codigo </label>
            <input
              v-model="data.code"
              type="text"
              id="name"
              name="code"
              
              required
              class="in1"
            />
            <p class="gencode" @click="codeCreate()">GENERAR CÓDIGO &#11119;</p>
          </div>
        </div>

        <div class="grup-form dflx">
          <!--fecha-->
          <div class="boxform">
            <label for="code" class="code">Fecha </label>
            <input
              v-model="data.date_a"
              type="date"
              id="name"
              name="date_a"
              
              required
              class="in1"
            />
          </div>
          <!--fecha-->
          <div class="boxform">
            <label for="code" class="code">Fecha Exp. </label>
            <input
              v-model="data.date_b"
              type="date"
              id="name"
              name="date_b"
              
              required
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <!--estatus-->
          <div class="boxform">
            <label for="code" class="code">Estatus </label>
            <input
              v-model="data.status"
              type="text"
              id="name"
              name="cstatus"
              
              required
              class="in1"
              :class="{ rounded: optionsAct }"
              @click="optionsAct = true"
            />
            <div
              class="options-cont"
              :class="{ 'op-act': optionsAct }"
              @click="optionsAct = false"
            >
              <div class="option-btn" @click="data.status = 'INACTIVO'">
                INACTIVO
              </div>
              <div class="option-btn" @click="data.status = 'ACTIVO'">
                ACTIVO
              </div>
            </div>
          </div>
          <!--estatus-->
          <div class="boxform">
            <label for="code" class="code">ENVÍO GRATIS </label>
            <input
              v-model="data.freeShipping"
              type="text"
              id="name"
              name="freeShipping"
              
              required
              class="in1"
              :class="{ rounded: optionsAct2 }"
              @click="optionsAct2 = true"
            />
            <div
              class="options-cont"
              :class="{ 'op-act': optionsAct2 }"
              @click="optionsAct2 = false"
            >
              <div class="option-btn" @click="data.freeShipping = 'SI'">SI</div>
              <div class="option-btn" @click="data.freeShipping = 'NO'">NO</div>
            </div>
          </div>
        </div>

        <div class="grup-form dflx">
          <!--total-->
          <div class="boxform">
            <label for="code" class="code">TOTAL DISPONIBLE </label>
            <input
              v-model="data.totalAvailable"
              type="number"
              id="name"
              name="totalAvailable"
              
              required
              class="in1"
            />
          </div>
          <!--available total-->
          <div class="boxform">
            <label for="code" class="code">NÚM. USOS POR CLIENTE </label>
            <input
              v-model="data.totalAvailableCustomer"
              type="number"
              id="name"
              name="totalAvailableCustomer"
              
              required
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <!--fecha-->
          <div class="boxform">
            <label for="code" class="code">VALOR </label>
            <input
              v-model="data.value"
              type="number"
              id="name"
              name="totalAvailable"
              
              required
              class="in1"
            />
          </div>
          <!--tipo-->
          <div class="boxform">
            <label for="code" class="code">ENVÍO GRATIS </label>
            <input
              v-model="data.type"
              type="text"
              id="name"
              name="freeShipping"
              
              required
              class="in1"
              :class="{ rounded: optionsAct3 }"
              @click="optionsAct3 = true"
            />
            <div
              class="options-cont"
              :class="{ 'op-act': optionsAct3 }"
              @click="optionsAct3 = false"
            >
              <div class="option-btn" @click="data.type = 'IMPORTE'">
                IMPORTE
              </div>
              <div class="option-btn" @click="data.type = 'PORCENTAJE'">
                PORCENTAJE
              </div>
            </div>
          </div>
        </div>

        <div class="grup-form dflx">
          <!--fecha-->
          <div class="boxform">
            <label for="code" class="code">IMPORTE MÍNIMO</label>
            <input
              v-model="data.minAmount"
              type="number"
              id="name"
              name="minAmount"
              
              required
              class="in1"
            />
          </div>
          <!--fecha-->
          <div class="boxform">
            <label for="code" class="code">IMPORTE MÁXIMO </label>
            <input
              v-model="data.maxAmount"
              type="number"
              id="name"
              name="maxAmount"
              
              required
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <p class="prest">RESTRICCIONES</p>
        </div>

        <div class="grup-form dflx">
          <!--tipo-->
          <div class="boxform">
            <label for="resCus" class="code">RESTRICCIÓN CLIENTE {{resCus}} </label>
            <input
              v-model="resCus"
              type="text"
              id="name"
              name="resCus"
              
              required
              class="in1"
              :class="{ rounded: optionsAct4 }"
              @click="optionsAct4 = true"
            />
            <div
              class="options-cont"
              :class="{ 'op-act': optionsAct4 }"
              @click="optionsAct4 = false"
            >
              <div class="option-btn" @click="changeRCus('LIMITAR')">
                LIMITAR
              </div>
              <div class="option-btn" @click="changeRCus('EXCLUIR')">
                EXCLUIR
              </div>
              <div class="option-btn" @click="changeRCus('NO')">NO</div>
            </div>
            <div class="grup-form dflx" v-if="resCus != 'NO'">
              <div class="boxform">
                <label for="code" class="code">Añadir email</label>
                <input
                  v-model="cus_email"
                  type="email"
                  id="cus_email"
                  name="totalAvailableCustomer"
                  
                  class="in1"
                />
                <p class="alta" @click="añadirCus(cus_email)">AÑADIR</p>
                <div class="content-tbl-items">
                  <div class="tblitems">
                    <div class="bodytbl-items tbl_item">
                      <div
                        v-if="
                          couponRestrictionsCustomers !=
                            'No se encontraron coincidencias.' &&
                          couponRestrictionsCustomers != 'error'
                        "
                      >
                        <div
                          v-for="(prm, key) in couponRestrictionsCustomers"
                          :key="key"
                          class="dflx sbtw"
                        >
                          <!--<p class="itemp cp dflx">-->
                          <p class="item1">{{ key }}</p>
                          <p class="item2">{{ prm.name }}</p>
                          <p class="item3 pointer" @click="delRcus(key)">X</p>
                        </div>
                      </div>
                      <div v-else>
                        <p class="item cp">No se encontraron coincidencias.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--tipo-->
          <div class="boxform">
            <label for="resCat" class="code">RESTRICCIÓN CATEGORÍA </label>
            <input
              v-model="resCat"
              type="text"
              id="name"
              name="resCat"
              
              required
              class="in1"
              :class="{ rounded: optionsAct5 }"
              @click="optionsAct5 = true"
            />
            <div
              class="options-cont"
              :class="{ 'op-act': optionsAct5 }"
              @click="optionsAct5 = false"
            >
              <div class="option-btn" @click="changeRCat('LIMITAR')">
                LIMITAR
              </div>
              <div class="option-btn" @click="changeRCat('EXCLUIR')">
                EXCLUIR
              </div>
              <div class="option-btn" @click="changeRCat('NO')">NO</div>
            </div>
            <div class="grup-form dflx" v-if="resCat != 'NO'">
              <!--categoría-->
              <div class="boxform">
                <label for="role" class="role">Añadir categoría</label>

                <!--<input
              v-model="cat_name"
              type="text"
              id="tipos"
              name="tipos"
              disabled
              required
            />-->
                <div class="content-tbl-items">
                  <div class="tblitems">
                    <div class="bodytbl-items tbl_item">
                      <div
                        v-if="
                          categorias != 'No se encontraron coincidencias.' &&
                          categorias != 'error'
                        "
                      >
                        <div v-for="(prm, key) in categorias" :key="key">
                          <p class="itemp cp" @click="añadirCat(prm.name)">
                            {{ prm.name }}
                          </p>
                        </div>
                      </div>
                      <div v-else>
                        <p class="item cp">No se encontraron coincidencias.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-tbl-items">
                  <div class="tblitems">
                    <div class="bodytbl-items tbl_item">
                      <div
                        v-if="
                          couponRestrictionsCategories !=
                            'No se encontraron coincidencias.' &&
                          couponRestrictionsCategories != 'error'
                        "
                      >
                        <div
                          v-for="(prm, key) in couponRestrictionsCategories"
                          :key="key"
                          class="dflx sbtw"
                        >
                          <!--<p class="itemp cp dflx">-->
                          <p class="item1">{{ key }}</p>
                          <p class="item2">{{ prm.name }}</p>
                          <p class="item3 pointer" @click="delRcat(key)">X</p>
                        </div>
                      </div>
                      <div v-else>
                        <p class="item cp">No se encontraron coincidencias.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--tipo-->
          <div class="boxform">
            <label for="resProd" class="code">RESTRICCIÓN PRODUCTO </label>
            <input
              v-model="resProd"
              type="text"
              id="name"
              name="resProd"
              
              required
              class="in1"
              :class="{ rounded: optionsAct6 }"
              @click="optionsAct6 = true"
            />
            <div
              class="options-cont"
              :class="{ 'op-act': optionsAct6 }"
              @click="optionsAct6 = false"
            >
              <div class="option-btn" @click="changeRProd('LIMITAR')">
                LIMITAR
              </div>
              <div class="option-btn" @click="changeRProd('EXCLUIR')">
                EXCLUIR
              </div>
              <div class="option-btn" @click="changeRProd('NO')">NO</div>
            </div>
            <div class="grup-form dflx" v-if="resProd != 'NO'">
              <!--producto-->
              <div class="boxform">
                <label for="role" class="role">Añadir productos</label>

                <div class="content-tbl-items">
                  <div class="tblitems">
                    <div class="bodytbl-items tbl_item">
                      <div
                        v-if="
                          products != 'No se encontraron coincidencias.' &&
                          products != 'error'
                        "
                      >
                        <div v-for="(prm, key) in products" :key="key">
                          <p class="itemp cp" @click="añadirProd(prm.name)">
                            {{ prm.name }}
                          </p>
                        </div>
                      </div>
                      <div v-else>
                        <p class="item cp">No se encontraron coincidencias.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-tbl-items">
                  <div class="tblitems">
                    <div class="bodytbl-items tbl_item">
                      <div
                        v-if="
                          couponRestrictionsProducts !=
                            'No se encontraron coincidencias.' &&
                          couponRestrictionsProducts != 'error'
                        "
                      >
                        <div
                          v-for="(prm, key) in couponRestrictionsProducts"
                          :key="key"
                          class="dflx sbtw"
                        >
                          <!--<p class="itemp cp dflx">-->
                          <p class="item1">{{ key }}</p>
                          <p class="item2">{{ prm.name }}</p>
                          <p class="item3 pointer" @click="delRprod(key)">X</p>
                        </div>
                      </div>
                      <div v-else>
                        <p class="item cp">No se encontraron coincidencias.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--regresar/guardar-->
        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Guardar</button>
        </div>

        <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ msg }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ msg }}</p>
          </div>
        </div>
      </form>

      <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Cupón actualizado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "EditCupon",
  data() {
    return {
      optionsAct: false,
      optionsAct2: false,
      optionsAct3: false,
      optionsAct4: false,
      optionsAct5: false,
      optionsAct6: false,
viewModal:false,

      name: "",
      descrp: "",
      code: "",
      cstatus: "INACTIVO",
      date_a: "",
      date_b: "",
      freeShipping: "NO",
      totalAvailable: 0,
      totalAvailableCustomer: 1,
      minAmount: 0,
      maxAmount: 0,
      type: "PORCENTAJE",
      value: 0,
      resCus: "NO",
      resProd: "NO",
      resCat: "NO",
      limitCustomers: "NO",
      ExcludeCustomers: "NO",
      limitCategories: "NO",
      ExcludeCategories: "NO",
      limitProducts: "NO",
      ExcludeProducts: "NO",
      couponRestrictionsCustomers: [],
      couponRestrictionsProducts: [],
      couponRestrictionsCategories: [],
      cus_email: "",
      cat_name: "",
      prod_name: "",
      status: "",
      msg: "",
      exclusivo:false,
     

      currentPage: 1,
      itemsPerPage: 4,
      currentPage2: 1,
      itemsPerPage2: 4,
    };
  },

  created() {
    this.getAllInfoCat("category");
    this.getAllInfoPro("product");
    this.getAllInfoCar2("cupones");
    
  },
  computed: {
    cupones() {
      return this.$store.getters["shopcar/data2"];
    },
   
    data() {
      //return this.$store.getters["shopcar/getAdded"];
      let cupon = this.$store.getters["shopcar/getAdded"];
      if(cupon.exclusivo=='NO'){
        cupon.exclusivo = false
      }else{
         cupon.exclusivo = true
      }

      if (cupon.limitCustomers == "SI" || cupon.ExcludeCustomers == "SI") {
        let items = [];

        let arr = cupon.restrictions_customers;
        if (arr != "No se encontraron coincidencias") {
          for (var i = 0; i < arr.length; i++) {
            let model = {
              id: arr[i].id,
              name: arr[i].customer_email,
            };

            items.push(model);
          }
        }

        this.couponRestrictionsCustomers = items;

        if (cupon.limitCustomers == "SI") {
          this.resCus = "LIMITAR";
        } else {
          this.resCus = "EXCLUIR";
        }
      } else {
        this.resCus = "NO";
      }

      if (cupon.limitCategories == "SI" || cupon.ExcludeCategories == "SI") {
        let items = [];
        let arr = cupon.restrictions_categories;
        if (arr != "No se encontraron coincidencias") {
          for (var i = 0; i < arr.length; i++) {
            let model = {
              id: arr[i].id,
              name: arr[i].category,
            };

            items.push(model);
          }
        }

        this.couponRestrictionsCategories = items;

        if (cupon.limitCategories == "SI") {
          this.resCat = "LIMITAR";
        } else {
          this.resCat = "EXCLUIR";
        }
      } else {
        this.resCat = "NO";
      }

      if (cupon.limitProducts == "SI" || cupon.ExcludeProducts == "SI") {
        let items = [];
        let arr = cupon.restrictions_products;
        if (arr != "No se encontraron coincidencias") {
          for (var i = 0; i < arr.length; i++) {
            let model = {
              id: arr[i].id,
              name: arr[i].product,
            };

            items.push(model);
          }
        }

        this.couponRestrictionsProducts = items;

        if (cupon.limitProducts == "SI") {
          this.resProd = "LIMITAR";
        } else {
          this.resProd = "EXCLUIR";
        }
      } else {
        this.resProd = "NO";
      }

      return cupon;
    },
    products() {
      return this.$store.getters["product/data"];
    },
    categorias() {
       let allctg = this.$store.getters["category/data"];
      let result = [];

        if(allctg != 'No se encontraron coincidencias'  && allctg !='error'){
          for (var i = 0; i < allctg.length; i++) {
          if (allctg[i].id != 1) {
          result.push(allctg[i])
          } 
          
          }
        }
     

      return result;

     
    },
    url() {
      return this.$store.getters["main/baseURL"];
    },
    user() {
      return this.$store.getters["admin/getIdentity"];
    },

    //Paginacion productos

    allItems() {
      return Object.keys(this.products).map((pid) => this.products[pid]);
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

    allItems2() {
      return Object.keys(this.categorias).map((pid) => this.categorias[pid]);
    },
    filteredItems2() {
      return this.allItems2.slice(
        (this.currentPage2 - 1) * this.itemsPerPage2,
        this.currentPage2 * this.itemsPerPage2
      );
    },
    totalPages2() {
      let total = Math.ceil(this.allItems2.length / this.itemsPerPage2);
      if (total < this.currentPage2) {
        this.currentPage2 = 1;
      }
      return total;
    },
  },
  methods: {
    ...mapActions("shopcar", ["setAddedCar"]),
    ...mapActions("shopcar", ["getAllInfoCar"]),
    ...mapActions("shopcar", ["getAllInfoCar2"]),
    ...mapActions("shopcar", ["setHistoryOptionCar"]),
    ...mapActions("shopcar", ["getInfoByIdCar"]),
    ...mapActions("main", ["getAllInfo"]),
    ...mapActions("product", ["getAllInfoPro"]),
    ...mapActions("category", ["getAllInfoCat"]),
   
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    submit: async function (
      name,
      descrp,
      code,
      cstatus,
      date_a,
      date_b,
      freeShipping,
      totalAvailable,
      totalAvailableCustomer,
      minAmount,
      maxAmount,
      type,
      value,
      limitCustomers,
      ExcludeCustomers,
      limitCategories,
      ExcludeCategories,
      limitProducts,
      ExcludeProducts,
      couponRestrictionsCustomers,
      couponRestrictionsProducts,
      couponRestrictionsCategories,
      exclusivo
    ) {
      if (
        couponRestrictionsCustomers.length == 0 &&
        (limitCustomers == "SI" || ExcludeCustomers == "SI")
      ) {
        this.status = "error";
        this.msg =
          "Falta agregar los clientes a los que desea aplicar la restricción.";
      } else if (
        couponRestrictionsProducts.length == 0 &&
        (limitProducts == "SI" || ExcludeProducts == "SI")
      ) {
        this.status = "error";
        this.msg =
          "Falta agregar los productos a los que desea aplicar la restricción.";
      } else if (
        couponRestrictionsCategories.length == 0 &&
        (limitCategories == "SI" || ExcludeCategories == "SI")
      ) {
        this.status = "error";
        this.msg =
          "Falta agregar las categorias a las que desea aplicar la restricción.";
      } else if (date_a >= date_b) {
        this.status = "error";
        this.msg =
          "La fecha inicial no debe ser mayor o igual a la de expiración.";
      } else {
        let reorder1 = [];
        let reorder2 = [];
        let reorder3 = [];

        for (var i = 0; i < couponRestrictionsCustomers.length; i++) {
          reorder1.push(couponRestrictionsCustomers[i].name);
        }

        for (var k = 0; k < couponRestrictionsProducts.length; k++) {
          reorder2.push(couponRestrictionsProducts[k].name);
        }

        for (var m = 0; m < couponRestrictionsCategories.length; m++) {
          reorder3.push(couponRestrictionsCategories[m].name);
        }

        let id = this.data.id
        exclusivo == true ? exclusivo = 'SI': exclusivo = 'NO'
        let data = {
          id: id,
          name: name,
          descrp: descrp,
          code: code,
          cstatus: cstatus,
          date_a: date_a,
          date_b: date_b,
          freeShipping: freeShipping,
          totalAvailable: totalAvailable,
          totalAvailableCustomer: totalAvailableCustomer,
          minAmount: minAmount,
          maxAmount: maxAmount,
          type: type,
          value: value,
          limitCustomers: limitCustomers,
          ExcludeCustomers: ExcludeCustomers,
          limitCategories: limitCategories,
          ExcludeCategories: ExcludeCategories,
          limitProducts: limitProducts,
          ExcludeProducts: ExcludeProducts,
          couponRestrictionsCustomers: reorder1,
          couponRestrictionsProducts: reorder2,
          couponRestrictionsCategories: reorder3,
          exclusivo
        };

        this.status = "";
        this.msg = "";

        let result = await this.$store.dispatch("main/editItem", {
          option: "cupon",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.msg = result.message;
        } else {
          // success

          this.showModal();
        }
      }
    },
  



 
  
    showModal: function () {
      this.viewModal = true;
    },
   
    eliminarItem: async function (id, option) {
      let result = await this.$store.dispatch("main/deleteItem", {
        option: option,
        id: id,
      });

      if (result.status == "error") {
        this.msg = result.message;
        this.status = "error";
      } else {
        this.msg = result.message;
        this.status = "success";
      }
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
 

    codeCreate() {
      let cupones = this.cupones;
      this.code = "";

      var ctrs = "ABCDEFGHJKLMNOPQRTUVWXYZ123456789";
      var codeGen = "";

      let valido = false;
      while (valido == false) {
        for (var k = 0; k < 20; k++) {
          codeGen += ctrs.charAt(Math.floor(Math.random() * ctrs.length));
        }

        let encontrado = "no";
        for (var i = 0; i < cupones.length; i++) {
          if (cupones[i].code == codeGen) {
            encontrado = "si";
          }
        }

        if (encontrado == "si") {
          codeGen = "";
        } else {
          valido = true;
        }
      }

      this.code = codeGen;

      return codeGen;
    },

      changeRCus: function (value) {
        this.resCus = value
        if(value == 'NO'){
            this.data.limitCustomers ='NO'
            this.data.ExcludeCustomers ='NO'
            this.data.couponRestrictionsCustomers = []
        }

        if(value =='LIMITAR'){
            this.data.limitCustomers ='SI'
            this.data.ExcludeCustomers ='NO'
        }

        if(value == 'EXCLUIR'){
            this.data.limitCustomers ='NO' 
            this.data.ExcludeCustomers ='SI'
        }

     },

    añadirCus(email) {
      this.status = "";
      this.msg = "";

      if (this.resCus == "NO") {
        this.status = "error";
        this.msg =
          "Es necesario indicar el tipo de restricción (Limitar / Excluir)";
      } else if (email == undefined || email == "") {
        this.status = "error";
        this.msg = "Agrege un email valido.";
      } else {
        let items = [];
        let res = this.couponRestrictionsCustomers;

        for (var i = 0; i < res.length; i++) {
          let model = {
            id: res[i].id,
            name: res[i].name,
          };

          items.push(model);
        }

        let encontrado = "NO";

        for (var k = 0; k < items.length; k++) {
          if (items[k].name == email) {
            encontrado = "SI";
          }
        }

        if (encontrado == "NO") {
          items.push({ id: null, name: email });
        } else {
          this.status = "error";
          this.msg = "Email ya agregado.";
        }

        this.couponRestrictionsCustomers = items;
        this.cus_email = "";
      }
    },

    delRcus(key) {
      let items = [];
      let res = this.couponRestrictionsCustomers;

      for (var i = 0; i < res.length; i++) {
        if (i != key) {
          let model = {
            id: res[i].id,
            name: res[i].name,
          };
          items.push(model);
        } else {
          if (res[i].id != null && res[i].id != undefined) {
            this.eliminarItem(res[i].id, "rcustomer");
          }
        }
      }

      this.couponRestrictionsCustomers = items;
    },

  

     changeRCat: function (value) {
        this.resCat = value
        if(value == 'NO'){
            this.data.limitCategories ='NO'
            this.data.ExcludeCategories ='NO'
            this.data.couponRestrictionsCategories = []
        }

        if(value =='LIMITAR'){
            this.data.limitCategories ='SI'
            this.data.ExcludeCategories ='NO'
        }

        if(value == 'EXCLUIR'){
            this.data.limitCategories  ='NO' 
            this.data.ExcludeCategories ='SI'
        }

     },

    añadirCat(categoria) {
      this.status = "";
      this.msg = "";

      if (this.resCat == "NO") {
        this.status = "error";
        this.msg =
          "Es necesario indicar el tipo de restricción (Limitar / Excluir)";
      } else if (categoria == undefined || categoria == "") {
        this.status = "error";
        this.msg = "Agrege una categoría valida.";
      } else {
        let cate = this.categorias;
        let isvalid = "NO";
        for (var i = 0; i < cate.length; i++) {
          if (cate[i].name == categoria) {
            isvalid = "SI";
          }
        }

        if (isvalid == "SI") {
          let items = [];
          let res = this.couponRestrictionsCategories;

          for (var i = 0; i < res.length; i++) {
            let model = {
              id: res[i].id,
              name: res[i].name,
            };

            items.push(model);
          }

          let encontrado = "NO";

          for (var k = 0; k < items.length; k++) {
            if (items[k].name == categoria) {
              encontrado = "SI";
            }
          }

          if (encontrado == "NO") {
            items.push({ id: null, name: categoria });
          } else {
            this.status = "error";
            this.msg = "Categoría ya agregada.";
          }

          this.couponRestrictionsCategories = items;
          //this.cat_name = "";
        } else {
          this.status = "error";
          this.msg = "Categoría no encontrada.";
          //this.cat_name = "";
        }
      }
    },

    delRcat(key) {
      let items = [];
      let res = this.couponRestrictionsCategories;

      for (var i = 0; i < res.length; i++) {
        if (i != key) {
          let model = {
            id: res[i].id,
            name: res[i].name,
          };
          items.push(model);
        } else {
          if (res[i].id != null && res[i].id != undefined) {
            this.eliminarItem(res[i].id, "rcategory");
          }
        }
      }

      this.couponRestrictionsCategories = items;
    },

        changeRProd: function (value) {
        this.resProd = value
        if(value == 'NO'){
            this.data.limitProducts ='NO'
            this.data.ExcludeProducts ='NO'
            this.couponRestrictionsProducts = []
        }

        if(value =='LIMITAR'){
            this.data.limitProducts ='SI'
            this.data.ExcludeProducts ='NO'
        }

        if(value == 'EXCLUIR'){
            this.data.limitProducts  ='NO' 
            this.data.ExcludeProducts ='SI'
        }

     },

    añadirProd(producto) {
      this.status = "";
      this.msg = "";

      if (this.resProd == "NO") {
        this.status = "error";
        this.msg =
          "Es necesario indicar el tipo de restricción (Limitar / Excluir)";
      } else if (producto == undefined || producto == "") {
        this.status = "error";
        this.msg = "Agrege una categoría valida.";
      } else {
        let prods = this.products;
        let isvalid = "NO";
        for (var i = 0; i < prods.length; i++) {
          if (prods[i].name == producto) {
            isvalid = "SI";
          }
        }

        if (isvalid == "SI") {
          let items = [];
          let res = this.couponRestrictionsProducts;

          for (var i = 0; i < res.length; i++) {
            let model = {
              id: res[i].id,
              name: res[i].name,
            };

            items.push(model);
          }

          let encontrado = "NO";

          for (var k = 0; k < items.length; k++) {
            if (items[k].name == producto) {
              encontrado = "SI";
            }
          }

          if (encontrado == "NO") {
            items.push({ id: null, name: producto });
          } else {
            this.status = "error";
            this.msg = "Producto ya agregado.";
          }

          this.couponRestrictionsProducts = items;
          this.prod_name = "";
        } else {
          this.status = "error";
          this.msg = "Producto no encontrado.";
          this.prod_name = "";
        }
      }
    },

    delRprod(key) {
      let items = [];
      let res = this.couponRestrictionsProducts;

      for (var i = 0; i < res.length; i++) {
        if (i != key) {
          let model = {
            id: res[i].id,
            name: res[i].name,
          };
          items.push(model);
        } else {
          if (res[i].id != null && res[i].id != undefined) {
            this.eliminarItem(res[i].id, "rproduct");
          }
        }
      }

      this.couponRestrictionsProducts = items;
    },
  },
};
</script>
<style scoped>
.gencode {
  color: var(--color-1);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  cursor: pointer;
}
.grup-form {
  align-items: flex-start;
}
#AddCat label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddCat input,
#AddCat select {
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

.bodytbl-items {
  width: 15vw;
}

p.prest{
  font-size: 1vw;
  color: var(--color-1);
  font-weight: 800;
}
</style>