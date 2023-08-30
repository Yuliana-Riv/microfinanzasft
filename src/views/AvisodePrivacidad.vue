<template>
    <div class="Terms">
      <Navigator />
      <div class="bodytyc">
        <div class="tituloc">
          <p class="t">Aviso de Privacidad</p>
        </div>
        <div class="sectxt">
          <p>
            MICROFINANZAS FINANCIERA POPULAR SON mejor conocido como MICROFINANZAS, con domicilio en CALLE DE LOS JARDINES 17, COLONIA VALLE ESCONDIDO. HERMOSILLO, SONORA. y portal de internet https://microfinanzas.com.mx/, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
          </p>
          <p>
            En algunos casos, será necesario que el usuario realice un registro, con ingreso de datos personales fidedignos y definición de una contraseña.
          </p>
          <p><b>¿Para qué fines utilizaremos sus datos personales?</b></p>
          <p>
            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
          </p>
          <p>
            Respuesta a mensajes del formulario de contacto, Prestación de cualquier servicio solicitado
          </p>
          <p><b>¿Qué datos personales utilizaremos para estos fines?</b></p>
          <p>
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
          </p>
          <p>
            Datos de identificación y contacto, Datos patrimoniales y/o financieros
          </p>
          <p><b>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?</b></p>
          <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO. Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a microfinanzasson@hotmail.com y deberá contener:</p>
          <ul class="lista-arco">
           <li>Nombre completo del titular.</li>
           <li>Domicilio.</li>
           <li>Teléfono.</li>
           <li>Correo electrónico usado en este sitio web.</li>
           <li>Copia de una identificación oficial adjunta.</li>
           <li>Asunto «Derechos ARCO»</li> 
          </ul>
          <p>Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</p>
          <p><b>¿En cuántos días le daremos respuesta a su solicitud?</b></p>
          <p>
            20 días
          </p>
          <p><b>¿Por qué medio le comunicaremos la respuesta a su solicitud?</b></p>
          <p>
            contacto@microfinanzas.com.mx
          </p>
          <p><b>El uso de tecnologías de rastreo en nuestro portal de internet</b></p>
          <p>
            Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
          </p>
          <p>
            Idioma preferido por el usuario, Región en la que se encuentra el usuario, Tipo de navegador del usuario, Tipo de sistema operativo del usuario, Fecha y hora del inicio y final de una sesión de un usuario, Páginas web visitadas por un usuario, Búsquedas realizadas por un usuario, Publicidad revisada por un usuario, Listas y hábitos de consumo en páginas de compras.
          </p>
          <p>
            Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.
          </p>
          <p><b>¿Cómo puede conocer los cambios en este aviso de privacidad?</b></p>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web https://microfinanzas.com.mx/.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  <script>
  import Navigator from "../components/Navigator";
  import Footer from "../components/Footer";
  export default {
    name: "Aviso",
    components: {
      Navigator,
      Footer,
    },
    metaInfo() {
      return {
        title: "Aviso de privacidad",
        titleTemplate: "%s | Microfinanzas",
        htmlAttrs: {
          lang: "es",
        },
        meta: [
          { charset: "utf-8" },
          {
            name: "description",
            content: "Microfinanzas.",
          },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
      };
    },
  };
  </script>
  <style>
  p {
    margin: 0;
  }
  a {
    font-weight: 500;
  }
  .bodytyc {
    padding: 36.957vw 0 16.184vw;
  }

  .tituloc{
    width: 100vw;
      height:30.6875VW ;
      background: linear-gradient(180deg, #04692F 0%, #114125 100%);
  }
  .tituloc img {
    width: 100%;
  }
  .tituloc .pc {
    display: none;
  }
  .tituloc .mo {
    display: block;
  }
  .tituloc .t {
    font-family: var(--font-titulo1);
    font-weight: 800;
    font-size: 8.454vw;
    line-height: 90.5%;
    text-align: center;
    color: #FFFFFF;
    width: 48.792vw;
    margin: auto;
    padding-top: 7vw;
    font-style: italic;

  }
  .sectxt {
    width: 75.362vw;
    margin: 20.048vw auto 0;
  }
  .sectxt p {
    font-family: var(--font-titulo2);
    font-weight: 400;
    font-size: 5.314vw;
    line-height: 7.971vw;
    margin-bottom: 8vw;
    color: #909090;
  }

  .sectxt li {
    font-family: var(--font-titulo2);
    font-weight: 400;
    font-size: 5.314vw;
    line-height: 7.971vw;
    margin-bottom: 8vw;
    color: #909090;
  }
  @media (min-width: 768px) {
    .bodytyc {
      padding: 17.135vw 0 9.427vw;
    }
    .tituloc .pc {
      display: block;
    }
    .tituloc .mo {
      display: none;
    }
    .tituloc .t {
      width: 100%;
      font-size: 2.864583333333333VW;
      line-height: 90.5%;
      margin-bottom: 4.427vw;
      padding-top: 3.4375000000000004VW;
      text-align: center;
      font-style: italic;
    }
    .sectxt {
      margin: 5.365vw auto 0;

    }
    .sectxt p {
      font-size: 1.042vw;
      line-height: 1.042vw;
      margin-bottom: 1vw;
      
    }

    .sectxt li {
      font-size: 1.042vw;
      line-height: 1.042vw;
      margin-bottom: 1vw;
      
    }

    .tituloc{
      width: 100vw;
      height:9.6875VW ;
      background: linear-gradient(180deg, #04692F 0%, #114125 100%);
    }
  }
  </style>  