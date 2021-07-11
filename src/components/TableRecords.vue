<template>
    <div >
        <div class="row">
            <div class="col-md-12">
                <p class="text-justify">
                    Al elegir una Fecha en esta tabla, la información cambia de acuerdo a la fecha seleccionada.     
                </p>
            </div>            
            <div class="col-md-8">                
                <p>
                    Desde: 
                    <span style="color: #f1c40f">
                        <b>{{$store.state.recordsFind[0].date | normalizeDate}}</b>
                    </span>
                    <br>
                    Hasta: 
                    <span style="color: #f1c40f">
                        <b>{{$store.state.recordsFind[$store.state.recordsFind.length - 1].date | normalizeDate}}</b>
                    </span>
                    <br>
                    Días <small>(Desde el primer día de contagio)</small>: <span style="color: #f1c40f"><b>{{$store.state.recordsFind.length}}</b></span>
                </p>
            </div>
            <div class="col-md-4 text-right">
                <country-flag :country='$store.state.alpha_2' size='big' />
            </div>              
        </div>
         
        <table 
            class="table table-bordered table-hover" >
            <thead>
                <tr class="text-center" style="background: #7f8c8d;">
                    <th>Fecha</th>
                    <th>Contagiados</th>
                    <th>Recuperados</th>
                    <th>Muertes</th>
                    <th>Activos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="$store.state.recordsFind == []">
                    <td>Cargando ...</td>
                </tr>
                <tr 
                    v-else
                    v-for="(record, index) in $store.state.recordsFind" 
                    class="text-center" 
                    :key="index">
                    <td>
                        <a 
                            href="#" 
                            @click="onClickDate(record.date)" 
                            class="record-date">
                            {{record.date | normalizeDate }}
                        </a> 
                    </td>
                    <td>
                        <span style="color:#f1c40f">{{record.confirmed | number}}</span>
                    </td>
                    <td>
                        <span style="color:#2ecc71">{{record.recovered | number}}</span>
                    </td>
                    <td>
                        <span style="color:#95a5a6">{{record.deaths | number}}</span>
                    </td>
                    <td>
                        <span style="color:#95a5a6">
                            {{record.confirmed - (record.recovered + record.deaths) | number}}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
export default {
    name: "TableRecords",
    methods: {
        onClickDate(date){
            this.$store.state.dateFind = date;
            this.$store.commit('loadPerDate');
        }    
    }
}
</script>

<style scoped>
    .table{
        color: white;
    }
    .table thead th {
        border-bottom: 2px solid #7f8c8d;
        padding: 0;
    }

    .table tbody td {
        padding: 0px;
    }

    .table-bordered th,
    .table-bordered td{
        border: 1px solid #7f8c8d;
    }
    .record-date{
        color: #9388f7;
    }

    @media (max-width: 500px) {
        .table thead th {
            font-size: .8em;
        }
        .table tbody td {
            font-size: .8em;
        }
    }
</style>