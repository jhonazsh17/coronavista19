<template>
    <div class="footer">
        <div class="container">
            <hr>
             
            <div class="row" style="margin-top:2em">
                <div class="col-md-5 col-12 col-sm-12">
                    <h4>Desarrollado por:</h4><br>
                    <div class="media">
                        <img src="@/assets/jhonazsh.png" class="mr-3 imagen-dev" alt="..." width="72px">
                        <div class="media-body">
                            <h5 class="mt-0">Jhon F. Medina Zapata</h5>
                            <small>- E-mail: <span style="color:skyblue"><b>jhonazsh.17@gmail.com</b></span></small><br>
                            <small>- Bach. en <b>Ciencias de la Computación</b></small><br>
                            <small>- <b>Desarrollador de Software</b>.</small><br>
                            <small>- <b>Universidad Nacional de Trujillo</b></small>    
                        </div>
                    </div>
                    <br>
                </div>
                <div class="col-md-7 col-12 col-sm-12">
                    <h4>Api:</h4><br>
                    <div class="row mb-3">
                        <div class="col-md-2 text-center">
                            <img src="@/assets/github.png" alt="..." width="48px">
                        </div>
                        <div class="col-md-10">
                            Api para obtener data diaria por País en <a href="https://github.com/pomber/covid19">https://github.com/pomber/covid19</a> <br>
                        </div>                       
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-2 text-center pt-1">
                            <img src="@/assets/ipgeolocation.png" alt="..." width="64px">
                        </div>
                        <div class="col-md-10">
                            Api de Geolocalización para obtener País por IP en <a href="https://ipgeolocation.io/">https://ipgeolocation.io/</a> <br>
                        </div>                       
                    </div>
                </div>
                <!-- <div class="col">
                    
                </div> -->
            </div>
        </div>
        <br>  
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .footer{
        color: #7f8c8d;
    }
    .imagen-dev{
        border-radius: 3px;
        border: 3px solid #737373;
    }
</style>