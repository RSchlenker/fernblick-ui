<template>
  <div v-if="errorWhileLoadingBlog">The Blog you are looking for couldn't be found</div>
  <div v-else>
    <div class="back-button">
      <a @click="$router.go(-1); $scrollToTop()">
        <vue-material-icon name="arrow_back" :size="50"></vue-material-icon>
      </a>
    </div>
    <div class="blog-wrapper m-5">
      <h1>{{activeBlog.title}}</h1>
      <hr class="mb-0"/>
      <blog-short-overview class="mb-3" :short-information="activeBlog.shortoverview" />
      <vue-markdown :source="activeBlog.text"></vue-markdown>
      <about-us-footer/>
    </div>
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

.back-button {
  margin-left: -35px;
  margin-top: -20px;
  padding-bottom: 10px;
  color: #93B5B3;
}

@media only screen and (min-width: 600px) {
  .blog-wrapper {
    padding: 0 10em;
  }

  .back-button {
    position: absolute;
    left: 80px;
    top: 180px;
    color: #93B5B3;
  }
  .back-button:hover {
    color: #6b8d8b;
    cursor: pointer;
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
