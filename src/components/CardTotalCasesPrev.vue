<template>
    <div class="card">
        <div class="card-body card-body-customize">
            <h5>
                Casos Nuevos de COVID-19
            </h5>
            <hr>
            <div class="row">
                <div class="col text-justify">
                    <small>Casos nuevos en  <b style="color:#3498db">{{ $store.state.countryFind }}</b>, por COVID-19.</small>   
                </div>
            </div>
            <div class="row" style="margin-top: 1em">
                <div class="col-4" >
                    <h6 class="text-center title-cases">Contagiados</h6>
                    <div class="box-total">
                        {{ $store.state.totalCases.confirmed - $store.state.totalCasesPrev.confirmed }}
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="text-center title-cases">Recuperados</h6>
                    <div class="box-total">
                        {{ $store.state.totalCases.recovered - $store.state.totalCasesPrev.recovered }}
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="text-center title-cases">Muertes</h6>
                    <div class="box-total">
                        {{ $store.state.totalCases.deaths - $store.state.totalCasesPrev.deaths }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardTotalCasesPrev"
}
</script>

<style scoped>
    .card{
        background-color: #34495e;
        color: white;
    }
    .box-total{
        margin-top: .8em;
        background-color: #7f8c8d;
        padding: 10px 0;
        border-radius: 4px;
        text-align: center;
        font-size: 1.1em;
        font-weight: bold;
        color: white;
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
        .box-total{
            font-size: 1em;
        }
    }
</style>