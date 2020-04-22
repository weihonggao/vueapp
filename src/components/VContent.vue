<template>
  <div class="content-box">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'vcontent',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang='scss' type='text/css'>
  .content-box {
    top: 40px;
    left: 0;
    right: 0;
    bottom: 45px;
    border: 1px solid blue;
    position: absolute;
  }
</style>
