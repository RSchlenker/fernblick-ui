<template>
  <div class="parallax">
      <div class="parallax__layer parallax__layer--base m-5">
        <h1 class="home-title">Willkommen auf unserem Blog</h1>
        <p class="home--intro-text">Schön das du hier bist. Wir freuen uns dass du den Weg zu uns gefunden hast! Hier berichten wir von unseren Reisen und möchten vor Allem auch euch erleichtern die Welt zu entdecken!</p>
        <div class="home-blogmap-wrapper">
          <h3 class="map-section-description">Hier kannst du alle unsere Blogs auf einer Karte finden</h3>
          <blog-overview-map class="home-blogmap" :blogs="blogs"/>
        </div>
      </div>

<!--    parallax background    -->
    <div class="parallax__layer--deep">
      <img class="parallax-background-img" src="http://strapi.schlenker.io:1337/uploads/6f1a3c5b338042c5b7c8156cc245209c.jpg">
<!--      <img class="parallax-background-img" src="http://strapi.schlenker.io:1337/uploads/cdc1c6925bd44984b2e745c7e0e9e60e.jpg">-->
    </div>
  </div>
</template>

<script>
  import BlogOverviewMap from './BlogOverviewMap'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Home',
    components: {BlogOverviewMap},
    mounted() {
      this.loadBlogs()
    },
    methods: {
      ...mapActions(['loadBlogs']),
    },
    computed: {
      ...mapGetters(['blogs']),
    },
  }
</script>

<style>
  .home-title {
    font-size: 3em;
  }

  .home--intro-text {
    font-size: 1.5em;
    margin-top: 30em;
  }

  .parallax-background-img {
    height: 100vh;
    margin-top: -5em;
  }

  .map-section-description {
    padding-left: 2em;
    font-size: 1.4em;
    height: 4em;
    color: white;
    display: flex;
    align-items: center;
  }

  .home-blogmap-wrapper {
    margin-top: 100vh;
    margin-bottom: 100px;
    margin-left: -3vw;
    margin-right: -3vw;
    background-color: #82aa9f;
  }

  .home-blogmap {
    height: 400px !important;
    width: 100% !important;
  }

  .parallax {
    perspective: 1px;
    height: 88vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .parallax__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .parallax__layer--base {
    transform: translateZ(0);
  }
  .parallax__layer--deep {
    transform: translateZ(-2px) scale(3);
    z-index: -500;
    margin-top: 300px;
  }

  @media only screen and (min-width: 600px) {
    .home-title {
      font-size: 4em;
    }

    .home--intro-text {
      width: 50%;
      margin-top: 3em;
    }

    .map-section-description {
      height: 3em;
    }

    .home-blogmap {
      height: 600px !important;
    }
  }
</style>
