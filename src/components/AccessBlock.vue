<template>
    <div class="access-block">
        <div class="access-icon">
          <vue-material-icon :name="access.icon" :size="100"></vue-material-icon>
        </div>
      <div class="travel-info__text-block">
        <h3>{{access['source']}}</h3>
        <div class="travel-info">
          <div class="travel-info__text">{{access['travel-time-1']}}</div>
          <h1 class="access-arrow"><span>&#8594;</span></h1>
          <div class="travel-info__note">{{access['notes-1']}}</div>
        </div>
        <h3>{{access['destination-1']}}</h3>
        <template v-if="access['destination-2']">
          <div class="travel-info">
            <div class="travel-info__text">{{access['travel-time-2']}}</div>
            <h1 class="access-arrow"><span>&#8594;</span></h1>
            <div class="travel-info__note">{{access['notes-2']}}</div>
          </div>
          <h3>{{access['destination-2']}}</h3>
        </template>
      </div>
      <div class="access__tips__wrapper"></div>
      <div v-if="access['tipp-1']" class="access__tips">
        <ul>
          <li>{{access['tipp-1']}}</li>
          <li v-if="access['tipp-2']">{{access['tipp-2']}}</li>
          <li v-if="access['tipp-3']">{{access['tipp-3']}}</li>
        </ul>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'AccessBlock',
    props: {
      access: {
        type: Object,
        required: true,
      },
    },
  }
</script>
<style>

  .access-block {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background-color: #6b8d8b;
    height: 14em;
    padding: 1em;
    color: white;
  }

@media only screen and (min-width: 1000px) {

  .access-block {
    flex-direction: row;
  }

  .access-icon {
    width: 10%;
    margin-left: 2%;
    display: flex;
    align-items: center;
    max-width: 120px;
  }

  .access-arrow {
    font-size: 5em;
    padding: 0 20px;
    justify-content: center;
    display: flex;
  }

  .travel-info {
    justify-content: center;
    width: 15%;
  }

  .travel-info__text-block {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: -0.5em;
  }

  .travel-info__text {
    justify-content: center;
    display: flex;
    margin-bottom: -1.4em;
  }

  .travel-info__note {
    justify-content: center;
    display: flex;
    width: 100%;
    height: 1em;
    text-align: center;
    margin-top: -1.6em;
  }

  .access__tips {
    border-left: 1px solid white;
    margin-left: 15px;
    margin-right: 20px;
    display: flex;
    float: right;
    width: 25em;
  }

  .access__tips__wrapper {
    float: right;
    flex-grow: 1;
  }

  .access__tips li {
    font-size: 1.2em;
  }

  .access__tips ul li::before {
    content: ">"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: white; /* Change the color */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
}
</style>
