<template>
    <div>
      <button class="btn btn-warning btn-sm" @click="fill()"><b>Recargar</b></button>
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
          // fill in the chart
          this.$store.commit('resetData');
          this.$store.commit('fillData');
          this.datacollection = this.$store.state.datacollection;
        }
      }
    };
</script>
<style>
</style>