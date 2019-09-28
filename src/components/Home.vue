<template>
  <div>
    <h1>Willkommen bei Fernblick</h1>
    <blog-overview-map :blogs="blogs"/>
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
