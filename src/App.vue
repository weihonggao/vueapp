<template>
  <div id="app">
    <transition :name="transitionName">
        <keep-alive :include="cachePages">
          <router-view></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'vant/lib/index.css';
export default {
  name: 'app',
  data() {
    return {
      cachePages: [
        'pagetwo'
      ]
    }
  },
  computed: {
    ...mapGetters(['transitionName'])
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
