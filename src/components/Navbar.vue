<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-large navigation">
    <router-link class="navbar-brand" to="/"><h2>Fernblick</h2></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/blogs">Blogs</router-link>
        </li>
      </ul>
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
  height: 8em;
}
</style>
