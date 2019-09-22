<template>
  <div v-if="errorWhileLoadingBlog">The Blog you are looking for couldn't be found</div>
  <div v-else class="blog-wrapper">
    <h1>{{activeBlog.title}}</h1>
    <hr/>
    <blog-short-overview :data="activeBlog.shortoverview" />
    <vue-markdown :source="activeBlog.text"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters, mapActions } from 'vuex'
import BlogShortOverview from '@/components/BlogShortOverview'

export default {
  name: 'BlogPage',
  components: {BlogShortOverview, VueMarkdown},
  mounted () {
    this.loadBlog(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['activeBlog', 'errorWhileLoadingBlog'])
  },
  methods: {
    ...mapActions(['loadBlog'])
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

@media only screen and (min-width: 600px) {
  .blog-wrapper {
    padding: 0 10em;
  }
}
</style>
