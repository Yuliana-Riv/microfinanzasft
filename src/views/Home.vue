<template >
  <div id="Home" class="homepage">
    <!-- Header aqui -->
    <FixedItems />
    <Navigator />
    <div class="modal-container" :class="{ nonemodal: mdcar == false }">
      <ModalCar
        @close="mdcar = false"
        :class="{ transitionL: mdcar == true }"
      />
    </div>
    <div class="section1">
      <div class="slidemain">
        <section v-if="banner.length == 1">
          <a :href="banner[0].link">
            <img
              class="slidemv"
              :src="
                url +
                '/' +
                endpointCodes.get +
                '/get-banner-image/' +
                banner[0].image_mv
              "
              alt=""
            />
            <img
              class="slidepc"
              :src="
                url +
                '/' +
                endpointCodes.get +
                '/get-banner-image/' +
                banner[0].image
              "
              alt=""
            />
          </a>
        </section>
        <carousel
          :perPage="1"
          :navigationEnabled="false"
          :paginationEnabled="false"
          v-else
        >
          <slide v-for="(s, i) in banner" :key="i">
            <a :href="s.link">
              <img
                class="slidemv"
                :src="
                  url +
                  '/' +
                  endpointCodes.get +
                  '/get-banner-image/' +
                  s.image_mv
                "
                alt=""
              />
              <img
                class="slidepc"
                :src="
                  url + '/' + endpointCodes.get + '/get-banner-image/' + s.image
                "
                alt=""
              />
            </a>
          </slide>
        </carousel>
      </div>
    </div>

    <div class="section2" id="simulador">
      <div class="idsecc">
        <h5>01.</h5>
        <div class="hr"></div>
        <h5>Simulador</h5>
      </div>
      <div class="sectionsimulator">
        <div class="tlhdr">
          <p class="tl">Simula tu <span>préstamo</span></p>
          <p class="sbtl">
            Descubre cuanto pagarías por tu préstamo con nosotros
          </p>
        </div>
        <section class="dflxc">
          <div class="col1">
            <div class="quest">
              <p class="p1">¿Cuánto necesitas? <span v-if="statuscot == 'Ingresa una cantidad'">*Ingresa una cantidad</span></p>
              <div
                type="number"
                class="bor1 inp1" 
                @click="(dropc == true ? dropc = false : dropc = true) && (bloqbtn = false)"
              >{{ cantidad == 0 ? 'Ingresa la cantidad': cantidad }}</div>
              <div
                type="number"
                class="bor1 inp2"
                v-if="dropc== true"
                @click="(bloqbtn = false)"
              >
                <p @click="(cantidad=1000) && (dropc = false)">$1,000.00</p>  
                <p @click="(cantidad=2000) && (dropc = false) ">$2,000.00</p>
                <p @click="(cantidad=3000) && (dropc = false) ">$3,000.00</p>
                <p @click="(cantidad=4000) && (dropc = false) ">$4,000.00</p>
                <p @click="(cantidad=5000) && (dropc = false) ">$5,000.00</p> 
                <p @click="(cantidad=6000) && (dropc = false) ">$6,000.00</p> 
                <p @click="(cantidad=7000) && (dropc = false) ">$7,000.00</p> 
                <p @click="(cantidad=8000) && (dropc = false) ">$8,000.00</p> 
                <p @click="(cantidad=9000) && (dropc = false) ">$9,000.00</p>  
                <p @click="(cantidad=10000) && (dropc = false) ">$10,000.00</p> 
              </div>
              <!--
              <input
                type="number"
                class="bor1 inp1"
                placeholder="Ingresa la cantidad"
                v-model="cantidad"
              />-->
            </div>
            <div class="quest due">
              <p class="p1">¿Cada cuánto quieres pagar? <span v-if="statuscot2 == 'Ingresa un tiempo de pago'">*Ingresa un tiempo de pago</span></p>
              <div class="bor1">
                <div
                  class="opt1"
                  @click="(cuanto = 'Quincenal') && (bloqbtn = false)"
                  :class="{ blk: cuanto == 'Quincenal' }"
                >
                  Quincenal
                </div>
                <div
                  class="opt1"
                  @click="(cuanto = 'Semanal') && (bloqbtn = false)"
                  :class="{ blk: cuanto == 'Semanal' }"
                >
                  Semanal
                </div>
              </div>
            </div>
            <div class="quest">
              <p class="p1">¿Cuántos plazos? <span v-if="statuscot3 == 'Ingresa un plazo'">*Ingresa un plazo</span></p>
              <div class="bor1">
                <div class="grid1">
                  <div
                    class="opt2" v-if="cuanto !== 'Semanal'"
                    @click="(plazos = 2) && (bloqbtn = false)"
                    :class="{ blk: plazos == 2 }"
                  >
                    2
                  </div>
                  <div
                    class="opt2"
                    @click="(plazos = 4) && (bloqbtn = false)"
                    :class="{ blk: plazos == 4 }"
                  >
                    4
                  </div>
                  <div
                    class="opt2"
                    @click="(plazos = 6) && (bloqbtn = false)"
                    :class="{ blk: plazos == 6 }"
                  >
                    6
                  </div>
                  <div
                    class="opt2"
                    @click="(plazos = 8) && (bloqbtn = false)"
                    :class="{ blk: plazos == 8 }"
                  >
                    8
                  </div>
                  <div
                    class="opt2" v-if="cuanto == 'Semanal'"
                    @click="(plazos =10) && (bloqbtn = false)"
                    :class="{ blk: plazos == 10 }"
                  >
                    10
                  </div>
                  <div
                    class="opt2 brtl" v-if="cuanto == 'Semanal'"
                    @click="(plazos =12) && (bloqbtn = false)"
                    :class="{ blk: plazos == 12 }"
                  >
                    12
                  </div>
                  <div
                    class="opt2 brtl" v-if="cuanto == 'Semanal'"
                    @click="(plazos =14) && (bloqbtn = false)"
                    :class="{ blk: plazos == 14 }"
                  >
                    14
                  </div>
                  <div
                    class="opt2 brtl" v-if="cuanto == 'Semanal'"
                    @click="(plazos =16) && (bloqbtn = false)"
                    :class="{ blk: plazos == 16 }"
                  >
                    16
                  </div>                  
                </div>

              </div>
            </div>
            <div class="btn" @click="cotizar(cantidad,cuanto,plazos)" :class="{'bloqbtn':bloqbtn == true }">Cotizar</div>
          </div>
          <div class="col2">
            <div class="cot-c">
              <div class="pd">
                <section class="d1">
                  <p>Pagarías</p>
                  <p>${{totalcot}}*</p>
                </section>
                <p>{{totalcot == '' ? '': 'Durante '+totalpl}}</p>
                <a href="https://wa.link/e4i0vb" target="_blank" rel="noopener noreferrer">
                  <div class="btn">Contactar a un asesor</div>
                </a> 
                <div class="adv">
                  <div class="hr2"></div>
                  <p>
                    *Las condiciones y montos otorgados pueden variar
                    dependiendo a la evaluación del solicitante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!--SERVICIOS-->
    <div id="servicios" class="sectionservicios">
      <!-- Indicador seccion -->
      <div class="idsecc">
        <h5>02.</h5>
        <div class="hr"></div>
        <h5>Servicios</h5>
      </div>
      <h2 class="titservicios">Conoce nuestros servicios</h2>
      <div class="servs-c mo">
        <div class="serv-item" v-for="(s, i) in servicesA.slice(0,servarr)" :key="i">
          <img :src="s.image" alt="serv" />
          <p class="tl">{{ s.name }}</p>
          <div class="stl" v-html="s.text"></div>
        </div>
        <p class="btn-seem" @click="servarr == servicesA.length ? servarr = 2 : servarr += 2">{{servarr == servicesA.length ? 'Ver menos' : 'Ver más'}}</p>
      </div>
      <div class="servs-c pc">
        <carousel :perPage="3"
          :navigationEnabled="true" :paginationEnabled="false">
          <slide v-for="(s, i) in servicesA" :key="i">
            <div class="serv-item">
              <img :src="s.image" alt="serv" />
              <p class="tl">{{ s.name }}</p>
              <div class="stl" v-html="s.text"></div>                
            </div>
          
          </slide>
        </carousel>
        <!--<div class="serv-item" v-for="(s, i) in servicesA" :key="i">
          <img src="../assets/serv1.png" alt="serv" />
          <p class="tl">{{ s.name }}</p>
          <div class="stl" v-html="s.text"></div>
        </div>--->
      </div>
    </div>
    <!--
    <div class="bloquepromo">
      <a class="contpc"
        ><img class="imgpromopc" src="../assets/promopc.png" alt=""
      /></a>
      <a class="contmo"
        ><img class="imgpromomv" src="../assets/promomv.jpg" alt=""
      /></a>
    </div>-->

    <div class="section1">
      <div id="nosotros" class="filanosotros">
        <!-- Indicador seccion -->
        <div class="idsecc">
          <h5>03.</h5>
          <div class="hr"></div>
          <h5>Nosotros</h5>
        </div>
        <!-- Bloque Quienes somos -->
        <div class="bloqueqs">
          <div class="col1-qs">
            <h2>Bienvenido a <span>Microfinanzas</span></h2>
            <p class="orp mb2">
              <b
                >Somos una empresa de préstamos en Hermosillo, comprometida a
                impulsar el desarrollo económico personal de los sonorenses.</b
              >
              <br />
              Por medio de un proceso rápido y seguro, otorgamos financiamientos
              que permitan a las personas mitigar sus deudas y los ayuden a
              alcanzar sus objetivos. De esta manera contribuimos a que
              recuperen su tranquilidad y tengan un mejor control de sus
              finanzas.
            </p>
            <p class="orp mb2">
              <b>Toma el control de tu economía personal. </b> <br />
              Nuestro equipo está capacitado para asesorarte y brindarte la
              opción de préstamo que más se ajuste a tus necesidades. <br />
              Libérate de tus deudas <br />
              Compra tu casa o carro nuevo. <br />
              Invierte en lo que más amas. (Icono de familia) <br />
              Consolida tu negocio
            </p>
            <p class="orp mb2">
              <b
                >Contamos con préstamos de $10,000 mil hasta $90,000 mil
                pesos.</b
              >
            </p>
            <!--   <img src="../assets/btnvideo.svg" alt="btn" class="btnvi" />
            <img class="imgqs1pc" src="../assets/imgqspc.jpg" alt="" /> -->
          </div>
          <div class="col2-qs">
            <section>
              <p class="orp w50qs tl">Misión</p>
              <p class="mb2 w50qs fs3">
                Apoyar a nuestros clientes y a sus familias a superar sus
                inconvenientes financieros por medio de préstamos accesibles,
                eficientes y confiables
              </p>
            </section>
            <section>
              <p class="orp w50qs tl">Visión</p>
              <p class="mb2 w50qs fs3">
                Posicionarnos como una compañía líder en el sector, capaz de
                resolver todas las necesidades financieras de nuestros clientes.
                Reconocida por brindar una atención cercana y de calidad, así
                como préstamos rápidos y soluciones a medida.
              </p>
            </section>
            <!----<div class="videoc"> 
              <img class="imgqs1mv" src="../assets/imgqsmv.png" alt="" />
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <!--<div class="sectionbanner2">
      <img class="imgban2mv" src="../assets/banner2mv.png" alt="" />
      <img class="imgban2pc" src="../assets/banner2pc.png" alt="" />
    </div> -->

    <!--DIRECTORIO-->

    <!---SUCURSALES--->
    <!--    <div
      class="sectionsucursales"
      id="sucursales"
      v-if="suc == 'No se encontraron coincidencias.'"
    ></div>
    <div v-else>
      <div class="sectionsucursales" id="sucursales" v-if="suc.length > 1">
        <div class="idsecc">
          <h5>03.</h5>
          <hr />
          <h5>Ubicaciones</h5>
        </div>
        <div class="bloquesucursales">
          <h2>Sucursales</h2>
          <div class="bloquebtnubi">
            <a @click="showModalCarretas = !showModalCarretas" class="btnubi"
              ><p>Ubica tu Aquimis más cercano</p></a
            >
          </div>
          <div v-if="showModalCarretas" class="modal_view_cnt">
            <div id="modal_ubicaciones">
              <p @click="showModalCarretas = false" class="close_modal_btn">
                &#10006;
              </p>
              <div class="modal_iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.28556924302!2d-110.94375718416906!3d29.09724946964509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85109e7793b3%3A0x2c75980f3fd06ea6!2sLa%20Carreta%20Verde%20Kino!5e0!3m2!1ses!2smx!4v1669134602141!5m2!1ses!2smx"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div class="F7">
            <div class="Mobil">
              <carousel
                v-if="suc.length > 3"
                :per-page="1"
                :mouse-drag="true"
                :navigation-enabled="true"
                :navigationNextLabel="sright"
                :navigationPrevLabel="sleft"
                :loop="true"
                :paginationEnabled="false"
              >
                <slide v-for="(item, key) in sucursales2" :key="key">
                  <div
                    class="F7Content"
                    v-for="(item2, key2) in item"
                    :key="key2"
                  >
                    <img
                      class="F7I1"
                      v-if="item2.image !== ''"
                      :src="
                        url +
                        '/' +
                        endpointCodes.get +
                        '/sucursal-img/' +
                        item2.image
                      "
                    />
                    <p class="F7T1">{{ item2.name }}</p>
                    <p class="F7T F7T2">{{ item2.address }}</p>

                    <p class="F7T">Lun a Sab 7:00 am a 3:00 pm</p>
                    <a
                      :href="item2.wlink"
                      target="_blank"
                      ref="noopener noreferrer"
                    >
                      <div class="F7F3">
                        <img src="../assets/Whatsapp2.png" />
                        <p>{{ item2.phone }}</p>
                      </div>
                    </a>
                  </div>
                </slide>
              </carousel>
              <div v-else>
                <div v-for="(item, key) in sucursales2" :key="key">
                  <div class="F7Content">
                    <img
                      class="F7I1"
                      v-if="item.image !== ''"
                      :src="
                        url +
                        '/' +
                        endpointCodes.get +
                        '/sucursal-img/' +
                        item.image
                      "
                    />
                    <p class="F7T1">{{ item.name }}</p>
                    <p class="F7T F7T2">{{ item.address }}</p>

                    <p class="F7T">Lun a Sab 7:00 am a 3:00 pm</p>
                    <a
                      :href="item.wlink"
                      target="_blank"
                      ref="noopener noreferrer"
                    >
                      <div class="F7F3">
                        <img src="../assets/Whatsapp2.png" />
                        <p>{{ item.phone }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="Desktop" v-if="sucursales"> 
              <carousel
                v-if="suc.length > 6"
                :per-page="1"
                :mouse-drag="true"
                :navigation-enabled="true"
                :navigationNextLabel="sright"
                :navigationPrevLabel="sleft"
                :loop="true"
                :paginationEnabled="false"
              >
                <slide v-for="(item, key) in sucursales" :key="key">
                  <div
                    class="F7Content"
                    v-for="(item2, key2) in item"
                    :key="key2"
                  >
                    <img
                      class="F7I1"
                      v-if="item2.image !== ''"
                      :src="
                        url +
                        '/' +
                        endpointCodes.get +
                        '/sucursal-img/' +
                        item2.image
                      "
                    />
                    <img
                      class="F7I1"
                      v-else-if="item2.image == ''"
                      src="../assets/Sucursal_Img.png"
                    />
                    <p class="F7T1">{{ item2.name }}</p>
                    <p class="F7T F7T2">{{ item2.address }}</p>

                    <p class="F7T">Lun a Sab 7:00 am a 3:00 pm</p>
                    <a
                      :href="item2.wlink"
                      target="_blank"
                      ref="noopener noreferrer"
                    >
                      <div class="F7F3">
                        <img src="../assets/Whatsapp2.png" />
                        <p>{{ item2.phone }}</p>
                      </div>
                    </a>
                  </div>
                </slide>
              </carousel>
              <carousel
                v-else
                :per-page="6"
                :mouse-drag="true"
                :navigation-enabled="true"
                :navigationNextLabel="sright"
                :navigationPrevLabel="sleft"
                :loop="true"
                :paginationEnabled="false"
              >
                <slide v-for="(item, key) in sucursales" :key="key">
                  <div class="F7Content">
                    <img
                      class="F7I1"
                      v-if="item.image !== ''"
                      :src="
                        url +
                        '/' +
                        endpointCodes.get +
                        '/sucursal-img/' +
                        item.image
                      "
                    />
                    <img
                      class="F7I1"
                      v-else-if="item.image == ''"
                      src="../assets/Sucursal_Img.png"
                    />
                    <p class="F7T1">{{ item.name }}</p>
                    <p class="F7T F7T2">{{ item.address }}</p>

                    <p class="F7T">Lun a Sab 7:00 am a 3:00 pm</p>
                    <a
                      :href="item.wlink"
                      target="_blank"
                      ref="noopener noreferrer"
                    >
                      <div class="F7F3">
                        <img src="../assets/Whatsapp2.png" />
                        <p>{{ item.phone }}</p>
                      </div>
                    </a>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sectionsucursales"
        id="sucursales"
        v-else-if="suc.length == 1"
      >
        <div class="idsecc">
          <h5>03.</h5>
          <hr />
          <h5>CONTACTO</h5>
        </div>
        <div class="matriz-cont">
          <p class="tl">Contáctanos</p>
          <p class="subtl">
            Disfruta del dulce sabor de las mejores Coyotas de Sonora. <br />
            Haz tus compras en línea para recibir a domicilio, manda un mail con
            tus comentarios o visita nuestra sucursal. Nos encantará saber tu
            opinión y responder todas tus dudas.
          </p>
          <div class="threeitems">
            <div class="item one">
              <img src="../assets/icon1.svg" alt="phone" />
              <a href="tel:+526622105647">Tel. {{ suc[0].phone }}</a>
            </div>
            <div class="item two">
              <img src="../assets/icon2.svg" alt="address" />
              <p>{{ suc[0].address }}</p>
            </div>
            <div class="item three">
              <img src="../assets/icon3.svg" alt="mail" />
              <a href="mailto:lourdescoyotas@gmail.com"
                >lourdescoyotas@gmail.com</a
              >
            </div>
          </div>
        </div>
        <iframe
          class="mapcont"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.61928273528!2d-110.94909978097267!3d29.091592051043943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85cb694afce7%3A0xb04478af9593e80!2sCoyotas%20Lourdes!5e0!3m2!1sen!2smx!4v1670365999345!5m2!1sen!2smx"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>--->

    <!---REDES SOCIALES--->
    <div id="instagram" class="sectionredes">
      <div class="idsecc">
        <h5>04.</h5>
        <div class="hr"></div>
        <h5>Instagram</h5>
      </div>
      <div class="bloqueredes">
        <div class="pd">
          <div class="col1f">
            <h2>Síguenos</h2>
            <!--<p class="txtredes">
            Se parte de la comunidad de Bichaá, síguenos en redes sociales y sé el primero en enterarte de las novedades.
          </p>-->
            <div class="fila-br">
              <div class="fbr img1br">
                <img src="../assets/imagebr1.png" alt="" />
              </div>
              <div class="fbr img2br">
                <img src="../assets/imagebr2.png" alt="" />
              </div>
              <div class="fbr img1br img3br">
                <img src="../assets/imagebr3.png" alt="" />
              </div>
              <div class="fbr img2br img4br">
                <img src="../assets/imagebr4.png" alt="" />
              </div>
            </div>
            <div class="bloquebtnig">
              <a
                href="https://www.instagram.com/microfinanzas.financiera/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="btnig">
                  <h5>@Microfinanzas.financiera</h5>
                </div>
              </a>
            </div>
          </div>
          <div class="col1f dos">
            <img src="../assets/img1.png" alt="" class="micro1" />
          </div>
        </div>
      </div>
    </div>
    <!---    <div class="sectiontiktok">
      <div class="idsecc">
        <h5 class="cotik">05.</h5>
        <hr />
        <h5 class="cotik">Tik Tok</h5>
      </div>
      <div class="bloquetiktok">
        <section>
          <h2>Encuéntranos en</h2>
          <img class="imgtiktok" src="../assets/tiktokpc.png" />
        </section>
        <section>
          <h6>Únete a nuestra comunidad y disfruta de recetas exclusivas.</h6>
          <div class="bloquebtntik">
            <a class="btntik" href="https://www.tiktok.com/@aquimis_huevos"
              ><p>Coyotas Lourdes</p></a
            >
          </div>
        </section>
      </div>
    </div>
    --><!--
    <div class="sectionbanner8">
      <img class="imgban2mv" src="../assets/banner8mv.png" alt="" />
      <img class="imgban2pc" src="../assets/banner8pc.png" alt="" />
    </div>-->
    <!---<div class="sectioncontacto" id="contacto">
      <div class="idsecc">
        <h5>05.</h5>
        <hr />
        <h5>Contacto</h5>
      </div> 
      <div class="flexic">
        <form @submit.prevent="enviarMail(name, phone, email, mensaje)">
          <div class="sectionformulario">
            <h2 class="titform mo">¿Dudas o sugerencias?</h2>
            <h2 class="titform pc">¿Dudas o sugerencias?</h2>
            <p class="txt-ctc">
              Te invitamos a dejar tu mensaje, nos pondremos en contacto contigo
              lo antes posible, ¡gracias!
            </p>
            <div class="bloqueform">
              <input
                class="inputbf inputname"
                type="text"
                placeholder="Nombre"
                v-model="name"
              />
              <input
                class="inputbf inputnumber"
                type="number"
                placeholder="Celular"
                v-model="phone"
              />
              <input
                class="inputbf inputemail"
                type="email"
                placeholder="Correo"
                v-model="email"
              /> 
              <textarea
                class="texa"
                cols="30"
                rows="10"
                placeholder="Mensaje"
                v-model="mensaje"
              ></textarea>
              <div class="ad-btn">
                <div class="bloqueaviso">
                  <div
                    class="inpcheck"
                    @click="aviso == true ? (aviso = false) : (aviso = true)"
                  >
                    <div class="checked" v-if="aviso == true"></div>
                  </div>
                  <p class="txtaviso">
                    He leído el <a href="#">Aviso de Privacidad</a> antes de
                    enviar el formulario.
                  </p>
                </div>
                <button type="submit" class="btnform">
                  <p class="txtbtn">Enviar</p>
                </button>
              </div>

              <div v-if="this.status == 'success'">
                <p class="cart_msg cart_success">{{ this.msg }}</p>
              </div>
              <div v-if="this.status == 'error'">
                <p class="cart_msg cart_error">{{ this.msg }}</p>
              </div>
            </div>
          </div>
        </form>
        <img src="../assets/carreta1.png" alt="" class="formimg mo" />
        <img src="../assets/carreta1pc.png" alt="" class="formimg pc" />
      </div>
    </div>-->

    <Footer />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import FixedItems from "../components/FixedItems";
import ModalCar from "./carrito/modalCar";
import { Carousel, Slide } from "vue-carousel";
import { url, endpointCodes } from "../global/index";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Navigator,
    Footer,
    FixedItems,
    ModalCar,
  },
  data() {
    return {

      servarr: 2,

      dropc: false,

      mdcar: false,

      url: url,
      endpointCodes,
      showModalCarretas: false,
      catsel: "",
      scsel: "Nutritivos",

      nextA: '<div class="divPrev0"><p class="NButton">&#9664;</p></div>',
      nextB: '<div class="divPrev0"><p class="NButton">&#9654;</p></div>',
      sleft: '<img src="' + require("../assets/sleft.svg") + '"/>',
      sright: '<img src="' + require("../assets/sright.svg") + '"/>',

      cantidad: 0,
      cuanto: "",
      plazos: 0,
      totalcot: 0,
      totalpl: '',
      bloqbtn: false,
      statuscot:'',
      statuscot2:'',
      statuscot3:'',

      hide: false,
      aviso: false,
      name: "",
      phone: "",
      email: "",
      sucursal: "",
      mensaje: "",
      status: "",
      msg: "",


      currentA: [],
      currentA2: [],
      titulo: "",
      subtitulo: "",

      cartsel: 0,

      servicesA: [
        {
          image: require("../assets/servSl1.png"),
          name: "Crédito Via Nómina",
          text: "<p>Accede a un crédito inmediato con descuentos directos a tu nómina.</p><p>Ofrecemos montos de hasta $10,000 mil pesos, plazos límite de 16 semanas y tasas de interés competitivas.</p>",
        },
        {
          image: require("../assets/servSl2.png"),
          name: "Crédito con Garantía",
          text: "<p>Recibe préstamos de mayor valor a cambio de una propiedad que esté a tu nombre como garantía de pago. Garantías aprobadas: Prendarias, hipotecarias, adicionales las naturales del crédito. </p><p>Contamos con montos de hasta $500,000 mil pesos. Con un plazo límite de 48 meses y tasas de interés competitivas.</p>",
        },
        {
          image: require("../assets/servSl3.png"),
          name: "Préstamo Personal",
          text: "<p>Sal del apuro y obtén tu préstamo personal de hasta $90,000 mil pesos. Te lo facilitamos de manera inmediata y con los requisitos mínimos.</p><p>A 24 meses de tiempo límite y tasas de interés competitivas.</p>",
        }, 
      ],

      conductorA: [{ name: "" }, { name: "" }, { name: "" }],

      status: "",
      message: "",
      cart: localStorage.getItem("cart"),
    };
  },
  metaInfo() {
    return {
      title: "Bienvenidos",
      titleTemplate: "%s | Microfinanzas",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: "Microfinanzas",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
  async created() {
    await this.getAllInfoBnr("banner");
    await this.getAllInfoCtg("category");
    await this.getAllInfoPrd("product");
    await this.getAllInfoScl("sucursal");
    /*this.currentA2 = this.items[0];
    this.currentA = this.items[this.number];
    this.catsel = this.categories[0].name;*/
  },
  computed: {
    slideC(side) {
      if (side == "l") {
      }
      if (side == "r") {
      }
    },
    number: {
      cache: false,
      get() {
        return this.$refs.itemsS ? this.$refs.itemsS.currentPage : 0;
      },
    },
    datass() {
      return this.categories[this.$refs.itemsS.currentPage];
    },
    banner() {
      return this.$store.getters["banner/data"];
    },
    products() {
      //return this.$store.getters["product/data"];
      let pro = this.$store.getters["product/data"];
      let cats = this.catsel;
      let ar1 = [];
      let arr = [];
      if (Array.isArray(pro)) {
        for (let i = 0; i < pro.length; i++) {
          if (pro[i].category_name == cats) {
            ar1.push(pro[i]);
          }
        }
        for (let i = 0; i < ar1.length; i++) {
          if (ar1[i].stock !== "Sin stock") {
            arr.push(ar1[i]);
          }
        }
        let namec = [...new Set(arr.map(({ name }) => name))]
          .map((t) =>
            Object.assign({ [t]: arr.filter(({ name }) => name === t).length })
          )
          .reduce((acc, v) => Object.assign(acc, v), {});

        let res = Object.keys(namec).reduce(
          (acc, t) =>
            namec[t] === 1
              ? acc.concat(
                  Object.assign({
                    name_pro: t,
                    descr_pro: arr.filter(({ name }) => name === t)[0].descr,
                    img_pro: arr.filter(({ name }) => name === t)[0].image,
                    results: arr.filter(({ name }) => name === t),
                  })
                )
              : acc.concat(
                  Object.assign({
                    name_pro: t,
                    descr_pro: arr.filter(({ name }) => name === t)[0].descr,
                    img_pro: arr.filter(({ name }) => name === t)[0].image,
                    results: arr.filter(({ name }) => name === t),
                  })
                ),
          []
        );
        return res;
      } else {
        return "No se encontraron coincidencias.";
      }
    },
    productsmo() {
      let pro = this.$store.getters["product/data"];
      let cats = this.datass.name;
      let dai = 0;
      let ar1 = [];
      let arr = [];
      if (Array.isArray(pro)) {
        for (let j = 0; j < pro.length; j++) {
          if (pro[j].category_name == cats) {
            ar1.push(pro[j]);
          }
        }
        for (let i = 0; i < ar1.length; i++) {
          if (ar1[i].stock !== "Sin stock") {
            arr.push(ar1[i]);
          }
        }
        let namec = [...new Set(arr.map(({ name }) => name))]
          .map((t) =>
            Object.assign({ [t]: arr.filter(({ name }) => name === t).length })
          )
          .reduce((acc, v) => Object.assign(acc, v), {});

        let res = Object.keys(namec).reduce(
          (acc, t) =>
            namec[t] === 1
              ? acc.concat(
                  Object.assign({
                    name_pro: t,
                    descr_pro: arr.filter(({ name }) => name === t)[0].descr,
                    img_pro: arr.filter(({ name }) => name === t)[0].image,
                    results: arr.filter(({ name }) => name === t),
                  })
                )
              : acc.concat(
                  Object.assign({
                    name_pro: t,
                    descr_pro: arr.filter(({ name }) => name === t)[0].descr,
                    img_pro: arr.filter(({ name }) => name === t)[0].image,
                    results: arr.filter(({ name }) => name === t),
                  })
                ),
          []
        );
        return res;
      } else {
        return "No se encontraron coincidencias.";
      }
    },
    categories() {
      return this.$store.getters["category/data"];
    },
    suc() {
      return this.$store.getters["sucursal/data"];
    },
    sucursales() {
      let arr = this.$store.getters["sucursal/data"];
      if (arr !== "No se encontraron coincidencias.") {
        let narr = [];
        if (arr.length > 6) {
          for (let i = 0; i < arr.length; i += 6) {
            let add = arr.slice(i, i + 6);
            narr.push(add);
          }
          console.log(arr);
          return narr;
        } else {
          return arr;
        }
      } else {
        return "No se encontraron coincidencias.";
      }
    },
    sucursales2() {
      let arr = this.$store.getters["sucursal/data"];
      let narr = [];
      if (arr !== "No se encontraron coincidencias.") {
        if (arr.length > 3) {
          for (let i = 0; i < arr.length; i += 3) {
            let add = arr.slice(i, i + 3);
            narr.push(add);
          }
          return narr;
        } else {
          return arr;
        }
      } else {
        return "No se encontraron coincidencias.";
      }
    },
  },
  methods: {
    ...mapActions("banner", ["getAllInfoBnr"]),
    ...mapActions("category", ["getAllInfoCtg"]),
    ...mapActions("product", ["getAllInfoPrd"]),
    ...mapActions("sucursal", ["getAllInfoScl"]),

    ...mapActions("carrito", ["getCart"]),
    ...mapActions("carrito", ["getCartCopy"]),

    cotizar(cantidad,cuanto,plazos){
      if(cantidad == 0 ){
        this.statuscot = 'Ingresa una cantidad'; 
      }
      if( cuanto == '' ){ 
        this.statuscot2 = 'Ingresa un tiempo de pago'; 
      }
      if( plazos == 0){ 
        this.statuscot3 = 'Ingresa un plazo';
      } 
      if (cantidad !== 0 && cuanto !== '' && plazos !== 0) {
        this.statuscot = '';
        this.statuscot2 = '';
        this.statuscot3 = '';
        this.cantidad= 0;
        this.bloqbtn = true;
      this.cuanto= "";
      this.plazos= 0;
        if(cantidad==1000&&cuanto=='Quincenal'){
          if(plazos==2){
            this.totalcot = 845
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 545
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 465
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 410
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==2000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 1445
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 845
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 665
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 570
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==3000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 2045
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 1145
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 865
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 720
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==4000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 2645
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 1445
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 1065
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 870
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==5000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 3245
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 1745
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 1265
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 1020
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==6000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 3845
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 2045
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 1485
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 1180
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==7000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 4265
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 2265
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 1645
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 1300
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==8000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 5045
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 2645
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 1800
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 1480
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==9000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 5645
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 2995
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 2095
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 1640
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==10000&&cuanto=='Quincenal' ){
          if(plazos==2){
            this.totalcot = 6245
            this.totalpl = '2 quincenas'
          }
          if(plazos==4){
            this.totalcot = 3245
            this.totalpl = '4 quincenas'
          }
          if(plazos==6){
            this.totalcot = 2290
            this.totalpl = '6 quincenas'
          }
          if(plazos==8){
            this.totalcot = 1780
            this.totalpl = '8 quincenas'
          }
        }
        if(cantidad==1000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 420
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 320
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 270
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 247
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 227
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 210
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 200
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==2000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 720
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 520
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 420
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 367
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 327
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 305
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 285
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==3000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 1020
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 720
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 570
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 487
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 427
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 395
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 360
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==4000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 1320
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 940
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 720
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 607
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 527
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 475
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 430
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==5000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 1620
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 1120
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 870
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 727
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 627
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 565
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 510
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==6000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 1920
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 1320
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 1020
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 857
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 737
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 655
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 605
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==7000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 2130
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 1460
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 1130
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 957
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 827
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 845
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 650
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==8000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 2520
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 1720
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 1320
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 1097
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 937
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 825
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 740
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==9000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 2820
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 1920
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 1470
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 1217
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 1037
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 915
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 820
            this.totalpl = '16 semanas'
          }
        }
        if(cantidad==10000&&cuanto=='Semanal' ){
          if(plazos==4){
            this.totalcot = 3120
            this.totalpl = '4 semanas'
          }
          if(plazos==6){
            this.totalcot = 2120
            this.totalpl = '6 semanas'
          }
          if(plazos==8){
            this.totalcot = 1620
            this.totalpl = '8 semanas'
          }
          if(plazos==10){
            this.totalcot = 1337
            this.totalpl = '10 semanas'
          }
          if(plazos==12){
            this.totalcot = 1137
            this.totalpl = '12 semanas'
          }
          if(plazos==14){
            this.totalcot = 995
            this.totalpl = '14 semanas'
          }
          if(plazos==16){
            this.totalcot = 890
            this.totalpl = '16 semanas'
          }
        }
      }
    },
    //***CART METHODS */

    async obtenerCarritos() {
      await this.getCart();
      await this.getCartCopy();
    },
    agregarItem: async function (cantidad, arrsele) {
      let payload = {
        item: arrsele,
        _ctk: localStorage.getItem("_ctk"),
        cantidad,
      };

      let result = await this.$store.dispatch("carrito/editItemCrt", {
        option: "add_item",
        item: payload,
      });

      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
        this.delStatus();
      } else {
        // success
        await this.obtenerCarritos();
        this.mdcar = true;
        this.$router.push("/modalcart").catch((err) => {});
      }
    },

    /**END CART METHODS */

    catselect(val) {
      let array = this.items;
      this.catsel = val;
      let arr = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i].categoria == val) {
          arr.push(array[i]);
        }
      }
      this.currentA2 = arr[0];
      this.scsel = arr[0].subcategoria;
    },
    subselect(val1, val2, val3) {
      let array = this.items;
      this.scsel = val2;
      let arr = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i].categoria == val1) {
          arr.push(array[i]);
        }
      }

      this.currentA2 = arr[val3];
    },

    NArrays(array, number) {
      console.log("3 " + array.length);
      if (this.itemsorted.length < array.length) {
        number += 2;
        this.itemsorted = array.slice(0, number);
        console.log("2 " + number);
      }
      if (number >= array.length) {
        this.hide = true;
      }
    },

    delStatus: function () {
      setTimeout(() => this.delMsgs(), 5000);
      /*this.close(), 3000);*/
    },
    delMsgs: function () {
      this.status = "";
      this.msg = "";
    },
    enviarMail: async function (name, phone, email, mensaje) {
      this.msg = "";
      this.status = "";

      if (this.aviso == false) {
        this.msg = "Acepta los términos y condiciones.";
        this.status = "error";
      } else if (name == undefined || name == "" || name == null) {
        this.msg = "El campo nombre no es valido.";
        this.status = "error";
      } else if (phone == undefined || phone == "" || phone == null) {
        this.msg = "El campo medio no es valido.";
        this.status = "error";
      } else if (email == undefined || email == "" || email == null) {
        this.msg = "El campo correo no es valido.";
        this.status = "error";
      } else if (mensaje == undefined || mensaje == "" || mensaje == null) {
        this.msg = "El campo comentarios no es valido.";
        this.status = "error";
      } else {
        let data = {
          name: name,
          phone: phone,
          email: email,
          mensaje: mensaje,
        };
        let response = await this.$store.dispatch(
          "admin/enviarMailContacto",
          data
        );
        console.log(response);
        if (response.status == "success") {
          this.status = "success";
          this.msg = "Mensaje enviado con exito.";
          this.name = "";
          (this.phone = ""), (this.email = ""), (this.mensaje = "");
          this.delStatus();
        } else {
          this.status = "error";
          this.msg =
            "Lo sentimos ha ocurrido un error al intentar entregar tu mensaje.";
        }
      }
    },
    /*adjustHeight() {
      let d = document.getElementsByClassName("slide-item")[0];
      console.log(d.offsetHeight);
      let s = document.getElementsByClassName("slideservicios")[0];
      s.style.height = d.offsetHeight;
    },**/
  },
  mounted() {
    /* window.addEventListener("load", this.adjustHeight);
    this.itemsorted = this.items.slice(0, 2);*/
  },
};
</script>
<style scoped>
.purple {
  color: #8c3aaa !important;
}
.rose {
  color: #d376b9 !important;
}
.purplet {
  background: #8c3aaa !important;
}
.roset {
  background: #d376b9 !important;
}
.pc {
  display: none;
}
.mo {
  display: block;
}
.section1 {
  background: none;
}
/* Banner Movil */
.bannermv {
  width: 100vw;
  height: 145.41062801932367vw;
}
.bannerpc {
  display: none;
}
/* Cambiar fondo movil nosotros aqui */
.filanosotros {
  background: url(../assets/bknosmo.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 0;
  padding-bottom: 18.841vw;
}
.idsecc {
  display: flex;
  width: 40%;
  margin: 0 auto 0;
  padding-top: 14.492753623188406vw;
}
.sectionsucursales .idsecc h5 {
  color: var(--co-h51seccion);
}
.sectionsucursales .idsecc hr {
  background: var(--co-hr2seccion);
  border-color: var(--co-hr2seccion);
}
.sectionsucursales .matriz-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 26.329vw;
}
.sectionsucursales .matriz-cont .tl {
  font-family: var(--font-titulo1);
  font-style: normal;
  font-weight: 400;
  font-size: 8.454vw;
  line-height: 90.5%;
  text-align: center;
  color: #ff4713;
  margin: 0;
}
.sectionsucursales .matriz-cont p.subtl {
  font-weight: 600;
  font-size: 4.348vw;
  line-height: 115.5%;
  text-align: center;
  color: #d9d9d9;
  width: 85.024vw;
  margin: 4.831vw 0 9.662vw;
  font-family: var(--font-txtcon);
}
.sectionsucursales .matriz-cont .threeitems {
  width: 50.039vw;
}
.sectionsucursales .matriz-cont .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7.971vw;
}
.sectionsucursales .matriz-cont .item img {
  width: 19.324vw;
  height: 19.324vw;
  margin-bottom: 4.589vw;
}
.sectionsucursales .matriz-cont .item p,
.sectionsucursales .matriz-cont .item a {
  font-family: var(--font-parrafo2);
  font-weight: 400;
  font-size: 4.831vw;
  line-height: 111%;
  text-align: center;
  color: #8e8e8e;
  margin: 0;
}
.imgqs1pc {
  display: none;
}
.imgqs1mv {
  width: 100vw;
  height: 67.15vw;
  padding-bottom: 16.908vw;
  margin-top: 0;
}
.idsecc h5 {
  font-size: var(--fs-idseccionmv);
  font-family: var(--font-titulo2);
  color: var(--co-hr1seccion);
  margin: 0;
  font-weight: 600;
}
.idsecc h5:nth-child(1) {
  font-weight: 800;
}
.idsecc .hr {
  width: 14.975845410628018vw;
  border: 0.078vw solid var(--co-hr1seccion);
  margin-top: 1.4vw;
  background: var(--co-hr1seccion);
  height: 0.04vw;
  margin-left: 3vw;
  margin-right: 3vw;
}
.menu-p .c-1 .p.var {
  text-transform: lowercase;
}
.bloqueqs {
  text-align: center;
  padding-top: 23.67149758454106vw;
}
.bloqueqs .nos1 {
  width: 54.191vw;
  margin: 0 12.802vw 4.662vw;
}
.bloqueqs .nos1.mo {
  display: block;
}
.bloqueqs .nos1.pc {
  display: none;
}
.bloqueqs h2 {
  font-size: var(--fs-t1nosomv);
  color: var(--co-t1noso);
  font-family: var(--font-titulo1);
  line-height: 7.64975845410628vw;
  letter-spacing: 0.03em;
  width: 82%;
  margin: auto;
  margin-bottom: 6.522vw;
  font-weight: 400;
  padding-left: 2vw;
  text-align: center;
}
.bloqueqs h2 span {
  font-weight: 700;
  font-style: italic;
}
.bloqueqs h4 {
  font-size: var(--fs-p1nosomv);
  font-family: var(--font-parrafo);
  line-height: 5.021739130434782vw;
  color: var(--co-p1noso);
  text-align: left;
  width: 75%;
  margin: auto;
  margin-bottom: 8.695652173913043vw;
}
.bloqueqs p {
  font-family: var(--font-parrafo);
  font-size: var(--fs-p2nosomv);
  color: var(--co-p2noso);
  line-height: 6.522vw;
  font-weight: 400;
  text-align: left;
  width: 71%;
  margin: auto;
  margin-bottom: 4.719806763285vw;
}
.bloqueqs p.orp {
  color: var(--co-p3noso);
  font-weight: 400;
}
.bloqueqs .mb2 {
  margin-bottom: 10.145vw;
}
/* Seccion Servicios */
.sectionservicios {
  background: var(--co-bgservicios);
  width: 100%;
  height: fit-content;
}
.sectionservicios .servs-c {
  padding-bottom: 30.676vw;
}
.sectionservicios .servs-c.mo {
  display: block;
}
.sectionservicios .servs-c.pc {
  display: none;
}
.sectionservicios .idsecc h5,
.filanosotros .idsecc h5 {
  color: var(--co-h52seccion);
}
.filanosotros .idsecc .hr {
  background-color: var(--co-h52seccion);
  border: 0.078vw solid var(--co-h52seccion);
}
.titservicios {
  text-align: center;
  color: var(--co-t1serv);
  margin: 0;
  margin-top: 20.048309178743963vw;
  margin-bottom: 22.464vw;
  font-size: var(--fs-t1servmv);
  font-family: var(--font-titulo1);
  font-weight: 700;
}
.sectionservicios .serv-item {
  width: 65.821vw;
  margin: 0 auto 8.696vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sectionservicios .servs-c.dir-c {
  width: 91.546vw;
  margin: auto;
}
.sectionservicios .dir-c .serv-item {
  width: 91.546vw;
}
.sectionservicios .dir-c .serv-item img {
  width: 48.792vw;
}
.sectionservicios .dir-c .stl {
  width: 80%;
}
.sectionservicios .dir-c a.btn {
  width: 71.498vw;
}
.sectionservicios .serv-item img {
  width: 100%;
}
.sectionservicios .tl {
  font-family: var(--font-titulo1);
  color: var(--co-t1serv);
  font-weight: 700;
  font-size: 4.831vw;
  line-height: 111%;
  text-align: center;
  margin: 4.348vw 0;
}
:deep(.sectionservicios .stl p) {
  font-family: var(--font-titulo1);
  /*font-weight: 400;*/
  font-weight: 500;
  font-size: 3.865vw;
  line-height: 4.831vw;
  color: var(--co-t2serv);
  text-align: left;
  width: 100%;
  margin: 0 auto 4.348vw;
}
.sectionservicios a.btn {
  width: 100%;
}
.sectionservicios a.btn div {
  border: 0.5vw solid var(--co-third);
  color: var(--co-third);
  padding: 6.763vw 0;
  text-align: center;
  border-radius: 100vw;
  font-weight: 800;
  font-size: 4.348vw;
  transition: 0.5s;
}
.sectionservicios a.btn div:hover {
  background-color: var(--co-third);
  color: white;
}
.sectionservicios a.btn.prox {
  pointer-events: none;
}
.sectionservicios a.btn.prox div {
  border: 0.1vw solid var(--co-prox1);
  color: var(--co-prox2);
  background-color: var(--co-prox1);
  font-weight: 500;
}
.subservicios {
  text-align: center;
  color: var(--co-t2serv);
  font-family: var(--Inter);
  font-size: var(--fs-t2servmv);
  line-height: 5.021739130434782vw;
  font-weight: 400;
  /*width: 85%;*/
  width: 83%;
  margin: auto;
  margin-top: 9.903381642512077vw;
  margin-bottom: 10.38647342995169vw;
}
.subservicios span {
  cursor: pointer;
}
.bloqueservicio {
  text-align: center;
}
.bloqueservicio img {
  width: 68.11594202898551vw;
  height: 52.65700483091788vw;
}
.bloqueservicio h3 {
  color: var(--co-h3serv);
  font-size: var(--fs-h3servmv);
  font-family: var(--font-titulo1);
  width: 70%;
  margin: auto;
  margin-top: 4.3478260869565215vw;
  line-height: 5.898550724637682vw;
}
.bloqueservicio p {
  text-align: left;
  width: 60%;
  margin: auto;
  margin-top: 4.3478260869565215vw;
  font-size: var(--fs-pservmv);
  font-family: var(--font-parrafo);
  color: var(--co-pserv);
  margin-bottom: 5.314vw; /**/
  line-height: 4.826086956521739vws;
}
.bloquevermas {
  text-align: center;
  margin-top: 12.734299516908212vw;
  padding-bottom: 16.425120772946862vw;
}
.bloquevermas p {
  color: var(--co-btnserv);
  font-family: var(--font-parrafo);
}

/* Seccion Siguenos */
.sectionredes {
  background-image: url(../assets/bksmmo.png);
  background-size: cover; 
  padding-bottom: 21.111111vw;
}
.sectionredes .idsecc h5 {
  color: var(--co-h53seccion);
}
.sectionredes .idsecc .hr {
  background: var(--co-hr3seccion);
  border: 0.078vw solid var(--co-hr3seccion);
}
.sectionredes h2 {
  margin: auto;
  font-family: var(--font-titulo1);
  font-weight: 700;
  color: var(--co-titsig);
  text-align: center;
  font-size: var(--fs-titsigmv);
  margin-top: 20.048309178743963vw;
  margin-bottom: 5vw;
  text-transform: inherit;
  width: 70%;
}
.sectionredes .txtredes {
  margin: auto;
  color: var(--co-txtsig);
  text-align: center;
  width: 73%;
  font-weight: 400;
  font-family: var(--font-parrafo);
}
.fila-br {
  width: 91%;
  margin: auto;
  margin-top: 12vw;
  margin-bottom: 17vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.fila-br .fbr {
  width: 41.21256038647343vw;
  height: 41.21256038647343vw;
  margin-bottom: 5vw;
  overflow: hidden;
}
.fila-br img {
  width: 41.21256038647343vw;
  height: 41.21256038647343vw;
}
.img2br {
  margin-left: 5vw;
}
.btnig {
  display: flex;
  background-image: url(../assets/logoig.svg);
  background-size: 7.770531400966184vw 8.007246376811594vw;
  background-repeat: no-repeat;
  background-position-x: 7%;
  background-position-y: 50%;
  text-align: center;
  width: 74.155vw;
  margin: auto;
  border: 0.2vw solid white;
  border-radius: 4vw;
  background-color: transparent;
  transition: 0.5s;
  background-color: #fa8f21;
}
.btnig h5 {
  font-weight: 800;
  width: 100%;
  text-align: center;
  border-radius: 1.4492753623188406vw;
  font-family: var(--font-titulo1);
  font-size: var(--fs-btnigmv);
  font-weight: 700;
  margin: 0;
  margin-top: 6.830918vw;
  margin-bottom: 7.730918vw;
  color: white;
} 
/*Section simulador */
.sectionsimulator .col1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sectionsimulator .tl {
  margin: 12.802vw auto 10.145vw;
  color: #057d38;
  font-family: "Plus Jakarta Sans";
  font-weight: 400;
  font-size: 8.454vw;
  line-height: 90.5%;
  text-align: center;
}
.sectionsimulator .tl span {
  font-style: italic;
  font-weight: 800;
}
.sectionsimulator .sbtl {
  font-weight: 600;
  font-size: 4.348vw;
  font-family: "Plus Jakarta Sans";
  line-height: 6.522vw;
  text-align: center;
  letter-spacing: 0.02em;
  color: #040404;
  margin: 0 auto;
  width: 80%;
}
.sectionsimulator .quest:first-of-type {
  margin: 13.043vw auto 0;
}
.sectionsimulator .quest {
  width: 72.705vw;
  margin: 9.42vw auto 0;
}
.sectionsimulator .p1 {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 4.831vw;
  line-height: 6.522vw;
  letter-spacing: 0.02em;
  color: #040404;
  margin: 0 0 4.106vw;
} 
.sectionsimulator .p1 span{
    color: green;
    font-size: 3.65vw;
  }
.sectionsimulator .bor1 {
  border: 0.242vw solid #000000;
  border-radius: 2.415vw;
  overflow: hidden;
}
.sectionsimulator .inp2 p {
    margin: 0;
    cursor: pointer;
    font-size: .9vw;
    padding: .4vw;
    font-family: "Plus Jakarta Sans";
    transition: .5s;
}
.sectionsimulator .inp2 p:hover {
    background-color: #d0d0d0;
}
.sectionsimulator .inp2 {
    position: absolute;
    width: 24vw;
    background-color: white;
}




.sectionsimulator .inp1 {
    display: flex;
    align-items: center;
  width: 72.705vw;
  height: 15.7vw;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-size: 4.348vw;
  line-height: 6.522vw;
  font-weight: 500;
  text-indent: 5.314vw;
}
.sectionsimulator .inp1::placeholder {
  font-style: italic;
}
.sectionsimulator .opt1 {
  width: 100%;
  height: 15.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-size: 4.348vw;
  line-height: 6.522vw;
  font-weight: 500;
  transition: 0.5s;
  cursor: pointer;
}
.sectionsimulator .opt1:first-of-type {
  border-bottom: 0.01vw solid black;
}
.sectionsimulator .opt2 {
  width: 36.7vw;
  height: 15.7vw;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-size: 4.348vw;
  line-height: 6.522vw;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
}
.sectionsimulator .opt1.blk,
.sectionsimulator .opt2.blk,
.sectionsimulator .opt1:hover,
.sectionsimulator .opt2:hover {
  background: black;
  color: white;
}
.sectionsimulator .opt2:nth-child(1) {
  border-right: 0.01vw solid black;
  border-bottom: 0.01vw solid black;
}
.sectionsimulator .opt2:nth-child(2) {
  border-bottom: 0.01vw solid black;
}
.sectionsimulator .opt2:nth-child(3) {
  border-right: 0.01vw solid black;
}
.sectionsimulator .grid1 {
  display: flex;
  flex-wrap: wrap;
}
.sectionsimulator .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67.845vw;
  height: 14.324vw;
  border: 2.415vw solid #057d38;
  border-radius: 4.831vw;
  color: #057d38;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 4.831vw;
  line-height: 90.5%;
  margin: 9.42vw auto;
  cursor: pointer;
}
.sectionsimulator .btn.bloqbtn{
  pointer-events: none;
  opacity: .5;
}
.sectionsimulator .cot-c {
  width: 91.304vw;
  margin: 0 auto 11.594vw;
  background: #f7f7f7;
  border-radius: 4.831vw;
}
.sectionsimulator .cot-c .pd {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12.56vw 7.971vw 5.072vw;
}
.sectionsimulator .cot-c p {
  margin: 0;
  color: #040404;
  font-family: "Plus Jakarta Sans";
  letter-spacing: 0.02em;
}
.sectionsimulator .cot-c .d1 p:first-of-type {
  font-weight: 600;
  font-size: 4.348vw;
  line-height: 6.522vw;
  text-align: center;
}
.sectionsimulator .cot-c .d1 p:nth-child(2) {
  font-weight: 800;
  font-size: 13.285vw;
  line-height: 13.285vw;
  color: #057d38;
}
.sectionsimulator .cot-c p:nth-child(3) {
  font-weight: 600;
  font-size: 3.382vw;
  line-height: 6.522vw;
}
.sectionsimulator .cot-c .hr2 {
  width: 62.56vw;
  height: 0.242vw;
  background-color: black;
  margin: 0 auto 2.899vw;
}
.sectionsimulator .cot-c .adv p {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 3.382vw;
  line-height: 6.522vw;
  text-align: center;
  color: black;
}
/* Seccion Formulario */
.sectionformulario {
  padding-top: 20.77294685990338vw;
  padding-bottom: 17.632850241545896vw;
}
.sectionformulario h2 {
  text-align: left;
  font-family: "Inter";
  font-size: var(--fs-titformmv);
  color: var(--co-titformmv);
  font-weight: 700;
  color: #f7e3db;
  width: 71vw;
  margin: 0 auto 6.560386vw;
}
.sectionformulario p.txt-ctc {
  width: 71%;
  margin: auto;
  font-style: normal;
  font-weight: 400;
  line-height: 111%;
  color: white;
  font-family: var(--font-parrafo);
  font-size: var(--fs-adpformmv);
  line-height: 7.2vw;
  margin-bottom: 10.281vw;
}
.bloqueform {
  width: 71%;
  margin: auto;
}
.inputbf {
  width: 100%;
  height: 14.975845410628018vw;
  margin-bottom: 5.381643vw;
  border: 0.362vw solid transparent;
  text-indent: 5%;
  font-family: "Plus Jakarta Sans";
  font-size: var(--fs-inpformmv);
  color: #1e7e8b;
  border-radius: 8vw;
  background-color: #f7e3db;
  font-weight: 400;
}
.inputbf::placeholder {
  color: #1e7e8b;
  font-weight: 400;
}
.texa {
  width: 100%;
  background-color: #f7e3db;
  margin-bottom: 3.3816425120772946vw;
  border: 0.362vw solid transparent;
  text-indent: 5%;
  padding-top: 5vw;
  font-family: "Plus Jakarta Sans";
  font-size: var(--fs-inpformmv);
  line-height: 4.676328502415459vw;
  color: #1e7e8b;
  height: 29.71vw;
  resize: none;
  border-radius: 8vw;
  font-weight: 400;
}
.texa::placeholder {
  color: #1e7e8b;
  font-weight: 400;
}
.bloqueaviso {
  display: flex;
}
.bloqueaviso .inpcheck {
  width: 3.6231884057971016vw;
  height: 3.6231884057971016vw;
  margin-right: 2.5vw;
  border: 0.1vw solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bloqueaviso .inpcheck .checked {
  background: white;
  width: 3.3231884057971016vw;
  height: 3.3231884057971016vw;
}
.bloqueaviso .txtaviso {
  margin: 0;
  font-family: var(--font-parrafo2);
  font-size: var(--fs-adpformmv);
  color: var(--co-adpform);
  line-height: 7.5724637681159415vw;
  margin-bottom: 9.420289855072465vw;
  width: 70vw;
}
.txtaviso a {
  color: var(--co-linkadpform);
  text-decoration: none;
}
button.btnform {
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
}
.btnform p {
  background: var(--co-btnform);
  color: var(--co-pabtnform);
  text-align: center;
  border: 0.21vw solid var(--co-pabtnform);
  font-family: var(--font-parrafo);
  font-size: var(--fs-pabtnformmv);
  font-weight: 700;
  padding: 7.488vw 0 6.763vw;
  border-radius: 12vw;
  margin: 0;
  transition: 0.5s;
}
.btnform p:hover {
  background: #f7e3db;
  color: #fa8433;
  border: 0.13vw solid #fa8433;
}
.sectionsucursales {
  padding-bottom: 10vw;
}
.bloquesucursales h2 {
  text-align: center;
  color: var(--co-titsucu);
  font-size: var(--fs-titsucumv);
  font-family: var(--font-titulo1);
  margin: 0;
  margin-top: 22.222vw;
  margin-bottom: 20.6458333333333335vw;
  font-weight: 400;
}
.bloquebtnubi {
  text-align: center;
}
.bloquebtnubi a p {
  font-family: var(--font-titulo1);
  color: var(--co-txtbtnsu);
  font-size: var(--fs-txtbtnsumv);
  line-height: 5.386473429951691vw;
  width: 40%;
  margin: auto;
  border: 1px solid #0017c5;
  padding: 4.831vw 20vw 4.831vw 20vw;
  border-radius: 10vw;
  margin-bottom: 19.32367149758454vw;
  transition: 0.5s;
}
.bloquebtnubi a p:hover {
  color: white;
  background-color: #0017c5;
}
.slidepc {
  display: none;
}
.bannermenupc {
  display: none;
}
img.slidemv {
  width: 100%;
}
.Navigator {
  position: fixed;
  padding: 0 0 0 0;
  width: 100%;
  z-index: 599;
}
.sectionservicios .idsecc .hr {
  background: var(--co-hr2seccion);
  border: 0.078vw solid var(--co-hr2seccion);
}
.bloquebanmenu {
  text-align: center;
}
img.bannermenumv {
  width: 95%;
}
.imgpromopc {
  display: none;
}

.F7 {
  width: 68.357vw;
  margin: auto;
}
.Desktop {
  display: none;
}
.F7Content {
  margin-bottom: 24.396135265700483vw;
}
img.F7I1 {
  width: 68.357vw;
  height: 47.58454106280193vw;
  border-radius: 5vw;
  margin-bottom: 10.38647342995169vw;
}
p.F7T1 {
  font-size: 6.280193236714976vw;
  font-weight: 600;
  color: var(--co-titsucu);
  font-family: var(--font-titulo2);
  margin: 0vw;
  margin-bottom: 4.1062801932367154vw;
}
p.F7T2 {
  margin-bottom: 6.1062801932367154vw !important;
  min-height: 11vw;
}
p.F7T {
  font-size: var(--fs-txtsucumv);
  line-height: 4.855072463768116vw;
  font-weight: 400;
  color: var(--co-txtsucu);
  font-family: var(--font-parrafo2);
  margin: 0vw;
  width: 72vw;
}
.F7F3 {
  display: flex;
  width: 68.357vw;
  height: 17.632850241545896vw;
  background-color: var(--fo-btnwhasu);
  border-radius: 12vw;
  align-items: center;
  justify-content: center;
  margin-top: 11.11111111111111vw;
  cursor: pointer;
  transition: 0.5s;
}
.F7F3:hover {
  background-color: var(--color-2);
}
.F7F3 img {
  width: 6.763285024154589vw;
  height: 6.763285024154589vw;
  margin-right: 4.5893719806763285vw;
  filter: brightness(1);
  transition: 0.5s;
}
.F7F3:hover img {
  filter: brightness(10);
}
.F7F3 p {
  font-size: 4.830917874396135vw;
  font-weight: 600;
  font-family: var(--font-parrafo);
  margin: 0vw;
  color: #ffffff;
}
.sectiontiktok {
  background: url(../assets/tiktokfondomv.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  text-align: center;
  padding-bottom: 128vw;
}
.cotik {
  color: var(--co-h53seccion) !important;
}
.sectiontiktok .idsecc .hr {
  background: var(--co-hr3seccion);
  border: 0.078vw solid var(--co-hr3seccion);
}
.flexic .formimg {
  width: 87.198vw;
  margin: 0 0 0 auto;
}
.flexic .formimg.mo {
  display: block;
}
.flexic .formimg.pc {
  display: none;
}
.bloquetiktok h2 {
  color: var(--co-txttik);
  font-family: var(--font-titulo1);
  text-align: center;
  margin: 0;
  margin-top: 19.32367149758454vw;
  margin-bottom: 6.763285024154589vw;
  font-weight: 400 !important;
}
.bloquetiktok img {
  width: 71.98067632850241vw;
  height: auto;
  margin-bottom: 11.83574879227053vw;
}
.bloquetiktok h6 {
  color: var(--co-txttik);
  font-family: var(--font-titulo1);
  font-size: var(--fs-txth5mv);
  width: 60%;
  margin-top: 0;
  margin-bottom: 0;
  margin: auto;
}
.bloquebtntik p {
  color: var(--co-txtbtntik);
  font-family: var(--font-titulo1);
  font-size: var(--fs-btntik);
  background: #ffa400;
  width: fit-content;
  padding: 5.797vw 15.2vw 5.797vw 23.2vw;
  border-radius: 30vw;
  margin: auto;
  margin-top: 7.5vw;
  margin-bottom: 4vw;
  background-image: url("../assets/ttk.svg");
  background-repeat: no-repeat;
  background-size: 5.072vw;
  background-position-y: 5.556vw;
  background-position-x: 13.285vw;
  transition: 0.5s;
}

/*.bloquebtntik p:hover {
  background-color: var(--color-2);
}*/
.placa-v {
  display: none;
}
.modal-container {
  opacity: 1;
  transition: 0.5s;
  position: relative;
  z-index: 1200;
}
.nonemodal {
  opacity: 0;
  pointer-events: none;
}
  p.btn-seem {
    font-weight: 700;
    font-size: 4.348vw;
    line-height: 90.5%;
    color: #FA8F21;
    text-decoration: underline;
    text-decoration-color: #FA8F21; 
    width: fit-content;
    margin: auto;
}
@media (max-width: 1024px) {
  .sectionsimulator .inp2 p { 
    font-size: 5.3vw;
    padding: 2.4vw 6vw; 
}
  .sectionsimulator .bor1{
    width: 72vw;
  }
  .sectionsimulator .opt2{
    border-right: .01vw solid black;
    border-bottom: .01vw solid black;
  }
  .sectionsimulator .grid1 { 
    width: 74vw;
}
  .bloqueqs p.orp.tl {
    font-weight: 700;
    font-size: 4.348vw;
    color: #057d38;
    margin-bottom: 0;
  }

  .section1 .slidemain {
    overflow: hidden;
    height: 177vw;
  }
  .sectionsucursales {
    padding-bottom: 0;
  }
  .mapcont {
    width: 100%;
    height: 78.744vw;
  }
  .videoc {
    margin-top: 20.773vw;
  }
  .btnvi {
    position: absolute;
    width: 36.473vw;
  }

  .sectionredes .idsecc {
    width: fit-content;
  }
  .sectionredes .col1f.dos {
    display: none;
  }
  /*.filanosotros .idsecc {
    display: flex;
    width: 55%;
    margin: 0 auto 0 13.043vw;
    padding-top: 14.492753623188406vw;
  }*/
  .bloquepromo .contpc {
    display: none;
  }
  .bloquepromo .contmo {
    display: flex;
  }
  .btnig h5 {
    position: relative;
    left: 5vw;
    font-weight: 700;
  }
  div#Home {
    width: 100%;
    overflow: hidden;
  }
  .menu-pc {
    display: none;
  }
  .menu-mo {
    display: block;
  }

  .img3br,
  .img4br {
    margin-bottom: 0 !important;
  }
  .menu-p .nota {
    margin: 4.3vw 0 !important;
  }
  :deep(.menu-p .nota > p) {
    font-size: 4.348vw !important;
    line-height: 5.3vw;
  }
  .sectionbanner8 {
    display: flex;
    height: auto;
  }
  .flexic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bloquetiktok h6 {
    margin: auto auto 12.493vw;
    font-weight: 400 !important;
  }
  .menu-p p.subc {
    font-style: normal;
    font-weight: 400;
    font-size: 4.348vw;
    line-height: 111%;
    color: #8e8e8e;
    text-align: center;
  }
  .section1 .col2-qs {
    display: grid;
  }
  .col1-qs .btnvi {
    display: none;
  }
  .sectionformulario .titform.pc {
    display: none;
  }
  .sectionformulario .titform.mo {
    display: block;
  }
}

:deep(.menu-p .nota > p span) {
  font-weight: 700;
  color: #02a550;
}
.videoc {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 1024px) { 
  .subservicios br {
    display: none;
  }
  .fs3 {
    font-size: var(--fs-p2noso2) !important;
  }
  .sectionformulario .titform.pc {
    display: block;
  }
  .sectionformulario .titform.mo {
    display: none;
  }
  /*SIMULATOR*/
  .sectionsimulator .tl {
    font-size: 2.865vw;
    line-height: 90.5%;
    margin: 7.344vw auto 2.396vw;
  }
  .sectionsimulator .sbtl {
    font-size: 0.938vw;
    line-height: 1.406vw;
  }
  .sectionsimulator .quest:first-of-type {
    margin: 0 auto 3.542vw;
  }
  .sectionsimulator .p1 {
    font-size: 0.938vw;
    line-height: 1.406vw;
    margin: 0 0 0.885vw;
  }
  .sectionsimulator .p1 span{
    color: green;
    font-size: .65vw;
  }
  .sectionsimulator .quest {
    width: 24.375vw;
    margin: 0 auto 2.396vw;
  }
  .sectionsimulator .inp1 {
    width: 24.0375vw;
    height: 2.344vw;
    font-size: 0.833vw;
    line-height: 1.406vw;
    border-radius: 0.521vw;
    text-indent: 1.314vw;
    padding: 0;
  }
  .sectionsimulator .opt1 {
    width: 50%;
    height: 2.344vw;
    font-size: 0.833vw;
    line-height: 1.406vw;
  }
  .sectionsimulator .quest .bor1 {
    border-radius: 0.521vw;
    overflow: hidden;
    width: 24.375vw;
  }
  .sectionsimulator .grid1{ 
    width: 25vw;
  }
  .sectionsimulator .quest.due .bor1 {
    display: flex;
  }
  .sectionsimulator .opt1:first-of-type {
    border-right: 0.01vw solid black;
    border-bottom: 0;
  }
  .sectionsimulator .opt2 {
    font-size: 0.833vw;
    line-height: 1.406vw;
  }
  .sectionsimulator .opt2 {
    width: 6.04vw;
    height: 2.344vw;
    border-bottom: 0.01vw solid black;
  }
  .sectionsimulator .opt2:nth-child(2) {
    border-right: 0.01vw solid black; 
  }
  .sectionsimulator .opt2.brtl {
    border-top: 0.1vw solid black;
    border-right: 0.1vw solid black;
}
  .sectionsimulator .btn {
    width: 12.845vw;
    height: 2.324vw;
    font-size: 1.042vw;
    line-height: 90.5%;
    border: 0.521vw solid #057d38;
    border-radius: 0.521vw;
    margin: 2.042vw 0 0;
    transition:.5s;
  }
  .sectionsimulator .btn:hover{
    background-color:#057d38;
    color: white;
  }
  .sectionsimulator .cot-c p {
    margin: 1vw 0 0;
  }
  .sectionsimulator .cot-c .pd {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.854vw 1.406vw 1.198vw;
  }
  .sectionsimulator .cot-c .d1 p:first-of-type {
    font-size: 0.938vw;
    line-height: 1.406vw;
    text-align: left;
  }
  .sectionsimulator .cot-c .d1 p:nth-child(2) {
    font-size: 1.563vw;
    line-height: 1.406vw;
    margin-left: 1.6vw;
  }
  .sectionsimulator .d1 {
    display: flex;
  }
  .sectionsimulator .cot-c {
    width: 32.292vw;
    border-radius: 1.042vw;
    margin-left: 3.906vw;
  }
  .sectionsimulator .tlhdr {
    margin-bottom: 3.542vw;
  }
  .sectionsimulator .dflxc {
    display: flex;
    justify-content: center;
    margin-bottom: 6vw;
  }
  .sectionsimulator .cot-c .hr2 {
    width: 100%;
    height: 0.042vw;
    background-color: black;
    margin: 2vw auto 0.399vw;
  }
  .sectionsimulator .adv {
    width: 100%;
  }
  .sectionsimulator .cot-c .adv p {
    font-size: 0.521vw;
    line-height: 1.406vw;
  }
  .cartbtn {
    width: 2.344vw;
    height: 2.061vw;
    background-image: url("../assets/cart.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: 0.5s;
  }
  .cartbtn:hover {
    background-image: url("../assets/cartylw.svg");
  }
  .ylw {
    background-image: url("../assets/cartylw.svg");
  }
  .mapcont {
    width: 100%;
    height: 26.875vw;
  }
  .videoc {
    display: none;
  }
  .sectiontiktok .idsecc {
    display: none;
  }

  .bloquepromo .contpc {
    display: flex;
  }
  .bloquepromo .contmo {
    display: none;
  }
  .menu-p .imgtxt-c {
    display: flex;
  }
  .menu-p .txt-c {
    width: auto;
    padding-left: 0.885vw;
  }
  .menu-p .product-img {
    width: 4.479vw;
    height: 4.479vw;
  }
  .menu-p p.subc {
    font-weight: 500;
    color: #8e8e8e;
    font-family: var(--font-parrafo2);
  }
  .cat-it .nota p {
    margin-top: 1vw;
  }
  :deep(.menu-p .nota > p) {
    font-size: 0.7vw;
    line-height: 0.94vw;
    color: gray;
    margin-top: 0.6vw;
  }
  .menu-p .menu-list {
    width: 55vw;
    margin: 4.271vw 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .menu-p p.subc {
    font-size: 0.833vw;
    line-height: 1.133vw;
    padding: 0.885vw 0 2.474vw;
  }
  .menu-p .cart {
    width: 2.474vw;
    height: 2.061vw;
    transition: 0.5s;
    cursor: pointer;
    filter: invert(24%) sepia(97%) saturate(1382%) hue-rotate(191deg)
      brightness(97%) contrast(108%);
  }
  .menu-p .cart.ylw {
    filter: invert(66%) sepia(49%) saturate(2801%) hue-rotate(0deg)
      brightness(103%) contrast(104%);
  }

  .menu-p .cart:hover {
    filter: invert(66%) sepia(49%) saturate(2801%) hue-rotate(0deg)
      brightness(103%) contrast(104%);
  }
  .cat-it {
    display: flex;
  }
  /*.cat-it.catflex {
    justify-content: space-between;
  }*/
  .cat-it .tl {
    font-family: var(--font-titulo1);
    font-style: normal;
    font-weight: 800;
    font-size: 2.083vw;
    line-height: 90.5%;
    color: #c5c5c5;
    cursor: pointer;
    margin: 0 4.302vw 1.2vw 0;
    transition: 0.5s;
  }
  .cat-it .tl:hover {
    color: var(--c-cathover-menu) !important;
  }
  .cat-it .tl.act {
    color: var(--c-cathover-menu) !important;
  }
  .cat-it .sublist {
    display: flex;
    width: 100%;
  }
  .cat-it .sublist .stl {
    font-family: var(--font-titulo1);
    font-style: normal;
    font-weight: 800;
    font-size: 1.042vw;
    line-height: 90.5%;
    margin: 0 3.8vw 0 0;
    color: #c5c5c5;
    cursor: pointer;
    transition: 0.5s;
  }
  .cat-it .sublist .stl:hover {
    color: #fdcd0a !important;
  }
  .cat-it .sublist .stl.act {
    color: #fdcd0a !important;
  }
  .menu-pc {
    display: block;
    width: 100%;
  }
  .menu-mo {
    display: none;
  }
  .F7 {
    width: 70vw;
  }

  .Mobil {
    display: none;
  }
  .Desktop {
    display: flex !important;
    flex-flow: wrap;
    justify-content: space-between;
  }

  .F7Content {
    width: 19.010416666666664vw;
    margin-bottom: 8.59375vw;
    transform: scale(1);
    transition: 0.5s;
    margin-right: 7.083333333333333vw;
  }
  .F7Content:hover {
    transform: scale(1.05);
  }
  img.F7I1 {
    width: 19.739583333333332vw;
    height: 13.750000000000002vw;
    border-radius: 1.08vw;
    margin-bottom: 3.75vw;
  }
  p.F7T1 {
    font-size: 1.3541666666666667vw;
    margin-bottom: 0.8854166666666666vw;
  }
  p.F7T {
    font-size: 0.9375vw;
    line-height: 1.25625vw;
    width: auto;
  }
  p.F7T2 {
    margin-bottom: 2vw !important;
    min-height: 1.56vw;
  }

  .F7F3 {
    width: 15.729166666666666vw;
    height: 3.802vw;
    margin-top: 2.083333333333333vw;
  }
  .F7F3 img {
    width: 1.4583333333333333vw;
    height: 1.4583333333333333vw;
    margin-right: 0.9895833333333333vw;
  }
  .F7F3 p {
    font-size: 0.98vw;
  }

  .pc {
    display: block;
  }
  .mo {
    display: none;
  }
  /* Cambiar fondo Seccion 1 aqui */
  .section1 {
    background-image: url(../assets/fondos1.svg);
    background-size: cover;
    background: none !important;
  }
  .Navigator {
    position: fixed;
    padding: 0 0 0 0;
    width: 100%;
    z-index: 599;
  }
  .slidepc {
    display: block;
  }
  .slidemv {
    display: none;
  }
  .slidemain img {
    width: 100%;
    cursor: grab;
  }
  .filanosotros {
    background: url(../assets/bknos.png);
    background-color: #005cb9;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 0vw;
    margin-top: 0;
  }
  .bloqueqs .mb2 {
    margin-bottom: 1.54vw;
  }
  .bloqueqs .w50qs {
    width: 18.698vw;
  }
  .bloqueqs .nos1 {
    width: 17.288vw;
    margin: 3.021vw 0 4.662vw;
  }
  .filanosotros .mt3 {
    margin: 3.021vw 0 0;
  }
  .bloqueqs .nos1.mo {
    display: none;
  }
  .bloqueqs .nos1.pc {
    display: block;
  }
  .bannermenupc {
    display: block;
  }
  .bannermenumv {
    display: none;
  }
  .filabanner {
    text-align: left;
    margin: auto;
  }
  .bannermv {
    display: none;
  }
  .bannerpc {
    display: block;
    width: 89.73958333333333vw;
    height: 38.4375vw;
    margin: auto;
  }
  .imgqs1pc {
    display: block;
  }
  .imgqs1mv {
    display: none;
  }
  .idsecc {
    display: flex;
    width: 13%;
    margin: auto;
    padding-top: 4.74vw;
  }
  .idsecc h5 {
    font-size: var(--fs-idseccionpc);
    margin: 0;
  }
  .idsecc .hr {
    width: 3.229166666666667vw;
    background: var(--co-hr1seccion);
    border: 0.078vw solid var(--co-hr1seccion);
    margin-top: 0.35vw;
    height: 0.01vw;
    margin-left: 1.3vw;
    margin-right: 1.3vw;
  }
  /*.filanosotros .idsecc {
    display: flex;
    width: 13%;
    margin: 0 auto 0 56vw;
    padding-top: 4.688vw;
  }*/
  .bloqueqs {
    padding-top: 8.125vw;
    padding-bottom: 11.51vw;
    display: flex;
    /* background-image: url("../assets/huevitos.png");
    background-size: 32.917vw;
    background-repeat: no-repeat;
    background-position-x: 60.625vw;
    background-position-y: 29.375vw;*/
  }
  .col1-qs {
    width: 39.969vw;
    display: flex;
    flex-direction: column;
    background-image: url("../assets/bk1pc2.png");
    background-repeat: no-repeat;
    background-size: 0.938vw 24.167vw;
    background-position-y: 6.25vw;
    margin-left: 11.979vw;
  }
  .btnvi {
    width: 11.615vw;
    cursor: pointer;
  }
  .imgqs1pc {
    width: 37.135416666666664vw;
    height: 35.989583333333336vw;
  }
  .col2-qs {
    width: 36.1896vw;
    padding-top: 7.917vw;
    padding-left: 6.406vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .bloqueqs p.orp {
    font-weight: 400;
  }
  .bloqueqs .col1-qs p.orp {
    padding-left: 3.854vw;
  }
  .bloqueqs p.orp.tl {
    font-weight: 700;
    color: #057d38;
    margin-bottom: 0;
  }
  .bloqueqs h2 {
    padding-top: 0;
    font-size: var(--fs-t1noso);
    color: var(--co-t1noso);
    text-align: left;
    line-height: 2.3567708333333335vw;
    margin-bottom: 2.604vw;
    margin: 0 auto 5.313vw 0;
    padding-left: 0;
    width: auto;
  }
  .bloqueqs h4 {
    margin: 0;
    font-size: var(--fs-p1noso);
    line-height: 1.203125vw;
    margin-bottom: 3vw;
    margin-left: 4vw;
    width: 74%;
  }
  .bloqueqs p {
    font-size: var(--fs-p2noso);
    margin: 0;
    width: auto;
    /*width: 79%;*/
    line-height: 1.406vw;
    margin-left: 0vw;
    margin-bottom: 0.99vw;
    text-align: left;
    letter-spacing: 0.01em;
  }
  .bloqueqs p:last-child {
    margin-left: 0vw;
  }
  .bloqueqs .col1-qs p {
    font-size: 0.938vw;
  }
  /* Seccion Servicios */
  .titservicios {
    margin-top: 8.75vw;
    margin-bottom: 4.271vw;
    font-size: var(--fs-t1serv);
    letter-spacing: 0.01em;
    line-height: 3.440625vw;
    font-weight: 800;
  }
  .subservicios {
    font-size: var(--fs-t2serv);
    font-weight: 600;
    line-height: 1.2406250000000001vw;
    margin: auto !important;
    margin-top: 1.54166666666665vw !important;
    text-align: center;
    width: 43% !important;
  }
  .slideservicios {
    display: flex;
    width: 60%;
    margin: auto;
    margin-top: 7.656250000000001vw;
    padding-bottom: 3.427vw;
    height: fit-content !important;
  }
  .sectionservicios .serv-item {
    width: 11.406vw;
    /*margin: 0 1.823vw;*/
    margin: 0 auto;
  }
  .sectionservicios .tl {
    font-size: 1.042vw;
    margin: 2.031vw auto 0;
    width: 9vw;
  }
  :deep(.sectionservicios .stl p) {
    font-size: 0.729vw;
    line-height: 1.238vw;
    width: 100%;
    margin: 0.938vw auto;
    font-weight: 400;
    color: var(--co-t2servpc);
  }
  .sectionservicios .dir-c .stl {
    width: 95%;
    margin: 0.938vw auto 0;
    font-size: 0.938vw;
    color: var(--co-t2serv);
  }
  .sectionservicios .dir-c .stl.tl2 {
    color: var(--co-t2serv);
  }
  .sectionservicios a.btn div {
    border: 0.1vw solid var(--co-third);
    color: var(--co-third);
    /*padding: 1.094vw 0;*/
    padding: 1.719vw 0;
    text-align: center;
    border-radius: 100vw;
    font-weight: 800;
    font-size: 0.729vw;
  }
  .sectionservicios .servs-c {
    padding-bottom: 9.427vw;
    display: flex;
    justify-content: center;
  }
  .sectionservicios .servs-c.mo {
    display: none;
  }
  .sectionservicios .servs-c.pc {
    display: flex;
  }
  .sectionservicios .dir-c .tl {
    font-size: 1.354vw;
    font-family: sans-serif;
  }
  .sectionservicios .dir-c a.btn {
    width: 23.542vw;
  }
  .sectionservicios .dir-c a.btn div {
    font-size: 1.042vw;
  }
  .sectionservicios .dir-c .serv-item img {
    width: 10.521vw;
  }
  .sectionservicios .servs-c.dir-c {
    width: 83.546vw;
    margin-top: 6.667vw;
    flex-direction: column;
    align-items: center;
  }
  .sectionservicios .servs-c.dir-c .cdflx {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  .sectionservicios .dir-c .serv-item {
    width: 19.74vw;
    margin: 0 3.281vw 9.792vw;
  }
  .bloqueservicio img {
    width: 11.354166666666666vw;
    height: 11.354166666666666vw;
  }
  .bloqueservicio h3 {
    font-size: var(--fs-h3serv);
    line-height: 1.0984375vw;
    width: 60%;
    margin: auto;
    margin-top: 0.9375vw;
  }
  .bloqueservicio p {
    text-align: left;
    width: 80%;
    margin: auto;
    margin-top: 0.9375vw;
    font-size: var(--fs-pserv);
    color: var(--co-pserv);
    /*margin-bottom: 5.314009661835748vw;*/
    line-height: 0.8093750000000001vw;
  }
  .bloquebanmenu {
    text-align: center;
  }
  .bannermenupc {
    width: 61.82291666666667vw;
    height: 21.624479166666667vw;
    padding-top: 7.604vw;
    margin: auto;
  }
  .bloquevermas {
    display: none;
  }
  /* Seccion Contacto */
  .col1-s3 {
    display: block;
  }
  .mapamv {
    display: none;
  }

  .col1-s3 {
    width: 42%;
  }
  .col2-s3 {
    width: 58%;
    padding-left: 8.333333333333332vw;
  }
  .sectioncontacto .idsecc {
    margin: auto;
    width: 12%;
  }
  .sectioncontacto .titc1 {
    margin-top: 9.270833333333334vw;
    font-size: var(--fs-titconta1);
    line-height: 2.5921875vw;
    text-align: left;
  }
  .sectioncontacto .titc2 {
    font-size: var(--fs-titconta);
    line-height: 2.5921875vw;
    text-align: left;
  }
  .sectioncontacto h4 {
    text-align: left;
    font-size: var(--fs-subconta);
    font-weight: 400;
    width: auto;
    margin-top: 1.4583333333333333vw;
    line-height: 1.203125vw;
    margin-left: 4vw;
  }
  .filadacon {
    display: flex;
    margin-top: 2.604166666666667vw;
    margin-left: 4vw;
  }
  .col1-dc,
  .col2-dc,
  .filadaubi {
    display: flex;
  }
  .col2-du {
    margin-top: 1.8vw;
  }

  .filadacon img,
  .filadaubi img {
    width: 4.427083333333334vw;
    height: 4.427083333333334vw;
    margin-right: 1.5625vw;
  }
  .filadacon p {
    font-size: var(--fs-paconta);
    font-weight: 400;
    margin: 0;
    margin-top: 1.8vw;
    margin-bottom: 2vw;
    margin-right: 3vw;
  }
  .filadaubi {
    margin-left: 4vw;
    margin-top: 1.875vw;
  }
  .filadaubi p {
    font-size: var(--fs-paconta);
    margin: 0;
    line-height: 1.36231884057971vw;
    text-align: left;
  }
  .direubi {
    width: 50%;
    margin: 0 !important;
    margin-bottom: 2vw !important;
  }
  /* */
  .bloquepromo {
    height: 21.9vw;
    overflow: hidden;
  }
  .bloquepromo img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
  }
  /* Seccion siguenos */
  .sectionredes .idsecc {
    padding-top: 4.479166666666667vw;
  }
  .sectionredes h2 {
    font-size: var(--fs-titsig);
    width: auto;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 2.5520833333333335vw;
    text-align: left;
  }
  .sectionredes .txtredes {
    font-size: var(--fs-txtsig);
    width: 35%;
    font-weight: 400;
    line-height: 1.1979166666666667vw;
    margin-bottom: 3.073vw;
  }
  .fila-br .fbr {
    width: 14.604vw;
    height: 14.604vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin-bottom: 0;
  }
  .fila-br img {
    width: 14.604vw;
    height: 14.604vw;
    transition: 0.5s;
  }
  .fila-br .fbr:hover img {
    width: 16.802083333333334vw;
    height: 16.802083333333334vw;
  }
  .img2br,
  .img3br {
    margin-left: 0;
  }
  .fila-br {
    width: fit-content;
    /*width: 70%;
    margin-bottom: 3.0208333333333335vw;*/
    margin: auto;
    margin-bottom: 0;
    flex-wrap: nowrap;
  }
  .col1f .fila-br {
    display: flex;
    width: 30.833vw;
    height: 30.729vw;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .col1f .micro1 {
    margin-left: 4.604vw;
    width: 26.979vw;
  }
  .sectionredes {
    background-color: #f7e3db;
    background-image: url(../assets/bksm.png);
    background-size: cover;
    /*background-image: url("../assets/lefonde2.png");
    background-position-y: bottom;
    background-size: 100%;
    background-repeat: no-repeat;*/
    padding-bottom: 11.615vw;
  }
  .bloqueredes {
    padding-left: 0vw;
    margin-top: 5.521vw;
  }
  .bloquebtnig {
    display: flex;
  }
  .bloqueredes a {
    margin: 4.688vw auto 0 0;
    width: 18.229vw;
  }
  .bloqueredes .pd {
    display: flex;
    justify-content: center;
  }
  .btnig {
    display: flex;
    background-image: url(../assets/logoig.svg);
    background-size: 1.1989583333333333vw 1.2171875vw;
    background-repeat: no-repeat;
    background-position-x: 9%;
    background-position-y: 50%;
    text-align: center;
    width: 100%;
    margin: 0;
    border-radius: 1.05vw;
    border-width: 0.15vw;
  }
  .btnig:hover {
    background-color: #057d38;
    background-image: url(../assets/logoig.svg);
    background-size: 1.1989583333333333vw 1.2171875vw;
    background-repeat: no-repeat;
    background-position-x: 9%;
    background-position-y: 50%;
    border: 0.2vw solid #057d38;
  }
  .btnig h5 {
    width: 100%;
    text-align: center;
    font-size: var(--fs-btnig);
    line-height: 1.5vw;
    margin: 0;
    margin-top: 1.04vw;
    /* margin-top: 0.9770833333333334vw; */
    margin-bottom: 1.094vw;
    position: relative;
    left: 0.8vw;
    transition: 0.5s;
  }
  .btnig:hover h5 {
    color: #f7e3db !important;
  }
  .imgban2pc {
    display: block;
    width: 100%;
    height: 22.083333333333332vw;
  }
  .imgban2mv {
    display: none;
  }
  /* Seccion Formulario */
  .sectionformulario {
    /*padding-top: 8.072916666666668vw;*/
    width: 29.01vw;
    padding-top: 0;
    padding-bottom: 5.989583333333334vw;
    margin-right: 4.531vw;
    margin-top: 5.521vw;
  }
  .sectionformulario h2 {
    font-size: var(--fs-titform);
    font-family: "Plus Jakarta Sans";

    margin: 0;
    margin-bottom: 1.823vw;
    font-weight: 700;
    line-height: 90.5%;
    text-align: left;
  }
  .sectioncontacto .flexic {
    display: flex;
    /*margin: 8.802vw auto 0;*/
    margin: 0 0 0 auto;
    width: 86.198vw;
  }
  .flexic .formimg {
    width: 52.188vw;
    height: 40.208vw;
  }
  .flexic .formimg.mo {
    display: none;
  }
  .flexic .formimg.pc {
    display: block;
    margin-top: 4.531vw;
  }
  .bloqueform {
    width: 29.01vw;
    margin: 0;
  }
  .inputbf {
    width: 100%;
    height: 3.229vw;
    margin-bottom: 0.729vw;
    border: 0.078vw solid transparent;
    text-indent: 3.5%;
    font-size: var(--fs-inpform);
    padding: 0;
  }
  .inputname {
    width: 100%;
    margin-right: 1.4583333333333333vw;
  }
  .inputnumber {
    width: 100%;
    margin-right: 1.4583333333333333vw;
  }
  .inputemail {
    width: 100%;
  }
  .texa {
    width: 100%;
    height: 5vw;
    margin-bottom: 1.146vw;
    border: 0.078vw solid #ffc700;
    text-indent: 3.5%;
    padding-top: 1.406vw;
    padding-left: 0;
    font-size: var(--fs-inpform);
    line-height: 1.0083333333333333vw;
    border-radius: 2vw;
  }
  .bloqueaviso {
    width: 100%;
    margin-bottom: 2.552vw;
    align-items: center;
  }
  .bloqueaviso .inpcheck {
    width: 0.8333333333333334vw;
    height: 0.8333333333333334vw;
    margin-right: 0.6770833333333334vw;
  }
  .bloqueaviso .inpcheck .checked {
    background: white;
    width: 0.5333333333333334vw;
    height: 0.5333333333333334vw;
  }
  .bloqueaviso .txtaviso {
    margin: 0;
    font-size: var(--fs-adpform);
    line-height: 1.2703125000000002vw;
    margin-bottom: 0vw;
    width: auto;
  }
  .ad-btn {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  button.btnform {
    width: 100%;
    border: none;
    background: transparent;
  }
  .btnform p {
    text-align: center;
    font-size: var(--fs-pabtnform);
    font-weight: 700;
    padding: 1.1979166666666667vw 0;
    border-radius: 12vw;
    border: 0.13vw solid var(--co-pabtnform);
  }
  .bloquesucursales h2 {
    text-align: center;
    font-size: var(--fs-titsucu);
    margin-top: 7.552vw;
    margin-bottom: 2.864583333333333vw;
  }

  .imgpromomv {
    display: none;
  }
  .imgpromopc {
    display: block;
  }
  .bloquebtnubi {
    width: 30%;
    margin: auto;
  }
  .bloquebtnubi a p {
    font-size: var(--fs-txtbtnsu);
    line-height: 0.9427083333333334vw;
    width: 100%;
    margin: auto;
    border: 0.104vw solid #0017c5;
    padding: 2vw 0vw 2vw 0vw;
    border-radius: 7vw;
    margin-bottom: 6.822916666666666vw;
    cursor: pointer;
  }

  /***ajustes de carreta verde */
  .adjust {
    background-color: white;
  }

  .sectiontiktok {
    background: url("../assets/tiktokfondopc.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    text-align: center;
    padding-bottom: 10vw;
  }
  .bloquetiktok {
    display: flex;
    justify-content: space-between;
    width: 87.135vw;
    margin: 0 auto 0 4.115vw;
  }
  .bloquetiktok h2 {
    color: var(--co-txttik);
    font-family: var(--font-titulo1);
    text-align: center;
    margin: 0;
    margin-top: 13.281vw;
    margin-bottom: 1.763285024154589vw;
  }
  .bloquetiktok img {
    width: 28.906vw;
    height: auto;
    margin-bottom: 1.83574879227053vw;
  }
  .bloquetiktok h6 {
    color: var(--co-txttik);
    font-family: var(--font-titulo1);
    font-size: var(--fs-txth5);
    width: 25.677vw;
    margin-top: 14.479vw !important;
    margin-bottom: 0;
    margin: auto;
  }
  .bloquebtntik p {
    /*color: var(--co-txtbtntik);*/
    color: var(--co-txtbtntikpc);
    font-family: var(--font-titulo1);
    font-size: 1.042vw;
    background: #005cb9;
    width: fit-content;
    padding: 1.198vw 3.448vw 1.198vw 4.648vw;
    border-radius: 30vw;
    margin: auto;
    margin-top: 1.771vw;
    margin-bottom: 0;
    line-height: 1.563vw;
    background-image: url("../assets/ttk2.svg");
    background-repeat: no-repeat;
    background-size: 1.094vw;
    background-position-y: 1.294vw;
    background-position-x: 2.865vw;
    transition: 0.5s;
  }
  .bloquebtntik p:hover {
    background: #ffa400;
    color: #005cb9;
    background-image: url("../assets/ttk.svg");
    background-repeat: no-repeat;
    background-size: 1.094vw;
    background-position-y: 1.294vw;
    background-position-x: 2.865vw;
  }
  .sectionformulario p.txt-ctc {
    font-size: 1.042vw;
    line-height: 111%;
    width: 100%;
    margin-bottom: 3.281vw;
    color: #f7e3db;
  }
  .placa-v {
    position: absolute;
    margin-top: -14.271vw;
    right: 0;
    width: 11.823vw;
    display: block;
  }
  .sectionsucursales .matriz-cont {
    padding-top: 6.719vw;
  }
  .sectionsucursales .matriz-cont .tl {
    font-size: 2.865vw;
    font-family: var(--font-txtcon);
    line-height: 90.5%;
    font-weight: 700;
  }
  .sectionsucursales .matriz-cont p.subtl {
    font-size: 1.042vw;
    line-height: 115.5%;
    width: 34.115vw;
    margin: 4.583vw 0 6.406vw;
  }
  .sectionsucursales .matriz-cont .item {
    margin-bottom: 5.208vw;
  }
  .sectionsucursales .matriz-cont .item img {
    width: 5.208vw;
    height: 5.208vw;
    margin-bottom: 2.76vw;
  }
  .sectionsucursales .matriz-cont .item p,
  .sectionsucursales .matriz-cont .item a {
    font-size: 0.938vw;
    line-height: 111%;
    margin-bottom: 0;
  }
  .sectionsucursales .matriz-cont .threeitems {
    width: 53.854vw;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
  }
  .sectionsucursales .matriz-cont .item.two {
    width: 20.677vw;
  }
  .sectionsucursales {
    padding-bottom: 0;
  }
  .filanosotros .idsecc {
    display: none;
  }
  .col1f.dos {
    display: block;
  }
}
</style>
