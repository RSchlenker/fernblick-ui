<template>
  <div class="section-title">
    <hr/>
    <h1><slot></slot></h1>
    <hr/>
  </div>
</template>
<script>
  export default {
    name: 'SectionTitle'
  }
</script>
<style>
.section-title hr {
  border-top: 3px solid black;
}
  .section-title {
    margin-top: 8em;
    margin-bottom: 2em;
  }
</style>
