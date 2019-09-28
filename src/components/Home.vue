<template>
  <div>
    <h1>Willkommen bei Fernblick</h1>
    <l-map ref="blogmap" class="blogmap mt-4" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-icon
          :icon-size="iconSize"
          icon-url="https://fonts.gstatic.com/s/i/materialicons/golf_course/v1/24px.svg?download=true" >
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  import {LMap, LTileLayer, LMarker, LIcon} from 'vue2-leaflet'
  import 'leaflet/dist/leaflet.css'

  export default {
    name: 'Home',
    components: {LMap, LTileLayer, LMarker, LIcon},
    data () {
      return {
        url: 'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7dff32227b3b423bb5835d9e9d536c35',
        zoom: 3,
        center: [47.313220, -1.319482],
        markerLatLng: [47.313220, -1.319482],
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.blogmap.mapObject.scrollWheelZoom.disable();
      })
    },
  }
</script>
<style>
  .blogmap {
    position: absolute;
    left: 0;
    right: 0;
    height: 400px !important;
  }
</style>
