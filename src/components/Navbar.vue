<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top" >
        <div class="container">
            <a class="navbar-brand" href="#">CORONAVISTA 19 / <small><span style="color:#e67e22">{{caso.title}}</span></small> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li> -->
                
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data () {
        return {
            caso: {
                title: "Detalle de Coronavirus por Paises."
            }
        }
    },
}
</script>