<template>
    <div class="activities-wrapper">
      <div v-for="activity in activities" class="activity-box">
        <h4>{{activity.title}}</h4>
        <h6 class="activity-subtitle"><i>{{activity.subtitle}}</i></h6>
        <div class="activity-box-content">
          <div class="activity-icon">
            <vue-material-icon :name="activity.icon" :size="80" />
          </div>
          <div class="activity-box-content-right">
            <ul v-if="activity['tip-1']">
              <li>{{activity['tip-1']}}</li>
              <li v-if="activity['tip-2']">{{activity['tip-2']}}</li>
              <li v-if="activity['tip-3']">{{activity['tip-3']}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'ActivityOverview',
    props: {
      activities: {
        required: true,
        type: Array,
      }
    }
  }
</script>
<style>

.activities-wrapper {
  display: flex;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: #6b8d8b;
  padding: 2em;
  color: white;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
.activity-box {
  width: 300px;
  border: 1px solid white;
  height: 190px;
  margin: 2em;
  padding: 10px;
  text-align: center;
}

.activity-icon {
  width: 20%;
}

.activity-box-content-right {
  width: 80%;
  margin-top: 15px;
  text-align: left;
  padding-left: 10px;
  font-size: 0.85em;
}

.activity-box-content {
  display: flex;
}

.activity-subtitle {
  height: 1em;
  /*text-align: left;*/
}

@media only screen and (min-width: 1000px) {
  .activity-column {
    width: 33%;
    margin-top: 5em;
  }
}
</style>
