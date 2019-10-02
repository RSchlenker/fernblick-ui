<template>
  <div class="m-5">
    <h1>Willkommen zu unserem Blog</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <blog-overview-map class="home-blogmap mt-4" :blogs="blogs"/>
  </div>
</template>

<script>
  import BlogOverviewMap from './BlogOverviewMap'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Home',
    components: {BlogOverviewMap},
    mounted() {
      this.loadBlogs()
    },
    methods: {
      ...mapActions(['loadBlogs']),
    },
    computed: {
      ...mapGetters(['blogs']),
    },
  }
</script>

<style>
  .home-blogmap {
    position: absolute;
    left: 0;
    right: 0;
    height: 400px !important;
  }
</style>
