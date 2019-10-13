<template>
  <div>
    <div class="access-block-wrapper desktop-only">
      <div class="access-block" @click="showText = !showText">
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
      <transition name="fade">
        <div class="access-text-content" v-show="showText">
          <vue-markdown :source="access['text']"/>
        </div>
      </transition>
    </div>

    <div class="access-block-wrapper mobile-only" @click="showText = !showText">
      <div class="access-mobile-tile">
        <div class="access-block">
          <div class="access-icon-mobile">
            <div class="access-icon">
              <vue-material-icon :name="access.icon" :size="100"></vue-material-icon>
            </div>
          </div>
          <div class="travel-info__text-block access-mobile-right">
            <h4>{{access.source}}</h4>
            <div class="access-mobile">
              <div class="travel-info__text">{{access['travel-time-1']}}</div>
              <h1 class="access-arrow"><span>&#8594;</span></h1>
              <div class="travel-info__note">{{access['notes-1']}}</div>
            </div>
            <h4>{{access['destination-1']}}</h4>
            <template v-if="access['destination-2']">
              <div class="access-mobile">
                <div class="travel-info__text">{{access['travel-time-2']}}</div>
                <h1 class="access-arrow"><span>&#8594;</span></h1>
                <div class="travel-info__note">{{access['notes-2']}}</div>
              </div>
              <h4>{{access['destination-2']}}</h4>
            </template>
          </div>
        </div>
        <div class="toggle-tile-arrow">
          <vue-material-icon v-if="!showText" name="keyboard_arrow_down" :size="50" />
        </div>
      </div>
      <transition name="fade">
        <div class="access-text-content" v-show="showText">
          <vue-markdown :source="access['text']"/>
          <div class="toggle-tile-arrow">
            <vue-material-icon v-if="showText" name="keyboard_arrow_up" :size="50" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'AccessBlock',
    components: {VueMarkdown},
    props: {
      access: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {
        showText: false,
      }
    },
  }
</script>
<style>

  .access-block {
    display: flex;
    flex-direction: row;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background-color: #6b8d8b;
    padding: 1em;
    color: white;
  }

  .access-mobile-tile {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background-color: #6b8d8b;
    color: white;
  }

  .access-block:hover {
    background-color: #5f817f;
  }

  .access-mobile-right {
    text-align: center;
  }

  .access-mobile .access-arrow {
    transform: rotate(90deg);
    font-size: 4em;
    width: 20%;
  }

  .access-mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .access-mobile .travel-info__text {
    width: 30%;
    padding-left: 5%;
  }

  .access-mobile .travel-info__note {
    width: 30%;
    padding-right: 10px;
  }

  .mobile-only .access-text-content {
    padding: 2em 4em;
  }

  .desktop-only {
    display: none;
  }

  .access-icon-mobile {
    width: 30%;
    padding-left: 3%;
    padding-top: 3%;
  }

  .access-text-content {
    overflow: hidden;
    background-color: #6b8d8b;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    transition: max-height 0.2s ease-out;
    padding: 2em 12em;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: height 0.2s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0;
  }

  .toggle-tile-arrow {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #9bbcba;
  }

@media only screen and (min-width: 1000px) {

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: unset;
  }

  .access-block {
    height: 10em;
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
