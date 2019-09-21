<template>
  <div v-if="showNotFound">The Blog you are looking for couldn't be found</div>
  <div v-else>
    <h1>{{blog.title}}</h1>
    <hr/>
    <vue-markdown :source="blog.text"></vue-markdown>
<!--    <div v-for="picture in blog.pictures" :key="picture.id">-->
<!--      <img :src="'http://strapi.schlenker.io' + picture.url">-->
<!--    </div>-->
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'BlogPage',
  components: {VueMarkdown},
  data () {
    return {
      blog: {},
      showNotFound: false
    }
  },
  mounted () {
    const strapi = new Strapi('http://strapi.schlenker.io')
    strapi.getEntry('blogs', this.$route.params.id).then((blog) => {
      this.blog = blog
    }).catch(() => {
      this.showNotFound = true
    })
  }
}
</script>

<style>
p {
  font-size: 1.3em;
  line-height: 1.4em;
}
li {
  font-size: 1.3em;
  line-height: 1.4em;
}
</style>
