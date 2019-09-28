<template>
    <l-map ref="blogmap" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :options="mapOptions"></l-tile-layer>
        <v-marker-cluster>
          <l-marker v-for="blog in blogs" :key="blog.id" :lat-lng="getLatLongFromBlog(blog)">
            <l-icon
              :icon-size="iconSize"
              icon-url="https://fonts.gstatic.com/s/i/materialicons/radio_button_checked/v1/24px.svg?download=true"
              :icon-anchor="staticAnchor">
            </l-icon>
            <l-popup>
              <router-link :to="{ name: 'Blog', params: { id: blog.id }}" @click.native="$scrollToTop" class="blogmap__popup">
                <img :src="'http://strapi.schlenker.io' + blog['preview-image'].url">
                <div class="blogmap__popup__text">{{blog.title}}</div>
              </router-link>
            </l-popup>
          </l-marker>
        </v-marker-cluster>
    </l-map>
</template>
<script>
  import 'leaflet/dist/leaflet.css'
  import "leaflet.markercluster/dist/MarkerCluster.css"
  import "leaflet.markercluster/dist/MarkerCluster.Default.css"

  import {LMap, LTileLayer, LMarker, LIcon, LPopup} from 'vue2-leaflet'
  import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

  export default {
    name: 'BlogOverviewMap',
    components: {LMap, LTileLayer, LMarker, LIcon, LPopup, 'v-marker-cluster': Vue2LeafletMarkerCluster},
    props: {
      blogs: {
        required: true,
        default: [],
      },
      center: {
        type: Array,
        required: false,
        default: [47.313220, -1.319482],
      }
    },
    data () {
      return {
        url: 'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7dff32227b3b423bb5835d9e9d536c35',
        zoom: 3,
        iconSize: [32, 32],
        staticAnchor: [16, 18],
        mapOptions: {
          noWrap: true,
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.blogmap.mapObject.scrollWheelZoom.disable();
      })
    },
    methods: {
      getLatLongFromBlog(blog) {
        // https://www.google.com/maps/place/78234+Engen/@47.867525,8.6990114,12z/data=!3m1!4b1!4m5!3m4!1s0x479a79658692ee39:0x40d011660872bec7!8m2!3d47.854144!4d8.7737404
        const googleLink = blog.shortoverview['google-maps-link']
        const latLongSplit = googleLink.split('@')[1].split('/')[0].split(',')
        return [latLongSplit[0], latLongSplit[1]]
      },
    },
  }
</script>
<style>

  .blogmap__popup {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blogmap__popup img {
    height: 70px;
    margin-right: 5px;
  }

  .blogmap__popup__text, .blogmap__popup__text a:hover {
    font-size: 1.2em;
  }

  .blogmap__popup__text {
    color: black;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 0 !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
</style>
