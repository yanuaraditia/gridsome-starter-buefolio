<template>
  <div class="wrapper mt-5">
    <Header></Header>
    <slot/>
    <div class="liner"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
export default {
  components: {
    Header,
    Footer,
  }
}
</script>