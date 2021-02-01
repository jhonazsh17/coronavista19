<template>
    <div class="footer">
        <div class="container">
            <hr>
             
            <div class="row" style="margin-top:2em">
                <div class="col-md-6 col-12 col-sm-12">
                    <h5>Realizado por:</h5><br>
                    <div class="media">
                        <img src="@/assets/jhonazsh.png" class="mr-3 imagen-dev" alt="..." width="56px">
                        <div class="media-body">
                            <h6 class="mt-0">Jhon F. Medina Zapata</h6>
                            <small style="color:skyblue">- jhonazsh.17@gmail.com</small><br>
                            <small>- Bach. en Ciencias de la Computación y Desarrollador de Software.</small><br>
                            <small>- Universidad Nacional de Trujillo</small>    
                        </div>
                    </div>
                    <br>
                </div>
                <div class="col-md-6 col-12 col-sm-12">
                    <h5>Api:</h5>
                    <p>
                        <!-- Este Trabajo es realizado en conjunto con: -->

                        <ul>
                            <li>Api para obtener data diaria por País en <a href="https://github.com/pomber/covid19">https://github.com/pomber/covid19</a></li>
                        </ul>
                    </p>
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