<template>
  <div v-if="errorWhileLoadingBlog">The Blog you are looking for couldn't be found</div>
  <div v-else>
    <div class="m-5">
      <div class="back-button">
        <a @click="$router.go(-1); $scrollToTop()">
          <vue-material-icon name="arrow_back" :size="50"></vue-material-icon>
        </a>
      </div>
      <div class="blog-wrapper">
        <h1>{{activeBlog.title}}</h1>
        <h4 class="text-muted sub-title">{{activeBlog['sub-title']}}</h4>
        <hr class="mb-0"/>
        <blog-short-overview
          class="mb-3"
          :showImages="activeBlog.pictures && activeBlog.pictures.length > 0"
          :short-information="activeBlog.shortoverview"
          @openGallery="index = 0"
        />
        <vue-markdown :source="activeBlog.text"></vue-markdown>
        <template v-if="activeBlog.accesses.length > 0">
          <h1>Anfahrt</h1>
          <vue-markdown :source="activeBlog['access-intro-text']"></vue-markdown>
          <access-block v-for="accessInfo in activeBlog.accesses" :access="accessInfo" :key="accessInfo._id" class="mb-5   mt-5"/>
        </template>
        <div v-if="activeBlog">
          <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        </div>
        <about-us-footer/>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import {mapActions, mapGetters} from 'vuex'
  import BlogShortOverview from '@/components/BlogShortOverview'
  import AboutUsFooter from '@/components/AboutUsFooter'
  import VueGallerySlideshow from 'vue-gallery-slideshow'
  import AccessBlock from './AccessBlock'

  export default {
  name: 'BlogPage',
  components: {AccessBlock, AboutUsFooter, BlogShortOverview, VueMarkdown, VueGallerySlideshow},
  mounted () {
    this.loadBlog(this.$route.params.id)
  },
  data () {
      return {
        index: null,
      }
  },
  computed: {
    ...mapGetters(['activeBlog', 'errorWhileLoadingBlog']),
    images() {
      let images = []
      if(!this.activeBlog._id) {
        return images
      }
      this.activeBlog.pictures.forEach((picture) => {
        images.push('http://strapi.schlenker.io' + picture.url)
      })
      return images
    },
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
  .vgs__container {
    margin-top: 10% !important;
    border-radius: 0 !important;
  }
  .vgs__gallery__container__img {
    border-radius: 0 !important;
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

.sub-title {
  font-weight: lighter;
}

</style>
