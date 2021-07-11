<template>
    <div class="select-country">
        <select class="form-control" v-on:change="changeCountry()" v-model="$store.state.countryFind">
            <option 
                v-for="(country, index) in $store.state.countries" 
                :key="index" 
                v-bind:value="country">
                {{country}}
            </option>
        </select>
    </div>
</template>

<script>

export default {
    name: 'SelectCountry',
    data(){
        return {
            change: false,
        }
    },
    async created(){
        
    },
    methods: {
        changeCountry(){
            this.change = true;
            this.$store.state.datacollection  = {};            
            this.$store.commit('load');
            //this.$store.commit('fillData');
        }
    }
}
</script>

<style scoped>
    .select-country>select{
        background: #7f8c8d;
        color: white;
        border: 2px solid #2c3e50;
    }

    @media (max-width: 600px) {
        .select-country>select{
            border: 2px solid #95a5a6 !important;
        }
    }
</style>