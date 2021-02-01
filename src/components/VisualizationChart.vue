<template>
    <div>
      <button @click="fill()"></button>
      <chart :chart-data="datacollection"></chart>
    </div>
    
</template>
<script>
    import Chart from "@/components/Chart.vue";

    export default {
      components: {
        Chart
      },
      data() {
        return {
          datacollection: null
        };
      },
      mounted() {
        this.fill();
      },
      methods:{
        fill(){
          this.$store.commit('fillData');
          this.datacollection = this.$store.state.datacollection;
          console.log(this.datacollection);
        }
      }
    };
</script>
<style>
</style>