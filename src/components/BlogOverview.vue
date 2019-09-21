<template>
  <div>
    <h2>Unsere aktuellsten Blogs findest du hier</h2>
    <div class="preview-container">
      <blog-preview v-for="blog in blogs" :key="blog.id" :blog="blog"/>
    </div>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import BlogPreview from '@/components/BlogPreview'

export default {
  name: 'BlogOverview',
  components: {BlogPreview},
  mounted () {
    const strapi = new Strapi('http://strapi.schlenker.io')
    strapi.getEntries('blogs').then((blogs) => {
      this.blogs = this.blogs.concat(blogs)
      this.blogs = this.blogs.concat(blogs)
      this.blogs = this.blogs.concat(blogs)
      this.blogs = this.blogs.concat(blogs)
    })
  },
  data () {
    return {
      blogs: []
    }
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
