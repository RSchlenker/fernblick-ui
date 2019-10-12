<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-large navigation">
    <router-link class="navbar-brand" to="/"><h2>herumschlenkern</h2></router-link>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/blogs">Blog</router-link>
        </li>
      </ul>
      <div class="float-right">
        <router-link to="/map" class="navbar-brand">
          <vue-material-icon name="public" :size="80"></vue-material-icon>
        </router-link>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navigation {
  background-color: #93B5B3 !important;
  height: 12vh;
  z-index: 9999;
}
</style>
