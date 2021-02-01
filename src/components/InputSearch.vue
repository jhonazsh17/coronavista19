<template>
    <div class="input-search">
        <div class="input-group flex-nowrap search-group">
            <input type="text" class="form-control search" placeholder="País" v-model="countryValue" @keyup="reactionSearch()">
        </div>

        <div v-if="$store.state.stateNoSearch==false">
            <div v-for="(country, index) in countriesSearch" :key="index">
                {{country}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            countryValue : "",
            countriesSearch: [],
        }
    },
    created(){
        this.countryValue = this.$store.state.countryFind;
        this.countriesSearch = this.$store.state.countries;
    },
    methods:{
        reactionSearch(){
            this.countriesSearch = this.$store.state.countries;
            this.$store.state.stateNoSearch = false;
            this.$store.state.countries.forEach(element => {
                
                if(element.toLowerCase().includes(this.countryValue.toLowerCase())){
                    this.countriesSearch.push(element); 
                }else{
                    this.countriesSearch = this.$store.state.countries;
                }
            });
        }
    },
    computed:{
            // 
    }
}
</script>

<style scoped>
    .search{
        background-color: #ecf0f1;
        border: 3px solid #34495e;
    }

    
    
</style>