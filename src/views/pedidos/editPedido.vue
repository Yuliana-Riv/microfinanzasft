<template >
  <div id="EditCat">
    
    <div class="form-content">




      <div class="dflx">
        <div class="blq1">
          <div class="grup-form dflx">
           <div class="grup-data dflx">
            <label >No. pedido</label>
            <p class="pdata pbold">{{added.pay_num}}</p>
          </div>  
          <div class="grup-data dflx">
            <label >Estado</label>
            <p class="pdata pbold">{{added.status}}</p>
          </div>  
          </div>

           <div class="grup-form dflx">
           <div class="grup-data dflx">
            <label >Método</label>
            <p class="pdata">{{added.method}}</p>
          </div>  

           <div class="grup-data dflx">
            <label >Order ID</label>
            <p class="pdata">{{added.order_id}}</p>
          </div>  
          </div>

          <div class="grup-form dflx">
           <div class="grup-data dflx">
            <label >Opción de envío</label>
            <p class="pdata">{{added.shipping_option}}</p>
          </div>  

           <div class="grup-data dflx">
            <label >Número de rastreo</label>
            <p class="pdata">{{added.tracking_number}}</p>
          </div>  
          </div>
          <div class="grup-form dflx">
           <div class="grup-data dflx">
            <label >Fecha</label>
            <p class="pdata">{{added.created_at}}</p>
          </div>  

           <div class="grup-data dflx">
            <label >Facturar</label>
            <p class="pdata"> <span v-if="added.billing.rfc">Si</span>  <span v-else>No</span> </p>
          </div>  
          </div>


        <div > 
              <p class="subtitle">Cliente</p>

               <div class="grup-form dflx">
              <div class="grup-data dflx">
                <label >Nombre/s</label>
                <p class="pdata">{{added.name}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Apellido/s</label>
                <p class="pdata2">{{added.lastname}}</p>
              </div>  
              </div>

              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Customer ID</label>
                <p class="pdata3">{{added.customer_id}}</p>
              </div>  
              </div>
             
              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Email</label>
                <p class="pdata3">{{added.email}}</p>
              </div>  
              </div>

              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Teléfono</label>
                <p class="pdata3">{{added.phone}}</p>
              </div>  
              </div>
                <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Dirección</label>
                <p class="pdata3">{{added.address}}</p>
              </div>  
              </div>

               <div class="grup-form dflx ">
              <div class="grup-data dflx">
                <label >País</label>
                <p class="pdata">{{added.country}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Código postal</label>
                <p class="pdata2">{{added.postal_code}}</p>
              </div>  
              </div>

              <div class="grup-form dflx">
              <div class="grup-data dflx">
                <label >Estado</label>
                <p class="pdata">{{added.state}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Ciudad</label>
                <p class="pdata2">{{added.city}}</p>
              </div>  
              </div>

          </div>

           <div  v-if="added.billing.rfc" > 
              <p class="subtitle">Facturación</p>

               <div class="grup-form dflx">
              <div class="grup-data dflx">
                <label >RFC</label>
                <p class="pdata">{{added.billing.rfc}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Razón social</label>
                <p class="pdata2">{{added.billing.reason_social}}</p>
              </div>  
              </div>

              
               <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Dirección fiscal</label>
                <p class="pdata3">{{added.billing.fiscal_address}}</p>
              </div>  
              </div>
              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Email</label>
                <p class="pdata3">{{added.billing.email}}</p>
              </div>  
              </div>

              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg2" >Teléfono</label>
                <p class="pdata3">{{added.billing.phone}}</p>
              </div>  
              </div>

               <div class="grup-form dflx ">
              <div class="grup-data dflx">
                <label >País</label>
                <p class="pdata">{{added.billing.country}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Código postal</label>
                <p class="pdata2">{{added.billing.postal_code}}</p>
              </div>  
              </div>

              <div class="grup-form dflx">
              <div class="grup-data dflx">
                <label >Estado</label>
                <p class="pdata">{{added.billing.state}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Ciudad</label>
                <p class="pdata2">{{added.billing.city}}</p>
              </div>  
              </div>

          </div>

         <p class="subtitle">Productos</p>
              <div class="item_hdr dflx">
                  <div>
                    <p class="phr1">PRODUCTO</p>
                     
                  </div>
                  <div>
                    <p class="phr2">PRECIO</p>
                     
                  </div>
                  <div>
                   <p class="phr3">CANTIDAD</p>
                  </div>
                  <div>
                    <p class="phr4">SUBTOTAL</p>
                  </div>
              </div>
          
          <!-- productos-->
          <div  class="tblitems2">
            <div  v-for="(item, key) in added.detail" :key="key">

              <div class="item_dtl dflx">
                  <div>
                    <p class="pdt1">{{item.name}} <br> {{item.extra}}</p>
                     
                  </div>
                  <div>
                    <p class="pdt2">{{item.price}}</p>
                     
                  </div>
                  <div>
                   <p class="pdt3">x{{item.quantity}}</p>
                  </div>
                  <div>
                    <p class="pdt4">{{item.subtotal}}</p>
                  </div>
              </div>
          </div>
          </div>
          

            <p class="subtitle">Cupones</p>
             <div class="item_hdr dflx">
                            <div>
                              <p class="phr1">CUPÓN</p>
                              
                            </div>
                            <div>
                              <p class="phr2">ENVÍO GRATIS</p>
                              
                            </div>
                            <div>
                            <p class="phr3">TIPO</p>
                            </div>
                            <div>
                              <p class="phr4">VALOR</p>
                            </div>
                        </div>
             <div v-if="added.coupons !='No se encontraron coincidencias.'">
            
         

                    <div class="tblitems2">
                      <div  v-for="(item, key2) in added.coupons" :key="key2">

                        <div class="item_dtl dflx">
                            <div>
                              <p class="pdt1">{{item.code}}</p>
                              
                            </div>
                            <div>
                              <p class="pdt2">{{item.freeShipping}}</p>
                              
                            </div>
                            <div>
                            <p class="pdt3">{{item.type}}</p>
                            </div>
                            <div>
                              <p class="pdt4">{{item.value}}</p>
                            </div>
                        </div>
                    </div>
                    </div>
          </div>
          <div v-else>
              <div class="tblitems2">
                      <div  >

                        <div class="item_dtl dflx">
                            <div>
                              <p class="pdt1">Sin cupones utilizados</p>
                              
                            </div>
                            <div>
                              <p class="pdt2"></p>
                              
                            </div>
                            <div>
                            <p class="pdt3"></p>
                            </div>
                            <div>
                              <p class="pdt4"></p>
                            </div>
                        </div>
                    </div>
                    </div>
          </div>





          <div class="grup-form dflx mtpg">
           <div class="grup-data dflx">
            <label >Subtotal</label>
            <p class="pdata">${{added.subtotal}}</p>
          </div>  

           <div class="grup-data dflx">
            <label >Envío</label>
            <p class="pdata">${{added.envio}}</p>
          </div>  
          </div>

           <div class="grup-form dflx">
           <div class="grup-data dflx">
            <label >Descuento cupón</label>
            <p class="pdata">${{added.descupon}}</p>
          </div>  

           <div class="grup-data dflx">
            <label class="destacar2" >Total</label>
            <p class="pdata destacar">${{added.total}}</p>
          </div>  
          </div>

          
          

     
         

        </div>
        <div class="blq2" v-if="added.status !='3D SECURE EXPIRADO' && added.status != 'FALLIDO'  && added.status != 'CANCELADO' && added.status != 'CARGO PENDIENTE'">
          <form @submit.prevent="submitStatus(added.status)">
        
         <div class="grup-form dflx">
           <div class="boxform">
            <label for="status" class="status">Estatus</label>

            <input
              v-model="added.status"
              type="text"
              id="tipos"
              name="tipos"
              disabled
              required
            />

            <div class="content-tbl-items">
              <div class="tblitems">
                <div class="bodytbl-items tbl_item">
                  <p class="itemp cp" @click=" added.status = 'PROCESANDO' " >PROCESANDO</p>
                  <p class="itemp cp" @click=" added.status = 'REEMBOLSO' " >REEMBOLSO</p>
                  <p class="itemp cp" @click=" added.status = 'REEMBOLSO APROBADO' " >REEMBOLSO APROBADO</p>
                 <p class="itemp cp" @click=" added.status = 'PREPARANDO' " >PREPARANDO</p>
                 <!--<p class="itemp cp" @click=" added.status = 'ENVIADO' " >ENVIADO</p>-->
                 <p class="itemp cp" @click=" added.status = 'CANCELADO' " >CANCELADO</p>
                  
                </div>
              </div>
           
            </div>
          </div>

         
        </div>





         <div class="dflx">
          <button class="alta" type="submit">Actualizar</button>
        </div>

      </form>


      <div class="dv-sec"></div>
    <div v-if="added.shipping_option =='Envío a domicilio' ">
             <form @submit.prevent="submitNumber(added.tracking_number)">
        
         <div class="grup-form dflx">
          <!--nombre-->
          <div class="boxform">
            <label for="tracking_number" class="tracking_number">Número de rastreo </label>
            <input
              v-model="added.tracking_number"
              type="text"
              id="tracking_number"
              name="tracking_number"
            
              required
            />
          </div>

         
        </div>





         <div class="dflx">
          <button class="alta" type="submit">Asignar</button>
        </div>

      </form>

       <div class="dv-sec"></div>
        </div>
    </div>
 

      </div>

       <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
            
        </div>

      <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>
    </div>

    <div v-if="added.shipping_option =='Envío a domicilio' && (added.status !='3D SECURE EXPIRADO' && added.status != 'FALLIDO'  && added.status != 'CANCELADO'  && added.status != 'CARGO PENDIENTE') ">
      <div class="create_shipment" v-if="!added.payment_shipment.id">
        <form @submit.prevent="createShipment(consignment_note_class_code, consignment_note_packaging_code, address_to, address_from,  descr_class, descr_packaging)">
       
           <div class="grup-data dflx">
            <label class="destacar2" >Crear</label>
            <p class="pdata destacar">envío</p>
          </div>  
       <p class="subtitle">	Flujo de Creación de Guías desde Skydropx</p>
      <div v-if="valMayor()">
         <p class="text-class p-italic" >*Puedes asignar la clase recomendada elejida o seleccionar una diferente.</p>
        <div class="box-class ">
         
          <p class="text-class">Clase recomendada: <span>{{this.mayor_encontrado.data.skd_class + ' - '+this.mayor_encontrado.data.skd_class_descrp}}</span></p>
          <p class="btn-class" @click="asignarClass()">ASIGNAR</p>
        </div>
      </div>
        <div v-if="message2" class="status_messages">
        
          <div  class="msg msg_error">
            <p>{{ message2}}</p>
          </div>
        </div>

        <div class="header-ts dflx" >
          <div class="hsc1">
              <p class="ph1">01. Seleccionar la clase del producto</p>
           
          </div>
           <div class="hsc2" >
           
            <p >	{{consignment_note_class_code}}</p>
          </div>
           <div class="hsc3" @click="showClass = !showClass">
          
              <p v-if="showClass == false"><img src="../../assets/abajo.svg" alt="flecha arrib"></p>
            <p v-else><img src="../../assets/arriba.svg" alt="flecha abajo"></p>
          </div>
        </div>
         <p v-if="showClass" class="ph2">1. Index de categorías de productos establecidos por el SAT y exigidos para la carta de porte. 
             <br> 2. Index de subcategorías de productos establecidos por el SAT y demandados para el
            filtro de la carta de porte por Categoría.
            <br> 3. Index de clases de productos establecidos por el SAT y exigidos para el filtro de la
            carta de porte por Subcategoría. La clase de producto es necesario para crear un
            envío.
            </p>

       
           <div  v-if="showClass" class="tbl-ship2">
            <div class="cnt-box">
              <div  class="box-pack2-hdr" >
                   <p>1. CATEGORÍA</p>
               </div>
               <div class="column-box">
                <div @click="CATEGORY_ID = cat.id" class="box-pack2" :class="{'active-box' : CATEGORY_ID == cat.id }" v-for="(cat, key) in categories" :key="key">
              <p>{{cat.attributes.code}} - {{cat.attributes.name}}</p>
               </div>
               </div>
               
            </div>
             <div class="cnt-box">
              <div  class="box-pack2-hdr" >
                   <p>2. SUBCATEGORÍA</p>
               </div>
                <div class="column-box">
               <div @click="SUBCATEGORY_ID = sub.id" class="box-pack2" :class="{'active-box' : SUBCATEGORY_ID == sub.id }" v-for="(sub, key) in subcategories" :key="key">
              <p>{{sub.attributes.code}} - {{sub.attributes.name}}</p>
               </div>
                </div>
            </div>
            <div class="cnt-box">
              <div  class="box-pack2-hdr" >
                   <p>3. CLASE</p>
               </div>
                <div class="column-box">
               <div @click="consignment_note_class_code = cla.attributes.code,  descr_class = (cla.attributes.code + '-' +cla.attributes.name)" class="box-pack2" :class="{'active-box' : consignment_note_class_code == cla.attributes.code }" v-for="(cla, key) in classes" :key="key">
              <p>{{cla.attributes.code}} - {{cla.attributes.name}}</p>
               </div>
                 </div>
            </div>
            

        </div>

        
         <!-- pack code -->
          <div v-if="message3" class="status_messages">
        
          <div  class="msg msg_error">
            <p>{{ message3}}</p>
          </div>
        </div>
        <div class="header-ts dflx" v-if="consignment_note_class_code != ''">
          <div class="hsc1">
              <p class="ph1">02. Seleccionar el tipo de embalaje</p>
           
          </div>
           <div class="hsc2" >
           
            <p >	{{consignment_note_packaging_code}}</p>
          </div>
           <div class="hsc3" @click="showCodes = !showCodes">
       
               <p v-if="showCodes == false"><img src="../../assets/abajo.svg" alt="flecha arrib"></p>
            <p v-else><img src="../../assets/arriba.svg" alt="flecha abajo"></p>
          </div>
         
        </div>
        <p v-if="showCodes" class="ph2">Index de embalajes establecido por el SAT y exigido para la carta de porte. El
            tipo de embalaje es necesario para crear un envío.
            </p>
        <div  v-if="showCodes" class="tbl-ship">

          <div @click="consignment_note_packaging_code = pack.attributes.code, descr_packaging = (pack.attributes.code + '-' +pack.attributes.name)" class="box-pack" :class="{'active-box' : consignment_note_packaging_code == pack.attributes.code }" v-for="(pack, key) in packagings" :key="key">
              <p>{{pack.attributes.code}} - {{pack.attributes.name}}</p>
          </div>

        </div>
        
        <!-- Envio -->
              <div class="header-ts dflx" v-if="consignment_note_packaging_code != '' && consignment_note_class_code != ''">
          <div class="hsc1">
              <p class="ph1">03. Crear el envío</p>
           
          </div>
           <div class="hsc2" >
           
            <p >	{{SHIPMENT_ID}}</p>
          </div>
           <div class="hsc3" @click="showShip = !showShip">
            <p v-if="showShip == false"><img src="../../assets/abajo.svg" alt="flecha arrib"></p>
            <p v-else><img src="../../assets/arriba.svg" alt="flecha abajo"></p>
          </div>
         
        </div>
        <div  v-if="showShip "  > <!---->
          <p  class="ph2"> El
            atributo clase y embalaje es necesario para crear un envío.
            </p>

            
           <p class="subtitle">	Dirección remitente</p>
            <div class="grup-form dflx">
              
               <div class="boxform">
            <label for="country" class="country">País</label>
            <input
              v-model="address_from.country"
              type="text"
              id="country"
              name="country"
              disabled
              required
            />
          </div>
            <div class="boxform">
            <label for="province" class="province">Estado</label>
            <input
              v-model="address_from.province"
              type="text"
              id="province"
              name="province"
              required
            />
          </div>
           <div class="boxform">
            <label for="city" class="city">Ciudad</label>
            <input
              v-model="address_from.city"
              type="text"
              id="city"
              name="city"
              required
            />
          </div>

         
        </div>
          <div class="grup-form dflx">
              
               <div class="boxform">
            <label for="zip" class="zip">Código Postal</label>
            <input
              v-model="address_from.zip"
              type="text"
              id="zip"
              name="zip"
              required
            />
          </div>
            <div class="boxform">
            <label for="company" class="company">Compañia/Empresa</label>
            <input
              v-model="address_from.company"
              type="text"
              id="company"
              name="company"
              required
            />
          </div>
           <div class="boxform">
            <label for="phone" class="phone">Celular</label>
            <input
              v-model="address_from.phone"
              type="text"
              id="phone"
              name="phone"
                minlength="10"
                  maxlength="10"
                  size="10"
                  pattern="\d*"
              required
            />
          </div>
        </div>
        <div class="grup-form dflx">
              
               <div class="boxform">
            <label for="email" class="email">Email</label>
            <input
              v-model="address_from.email"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
            <div class="boxform">
            <label for="address1" class="address1">Dirección</label>
            <input
              v-model="address_from.address1"
              type="text"
              id="address1"
              name="address1"
              required
            />
          </div>
           <div class="boxform">
            <label for="address2" class="address2">Dirección 2</label>
            <input
              v-model="address_from.address2"
              type="text"
              id="address2"
              name="address2"
              required
            />
          </div>
        </div>
          <div class="grup-form dflx">
            
           <div class="boxform">
            <label for="name" class="name">Nombre</label>
            <input
              v-model="address_from.name"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
        </div>

         <p class="subtitle">	Dirección destinatario</p>
            <div class="grup-form dflx">
              
               <div class="boxform">
            <label for="country2" class="country2">País</label>
            <input
              v-model="address_to.country"
              type="text"
              id="country2"
              name="country2"
              disabled
              required
            />
          </div>
            <div class="boxform">
            <label for="province2" class="province2">Estado</label>
            <input
              v-model="address_to.province"
              type="text"
              id="province2"
              name="province2"
              required
            />
          </div>
           <div class="boxform">
            <label for="city2" class="city2">Ciudad</label>
            <input
              v-model="address_to.city"
              type="text"
              id="city2"
              name="city2"
              required
            />
          </div>

         
        </div>
          <div class="grup-form dflx">
              
               <div class="boxform">
            <label for="zip2" class="zip2">Código Postal</label>
            <input
              v-model="address_to.zip"
              type="text"
              id="zip2"
              name="zip2"
              required
            />
          </div>
            <div class="boxform">
            <label for="company" class="company">Compañia/Empresa</label>
            <input
              v-model="address_to.company"
              type="text"
              id="company2"
              name="company2"
              required
            />
          </div>
           <div class="boxform">
            <label for="phone2" class="phone2">Celular</label>
            <input
              v-model="address_to.phone"
              type="text"
              id="phone2"
              name="phone2"
                minlength="10"
                  maxlength="10"
                  size="10"
                  pattern="\d*"
              required
            />
          </div>
        </div>
        <div class="grup-form dflx">
              
               <div class="boxform">
            <label for="email2" class="email2">Email</label>
            <input
              v-model="address_to.email"
              type="email"
              id="email2"
              name="email2"
              required
            />
          </div>
            <div class="boxform">
            <label for="address12" class="address12">Dirección</label>
            <input
              v-model="address_to.address1"
              type="text"
              id="address12"
              name="address12"
              required
            />
          </div>
           <div class="boxform">
            <label for="address22" class="address22">Dirección 2</label>
            <input
              v-model="address_to.address2"
              type="text"
              id="address22"
              name="address22"
              required
            />
          </div>
        </div>
          <div class="grup-form dflx">
            
           <div class="boxform">
            <label for="name2" class="name2">Nombre</label>
            <input
              v-model="address_to.name"
              type="text"
              id="name2"
              name="name2"
              required
            />
          </div>
           <div class="boxform">
            <label for="reference" class="reference">Referencias</label>
            <input
              v-model="address_to.reference"
              type="text"
              id="reference"
              name="reference"
              required
            />
          </div>
           <div class="boxform">
            <label for="contents" class="contents">Contenido del envío</label>
            <input
              v-model="address_to.contents"
              type="text"
              id="contents"
              name="contents"
              required
            />
          </div>
        </div>

          <button v-if="cargando==false" class="alta" >crear  </button>
          <p v-else class="btnRegresar"><img src="../../assets/skydropx/Cargando0.gif" alt=""></p>
            
            
             <div v-if="status != ''" class="status_messages">
              <div v-if="status == 'success'" class="msg msg_success">
                <p>{{ message }}</p>
              </div>
              <div v-if="status == 'error'" class="msg msg_error">
                <p>{{ message }}</p>
              </div>
            </div>


        </div>
        


            
   </form>
    
    </div>
   <div v-else>
 <div  class="create_shipment">
          <div class="grup-data dflx">
            <label class="destacar2" >Información</label>
            <p class="pdata destacar">envío</p>
        </div> 
         <div  v-if="validgetShipmentByID(added)" class="grup-form dflx">
              <div class="grup-data dflx">
                <label >Envio ID</label>
                <p class="pdata pbold">{{added.payment_shipment.getShipmentByID.id}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="" >Estado</label>
                <p class="pdata2 pbold">{{added.payment_shipment.getShipmentByID.attributes.status}}</p>
              </div>  
              </div>
              

              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="" >Clase</label>
                <p class="pdata3">{{added.payment_shipment.descr_class}}</p>
              </div>  
              </div>
             
              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="" >Packaging</label>
                <p class="pdata3">{{added.payment_shipment.descr_packaging}}</p>
              </div>  
              </div>

              <div class="content-addresses">
                  <div class="box-addr" v-for="(address, key) in addresses" :key="key">
                    <p class="title-ba" v-if="address.attributes.contents">Dirección destinatario</p>
                    <p class="title-ba" v-else>Dirección remitente</p>
                      <div class="dflx">
                        <p class="ba1">Nombre</p>
                        <p class="ba2">{{address.attributes.name}}</p>
                      </div>
                       <div class="dflx">
                        <p class="ba1">Compañia</p>
                        <p class="ba2">{{address.attributes.company}}</p>
                      </div>
                       <div class="dflx">
                        <p class="ba1">Dirección </p>
                        <p class="ba2">{{address.attributes.address1}}</p>
                      </div>
                       <div class="dflx">
                        <p class="ba1">Dirección 2</p>
                        <p class="ba2">{{address.attributes.address2}}</p>
                      </div>
                        <div class="dflx">
                        <p class="ba1">Ciudad</p>
                        <p class="ba2">{{address.attributes.city}}</p>
                      </div>
                        <div class="dflx">
                        <p class="ba1">Estado</p>
                        <p class="ba2">{{address.attributes.province}}</p>
                      </div>
                        <div class="dflx">
                        <p class="ba1">Código postal</p>
                        <p class="ba2">{{address.attributes.zip}}</p>
                      </div>
                        <div class="dflx">
                        <p class="ba1">País</p>
                        <p class="ba2">{{address.attributes.country}}</p>
                      </div>
                        <div class="dflx">
                        <p class="ba1">Celular</p>
                        <p class="ba2">{{address.attributes.phone}}</p>
                      </div>
                        <div class="dflx">
                        <p class="ba1">Email</p>
                        <p class="ba2">{{address.attributes.email}}</p>
                      </div>
                        <div v-if="address.attributes.reference" class="dflx">
                        <p class="ba1">Referencias</p>
                        <p class="ba2">{{address.attributes.reference}}</p>
                      </div>
                        <div v-if="address.attributes.contents" class="dflx">
                        <p class="ba1">Contenido envío</p>
                        <p class="ba2">{{address.attributes.contents}}</p>
                      </div>
                  </div>
              </div>



            <div class="mtp" v-if="validError(added) || added.payment_shipment.cancelado == 'si'">
                 <p v-if="added.payment_shipment.cancelado == 'si'" class="ph2"> El envío no fue cancelado, vuelve a crearlo y reviza que la Información sea la correcta.</p>
                  <p v-else class="ph2">El envío no fue completado, vuelve a crearlo y reviza que la Información sea la correcta.</p>
            


             <div v-if="message4" class="status_messages">
            
              <div  class="msg msg_error">
                <p>{{ message4}}</p>
              </div>
            </div>
              <div >
                 <p v-if="cargando==false" @click="cargando =true, modalEliminar =true" class="btnCancelar">Eliminar envío</p>
              <p v-else class="btnCancelar"><img src="../../assets/skydropx/Cargando0.gif" alt=""></p>
              </div>
              </div>
          

               



    </div>

<div class="create_shipment" v-if=" filterRates.length ==0 && added.payment_shipment.id">
   
        <p  class="ph2"> No se encontraron proveedores, posiblemente sea por que el código postal no es valido, <br> vuelve a crear el envío y reviza que la Información sea la correcta.
            </p>

            


             <div v-if="message4" class="status_messages">
        
          <div  class="msg msg_error">
            <p>{{ message4}}</p>
          </div>
        </div>
         <div >
                 <p v-if="cargando==false" @click="cargando =true, modalEliminar =true" class="btnCancelar">Eliminar envío</p>
              <p v-else class="btnCancelar"><img src="../../assets/skydropx/Cargando0.gif" alt=""></p>
              </div>
         
    
    </div>

    <div  v-if="validError(added) == false">
        <div class="create_shipment" v-if="validLabel() && !added.payment_shipment.getLabelByID.attributes && filterRates.length >0">
       <div class="grup-data dflx">
            <label class="destacar2" >Crear</label>
            <p class="pdata destacar">etiqueta</p>
        </div>
        <p  class="ph2"> Selecciona una tarifa.
            </p>

             <div v-if="added.carrier.provider">
                <p  class="ph2"> El cliente seleccionó a <span class="destacar">"{{added.carrier.provider}}"</span> como su paquetería de preferencia.</p>
                  <p  class="ph2"> Total <span class="destacar">"${{added.carrier.total_pricing}}"</span>.</p>
                  <p  class="ph2"> Días aprox <span class="destacar">"{{added.carrier.days}}"</span>.</p>
            </div>


             <div v-if="message4" class="status_messages">
        
          <div  class="msg msg_error">
            <p>{{ message4}}</p>
          </div>
        </div>

           <div class="content-rates">
             <div @click="rate_sel = item" :class="{'rateActive' : rate_sel.id == item.id}" class="box-rate dflx"  v-for="(item, key) in filterRates" :key="key" >

              <div  class="box1" v-if="item.type == 'rates'" >

                  <div class="dflx">
                    <p class="rate1">Provedor</p>
                    <p class="rate4">{{item.attributes.provider}}</p>
                  </div>
                   <div class="dflx">
                    <p class="rate1">Servicio</p>
                    <p class="rate2">{{item.attributes.service_level_name}}</p>
                  </div>
                    <div class="dflx">
                    <p class="rate1">Días</p>
                    <p class="rate2">{{item.attributes.days}}</p>
                  </div>
                     <div class="dflx">
                    <p class="rate1">Total</p>
                    <p class="rate3">{{item.attributes.total_pricing}}</p>
                  </div>


              </div>
              <div class="box2">
                    <img class="paqlogo" src="../../assets/skydropx/Estafeta.png" alt="Logo Estafeta" v-if="item.attributes.provider == 'ESTAFETA'">
                <img class="paqlogo" src="../../assets/skydropx/Paquetexpress.png" alt="Logo paquete express" v-if="item.attributes.provider == 'PAQUETEXPRESS'">
                <img class="paqlogo" src="../../assets/skydropx/Fedex.png" alt="Logo Fedex" v-if="item.attributes.provider == 'FEDEX'">
                <img class="paqlogo" src="../../assets/skydropx/UPS.png" alt="Logo UPS" v-if="item.attributes.provider == 'UPS'">
                <img class="paqlogo" src="../../assets/skydropx/UPS.png" alt="Logo UPS" v-if="item.attributes.provider == 'REDPACK'">
              </div>
             </div>

             
           </div>
           <button v-if="cargando ==false" @click="createLabel()" class="alta" >crear</button>
             <p v-else class="btnRegresar"><img src="../../assets/skydropx/Cargando0.gif" alt=""></p>
    </div>
    <div v-if="added.payment_shipment.getLabelByID.id"  class="create_shipment">
          <div class="grup-data dflx">
            <label class="destacar2" >Información</label>
            <p class="pdata destacar">etiqueta</p>
        </div> 
      
              <div v-if="getRate().id" class="grup-form dflx">
              <div class="grup-data dflx">
                <label class="lrg">Proveedor</label>
                <p class="pdata pbold">{{getRate().attributes.provider}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg">Servicio</label>
                <p class="pdata2 ">{{getRate().attributes.service_level_name}}</p>
              </div>  
              </div>
               <div v-if="getRate().id" class="grup-form dflx">
              <div class="grup-data dflx">
                <label  class="lrg">Días</label>
                <p class="pdata">{{getRate().attributes.days}}</p>
              </div>  

              <div class="grup-data dflx">
                <label class="lrg" >Precio total</label>
                <p class="pdata2 pbold ">${{getRate().attributes.total_pricing}}</p>
              </div>  
              </div>
              
         
              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg" >Numero de rastreo</label>
                <p class="pdata3">{{added.payment_shipment.getLabelByID.attributes.tracking_number}}</p>
              </div>  
              </div>
             
              <div class="grup-form dflx ">
            
              <div v-if="added.payment_shipment.getLabelByID.attributes.tracking_status" class="grup-data dflx">
                <label class="lrg" >Seguimiento status</label>
                <p class="pdata3">{{added.payment_shipment.getLabelByID.attributes.tracking_status}}</p>
              </div>  
              </div>

              <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg" >Etiqueta URL</label>
                <a :href="added.payment_shipment.getLabelByID.attributes.label_url" target="_blank" class="pdata3">{{added.payment_shipment.getLabelByID.attributes.label_url}}</a>
              </div>  
              </div>
                <div class="grup-form dflx ">
            
              <div class="grup-data dflx">
                <label class="lrg" >Seguimiento URL</label>
                <a :href="added.payment_shipment.getLabelByID.attributes.label_url" target="_blank" class="pdata3">{{added.payment_shipment.getLabelByID.attributes.tracking_url_provider}}</a>
              </div>  
              </div> 
              
              <div v-if="added.payment_shipment.getShipmentByID.attributes.status !='CANCELLED' && added.payment_shipment.cancelado == 'no'">
                 <p v-if="cargando==false" @click="cargando =true, modalCancelar =true" class="btnCancelar">Cancelar</p>
              <p v-else class="btnCancelar"><img src="../../assets/skydropx/Cargando0.gif" alt=""></p>
              </div>
              
             
    </div>
    </div>
    
   </div>
    
    
    
    
    </div>
    

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Pedido actualizado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="actualizar()" class="otro">Aceptar</p>
         
        </div>
      </div>
    </div>
   <div v-if="modalCancelar" class="modal_view">
    <form @submit.prevent="cancelLabel(reason)">
      <div id="modal_cancelar">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              esta etiqueta?</span
            >
          </h3>
          <textarea v-model="reason" name="cancelar_label" id="cancelar_label" placeholder="Indica la razón..." required ></textarea>
        </div>

        <div class="modal_del_btns dflx">
          <button type="submit">Aceptar</button>
          <p @click="cargando= false, modalCancelar=false">Cancelar</p>
        </div>
      </div>
      </form>
    </div>
    <div v-if="modalEliminar" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              este envío?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="eliminarEnvio()">Aceptar</p>
          <p @click="cargando=false, modalEliminar = false">Cancelar</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions } from "vuex";
export default {
  name: "EditPym",

  data() {
    return {
      status: "",
      message: "",
      name:"",
      active: false,
      viewModal: false,
      modalCancelar:false,
      modalEliminar:false,
      reason:"",
      message2: "",
      message3: "",
      message4:"",

      consignment_note_packaging_code:'',
      descr_class:'',
      descr_packaging:'',
      showCodes:false,

      CATEGORY_ID:'',
      SUBCATEGORY_ID:'',
      consignment_note_class_code:'',
      showClass:false,  
      cargando:false,
      SHIPMENT_ID:'',
      showShip:false,
       address_from: {
              "province": "Sonora",
              "city": "Hermosillo",
              "name": "AGRIGA MX",
              "zip": "83160",
              "country": "MX",
              "address1": "Blvd Enrique Mazon 445 B ",
              "company": "AGRIGA MX",
              "address2": "Col. San Luis",
              "phone": "6623380984",
              "email": "ventas@agriga.com.mx"
            },
          
            address_to: {
              "province": '',
              "city": '',
              "name": '',
              "zip": "",
              "country": "MX",
              "address1": "",
              "company": "-",
              "address2": "-",
              "phone": "",
              "email": "",
              "reference": "-",
              "contents": ""
          },
          rate_sel:'',
          mayor_encontrado:''


    };
  },
 async created() {
   

     //enviar a validacion.
       const response = await  this.$store.dispatch("main/editItem",  {option:'charge_status', item:{ "order_id":this.added.order_id}});
       if(response?.payment?.id){
        this.setAddedPym(response.payment)
       }
     


    await this.getPackagings()
    await this.getCategories()

    
      this.address_to.province = this.added.state
      this.address_to.city = this.added.city
      this.address_to.name = this.added.name +' '+ this.added.lastname
      this.address_to.zip = this.added.postal_code
      this.address_to.address1 = this.added.address
      this.address_to.phone = this.added.phone
      this.address_to.email = this.added.email
      if(this.added.notes !=''){
         this.address_to.reference = this.added.notes
      }

     const products =  this.added.detail
      let mayor =''
      for (const item  of products) {
              const info = item.data
              if(info.skd_class !='' && !isNaN(info.skd_weight)){
                if(mayor?.data?.skd_weight){
                  mayor.data.skd_weight < info.skd_weight ? mayor = item : mayor
                }else{
                  mayor = item
                }
              }
           
      }

     
    this.mayor_encontrado = mayor
  if(mayor?.data?.skd_class && mayor?.data?.skd_class_descrp){
      this.consignment_note_class_code = mayor.data.skd_class
      this.descr_class = mayor.data.skd_class_descrp
  }
   


              
          
  },
  watch:{
      CATEGORY_ID: async function(value){
       

        this.SUBCATEGORY_ID =''
        this.consignment_note_class_code=''
        const payload ={
          CATEGORY_ID:value
        }
       await this.getSubcategories(payload)




      },
       SUBCATEGORY_ID: async function(value){
          this.consignment_note_class_code=''
            const payload ={
          SUBCATEGORY_ID:value
         }
       await this.getClasses(payload)

      }
  },
  computed: {
    added() {
      return  this.$store.getters["payment/getAdded"];
    },

    filterRates(){
      const added =  this.$store.getters["payment/getAdded"];

      if(this.validLabel()){
          const array = added.payment_shipment.json_shipment_res.included

          let filtrados=[]
                for (const item of array) {
                  if(item.type =='rates'){
                    filtrados.push(item)
                  }
                }

                return filtrados
          


      }else{
        return []
      }
    },
     addresses(){
      const added =  this.$store.getters["payment/getAdded"];

      if(this.validLabel()){
          const array = added.payment_shipment.json_shipment_res.included

          let filtrados=[]
                for (const item of array) {
                  if(item.type =='addresses'){
                    filtrados.push(item)
                  }
                }

                return filtrados
          


      }else{
        return []
      }
    },
    /*payment() {
      return this.$store.getters["payment/data"];
    },*/

    packagings(){
        return this.$store.getters["shipment/packagings"];
    },

    categories(){
      return this.$store.getters["shipment/categories"];
    },

    subcategories(){
      return this.$store.getters["shipment/subcategories"];
    },
    classes(){
      return this.$store.getters["shipment/classes"];
    },



  },
  methods: {
    ...mapActions("payment", ["getAllInfoPym"]),
    ...mapActions("payment", ["setAddedPym"]),
    ...mapActions("payment", ["setHistoryOptionPym"]),
    ...mapActions("shipment", ["getPackagings"]),
    ...mapActions("shipment", ["getCategories"]),
    ...mapActions("shipment", ["getSubcategories"]),
    ...mapActions("shipment", ["getClasses"]),
    ...mapActions("payment", ["getInfoByIdPym"]),
    ...mapActions("main", ["getInfoById"]),
    valMayor(){
   
      if(this.mayor_encontrado?.data?.skd_class && this.mayor_encontrado?.data?.skd_class_descrp){
         return true
      }else{
        return false
      }
    },
    asignarClass(){
       if(this.valMayor()){
        
        this.showClass =false

         this.consignment_note_class_code = this.mayor_encontrado.data.skd_class
         this.descr_class =  this.mayor_encontrado.data.skd_class_descrp

         
       }
    },
    actualizar: async function(){
       const response  = await this.getInfoById({
          id:this.added.id,
          option:'payment'
        });

        if(response.id){
          this.setAddedPym(response)
          this.viewModal=false;
        }else{
          this.wait()
        }
    },

    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    
    submitStatus: async function (value) {
      this.status = "";
      this.message = "";
     
     let payment = {
            id: this.added.id,
            value
         };
       
     
           
        let result = await this.$store.dispatch("payment/editItemPym", {
          option: "payment_status",
          item: payment,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
            this.delStatus()
        } else {
          // success
          this.showModal();
        }
      



     
    },

    submitNumber: async function (tracking_number) {
      this.status = "";
      this.message = "";
     
      if(tracking_number !='SIN ASIGNAR'){
         let payment = {
            id: this.added.id,
            value:tracking_number
         };
         
        let result = await this.$store.dispatch("payment/editItemPym", {
          option: "payment_tracking_number",
          item: payment,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
            this.delStatus()
        } else {
          // success
          this.showModal();
        }
        
      }else{
          this.status = "error";
          this.message = "Número de rastreo no valido.";
          this.delStatus()
      }



     
    },
    eliminarEnvio:async function(){
       
      this.status = "";
      this.message = "";
      
      let result = await this.$store.dispatch("main/deleteItem", {
        option: "shipment",
        id: this.added.payment_shipment.id,
      });

      if (result.status == "error") {
        this.message = result.message;
        this.status = "error";
             this.cargando = false;
        this.delStatus();
      } else {
         this.cargando = false;
           this.modalEliminar = false;
          this.showModal();
      }
    },
    cancelLabel:async function(reason){
        const data = {
          tracking_number:this.added.payment_shipment.getLabelByID.attributes.tracking_number,
          reason, 
          id_payment_shipment:this.added.payment_shipment.id,
          id_payment:this.added.id
        }
       
         let result = await this.$store.dispatch("payment/addItemPym", {
          option: "cancel_label_requests",
          item: data,
        });
      
        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
           this.cargando = false;
           this.modalCancelar = false;
            this.delStatus()
        } else {
          // success
           this.cargando = false;
           this.modalCancelar = false;
           this.showModal();
        }
    },

    createShipment: async function (consignment_note_class_code, consignment_note_packaging_code , address_to, address_from, descr_class, descr_packaging){
      this.cargando = true;

      if(!consignment_note_class_code || !descr_class){
        this.message2 ='La clase del producto es requerida.'
        this.cargando = false;
         this.delStatus2()
        return null
      }

      if(!consignment_note_packaging_code || !descr_packaging){
        this.message3 ='El tipo de embalaje es requerido'

         this.cargando = false;
        this.delStatus2()
        return null
      }


      const items = this.added.detail
   

      let parcels =[]
      for (const item of items) {
          parcels.push({
                "weight": item.data.skd_weight,
                "distance_unit": "CM",
                "mass_unit": "KG",
                "height": item.data.skd_height,
                "width": item.data.skd_width,
                "length": item.data.skd_length,
              });
              
      }
   

      let data ={
          "id_payment": this.added.id,
          "shipment_data":{
            address_from,
            parcels,
            address_to,
            consignment_note_class_code,
            consignment_note_packaging_code,
            descr_class, 
            descr_packaging
            /*"carriers": [
            
              {
                "name": "Fedex"
              }
            ]*/
          }
      }

      

      let result = await this.$store.dispatch("payment/addItemPym", {
          option: "shipment",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
           this.cargando = false;
            this.delStatus()
        } else {
          // success
           this.cargando = false;
          this.showModal();
        }


    
    },

    createLabel: async function(){
       this.cargando = true;
        if(!this.rate_sel.id){
          this.message4 ="Selecciona una tarifa."
          this.delStatus4()
           this.cargando = false;
          return null
        }

      const data = {
        "id": this.added.payment_shipment.id, 
        "rate_id": this.rate_sel.id, 
        "shipment_id": this.added.payment_shipment.shipment_id, 
        "id_payment": this.added.id
      }



        let result = await this.$store.dispatch("payment/addItemPym", {
          option: "label",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
           this.cargando = false;
            this.delStatus()
        } else {
          // success
           this.cargando = false;
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
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
      this.status2 = "";
      this.message2 = "";
    },

    delStatus2: function () {
      setTimeout(() => this.delMsgs2(), 2000);
    },
    delMsgs2: function () {
      this.message2 = "";
      this.message3 = "";
    },
    delStatus4: function () {
      setTimeout(() => this.delMsgs4(), 2000);
    },
    delMsgs4: function () {
      this.message4 = "";
    },

    validError(added){
      if(added?.payment_shipment?.getShipmentByID?.attributes?.status !='CANCELLED' && added?.payment_shipment?.getShipmentByID?.attributes?.status !='ERROR'){
        return false
      }else{
         return true
      }
     
    }, 
    validgetShipmentByID(added){
      if(added?.payment_shipment?.getShipmentByID?.id){
        return true
      }else{
         return false
      }
      
    },

    validLabel(){
      if(!this.added){
        return false
      }

      if(!this.added.payment_shipment){
        return false
      }

      if(this.added.payment_shipment  =='No se encontraron coincidencias.'){
         return false
      }

       if(!this.added?.payment_shipment?.json_shipment_res){
        return false
      }

       if(!this.added?.payment_shipment?.json_shipment_res?.data){
        return false
      }

       if(!this.added?.payment_shipment?.json_shipment_res?.included){
        return false
      }

      const array = this.added.payment_shipment.json_shipment_res.included
       if(!Array.isArray(array)){
         return false
       }


      return true
    },

    getRate(){  

      if(!this.added.payment_shipment.rate_id){
        return null
      }
       const rate_id = this.added.payment_shipment.rate_id
       let rateSel={}
       for (const rate of this.filterRates) {
         if(rate.id == rate_id){
           rateSel = rate;
           break;
         }
       }

       return rateSel
    },
  

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedPym("");
      this.setHistoryOptionPym("Default");
    },
    Edit: function () {
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
  },
};
</script>
<style scoped>

.box-class{
  display: flex;
  align-content: center;
  margin-bottom: 2vw;
}
p.text-class{
 margin: 0vw;
     display: flex;
    align-items: center;

    color: var(--color-4);
    font-size: .8vw;


}
p.text-class span{
 margin-left: .5vw;
 font-weight: 800;
 color: var(--color-2);
}
p.p-italic{
  font-style: italic;
      font-size: .6vw !important;
}
.btn-class{
      cursor: pointer;
    border: none;
    background: var(--color-1);
    color: var(--color-5);
    width: 5vw;
    padding: 0.2vw 0.2vw;
    text-align: center;
   border-radius: 1vw;
  
    font-weight: 500;
    font-size: 0.7291666666666666vw;
   margin: 0vw;
   margin-left: 2vw;

}
.create_shipment{
  margin-top: 5vw;
}
.tbl-ship{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.content-rates{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
p span.destacar{
  color: var(--color-2);
  font-weight: 600;
}

.box-rate{
   width: 29%;
  margin-right: .5%;
  border: 1px solid #c7c7c7;
  padding: 1%;
  cursor: pointer;
  transition: all 300ms;
  margin-bottom: .5%;
}

.box-rate  p{
  margin: 0vw;
  font-size: .8vw;
}
p.rate1{
  font-weight: 600; 
  width: 5vw;
}
p.rate3{
  color: var(--color-2);
  font-weight: 600;
}
p.rate4{
  color: var(--color-1);
  font-weight: 600;
}
.box-rate:hover{
  background: var(--color-1);
   border: 1px solid  var(--color-1);
}
.box-rate:hover p{
 color: white;
}
.rateActive{
 background: var(--color-1);
border: 1px solid  var(--color-1);
}
.rateActive p{
 color: white;

}
.rateActive p.rate3{
 color: var(--color-5);

}
.box1{
  width: 70%;
}
.box2{
  width: 30%;
    background: white;
   padding-top: 1.6vw;
     border-radius: .2vw;
}
.box2 img{
  width:100%;
  height: 1.3vw;
  

  
 
}
.content-addresses{
   width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1vw;
}
.box-addr{
  width: 30%;
  padding: 1%;
  
  border: 1px solid #c7c7c7;

  margin-right: .5%;
  margin-bottom: .5%;
}
.box-addr p{
  margin: 0vw;
  font-size: .7vw;
  margin-bottom: .2vw;
}
p.title-ba{
   color: var(--color-1);
  font-weight: 600;
  font-size: 1vw;
  margin-bottom: .5vw;
}
p.ba1{
  color: var(--color-4);
  font-weight: 600;
  width: 30%;
}
p.ba2{
  color: var(--color-4);
}
.tbl-ship2{
  width: 100%;
  display: flex;
  margin-bottom: 5vw;
}
.cnt-box{
 width: 30%;
  margin-right: .5%;
}
.column-box{
      height: 34vw;
    overflow: auto;
}
.box-pack2-hdr{
    margin-bottom: 1.5%;
  background: var(--color-4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-pack2{
  margin-bottom: 1.5%;
  border: 1px solid #c7c7c7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  cursor: pointer;
}
.box-pack{
  width: 30%;
  margin-right: .5%;
  margin-bottom: .5%;
  border: 1px solid #c7c7c7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  cursor: pointer;
}
.box-pack:hover, .box-pack2:hover{
  background: var(--color-1);
    border: 1px solid var(--color-1);
}
.box-pack:hover p, .box-pack2:hover p{
   color: white;
}
.box-pack p, .box-pack2 p{
  font-size: .7vw;
  width: 95%;
  color: var(--color-4);
  text-align: left;
}
.box-pack2-hdr p{
  font-size: .8vw;
  width: 95%;
  color: var(--color-5);
  text-align: center;
}

.rate1{
 color: var(--color-4);

 font-size: .7vw;
 font-weight: 400;
}
.rate2{
   color: var(--color-4);

 font-size: .7vw;
 font-weight: 400;
}
.active-box{
   background: var(--color-1);
    border: 1px solid var(--color-1);
}
.active-box p{
     color: white;
}
.header-ts{
  width: 100%;
  margin-bottom: .5vw;
}
.hsc1{
  width: 71.3%;
  background: var(--color-2);
}
p.ph1{
 color: white;
 padding-left: 1vw;
 font-size: 1vw;
 font-weight: 600;
 margin: 0vw;
 margin-top: 1vw;
 margin-bottom: 1vw;
}
p.ph2{

 color: var(--color-4);
 padding-left: 1vw;
 font-size: .7vw;
 font-weight: 400;
 margin: 0vw;
 margin-bottom: 1vw;
}
.hsc2{
  width: 10%;
  background: var(--color-1);
  display: flex;
  justify-content: center;
  border-left: 0.052083vw solid white;
  align-items: center;
}
.hsc2 p{
  color: white;
  text-align: center;
  font-size: 1vw;
  margin: 0vw;
  font-weight: 600;
}
.hsc3{
  width: 10%;
   display: flex;
   background: var(--color-1);
  justify-content: center;
  align-items: center;
   border-left: 0.052083vw solid white;
}
.hsc3 p{
  display: flex;
}

.hsc3 p>img{
  width: 2vw;
}


#EditCat{
  margin-bottom: 50vw;
}
#EditCat label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditCat input,
#EditCat select {
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

.blq1{
  width: 60%;
}

.blq2{
  width: 33%;
  padding-left: 1vw;
}

p.pdata{
     color: var(--color-4);
    margin: 0px;
    font-size: 0.74VW;
    padding-left: .5vw;
   width: 10vw;
   overflow: auto;
}

p.pdata2{
     color: var(--color-4);
    margin: 0px;
    font-size: 0.74VW;
    padding-left: .5vw;
   width: 15vw;
   overflow: auto;
}
p.pdata3{
     color: var(--color-4);
    margin: 0px;
    font-size: 0.74VW;
    padding-left: .5vw;
   width: 25vw;
   overflow: auto;
}
a.pdata3{
     color: var(--color-4);
    margin: 0px;
    font-size: 0.74VW;
    padding-left: .5vw;
   margin-bottom: 1vw;
   overflow: auto;
   transition: all 300ms;
}
a.pdata3:hover{
     color: var(--color-1);
  
}
.grup-data label.lrg{
  width: 6vw ;
}
.grup-data label.lrg2{
  width: 6vw ;
}
p.pbold{
  font-weight: 800;
}
.grup-data{
  margin-left: 1vw;
}

.grup-data label{
  width: 4vw;
 
}
.mtpg{
  margin-top: 2vw;
}

p.destacar{
  color: var(--color-1);
    font-weight: 800;
    font-size: 2vw;
    width: 20vw;
}
label.destacar2{
      font-size: 2vw !important;
    width: auto;
}

.item_hdr{
  background: var(--color-1);
  margin-top: 1vw;
   width: 41.9vw;
}
.item_dtl {
  width: 41.9vw;
   
}
.tblitems2{
   width: 41.9vw;
   border-bottom: 1px solid rgb(194, 194, 194) ;
}

.item_hdr p{
  color: var(--color-5);
  border-right: 1px solid white ;
  margin: 0vw;
   padding-left: .2vw;
   font-size: .8vw;
  
}

.item_dtl p{
  color: var(--color-4);
  border-right: 1px solid white ;
  margin: 0vw;
  padding-left: .2vw;
  margin-bottom: .5vw;
  margin-top: .5vw;
   font-size: .8vw;
}

p.phr4, p.pdt4{
width: 10vw;
}

p.phr3, p.pdt3{
width: 7vw;
text-align: center;
}

p.phr2, p.pdt2{
width: 7vw;
}

p.phr1, p.pdt1{
 width: 16.9vw;
}

p.subtitle{
  font-size: 1vw;
  color: var(--color-4);
  font-weight: 800;
  padding-left: 1vw;
}

</style>