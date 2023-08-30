<template>
  <div class="fixedItems">
    <div class="flecha-c" :class="{'opa':scrollthis>100}">
      <a href="#"> ↑ </a>
    </div>
    <!--
    <div class="whatsapp-i">
      <a
        href="https://wa.link/7ha7cd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/wapp.svg" alt="whatsapp" />
      </a>
    </div>-->
  </div>
</template>
<script>
export default {
    data() {
        return {
            scrollthis:0,
        }
    },
    methods: {
        gl(){
        this.scrollthis = localStorage.getItem('scroll')
        }
    },
    mounted() {
    window.addEventListener("scroll", this.gl);
    },
};
</script>
<style scoped>
.fixedItems {
  position: fixed;
  z-index: 1000;
  bottom: 4vw;
  right: 4vw;
}
.whatsapp-i {
  background: rgb(75, 180, 117);
  width: 15vw;
  height: 15vw;
  border-radius: 45vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.whatsapp-i a{
    width: 9vw;
  height: 9vw;
}
.whatsapp-i img {
  width: 100%;
}
.flecha-c{
  opacity: 0;
  pointer-events: none;
  width: 12vw;
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(69, 69, 69, 0.497);
  color: white;
  font-size: 5vw;
  border-radius: 3vw;
  margin: 0 auto 4vw;
  transition: .5s;
}
.opa{
    opacity: 1;
    pointer-events: all;
}
@media (max-width: 768px) {
  .flecha-c{
    display: none;
  }
}
@media (min-width: 768px) {
.fixedItems {
  bottom: 2vw;
  right: 2vw;
}
.whatsapp-i {
    width: 4vw;
    height: 4vw;
}
.flecha-c{
  width: 3vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(69, 69, 69, 0.497);
  color: white;
  font-size: 1.25vw;
  border-radius: 1vw;
    margin: 0 auto 1.6vw;
}
.whatsapp-i a{
    width: 2.5vw;
    height: 2.5vw;
}
.whatsapp-i img {
  width: 100%;
}
}
</style>