<template>
  <div>
    <div>Auf einen Blick:</div>
    <div v-if="shortInformation" class="overview-wrapper">
      <div class="card short-info">
        <div class="card-body donut-card-body">
          <vc-donut :size="65" :thickness="30" unit="px" :sections="timeNeeded" :total="12 * 60">{{shortInformation['time-needed']}}min</vc-donut>
        </div>
      </div>
      <div class="card short-info">
        <div class="card-body donut-card-body">
          <vc-donut :size="65" :thickness="30" unit="px" :sections="timeRecommended" :total="10 * 60">{{shortInformation['time-recommended']}}min</vc-donut>
        </div>
      </div>
      <div class="card short-info">
        <div class="card-body">
        </div>
      </div>
      <div class="card short-info">
        <div class="card-body">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Donut from 'vue-css-donut-chart'

Vue.use(Donut)

export default {
  name: 'BlogShortOverview',
  props: {
    shortInformation: {
      required: true
    }
  },
  computed: {
    timeNeeded() {
      if (this.shortInformation) {
        return [{ value: this.shortInformation['time-needed'], color: '#CD5555' }]
      } else {
        return []
      }
    },
    timeRecommended() {
      if (this.shortInformation) {
        return [{ value: this.shortInformation['time-recommended'], color: '#2fab60' }]
      } else {
        return []
      }
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
.short-info {
  margin: 1em 0.5em;
  height: 7em;
  width: 7em;
}
.donut-card-body {
  padding-top: 0.6em;
}
/* Donut chart text size */
.cdc-text {
  font-size: 0.8em !important;
}
</style>
