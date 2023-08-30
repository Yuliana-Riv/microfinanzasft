<template>
    <div id="Dashboard">
         <SideMenu /> 
        <div class="content_sections">
          <Sections :option="'Default'" />
        
        </div>
    </div>
</template>
<script>

import SideMenu from '../components/SideMenu.vue'
import Sections from '../components/Sections.vue' 


  

export default {
  name: 'Dashboard',
  components:{
    SideMenu,
    Sections
  },
  metaInfo() {
    return {
      title: "Administrador",
      titleTemplate: "%s | Microfinanzas",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Microfinanzas.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
 
}
</script>
<style scoped>
   
   #Dashboard{
     display: flex;
   }

   .content_sections{
     background: var(--color-5);
     min-height: 59.25VW;
     width: 78.17708333333333VW;
     
   }
</style>
