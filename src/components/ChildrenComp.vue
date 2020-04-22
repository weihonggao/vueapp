<template>
  <div class="children-box">
    <h3>子组件标题</h3>
    <div>{{ content }}</div>
    <div 
      @click="callPrantCompActive('这是子组件的一段文本')" 
      class="box"
    >调用父组件的方法</div>
  </div>
</template>

<script>
export default {
  name: 'ChildrenComp',
  props: {
    pcontent: {
      type: String,
      required: false,
      default: '这是子组件的一段文本'
    },
    callPrantCompActive: {
      type: Function,
      required: false,
      default: function() {}
    }
  },
  data () {
    return {
      content: this.pcontent
    }
  },
  methods: {
    setContent(text) {
      this.content = text
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' type='text/css'>
  .children-box {
    border: 1px solid red;
    text-align: center;
    margin: 20px 20px 20px 20px;
    padding-bottom: 20px;

    .box {
      border: 1px solid red;
      width: 160px;
      margin-left: 30px;
    }
  }
</style>
