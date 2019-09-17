<template>
  <md-app id="app" md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <md-tabs class="md-primary">
          <md-tab id="tab-home" md-label="Home" to="/">
          </md-tab>
          <md-tab id="tab-pages" md-label="Blog" to="/blogs"></md-tab>
          <md-tab id="tab-posts" md-label="Photos" to="/photos"></md-tab>
        </md-tabs>
      </div>
    </md-app-toolbar>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

export default {
  name: 'App'
}
</script>
