<template>
    <div>
      <Header/>
        <div class="w-full h-[calc(100vh-50px)">
            <router-view></router-view>
        </div>

    </div>
</template>

<script setup>

import Header from './../../components/Header.vue'

</script>


<style>

</style>