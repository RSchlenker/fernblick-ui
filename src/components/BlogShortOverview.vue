<template>
  <div>
    <div v-if="shortInformation" class="overview-wrapper">
      <div class="short-info-item rating">
        <vue-material-icon name="favorite_border" :size="50"></vue-material-icon>
        <div>{{shortInformation['rating']}}/10</div>
      </div>
      <div class="short-info-item time-needed">
        <vue-material-icon name="timelapse" :size="50"></vue-material-icon>
        <div>{{shortInformation['time-needed']}}min</div>
      </div>
      <div class="short-info-item time-recommended">
        <vue-material-icon name="timelapse" :size="50"></vue-material-icon>
        <div>{{shortInformation['time-recommended']}}min</div>
      </div>
      <div class="short-info-item location">
        <a target="_blank" rel="noopener noreferrer" :href="shortInformation['google-maps-link']">
          <vue-material-icon name="my_location" :size="50"></vue-material-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogShortOverview',
  props: {
    shortInformation: {
      required: true
    }
  },
}
</script>

<style>
.overview-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
}

.short-info-item {
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1em;
}

.time-needed {
  color: #CD5555;
}

.time-recommended {
  color: #6db582;
}

.rating {
  color: #93B5B3;
}

.location, .location a {
  color: #93B5B3;
  justify-content: start;
}
.location a:hover {
  color: #6b8d8b;
}
</style>
