<template>
  <div style="border:1px solid blue;">
    <h3>兄弟组件2</h3>
    <div @click="say('组件2')" class="box">改变兄弟1</div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'component2',
  data () {
    return {
      content: '这是兄弟组件2'
    }
  },
  methods: {
    say(msg) {
      this.$root.$emit('changeMsg1', msg)
    }
  },
  // mounted() {
  created() {
    let self = this;
    this.$root.$on('changeMsg2', data => self.content = data )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' type='text/css'>
  .box {
    width: 80px;
    height: 30px;
    border: 1px solid red;
    line-height: 30px;
    text-align: center;
    margin: auto;
  }
</style>
