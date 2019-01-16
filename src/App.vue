<template>
    <div class="container">
        <navigation></navigation>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>
 
<script>
    import Navigation from './Navigation'; 
    export default {
        components: {
            Navigation
        }
    }
</script>
 
<style>
    .slide-leave-active {
        transition: opacity 3s ease;
        opacity: 0;
        animation: slide-out 3s ease-out ;
    } 
    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    } 
    .slide-enter-active {
        animation: slide-in 3s ease-out ;
    } 
    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100px);
        }
    } 
    @keyframes slide-in {
        0% {
            transform: translateY(100px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>