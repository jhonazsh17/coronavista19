<template>
    <div class="group-buttons">
        <button @click="reset()" class="btn btn-warning btn-block">
            <b>Resetear Datos</b>
        </button>
        <!-- <button class="btn btn-light" style="margin-left:1em">
            <b>Imprimir</b>
        </button> -->
    </div>
</template>

<script>
export default {
    name: "GroupButtons",
    methods: {
        reset(){
            this.$store.commit('load');
        }    
    }
}
</script>

<style scoped>

</style>