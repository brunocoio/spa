<template>
    <div>
        <div class="header clearfix">
            <nav>
                <ul class="nav nav-pills pull-right">
                <li class="nav-item">
                    <router-link 
                    :to="{name:'home'}" 
                    class="nav-link" 
                    active-class="active" 
                    style="cursor: pointer">
                    <i class="fas fa-home"></i>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                    :to="{name:'one'}" 
                    class="nav-link" 
                    active-class="active" 
                    style="cursor: pointer">
                    <i class="fab fa-ello"></i>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                    to="/page-two" 
                    class="nav-link" 
                    active-class="active" 
                    style="cursor: pointer">
                    <i class="fas fa-tools"></i>
                    </router-link>
                </li>
                </ul>
            </nav>
        </div>
    </div>
</template>