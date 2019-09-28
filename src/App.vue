<template>
  <div id="app">
    <navbar />
    <router-view class="m-5"/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-css-donut-chart/dist/vcdonut.css'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
<style>
body {
  background-color: #fbfcfb;
}

/*
Color scheme
Primary: #93B5B3
Primay-light: #C8DAD3
Primary-lighter: #fbfcfb

Accent-hard: #FF502F
Accent: #CD5555
*/

  a, a:hover {
    text-decoration: none !important;
  }
</style>
