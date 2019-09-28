<template>
  <div class="card m-2 mt-5 blog-preview-card">
    <router-link :to="{ name: 'Blog', params: { id: blog.id }}">
        <img :src="'http://strapi.schlenker.io' + blog['preview-image'].url" class="card-img-top img-fluid">
        <div class="card-body">
            <div class="flex-row">
                <p class="card-text">{{blog.title}}</p>
            </div>
        </div>
    </router-link>
  </div>
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
.blog-preview-card a, .blog-preview-card a:hover {
  color: #323232;
  text-decoration: none !important; /* no underline */
}

.blog-preview-card {
  width: 25rem;
}
</style>
