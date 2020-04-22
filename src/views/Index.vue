<template>
  <div class="index-page">
    <v-header 
      :isShowBackBtn="false" 
      :isShowRightBtn="false"
      title="首页1"
      ref="vheader"
    ></v-header>
    <v-content>
      <template slot="content">
        <div @click="changeTile" class="change-title">改变title</div>
        <div @click="goPage(1)" class="change-title">入口一</div>
        <div @click="goPage(2)" class="change-title">入口二</div>
        <div @click="goPullPage" class="change-title">下拉刷新</div>
      </template>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vheader from '@/components/VHeader'
import vcontent from '@/components/VContent'
import vfooter from '@/components/VFooter'

export default {
  name: 'Index',
  data () {
    return {}
  },
  methods: {
    changeTile() {
      this.$refs.vheader.setTitle("建设银行首页")
    },
    goPage(type) {
      if(type == 1) {
        this.$router.push({path: '/pageone'})
      } else if(type == 2) {
        this.$router.push({path: '/pagetwo'})
      }
    },
    goPullPage() {
      this.$router.push({path: '/pullrefresh'})
    }
  },
  computed: {},
  components: {
    'v-header': vheader,
    'v-content': vcontent,
    'v-footer': vfooter,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' type='text/css'>
  .index-page {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 0 0 0;
    position: absolute;

    .change-title {
      border: 1px solid royalblue;
      height: 20px;
      width: 60px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      margin: 20px 20px 20px 20px;
    }
  }
</style>
