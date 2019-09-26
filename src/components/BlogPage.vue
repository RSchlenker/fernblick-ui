<template>
  <div v-if="errorWhileLoadingBlog">The Blog you are looking for couldn't be found</div>
  <div v-else class="blog-wrapper">
    <h1>{{activeBlog.title}}</h1>
    <hr/>
    <blog-short-overview :data="activeBlog.shortoverview" />
    <vue-markdown :source="activeBlog.text"></vue-markdown>
    <about-us-footer/>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters, mapActions } from 'vuex'
import BlogShortOverview from '@/components/BlogShortOverview'
import AboutUsFooter from '@/components/AboutUsFooter'

export default {
  name: 'BlogPage',
  components: {AboutUsFooter, BlogShortOverview, VueMarkdown},
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

.blog-wrapper ul {
  list-style: none; /* Remove default bullets */
}

.blog-wrapper ul li::before {
  content: ">";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #CD5555; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

hr {
  border-color: #CD5555;
}
</style>
