<template>
    <div>
        <site-header></site-header>
        
        <router-view></router-view>
    </div>
</template>

<script>

import siteHeader from '../components/Header.vue';
export default {

    components:{
        siteHeader,
    },
}
</script>