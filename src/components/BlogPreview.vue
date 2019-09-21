<template>
  <router-link :to="{ name: 'Blog', params: { id: blog.id }}">
    <div class="card m-2" style="width: 18rem;">
        <img :src="'http://strapi.schlenker.io' + blog['preview-image'].url" class="card-img-top img-fluid">
        <div class="card-body">
            <div class="flex-row">
                <p class="card-text">{{blog.title}}</p>
            </div>
        </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'blog-preview',
  props: {
    blog: {
      required: true
    }
  }
}
</script>
<style>
a,a:hover {
  color: #323232;
  text-decoration: none !important; /* no underline */
}
</style>
