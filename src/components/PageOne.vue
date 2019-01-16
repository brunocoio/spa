<template>
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 text-center cornerbox">
            <h1>{{ title }} <small>{{$route.query.nome}}!</small></h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YEG-Y5E9v84?controls=0&autoplay=1&disablekb=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                //variáveis de entrada
                title:'Seja bem-vindo'
            }
        }
    }
</script>