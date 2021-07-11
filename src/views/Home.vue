<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer
  },
  async created(){
    await this.$store.commit('getCountryByGeolocation');
    await this.$store.commit("load");
    await this.$store.commit("fillData");
  }
};
</script>

