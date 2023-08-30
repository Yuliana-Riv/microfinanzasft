<template >
  <div id="EditarProducto">
    <div class="form-content">
      <p id="Producto" class="subtitle">Producto</p>

      <form
        @submit.prevent="
          submit(
            added.id,
            added.name,
            added.id_category,

            added.descr,

            added.price,

            file1,
            added.status
          )
        "
      >
        <div class="grup-form dflx">
          <!--nombre-->
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="added.name"
              type="text"
              id="name"
              name="name"
              required
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <!--descripcion-->
          <div class="boxform">
            <label for="descr" class="descr"
              >Descripción <span class="opcional">(opcional)</span></label
            >
            <textarea
              v-model="added.descr"
              id="descr"
              name="descr"
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <!--categoría-->
          <div class="boxform">
            <label for="category" class="category">Categoría</label>

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
                  <div v-if="categorias.length > 0">
                    <div v-for="(prm, key) in categorias" :key="key">
                      <p
                        v-if="includesItem(value1, prm.name)"
                        class="itemp cp"
                        @click="
                          (added.category_name = prm.name),
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
                  <img
                    src="../../assets/default/Search.png"
                    alt="icono buscar"
                  />
                </div>
              </div>
            </div>
          </div>

          <!--type
          <div class="boxform">
            <label for="role" class="role">Presentación</label>

            <input
              v-model="added.type_name"
              type="text"
              id="tipos"
              name="tipos"
              disabled
              required
            />

            <div class="content-tbl-items ">
              <div class="tblitems">
                <div class="bodytbl-items tbl_item">
                  <div
                    v-if="
                      type.length>0
                    "
                  >
                    <div v-for="(prm, key) in type" :key="key">
                      <p
                        v-if="includesItem2(value2, prm.name)"
                        class="itemp cp"
                        @click="
                          (added.type_name = prm.name),
                            (added.id_type = prm.id)
                        "
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
                  v-model="value2"
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
          -->
        </div>

        <div class="grup-form dflx">
          <!--precio-->
          <div class="boxform">
            <label for="price" class="price">Precio </label>
            <input
              v-model="added.price"
              type="text"
              id="name"
              name="price"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="role" class="role">Status </label>
            <div class="select-container">
              <input
                type="checkbox"
                name="select-ch"
                id="select-ch"
                v-model="active"
                :true-value="true"
                :false-value="false"
              />
              <label for="select-ch">
                <div id="select-role" :class="{ rounded: active }">
                  {{ added.status }}
                </div>
              </label>
              <div class="options-cont" @click="closeSelect()">
                <div class="option-btn" @click="added.status = 'INACTIVO'">
                  INACTIVO
                </div>
                <div class="option-btn" @click="added.status = 'ACTIVO'">
                  ACTIVO
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--imagen-->
        <div class="grup-form dflx">
          <div class="boxform">
            <label>Imagen <span class="opcional">(opcional)</span></label>
            <div class="dflx">
              <label class="filelabel" for="file1">
                <span>Seleccionar Archivo</span>
              </label>
              <label class="filelabelname tbl_item" for="file1">
                {{ added.image }}
              </label>
            </div>

            <input
              @change="previewFiles"
              :v-model="added.image"
              type="file"
              id="file1"
              name="uploadimg"
              class="fileinput"
            />
          </div>
        </div>

        <img
          class="img_item"
          v-if="validateIMG(added.image)"
          :src="url + '/' + endpointCodes.get + '/product-img/' + added.image"
          alt=""
        />

        <!--regresar/guardar-->
        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Guardar</button>
        </div>

        <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>
      </form>
    </div>

    <hr class="hrdr" />
    <p class="subtitle">Subcategorías</p>

    <form @submit.prevent="addSubcategory(id_subcategory)">
      <div class="grup-form dflx">
        <!--categoría-->
        <div class="boxform">
          <label for="category" class="category">Subcategoría</label>

          <input
            v-model="sub_name"
            type="text"
            id="category"
            name="category"
            disabled
            required
          />

          <div class="content-tbl-items">
            <div class="tblitems">
              <div class="bodytbl-items tbl_item">
                <div v-if="subcategorias.length > 0">
                  <div v-for="(prm, key) in subcategorias" :key="key">
                    <p
                      v-if="includesItem(value3, prm.name)"
                      class="itemp cp"
                      @click="(sub_name = prm.name), (id_subcategory = prm.id)"
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
                v-model="value3"
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
        <button class="alta" type="submit">Guardar</button>
      </div>

      <div v-if="status != ''" class="status_messages">
        <div v-if="status == 'success'" class="msg msg_success">
          <p>{{ message }}</p>
        </div>
        <div v-if="status == 'error'" class="msg msg_error">
          <p>{{ message }}</p>
        </div>
      </div>
    </form>
    <div class="tabla_perzonalidada">
      <div class="header_tp">
        <p class="op_tp">Subcategoría</p>
        <p class="op_tp">Categoría</p>
        <p class="op_del_tb">Eliminar</p>
      </div>
      <div class="body_tp">
        <div class="fila" v-for="(item, key) in product_subcategory" :key="key">
          <p class="fp_tp">{{ item.subcategory_name }}</p>
          <p class="fp_tp">{{ item.category_name }}</p>
          <p
            @click="(modalEliminar2 = true), (itemDel2 = item.id)"
            class="fdel"
          >
            &#10006;
          </p>
        </div>
        <div class="sinitems" v-if="product_subcategory.length == 0">
          <p>Sin subcategorías agregadas</p>
        </div>
      </div>
    </div>

    <hr class="hrdr" />
    <p id="Stock" class="subtitle">Editar stock</p>

    <form @submit.prevent="stockvar(added.id, stockvalue)">
      <div class="boxform">
        <label for="stock" class="name">Stock actual </label>
        <input
          v-model="stockvalue"
          type="number"
          id="stock"
          name="stock"
          required
          class="in1"
        />
      </div>
      <button class="alta" type="submit">Actualizar</button>
      <div v-if="status2 != ''" class="status_messages">
        <div v-if="status2 == 'success'" class="msg msg_success">
          <p>{{ message2 }}</p>
        </div>
        <div v-if="status2 == 'error'" class="msg msg_error">
          <p>{{ message2 }}</p>
        </div>
      </div>
    </form>

    <hr class="hrdr" />
    <p id="Atributos" class="subtitle">
      Agregar atributos
      <!--<a @click="bloq = 1" href="#EditarProducto"
        ><img
          class="totop"
          src="../../assets/uparrow.svg"
          alt="ir al top de la vista."
      /></a>-->
    </p>

    <div v-if="messageError != ''" class="status_messages">
      <div class="msg msg_error">
        <p>{{ messageError }}</p>
      </div>
    </div>
    <div class="rows_tbl dflx">
      <div class="tblitems mtp">
        <p class="hrd_tbli">ATRIBUTO VALOR</p>
        <div class="bodytbl-items tbl_item">
          <div v-if="atributos.length > 0">
            <div v-for="(atributo, key) in atributos" :key="key">
              <div v-for="(value, key2) in atributo.values" :key="key2">
                <div v-if="includesItem(value3, value.valor)" class="dflx sp">
                  <p class="itemp">{{ atributo.name + ": " + value.valor }}</p>
                  <p class="cp addcp" @click="addValue(value.id)">&#43;</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>No se encontraron coincidencias.</p>
          </div>
        </div>
        <div class="buscador-items dflx">
          <input
            v-model="value3"
            type="search"
            id="inputbusqueda"
            class="searching-it"
            :placeholder="'Búsqueda'"
          />
        </div>
      </div>

      <div class="tblitems mtp">
        <p class="hrd_tbli">AGREGADAS</p>
        <div class="bodytbl-items tbl_item">
          <div v-if="added.product_atributo_valores.length > 0">
            <div
              v-for="(item, key) in added.product_atributo_valores"
              :key="key"
              class="dflx sp"
            >
              <p class="itemp">
                {{ item.atributo + ": " + item.valor }}
              </p>
              <p class="cp" @click="(modalValDel = true), (itemDel = item.id)">
                &#10006;
              </p>
            </div>
          </div>
          <div v-else>
            <p>No se encontraron coincidencias.</p>
          </div>
        </div>
      </div>
    </div>


    <hr class="hrdr" />
    <p id="Variantes" class="subtitle" v-if="added.product_atributo_valores.length > 0">Vincular Variantes</p>

    <div v-if="messageError != ''" class="status_messages">
      <div class="msg msg_error">
        <p>{{ messageError }}</p>
      </div>
    </div>
    <div class="rows_tbl dflx mbtom" v-if="added.product_atributo_valores.length > 0">
      <div class="tblitems mtp">
        <p class="hrd_tbli">PRODUCTOS</p>
        <div class="bodytbl-items tbl_item">
          <div v-if="productos.length > 0"> 
              <div v-for="(producto, key) in productos" :key="key">
                <div
                  v-if="
                    includesItem(value4, producto.name)  ||
                  includesItem(value4, producto.valor)   ||
                  includesItem(value4, producto.atributo) 
                  "
                  class="dflx sp"
                >
                  <p class="itemp">
                    {{
                      producto.name +
                      " - " +
                      producto.product_atributo_valores[0].valor +
                      " " +
                      producto.product_atributo_valores[0].atributo
                    }}
                  </p>
                  <p class="cp addcp" @click="addVariante(producto.id)">
                    &#43;
                  </p> 
                </div>
              </div> 
          </div> 
          <div v-else>
            <p>No se encontraron coincidencias.</p>
          </div>
        </div>
        <div class="buscador-items dflx">
          <input
            v-model="value4"
            type="search"
            id="inputbusqueda"
            class="searching-it"
            :placeholder="'Búscar por nombre o código'"
          />
        </div>
      </div>

      <div class="tblitems mtp" >
        <p class="hrd_tbli">VINCULADOS</p>
        <div class="bodytbl-items tbl_item">
          <div v-if="added.product_variantes.length > 0">
            <div
              v-for="(item, key) in added.product_variantes"
              :key="key"
              class="dflx sp"
            >
              <p class="itemp">
                {{
                  item.producto.name +
                  " - " +
                  item.producto.product_atributo_valores[0].valor +
                  " " +
                  item.producto.product_atributo_valores[0].atributo
                }}
              </p>
              <p
                class="cp"
                @click="(varianteAlert = true), (itemDel = item.id)"
              >
                &#10006;
              </p>
              <!--    -->
            </div>
          </div>
          <div v-else>
            <p>No se encontraron coincidencias.</p>
          </div>
        </div>
      </div>
    </div>

    <!---<hr class="hrdr" />
    <p class="subtitle">Extras</p>

    <form @submit.prevent="addExtra(price_ext, descr_ext)">
      <div class="grup-form dflx"> 
        <div class="boxform">
          <label for="price_ext" class="price">Precio </label>
          <input
            v-model="price_ext"
            type="number"
            id="price_ext"
            name="price_ext"
            min="1"
            step="any"
            required
            class="in1"
          />
        </div>
      </div>
      <div class="grup-form dflx"> 
        <div class="boxform">
          <label for="descr_ext" class="descr">Descripción</label>
          <textarea
            v-model="descr_ext"
            id="descr"
            name="descr_ext"
            required
            class="in1"
          />
        </div>
      </div>

      <div class="dflx">
        <button class="alta" type="submit">Guardar</button>
      </div>
    </form>

    <div class="tabla_perzonalidada">
      <div class="header_tp">
        <p class="op_tp">Descripción</p>
        <p class="op_tp">Precio</p>
        <p class="op_del_tb">Eliminar</p>
      </div>
      <div class="body_tp">
        <div class="fila" v-for="(item, key) in extras" :key="key">
          <p class="fp_tp">{{ item.descr }}</p>
          <p class="fp_tp">${{ item.price }}</p>
          <p @click="(modalEliminar = true), (itemDel = item.id)" class="fdel">
            &#10006;
          </p>
        </div>
        <div class="sinitems" v-if="extras.length == 0">
          <p>Sin extras agregados</p>
        </div>
      </div>
    </div>-->

    <div v-if="varianteAlert" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >desvincular <br />
              este producto?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminarVariante()">Aceptar</p>
          <p @click="(varianteAlert = false), (itemDel = '')">Cancelar</p>
        </div>
      </div>
    </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Producto actualizado</h3>
          <img src="../../assets/default/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
    <div v-if="viewExtra" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Producto actualizado</h3>
          <img src="../../assets/default/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="viewExtra = false" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>

    <div v-if="modalEliminar" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/default/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              este extra?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminar()">Aceptar</p>
          <p @click="(modalEliminar = false), (itemDel = '')">Cancelar</p>
        </div>
      </div>
    </div>
    <div v-if="modalEliminar2" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/default/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              esta subcategoria?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminar2()">Aceptar</p>
          <p @click="(modalEliminar2 = false), (itemDel2 = '')">Cancelar</p>
        </div>
      </div>
    </div>

    <div v-if="modalValDel" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              este valor?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminarValor()">Aceptar</p>
          <p @click="(modalValDel = false), (itemDel = '')">Cancelar</p>
        </div>
      </div>
    </div>

    <div v-if="modalVariante" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Valor agregado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="modalVariante = false" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
    <div v-if="modalVarianteDel" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Producto desvinculado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="modalVarianteDel = false" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
    <div v-if="varianteAlert" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >desvincular <br />
              este producto?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminarVariante()">Aceptar</p>
          <p @click="(varianteAlert = false), (itemDel = '')">Cancelar</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
let { url, endpointCodes } = require("../../global/index");
import userService from "../../services/user.service";
export default {
  name: "EditPro",

  data() {
    return {
      url: url,
      endpointCodes: endpointCodes,
      status: "",
      message: "",
      status2: "",
      message2: "",

      name: "",
      id_category: 1,
      id_type: 1,
      descr: "",
      price: null,
      image: "",

      cat_name: "NINGUNA",
      type_name: "NINGUNA",
      sub_name: "NINGUNA",
      id_subcategory: "",

      search_value: "",
      updsearchcli: "",

      active: false,
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",

      archivo: "No se eligió archivo",

      file1: null,
      messageError: "",

      //MODAL

      viewModal: false,
      modalValDel: false,
      varianteAlert: false,
      modalVariante: false,
      modalVarianteDel: false,

      modalEliminar: false,
      modalEliminar2: false,
      viewExtra: false,
      price_ext: "",
      descr_ext: "",
      itemDel: "",
      itemDel2: "",
      stockvalue: 0,
    };
  },
  async created() {
    await this.getAllInfoCtg("category");
    //await this.getAllInfoTpe("type");

    const payload = {
      id: this.added.id,
      option: "product_extras",
    };
    await this.getInfoByIdExs(payload);

    const payload2 = {
      id: this.added.id_category,
      option: "category_subcategory",
    };
    await this.getInfoByIdSct(payload2);
    const payload3 = {
      id: this.added.id,
      option: "product_subcategory_by_product",
    };
    await this.getInfoById(payload3);
    await this.getAllInfoAtt("atributo");

    let payload4 = {
      id: this.added.id,
      option: "stock_product",
    };
    await this.getInfoByIdStk(payload4);
    await this.getAllInfoMrr("product");
  },

  computed: {
    added() {
      return this.$store.getters["product/getAdded"];
    },
    atributos() {
      let arr = this.$store.getters["atributo/data"];
      if (!Array.isArray(arr)) {
        arr = [];
      }
      return arr;
    },
    stockdata() {
      let arr = this.$store.getters["stock/data"];
      return arr[0];
    },
    productos() {
      let product = this.$store.getters["mirror/data"];
      if (!Array.isArray(product)) {
        return [];
      } else {
        const newarr = product.filter((item) => item.id != this.added.id); //quitar el producto actual
        let filt = []; //quitar los productos que ya estan agregados
        for (const producto of newarr) {
          const include = this.added.product_variantes.filter(
            (item) => item.producto.id == producto.id
          );
          if (include.length == 0) filt.push(producto);
        }
        return filt;
      }
    },
    product() {
      return this.$store.getters["product/data"];
    },
    product_subcategory() {
      let arr = this.$store.getters["main/data"];
      if (Array.isArray(arr)) {
        return arr;
      } else {
        return [];
      }
    },
    extras() {
      let arr = this.$store.getters["extra/data"];
      if (Array.isArray(arr)) {
        return arr;
      } else {
        return [];
      }
    },
    categorias() {
      let arr = this.$store.getters["category/data"];
      if (Array.isArray(arr)) {
        return arr;
      } else {
        return [];
      }
    },
    subcategorias() {
      let arr = this.$store.getters["subcategory/data"];
      if (Array.isArray(arr)) {
        let filt = [];
        for (const subcategory of arr) {
          let encontrado = false;
          for (const add of this.product_subcategory) {
            if (add.id_subcategory == subcategory.id) {
              encontrado = true;
              break;
            }
          }

          if (encontrado == false) {
            filt.push(subcategory);
          }
        }

        return filt;
      } else {
        return [];
      }
    },
    /* type() {
      let arr =  this.$store.getters["type/data"];
       if(Array.isArray(arr)){
        return arr
      }else{
        return []
      }
    },*/
  },
  methods: {
    ...mapActions("atributo", ["getAllInfoAtt"]),
    ...mapActions("stock", ["getInfoByIdStk"]),
    ...mapActions("product", ["getAllInfoPrd"]),
    ...mapActions("product", ["setAddedPrd"]),
    ...mapActions("product", ["setHistoryOptionPrd"]),
    ...mapActions("product", ["addItemPrd"]),
    ...mapActions("category", ["getAllInfoCtg"]),
    ...mapActions("category", ["setAddedCat"]),
    ...mapActions("category", ["setHistoryOptionCat"]),
    ...mapActions("type", ["getAllInfoTpe"]),
    ...mapActions("type", ["setAddedTpe"]),
    ...mapActions("type", ["setHistoryOptionTpe"]),
    ...mapActions("product", ["getInfoByIdPrd"]),
    ...mapActions("subcategory", ["getInfoByIdSct"]),
    ...mapActions("main", ["getInfoById"]),
    ...mapActions("extra", ["getInfoByIdExs"]),
    ...mapActions("stock", ["addItemAdr"]),
    ...mapActions("stock", ["editItemStk"]),
    ...mapActions("atributo", ["deleteItemAtt"]),
    ...mapActions("mirror", ["getAllInfoMrr"]),

    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    validateIMG: async function (img) {
      const result = await userService.validateIMG("product-img", img);
      return result;
    },

    addExtra: async function (price_ext, descr_ext) {
      const data = {
        id_product: this.added.id,
        price: price_ext,
        descr: descr_ext,
      };
      let result = await this.$store.dispatch("extra/addItemExs", {
        option: "extra",
        item: data,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        const payload = {
          id: this.added.id,
          option: "product_extras",
        };
        await this.getInfoByIdExs(payload);
      }
    },
    addSubcategory: async function (id_subcategory) {
      const data = {
        id_product: this.added.id,
        id_subcategory,
      };
      let result = await this.$store.dispatch("main/addItem", {
        option: "product_subcategory",
        item: data,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
        this.delStatus();
      } else {
        // success
        const payload3 = {
          id: this.added.id,
          option: "product_subcategory_by_product",
        };
        await this.getInfoById(payload3);
      }
    },
    eliminar2: async function () {
      let id = this.itemDel2;
      this.status = "";
      this.message = "";

      let result = await this.$store.dispatch("main/deleteItem", {
        option: "product_subcategory",
        id: id,
      });

      if (result.status == "error") {
        this.message = result.message;
        this.status = "error";
        this.delStatus();
      } else {
        this.status = "";
        this.message = "";
        const payload3 = {
          id: this.added.id,
          option: "product_subcategory_by_product",
        };
        await this.getInfoById(payload3);
        this.modalEliminar2 = false;
      }
    },
    eliminar: async function () {
      let id = this.itemDel;
      this.status = "";
      this.message = "";

      let result = await this.$store.dispatch("extra/deleteItemExs", {
        option: "extra",
        id: id,
      });

      if (result.status == "error") {
        this.message = result.message;
        this.status = "error";
        this.delStatus();
      } else {
        this.status = "";
        this.message = "";
        const payload = {
          id: this.added.id,
          option: "product_extras",
        };
        await this.getInfoByIdExs(payload);
        this.modalEliminar = false;
      }
    },

    submit: async function (
      id,
      name,
      id_category,

      descr,
      price,

      image,
      statusprod
    ) {
      this.status = "";
      this.message = "";
      let data = [];

      if (image == null) {
        data = {
          id: id,
          name: name,
          id_category: id_category, 
          descr: descr, 
          price: price, 
          image: image,
          statusprod,
        };
      } else {

        data = new FormData();
        data.append("id", id);
        data.append("name", name);
        data.append("id_category", id_category);

        data.append("descr", descr);

        data.append("price", price);

        data.append("image", image);

        data.append("statusprod", statusprod);

        data.append("_method", "PUT");
      }
      
      let result = await this.$store.dispatch("product/editItemPrd", {
        option: "product",

        item: data,
      });
console.log(result)
      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success

        this.showModal();
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
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
      this.status2 = "";
      this.message2 = "";
      this.messageError = "";
    },

    showModal: function () {
      this.viewModal = true;
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

    stockvar: async function (id_product, stock) {
      this.status2 = "";
      this.message2 = "";
      let data = [];
      let result;
      if (this.added.stock == "Sin stock" || this.added.stock == "undefined") {
        let data = {
          id_product: id_product,
          stock: stock,
        };
        result = await this.$store.dispatch("stock/addItemAdr", {
          option: "stock",
          item: data,
        });
        location.reload();
      } else {
        let id = this.stockdata.id;
        let data = {
          id: id,
          id_product: id_product,
          stock: stock,
        };
        result = await this.$store.dispatch("stock/editItemStk", {
          option: "stock",
          item: data,
        });
      }
      this.status2 = result.status;
      if (result.status == "error") {
        this.status2 = "error";
        this.message2 = result.message;
        this.delStatus();
      } else {
        this.message2 = "Se ha actualizado el stock.";
        this.delStatus();
      }
    },
    valStock() {
      if (this.added.stock == "Sin stock" || this.added.stock == undefined) {
        this.stockvalue = 0;
      } else {
        this.stockvalue = this.added.stock;
      }
    },
    addValue: async function (id) {
      this.messageError = "";
      const data = {
        id_product: this.added.id,
        id_atributo_valor: id,
      };

      let result = await this.$store.dispatch("product/addItemPrd", {
        option: "product_value",
        item: data,
      });

      if (result.status == "error") {
        this.messageError = result.message;
        this.delStatus();
      } else {
        // success
        this.modalValue = true;
        const payload = {
          option: "product",
          id: this.added.id,
        };

        const res = await this.getInfoByIdPrd(payload);
        this.setAddedPrd(res);
      }
    },
    eliminarValor: async function () {
      this.modalValDel = false;
      let id = this.itemDel;
      this.messageError = "";

      let result = await this.$store.dispatch("atributo/deleteItemAtt", {
        option: "product_value",
        id: id,
      });

      if (result.status == "error") {
        this.messageError = result.message;
        this.delStatus();
      } else {
        // success
        const payload = {
          option: "product",
          id: this.added.id,
        };

        const res = await this.getInfoByIdPrd(payload);
        this.setAddedPrd(res);
        this.modalEliminado = true;
      }
    },

    addVariante: async function (id) {
      this.messageError = "";
      const data = {
        id_product: this.added.id,
        id_variante: id,
      };

      let result = await this.$store.dispatch("product/addItemPrd", {
        option: "product_variante",
        item: data,
      });

      if (result.status == "error") {
        this.messageError = result.message;
        this.delStatus();
      } else {
        // success
        const payload = {
          option: "product",
          id: this.added.id,
        };

        const res = await this.getInfoByIdPrd(payload);
        this.setAddedPrd(res);
        this.modalVariante = true;
      }
    },
    eliminarVariante: async function () {
      this.varianteAlert = false;
      let id = this.itemDel;
      this.messageError = "";

      let result = await this.$store.dispatch("atributo/deleteItemAtt", {
        option: "product_variante",
        id: id,
      });

      if (result.status == "error") {
        this.messageError = result.message;
        this.delStatus();
      } else {
        // success
        const payload = {
          option: "product",
          id: this.added.id,
        };

        const res = await this.getInfoByIdPrd(payload);
        this.setAddedPrd(res);
        this.modalVarianteDel = true;
      }
    },
  },
  mounted() {
    this.valStock();
  },
};
</script>
<style scoped>
#EditarProducto label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}
.sp {
  justify-content: space-between;
}
#EditarProducto input,
#EditarProducto select {
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
</style>