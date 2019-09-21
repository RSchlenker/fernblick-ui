<template>
  <div>
    <h2>Unsere aktuellsten Blogs findest du hier</h2>
    <div class="preview-container">
      <blog-preview v-for="blog in blogs" :key="blog.id" :blog="blog"/>
    </div>
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlogOverview',
  components: {BlogPreview},
  mounted () {
    this.loadBlogs()
  },
  computed: {
    ...mapGetters(['blogs'])
  },
  methods: {
    ...mapActions(['loadBlogs'])
  }
}
</script>
<style>
.preview-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
