<template >
  <div id="AddPrd">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            name,
            id_category,
           
            descr,
           
            price,
           
            file1,
            extras,
            subcat
           
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

           </div>

        <div class="grup-form dflx">
          <!--descripcion-->
          <div class="boxform">
            <label for="descr" class="descr">Descripción  <span class="opcional">(opcional)</span></label>
            <textarea
              v-model="descr"
              id="descr"
              name="descr"
          
              
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <!--categoría-->
          <div class="boxform">
            <label for="category" class="role">Categoría</label>

            <input
              v-model="cat_name"
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
                        @click="(cat_name = prm.name), (id_category = prm.id)"
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

          <!--type-->
         <!-- <div class="boxform">
            <label for="role" class="role">Presentación</label>

            <input
              v-model="type_name"
              type="text"
              id="tipos"
              name="tipos"
              disabled
              required
            />

            <div class="content-tbl-items">
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
                        @click="(type_name = prm.name), (id_type = prm.id)"
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
          </div> -->
        </div>

        <div class="grup-form dflx">
          <!--precio-->
          <div class="boxform">
            <label for="price" class="price">Precio </label>
            <input
              v-model="price"
                type="text"
              id="price"
              name="price" 
             placeholder="Ej. $00, $00/$00"
              required
              class="in1"
            />
          </div>
         

          <div class="boxform">
            <label>Imagen <span class="opcional">(opcional)</span></label>
            <div class="dflx">
              <label class="filelabel" for="uploadimg">
                <span>Seleccionar Archivo</span></label
              >
              <label class="filelabelname tbl_item" for="uploadimg">
                {{ archivo }}</label
              >
            </div>

            <input
              @change="previewFiles"
              type="file"
              id="uploadimg"
              name="uploadimg"
            />
          </div>
        </div>

        <div >
            <hr class="hrdr">
     <p class="subtitle">Subcategoría <span class="opcional">(opcional)</span></p>

     <form  @submit.prevent="addSubcategory(itemsub)">
        <div class="grup-form dflx">
          <!--categoría-->
          <div class="boxform">
            <label for="category" class="category">Seleccionada</label>

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
                  <div
                    v-if="
                      subcategorias.length>0
                    "
                  >
                    <div v-for="(prm, key) in subcategorias" :key="key">
                      <p
                        v-if="includesItem(value3, prm.name)"
                        class="itemp cp"
                        @click="
                          (sub_name = prm.name),(id_subcategory = prm.id), itemsub = prm
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
                
                <button class="alta" type="submit">Aceptar</button>
              </div>

             
     </form>
    
        <div class="tabla_perzonalidada">
      <div class="header_tp">
         <p class="op_tp">Subcategoría</p>
         <p class="op_tp">Categoría</p>
         <p class="op_del_tb">Eliminar</p>
      </div>
      <div class="body_tp">
          <div class="fila" v-for="(item, key) in subcat" :key="key" >
              <p class="fp_tp">{{item.name}}</p>
              <p class="fp_tp">{{item.category_name}}</p>
              <p @click="subcat= []" class="fdel">&#10006;</p>
          </div>
           <div class="sinitems"  v-if="subcat.length ==0">
              <p >Sin subcategoría agregada</p>
              
          </div>
      </div>
   </div>
        </div>


            <hr class="hrdr">
     <p class="subtitle">Extras <span class="opcional">(opcional)</span></p>


    <form @submit.prevent="addExtra(price_ext, descr_ext)">
        <div class="grup-form dflx">
          <!--precio-->
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
          <!--descripcion-->
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
          
          <button class="alta" type="submit">Aceptar</button>
        </div>


    </form>

   <div class="tabla_perzonalidada">
      <div class="header_tp">
         <p class="op_tp">Descripción</p>
         <p class="op_tp">Precio</p>
         <p class="op_del_tb">Eliminar</p>
      </div>
      <div class="body_tp">
          <div class="fila" v-for="(item, key) in extras" :key="key" >
              <p class="fp_tp">{{item.descr}}</p>
              <p class="fp_tp">${{item.price}}</p>
              <p @click="delExtra(key)" class="fdel">&#10006;</p>
          </div>
           <div class="sinitems"  v-if="extras.length ==0">
              <p >Sin extras agregados</p>
              
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
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>
      </form>

      <div v-if="viewModal" class="modal_view">
        <div id="modal_add">
          <div class="body dflx">
            <h3>Producto agregado</h3>
            <img src="../../assets/default/add.png" alt="icono alerta" />
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
  name: "AddPrd",
  data() {
    return {
      status: "",
      message: "",
     
     
       name: "",
       descr: "",
        id_category: "",
        id_type: "",
        price: '',
    
      
    
      cat_name: "NINGUNA",
      type_name: "NINGUNA",


      sub_name:'NINGUNA',
      id_subcategory:'',
      subcat:[],
      itemsub:'',


      url: "",
    

      search_value: "",
      updsearchcli: "",
    
      price_ext:'', 
      descr_ext:'',
      extras :[],
      
      active: false,
      value1: "",
      value2: "",
       value3: "",
      archivo: "No se eligió archivo",
      file1: null,

      //MODAL

      viewModal: false,
    };
  },
  created() {
    this.getAllInfoCtg("category");
    //this.getAllInfoTpe("type");
  },
  watch:{
        id_category: async function(value){
          this.subcat =[]
         if(value){
           const payload2 ={
              'id':value,
                'option': 'category_subcategory'
           }
           await this.getInfoByIdSct(payload2)
         }
      }
  },


  computed: {
    categorias() {
      let arr = this.$store.getters["category/data"];
      if(Array.isArray(arr)){
        return arr
      }else{
        return []
      }
    
    },
    subcategorias() {
      let arr = this.$store.getters["subcategory/data"];
      if(Array.isArray(arr)){
        return arr
      }else{
        return []
      }
    
    },
    /*type() {
      let arr =  this.$store.getters["type/data"];
       if(Array.isArray(arr)){
        return arr
      }else{
        return []
      }
    },*/
  },
  methods: {
    ...mapActions("product", ["getAllInfoPrd"]),
    ...mapActions("product", ["setAddedPrd"]),
    ...mapActions("product", ["setHistoryOptionPrd"]),
    ...mapActions("category", ["getAllInfoCtg"]),
    ...mapActions("category", ["setAddedCtg"]),
    ...mapActions("category", ["setHistoryOptionCtg"]),
    ...mapActions("type", ["getAllInfoTpe"]),
    ...mapActions("type", ["setAddedTpe"]),
    ...mapActions("type", ["setHistoryOptionTpe"]),
     ...mapActions('subcategory', ['getInfoByIdSct']),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    addSubcategory(item){
      this.subcat=[item]
      this.itemsub =''
      this.sub_name='NINGUNA';
      this.id_subcategory='';
    
    },
    submit: async function (
      name,id_category,  descr,  price,image, extras, subcat
    ) {
      this.status = "";
      this.message = "";
      let data = [];
      extras = JSON.stringify(extras)
      subcat = JSON.stringify(subcat)
      if (image == null) {
        data = {
          name: name,
          id_category: id_category,

          descr: descr,
          price: price,
          extras,
          subcat
          
        };
      } else {
         data = new FormData();
        data.append("name", name);
        data.append("id_category", id_category);
   
        data.append("descr", descr);
        data.append("price", price);
        data.append("image", image);
        data.append("subcat", subcat);
        
        data.append("extras", extras);
        data.append("_method", "POST");
      }
      let result = await this.$store.dispatch("product/addItemPrd", {
        option: "product",
        item: data,
      });
      //console.log(result)

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        this.setAddedPrd(result.added);
        this.showModal();
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

    addExtra(price, descr){
        let arr =[]
        for (const item of this.extras) {
          arr.push(item)
        } 
        arr.push({
          price, descr
        })
        this.extras = arr
    },
    delExtra(indice){
       let arr =[]
       for(var i=0; i<this.extras.length; i++){
        if(i!=indice){
          arr.push(this.extras[i])
        }
       }
       this.extras = arr;
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

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedPrd("");
      this.setHistoryOptionPrd("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = ""
   

      this.id_category =''
      this.id_type =''
      this.cat_name ="NINGUNA"
      this.type_name ="NINGUNA"
      this.descr=''

      this.price=''

      this.file1=null
  

      this.viewModal = false;
      this.setAddedPrd("");
    },
    toEdit: function () {
      this.setHistoryOptionPrd("Edit");
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
  },
};
</script>
<style scoped>
.grup-form {
  align-items: flex-start;
}
#AddPrd label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddPrd input,
#AddPrd select {
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