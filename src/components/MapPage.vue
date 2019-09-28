<template>
  <blog-overview-map class="fullscreen-map" :blogs="blogs"/>
</template>

<script>
  import BlogOverviewMap from '@/components/BlogOverviewMap'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'MapPage',
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

<style scoped>
.fullscreen-map {
  position: absolute;
  left: 0;
  right: 0;
  top: 8em;
  height: 89%;
   /*FIXME: How to set height dynamically*/
}
</style>
