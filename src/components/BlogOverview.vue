<template>
  <div>
    <h2>Welcome on the blog Overview</h2>
    <md-card v-for="blog in blogs">
      <md-card-header>
        <div class="md-title">{{blog.title}}</div>
      </md-card-header>

      <md-card-content>
        {{blog.text}}
        <md-card-media>
          <img :src="'http://strapi.schlenker.io' + blog['preview-image'].url">
        </md-card-media>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'

export default {
  name: 'BlogOverview',
  mounted () {
    const strapi = new Strapi('http://strapi.schlenker.io')
    strapi.getEntries('blogs').then((blogs) => {
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
