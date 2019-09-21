<template>
  <div v-if="errorWhileLoadingBlog">The Blog you are looking for couldn't be found</div>
  <div v-else>
    <h1>{{activeBlog.title}}</h1>
    <hr/>
    <vue-markdown :source="activeBlog.text"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlogPage',
  components: {VueMarkdown},
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
</style>
