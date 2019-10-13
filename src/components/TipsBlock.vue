<template>
  <div class="tips-section">
    <h1 class="tips-title">Tipps</h1>
    <div class="tips-box">
      <div v-for="tip in tips" class="tip-box">
        <div class="tip-icon">
          <vue-material-icon :name="tip.icon" :size="70" />
        </div>
        <div class="tip-box-right">{{tip.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TipsBlock',
    props: {
      tips: {
        required: true,
        type: Array,
      },
    }
  }
</script>
<style>
.tips-section {
  background-color: #6b8d8b;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 2em;
  color: white;
  margin-top: 4em;
  margin-bottom: 4em;
}
.tips-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0;
  font-size: 1.3em;
}
.tip-box {
  display: flex;
  width: 110%;
  height: 30px;
  margin: 2em 1em;
  align-items: center;
}
.tip-icon {
  width: 30%;
}
.tip-box-right {
  width: 70%;
}

@media only screen and (min-width: 600px) {
  .tip-box {
    width: 20%;
  }
}
</style>
