<template>
  <div class="page-one">
    <v-header title="页面一"></v-header>
    <div class="content-box">
        <div>兄弟组件之间的通信</div>
        <v-brother-comp1></v-brother-comp1>
        <v-brother-comp2></v-brother-comp2>
    </div>
  </div>
</template>

<script>
import vheader from '@/components/VHeader'
import brotherComp1 from '@/components/BrotherComp1'
import brotherComp2 from '@/components/BrotherComp2'

export default {
  name: 'pageone',
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'v-header': vheader,
    'v-brother-comp1': brotherComp1,
    'v-brother-comp2': brotherComp2,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' type='text/css'>
  .page-one {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 0 0 0;
    position: absolute;

    .content-box {
      top: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid green;
      position: absolute;
    }
  }
</style>
