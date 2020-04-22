<template>
  <div style="border:1px solid blue;">
    <h3>兄弟组件1</h3>
    <div @click="say('组件1')" class="box">改变兄弟2</div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'component1',
  data () {
    return {
      content: '这是兄弟组件1'
    }
  },
  methods: {
    say(msg) {
        // console.log(this)
        // console.log(this.$vue)
        // console.log(this.$root.$on)
        // console.log(this.$root.$emit)
      this.$root.$emit('changeMsg2', msg)
    }
  },
  // mounted() {
  created() {
    let self = this;
    this.$root.$on('changeMsg1', data => self.content = data )
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
