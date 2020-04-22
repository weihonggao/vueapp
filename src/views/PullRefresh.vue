<template>
  <div class="pull-refresh">
    <v-header :onRightClick="headerRightHanl" title="pull refresh"></v-header>
    <div class="content-box">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div style="border: 1px solid red;height:1000px;">刷新次数: {{ count }}</div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import vheader from '@/components/VHeader'
import { PullRefresh, Toast, Dialog} from 'vant'
import axios from 'axios'
export default {
  name: 'pullrefresh',
  data () {
    return {
      count: 0,
      isLoading: false,

    }
  },
  methods: {
    onRefresh() {
      // setTimeout(() => {
      //   Toast('刷新成功');
      //   this.isLoading = false;
      //   this.count++;
      // }, 500);

      axios({
        method: "POST",
        url: `http://128.192.167.245:8080/cusp/httpServiceForJson/`,
        data: {
          Ctlg_CL_Ind: '0',
          Svc_LrgClss_CL_Inf: '01',
          Svc_Prj_FlAmt_Ind: '1',
        },
        headers: {
          "SYS_TX_CODE": "A01020237",
          "SYS_EVT_TRACE_ID":"2019121011111111111111112",
        }
      }).then(function(res) {
        console.log(res);
      }).catch(function (error) {
        console.log(error);
      });
    },
    headerRightHanl() {
      Toast('toast message');
      Dialog.alert({
        title: '标题',
        message: '详细内容'
      }).then(() => {});
    }
  },
  computed: {},
  components: {
    'v-header': vheader,
    'van-pull-refresh':PullRefresh,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' type='text/css'>
  .pull-refresh {
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
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>
