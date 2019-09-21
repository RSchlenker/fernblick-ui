<template>
  <div id="app">
    <navbar />
    <router-view class="m-5"/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
<style>
body {
  background-color: #f8f8f8;
}
</style>
