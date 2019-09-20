<template>
    <div class="card m-2" style="width: 18rem;">
        <img :src="'http://strapi.schlenker.io' + blog['preview-image'].url" class="card-img-top">
        <div class="card-body">
            <div class="flex-row">
                <p class="card-text">{{blog.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'blog-preview',
  props: {
    blog: {}
  }
}
</script>
