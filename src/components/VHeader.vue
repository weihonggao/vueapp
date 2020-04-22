<template>
  <div class="header-box">
    <div v-if="isShowBackBtn" @click="back" class="back-box">
      <span class="iconfont icon-houtui1"></span>
    </div>
    <div v-if="isShowRightBtn" @click="onRightClick" class="right-box">
      <span class="iconfont icon-omit"></span>
    </div>
    <span class="title-font">{{ dtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  props: {
    title: {
      type: String,
      required: true,
      default: '标题一'
    },
    isShowBackBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
    isShowRightBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
    onRightClick: {
      type: Function,
      required: false,
      default: function() {}
    }
  },
  data () {
    return {
      dtitle: this.title
    }
  },
  methods: {
    setTitle(title) {
      this.dtitle = title
    },
    back() {
      this.$router.back(-1)
    },
  }
}
</script>

<style scoped lang='scss' type='text/css'>
  @import url(../assets/fonticon/iconfont.css);
  .header-box {
    border: 1px solid red;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 40px;

    .back-box {
      line-height: 40px;
      width: 40px;
      height: 40px;
      float: left;
    }

    .right-box {
      line-height: 40px;
      width: 40px;
      height: 40px;
      float: right;
    }

    .title-font {
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
