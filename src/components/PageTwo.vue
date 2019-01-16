<template>
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 cornerbox">
            <h1>Sobre
                <small class="text-muted">mim!</small>
                <router-link to="/page-two" class="nav-link" active-class="active" style="cursor: pointer"><i class="fas fa-tools"></i></router-link>
            </h1>
            <router-view></router-view>
        </div>
    </div>
</template>
 
<script>
  export default {}
</script>