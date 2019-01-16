<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12">
                <picture class="center-block">
                    <img :src="img.url" :alt="img.alt" :title="img.alt" class="img-rounded img-responsive">
                </picture>
            </div>
        </div>
        <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12">
            <h1>{{ title }}</h1>
            <router-view></router-view>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email" required >
                </div>
                <router-link 
                :to="{ name: 'one', query:{email:this.email}}" 
                class="btn btn-info" 
                active-class="active" 
                style="cursor: pointer">
                Prosseguir <i class="fas fa-chevron-circle-right"></i>
                </router-link>
            </form>
        </div>
    </div>
</template>
 
<script>
    export default {
        data(){
            return{
            email: null,
            title:'Entre com seu nome.',
                img:{
                    url:'/src/assets/logo.png',
                    alt:'logo'
                }
            }
        }
    }
</script>