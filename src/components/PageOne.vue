<template>
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 text-center cornerbox">
            <h1>{{ title }} <small>{{$route.query.nome}}!</small></h1>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YEG-Y5E9v84?controls=0&autoplay=1&disablekb=1" allowfullscreen=""></iframe>
            </div>
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