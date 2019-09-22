<template>
  <div>
    <div>Auf einen Blick:</div>
    <div class="overview-wrapper">
      <div class="card short-info">
        <div class="card-body donut-card-body">
          <vc-donut :size="50" unit="px" :sections="timeNeeded" :total="12 * 60">{{data['time-needed']}}min</vc-donut>
        </div>
      </div>
      <div class="card short-info">
        <div class="card-body donut-card-body">
          <vc-donut :size="50" unit="px" :sections="timeRecommended" :total="12 * 60">{{data['time-recommended']}}min</vc-donut>
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
import 'vue-css-donut-chart/dist/vcdonut.css'

Vue.use(Donut)

export default {
  name: 'BlogShortOverview',
  props: {
    data: {
      required: true
    }
  },
  data () {
    return {
      timeNeeded: [{ value: this.data['time-needed'], color: '#17a2b8' }],
      timeRecommended: [{ value: this.data['time-recommended'], color: '#2eb859' }]
    }
  }
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
  height: 5em;
  width: 5em;
}
.donut-card-body {
  padding-top: 0.6em;
}
/* Donut chart text size */
.cdc-text {
  font-size: 0.8em !important;
}
</style>
