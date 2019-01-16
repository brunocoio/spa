<template>
    <div>
        <h1>Sobre
            <small class="text-muted">mim!</small>
            <router-link to="/page-two" class="nav-link" active-class="active" style="cursor: pointer"><i class="fas fa-tools"></i></router-link>
        </h1>
        <router-view></router-view>
    </div>
</template>
 
<script>
  export default {}
</script>