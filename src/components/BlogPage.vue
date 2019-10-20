<template>
  <div v-if="errorWhileLoadingBlog">The Blog you are looking for couldn't be found</div>
  <div v-else>
    <div class="m-5">
      <div class="back-button">
        <a @click="$router.go(-1); $scrollToTop()">
          <vue-material-icon name="arrow_back" :size="50"></vue-material-icon>
        </a>
      </div>
      <div class="title-image-wrapper">
        <img :src="'http://strapi.schlenker.io' + activeBlog['preview-image'].url" ref="titleImage" class="blog-title-image"/>
      </div>
      <div class="blog-wrapper">
        <div class="blog-title-wrapper">
          <h1 class="blog-title">{{activeBlog.title}}</h1>
          <h4 class="sub-title">{{activeBlog['sub-title']}}</h4>
        </div>
<!--        <blog-short-overview-->
<!--          class="mb-3"-->
<!--          :showImages="activeBlog.pictures && activeBlog.pictures.length > 0"-->
<!--          :short-information="activeBlog.shortoverview"-->
<!--          @openGallery="index = 0"-->
<!--        />-->
        <div class="blog-content">
          <vue-markdown :source="activeBlog.text"></vue-markdown>
          <template v-if="activeBlog.accesses.length > 0">
            <section-title>Anfahrt</section-title>
            <vue-markdown :source="activeBlog['access-intro-text']"></vue-markdown>
            <access-block v-for="accessInfo in activeBlog.accesses" :access="accessInfo" :key="accessInfo._id" class="mb-4   mt-4"/>
          </template>
          <template v-if="activeBlog.activities.length > 0">
            <section-title>Aktivitäten</section-title>
            <vue-markdown :source="activeBlog['activity-intro-text']"/>
            <activity-overview :activities="activeBlog.activities"/>
            <vue-markdown :source="activeBlog['activity-text']" class="mt-4"/>
          </template>
          <template v-if="activeBlog.tips.length > 0">
            <tips-block :tips="activeBlog.tips"/>
          </template>
          <div v-if="activeBlog">
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
          </div>
          <about-us-footer/>
        </div>
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
  import ActivityOverview from './ActivityOverview'
  import TipsBlock from './TipsBlock'
  import SectionTitle from './SectionTitle'
  import SimpleParallax from 'simple-parallax-js'

  export default {
  name: 'BlogPage',
  components: {
    SectionTitle,
    TipsBlock,
    ActivityOverview, AccessBlock, AboutUsFooter, BlogShortOverview, VueMarkdown, VueGallerySlideshow},
  mounted () {
    this.loadBlog(this.$route.params.id)
    let image = this.$refs.titleImage
    new SimpleParallax(image)
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
  margin-top: 200px;
  color: #93B5B3;
}

.blog-wrapper ul {
  list-style: none; /* Remove default bullets */
}

.blog-wrapper ul li::before {
  content: "-";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.blog-wrapper p {
  font-size: 1.4em;
  line-height: 1.6em;
}

.blog-content {
  margin-top: 10px;
}

hr {
  border-color: #CD5555;
}

.sub-title {
  font-weight: lighter;
  color: white;
  font-size: 1.5em;
}

.blog-title {
  font-size: 2.5em;
}

.blog-title-image {
  left: 0;
  top: 22vh;
}

.title-image-wrapper {
  overflow: hidden;
  height: 200px;
  position: absolute;
  left: 0;
  top: 10vh;
  width: 100%;
  z-index: -1;
}

  .blog-title-wrapper {
    background-color: rgba(50, 50, 50, 0.22);
    position: absolute;
    left: 0;
    width: 100%;
    height: 200px;
    top: 10vh;
    color: white;
    padding: 50px 0 0 10%;
  }

@media only screen and (min-width: 600px) {

  .title-image-wrapper {
    height: 500px;
  }

  .blog-title-wrapper {
    height: 500px;
    padding: 200px 0 0 20%;
  }

  .blog-title {
    font-size: 4em;
  }

  .blog-wrapper {
    padding: 0 12em;
  }

  .back-button {
    position: absolute;
    left: 80px;
    top: 650px;
    margin-top: 0;
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

  .blog-wrapper p {
    font-size: 1.6em;
    line-height: 1.6m;
  }

  .blog-content {
    margin-top: 520px;
  }
}

</style>
