<template>
    <div class="card">
        <div class="card-body card-body-customize">
            <h4>
                {{ $store.state.countryFind }} <country-flag :country='$store.state.alpha_2' size='normal' />
                <span class="badge badge-warning" style="margin-left: .8em">
                    {{ $store.state.totalCases.date }}
                </span>
            </h4>
            <hr>
            <div class="row">
                <div class="col text-justify">
                    <small>Totalidad de los casos registrados hasta el momento en el País de <b style="color:#3498db">{{ $store.state.countryFind }}</b>, por COVID-19.</small>   
                </div>
            </div>
            <div class="row" style="margin-top: 1em">
                <div class="col-md-4 col-4" >
                    <h6 class="text-center title-cases">Contagiados</h6>
                    <div class="box-total">
                        {{ $store.state.totalCases.confirmed }}
                    </div>
                </div>
                <div class="col-md-4 col-4">
                    <h6 class="text-center title-cases">Recuperados</h6>
                    <div class="box-total">
                        {{ $store.state.totalCases.recovered }}
                    </div>
                </div>
                <div class="col-md-4 col-4">
                    <h6 class="text-center title-cases">Muertes</h6>
                    <div class="box-total">
                        {{ $store.state.totalCases.deaths }}
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-4 col-5 col-sm-4" style="margin-top:.7em">
                    <b class="title-cases">Casos Activos:</b>
                </div>
                <div class="col-md-8 col-7 col-sm-8">
                    <div class="box-total-active">
                        {{ $store.state.totalCases.confirmed - ($store.state.totalCases.recovered + $store.state.totalCases.deaths) }}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
    name: "CardTotalCases",
    components: {
        CountryFlag
    } 

}
</script>

<style>
    .card{
        background-color: #7f8c8d;
        color: white;
    }
    .box-total{
        margin-top: .8em;
        background-color: #2c3e50;
        padding: 10px 0;
        border-radius: 4px;
        text-align: center;
        font-size: 1.1em;
        font-weight: bold;
        color: #f1c40f;
    }
    .box-total-active{
        background-color: #2c3e50;
        padding: 10px 0;
        border-radius: 4px;
        text-align: center;
        font-size: 1.1em;
        font-weight: bold;
        color: #f1c40f;
    }

    .card-body-customize{
        box-shadow: 0px 0px 13px 1px #313131;
        border: 1px solid #f1f1f159;
        border-radius: 6px;
    }

    @media (max-width: 420px) {
        .title-cases {
            font-size: .8em !important;
        }
        .box-total-active,
        .box-total{
            font-size: 1em;
        }
    }
</style>