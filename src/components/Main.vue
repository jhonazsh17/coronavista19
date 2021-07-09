<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-7">
                    <div class="element-no-rwd">
                        <div class="card">
                            <div class="card-body card-body-customize">
                                <div class="row">
                                    <div class="col-7 col-sm-6 col-md-7">
                                        <h3 class="title-table">Reporte Diario</h3>
                                    </div> 
                                    <div class="col-5 col-sm-6 col-md-5">
                                        <SelectCountry></SelectCountry>
                                    </div>     
                                </div>
                                
                                <hr>                                
                                <TableRecords></TableRecords>                           
                                
                            </div>
                            
                        </div>
                        <br> 
                    </div>
                     
                     
                </div>
                <div class="col-md-5 col-sm-12 col-12">
                    <div class="element-rwd" style="display:none">
                        <SelectCountry></SelectCountry>
                        <br>  
                    </div>                    
                    
                    <div class="element-no-rwd">
                        <GroupButtons></GroupButtons>
                        <br> 
                    </div>
                    
                    <div v-if="$store.state.stateNoSearch">
                        <CardTotalCases></CardTotalCases>
                        <br>
                    </div>  
                    
                    <div v-if="$store.state.stateNoSearch">
                        <CardTotalCasesPrev></CardTotalCasesPrev>
                        <br>
                    </div>
                    
                    <div v-if="$store.state.stateNoSearch">
                        <div class="card">
                            <div class="card-body card-body-customize">
                                <h5>Tasa de Mortalidad</h5>  
                                <hr>
                                <div class="text-justify">
                                    Mueren <span class="badge badge-warning"><b style="font-size:1.3em">
                                    {{ (($store.state.totalCases.deaths / $store.state.totalCases.confirmed)*100).toFixed(2) }}</b></span> 
                                    personas de cada 100 contagiados por COVID-19 en el país de <b style="color:#3498db">{{ $store.state.countryFind }}</b>.
                                </div>                                
                            </div>
                        </div>    
                        <br>
                    </div>
                    
                    <div v-if="$store.state.stateNoSearch">
                        <div class="card">
                            <div class="card-body card-body-customize">
                                <h5>Curva de Proyección</h5>  
                                <hr>
                                <small>Estamos Trabajando en ello.</small>
                            </div>
                        </div>    
                        
                    </div>
                    <div class="element-rwd" style="display:none" v-if="$store.state.stateNoSearch">
                        <br>
                        <div class="card " >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-7 col-sm-6 col-md-7">
                                        <h3 class="title-table">Reporte Diario</h3>
                                    </div> 
                                    <div class="col-5 col-sm-6 col-md-5">
                                        <!-- <SelectCountry></SelectCountry> -->
                                        <h3 class="title-table" style="color: #3498db; text-align:right">{{ $store.state.countryFind }}</h3>
                                    </div>     
                                </div>
                                
                                <hr>
                                <TableRecords></TableRecords>
                                
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <br> 
            <div class="row" style="margin-bottom: 2em">
                <div class="col-12">
                    <CardHorizontal></CardHorizontal>  
                </div>  
            </div>
        </div>
        
    </div>
</template>

<script>

import SelectCountry from "@/components/SelectCountry.vue";
// import InputSearch from "@/components/InputSearch.vue";
import TableRecords from "@/components/TableRecords.vue";
import CardTotalCases from "@/components/CardTotalCases.vue";
import CardTotalCasesPrev from "@/components/CardTotalCasesPrev.vue";
import GroupButtons from "@/components/GroupButtons.vue";
import CardHorizontal from "@/components/CardHorizontal.vue";
//import VisualizationChart from "@/components/VisualizationChart.vue";

export default {
    name: "Main",
    components: {
        SelectCountry,
        TableRecords,
        CardTotalCases,
        CardTotalCasesPrev,
        GroupButtons,
        CardHorizontal,
        // InputSearch
        //VisualizationChart
    },
    data () {
        return {
            recordsFind: [],
            countries: [],
            countryFind: "Peru"
        }
    }, 
    created(){
        
    },

    methods:{
        //methods
    }
}
</script>

<style scoped>
    .main{
        margin-top: 3.5em;
    }

    .card{
        background-color: #34495e;
        color: white;
    }

    .title-table{
        color: #f1c40f;
    }

    .card-body-customize{
        box-shadow: 0px 0px 13px 1px #313131;
        border: 1px solid #f1f1f159;
        border-radius: 6px;
    }

    @media (max-width: 600px) {
        .title-table{
            font-size: 1.5em;
        }
        .element-rwd{
            display: block !important;
        }
        .element-no-rwd{
            display: none !important;
        }
    }
</style>
