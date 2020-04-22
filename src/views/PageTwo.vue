<template>
  <div class="page-two">
    <v-header title="页面二" ></v-header>
    <div class="content-box">
      <input style="margin-top: 20px;border:1px solid blue;" v-model="val" >
      <div @click="wirteValue" class="btn-box">将输入框值写入子组件</div>
      <children-comp :callPrantCompActive="changeVal" ref="childComp" ></children-comp>
    </div>
  </div>
</template>

<script>
import vheader from '@/components/VHeader'
import ChildrenComp from '@/components/ChildrenComp'

export default {
  name: 'pagetwo',
  data () {
    return {
      val: ""
    }
  },
  methods: {
    wirteValue() {
      this.$refs.childComp.setContent(this.val)
    },
    changeVal(val) {
      this.val = val
    }
  },
  computed: {},
  components: {
    'v-header': vheader,
    'children-comp': ChildrenComp,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' type='text/css'>
  .page-two {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 0 0 0;
    position: absolute;

    .content-box {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid blue;

      .btn-box {
        width: 160px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        font-size: 12px;
        border: 1px solid red;
        margin: 20px 20px 20px 20px;
      }
    }
  }
</style>
