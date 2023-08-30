<template >
  <div id="AddCat">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
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
          )
        "
      >
        <div class="grup-form dflx">
          <!--nombre-->
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
    
              required
              class="in1"
            />
          </div>
          <div class="boxform">
             <label for="exclusivo" class="exclusivo">Exclusivo : <span v-if="exclusivo">SI</span> <span v-else>NO</span> </label>
             <input type="checkbox" id="exclusivo"  v-model="exclusivo" >
          </div>
        </div>

        <!--categoría-->
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="url" class="url">Descripcion </label>
            <textarea
              v-model="descrp"
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
              v-model="code"
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
              v-model="date_a"
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
              v-model="date_b"
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
              v-model="cstatus"
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
              <div class="option-btn" @click="cstatus = 'INACTIVO'">
                INACTIVO
              </div>
              <div class="option-btn" @click="cstatus = 'ACTIVO'">ACTIVO</div>
            </div>
          </div>
          <!--estatus-->
          <div class="boxform">
            <label for="code" class="code">ENVÍO GRATIS </label>
            <input
              v-model="freeShipping"
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
              <div class="option-btn" @click="freeShipping = 'SI'">SI</div>
              <div class="option-btn" @click="freeShipping = 'NO'">NO</div>
            </div>
          </div>
        </div>

        <div class="grup-form dflx">
          <!--total-->
          <div class="boxform">
            <label for="code" class="code">TOTAL DISPONIBLE </label>
            <input
              v-model="totalAvailable"
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
              v-model="totalAvailableCustomer"
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
              v-model="value"
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
              v-model="type"
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
              <div class="option-btn" @click="type = 'IMPORTE'">IMPORTE</div>
              <div class="option-btn" @click="type = 'PORCENTAJE'">
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
              v-model="minAmount"
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
              v-model="maxAmount"
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
            <label for="code" class="code">RESTRICCIÓN CLIENTE </label>
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
                          couponRestrictionsCustomers != 'No se encontraron coincidencias.' &&
                          couponRestrictionsCustomers != 'error'
                        "
                      >
                        <div v-for="(prm, key) in couponRestrictionsCustomers" :key="key"
                        class="dflx sbtw">
                          <!--<p class="itemp cp dflx">-->
                            <p class="item1">{{key}}</p>
                            <p  class="item2">{{prm}}</p>
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
            <label for="code" class="code">RESTRICCIÓN CATEGORÍA </label>
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
                          couponRestrictionsCategories != 'No se encontraron coincidencias.' &&
                          couponRestrictionsCategories != 'error'
                          "
                      >
                        <div v-for="(prm, key) in couponRestrictionsCategories" :key="key"
                        class="dflx sbtw">
                          <!--<p class="itemp cp dflx">-->
                            <p class="item1">{{key}}</p>
                            <p  class="item2">{{prm}}</p>
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
            <label for="code" class="code">RESTRICCIÓN PRODUCTO </label>
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
                          couponRestrictionsProducts != 'No se encontraron coincidencias.' &&
                          couponRestrictionsProducts != 'error'
                        "
                      >
                        <div v-for="(prm, key) in couponRestrictionsProducts" :key="key"
                        class="dflx sbtw">
                          <!--<p class="itemp cp dflx">-->
                            <p class="item1">{{key}}</p>
                            <p  class="item2">{{prm}}</p>
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
        <div id="modal_add">
          <div class="body dflx">
            <h3>Cupón agregado con éxito</h3>
            <img src="../../assets/add.png" alt="icono alerta" />
          </div>

          <div class="modal_add_btns dflx">
            <p @click="Add()" class="otro">Aceptar</p>
            <p @click="toEdit()" class="editar">Editar</p>
            <p @click="back()" class="inicio">Inicio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddCupon",
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
      exclusivo:false,
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
     
      added: "",
      currentPage: 1,
      itemsPerPage: 4,
      currentPage2: 1,
      itemsPerPage2: 4,
    };
  },
  async beforeMount() {
    let token = await this.$store.dispatch("admin/getToken");
    this.$store.dispatch("admin/decode", token);
  },
  created() {
    this.getAllInfoCat("category");
    this.getAllInfoPro("product");
    this.getCupons("cupones");
  },
  computed: {
    cupones() {
      return this.$store.getters["shopcar/data"];
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
    ...mapActions("shopcar", ["getAllInfoCar"]),
    ...mapActions("main", ["getAllInfo"]),
    ...mapActions("product", ["getAllInfoPro"]),
    ...mapActions("shopcar", ["setAddedCar"]),
    ...mapActions("shopcar", ["setHistoryOptionCar"]),
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
        exclusivo == true ? exclusivo = 'SI': exclusivo = 'NO'

        let data = {
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
          couponRestrictionsCustomers: couponRestrictionsCustomers,
          couponRestrictionsProducts: couponRestrictionsProducts,
          couponRestrictionsCategories: couponRestrictionsCategories,
          exclusivo
        };

        this.status = "";
        this.msg = "";

        let result = await this.$store.dispatch("main/addItem", {
          option: "cupon",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.msg = result.message;
        } else {
          // success

          this.added = result.added;
          this.setAddedCar(result.added)
          this.showModal();
        }
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

    includesItem2(search, name) {
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

    day() {
      return dayjs().format("YYYY-MM-DD");
    },
    minday() {
      return dayjs().add(1, "days").format("YYYY-MM-DD");
    },
    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedCar("");
      this.setHistoryOptionCar("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = "";
      (this.parent_name = ""), (this.id_parent = 1);

      this.viewModal = false;
      this.setAddedCar("");
    },
    toEdit: function () {
      this.setHistoryOptionCar("EditCou");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    previewFiles(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
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
      this.resCus = value;
      if (value == "NO") {
        this.limitCustomers = "NO";
        this.ExcludeCustomers = "NO";
        this.couponRestrictionsCustomers = [];
      }

      if (value == "LIMITAR") {
        this.limitCustomers = "SI";
        this.ExcludeCustomers = "NO";
      }

      if (value == "EXCLUIR") {
        this.limitCustomers = "NO";
        this.ExcludeCustomers = "SI";
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
          items.push(res[i]);
        }

        let encontrado = "NO";

        for (var k = 0; k < items.length; k++) {
          if (items[k] == email) {
            encontrado = "SI";
          }
        }

        if (encontrado == "NO") {
          items.push(email);
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
          items.push(res[i]);
        }
      }

      this.couponRestrictionsCustomers = items;
    },

    /*
      limitCustomers:"NO",  
        ExcludeCustomers:"NO", 
        limitCategories:"NO",  
        ExcludeCategories:"NO", 
        limitProducts:"NO", 
        ExcludeProducts:"NO", 
        */

    changeRCat: function (value) {
      this.resCat = value;
      if (value == "NO") {
        this.limitCategories = "NO";
        this.ExcludeCategories = "NO";
        this.couponRestrictionsCategories = [];
      }

      if (value == "LIMITAR") {
        this.limitCategories = "SI";
        this.ExcludeCategories = "NO";
      }

      if (value == "EXCLUIR") {
        this.limitCategories = "NO";
        this.ExcludeCategories = "SI";
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
            items.push(res[i]);
          }

          let encontrado = "NO";

          for (var k = 0; k < items.length; k++) {
            if (items[k] == categoria) {
              encontrado = "SI";
            }
          }

          if (encontrado == "NO") {
            items.push(categoria);
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
          items.push(res[i]);
        }
      }

      this.couponRestrictionsCategories = items;
    },

    changeRProd: function (value) {
      this.resProd = value;
      if (value == "NO") {
        this.limitProducts = "NO";
        this.ExcludeProducts = "NO";
        this.couponRestrictionsProducts = [];
      }

      if (value == "LIMITAR") {
        this.limitProducts = "SI";
        this.ExcludeProducts = "NO";
      }

      if (value == "EXCLUIR") {
        this.limitProducts = "NO";
        this.ExcludeProducts = "SI";
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
            items.push(res[i]);
          }

          let encontrado = "NO";

          for (var k = 0; k < items.length; k++) {
            if (items[k] == producto) {
              encontrado = "SI";
            }
          }

          if (encontrado == "NO") {
            items.push(producto);
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
          items.push(res[i]);
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