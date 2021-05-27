<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <div id="domId" ref="domId" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0)" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'
import { AppKey, AppSecret } from '@/common/config'

export default {
  mixins: [resize, config],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,

      viewToken: '148ea997586244fdbd28354b48b85744',
      viewer3D: '',
      app: '',
      viewAdded: false,
      modelId: '1641597995361472'
    }
  },
  mounted() {
    this.loading = true
    const options = new BimfaceSDKLoaderConfig()
    options.viewToken = this.viewToken
    BimfaceSDKLoader.load(options, this.successCallback, this.failureCallback)
  },
  methods: {
    // 加载成功回调函数
    successCallback(viewMetaData) {
      if (viewMetaData.viewType == '3DView') {
        // ======== 判断是否为3D模型 ========
        // 获取DOM元素
        const dom4Show = this.$refs.domId
        const webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig()
        webAppConfig.domElement = dom4Show
        // 创建WebApplication
        this.app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig)
        // 添加待显示的模型
        this.loading = false
        this.app.addView(this.viewToken)
        // 从WebApplication获取viewer3D对象
        this.viewer3D = this.app.getViewer()
        // 监听添加view完成的事件
        this.viewer3D.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, () => {
          this.viewAdded = true
          // 自适应屏幕大小
          window.onresize = () => {
            this.viewer3D.resize(document.documentElement.clientWidth, document.documentElement.clientHeight - 40)
          }
          // 渲染3D模型
          this.viewer3D.render()
        })
      }
    },
    // 加载失败回调
    failureCallback(error) {
      this.$message.error(error.message)
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-wrapper {
  margin-bottom: 5px;
  border: none;
  box-shadow: none;
  background: url('~@/assets/img/wrap_bg.png') no-repeat center / 100% 100%;
  .chart-inner {
    height: 712px;
    .header {
      margin-left: 100px;
    }
    .content {
      height: 662px;
      padding: 20px;
      #domId {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media screen and(max-width: 992px) {
  .chart-inner {
    height: 600PX !important;
    overflow-x: auto;
    #domId {
      height: 530PX !important;
    }
  }
}
</style>
