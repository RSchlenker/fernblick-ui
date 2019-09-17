<template>
  <div>
    Welcome on the blog Overview
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'

export default {
  name: 'BlogOverview',
  mounted () {
    const strapi = new Strapi('http://schlenker.io:1337')
    strapi.getEntries('blogs').then((result) => {
      console.log(result)
    })
  }
}
</script>
