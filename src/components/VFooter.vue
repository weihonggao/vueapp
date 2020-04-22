<template>
  <div class="footer-box">
    <div class="item-btn">
      <span style="font-size:20px;vertical-align:-7px;" class="iconfont icon-ccb"></span>
      <br/>
      <span class="font-text">首页</span>
    </div>
    <div class="item-btn">
      <span style="font-size:20px;vertical-align:-7px;" class="iconfont icon-licai1"></span>
      <br/>
      <span class="font-text">理财</span>
    </div>
    <div class="item-btn">
      <span style="font-size:20px;vertical-align:-7px;" class="iconfont icon-zhanghu"></span>
      <br/>
      <span class="font-text">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vfooter',
  props: ['content'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang='scss' type='text/css'>
  @import url(../assets/fonticon/iconfont.css);
  .footer-box {
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
    border: 1px solid green;
    position: absolute;

    .item-btn {
      width: 33.33%;
      height: 45px;
      float: left;

      .font-text {
        font-size: 12px;
        line-height: 15px;
        vertical-align: 10px;
      }
    }
  }
</style>
