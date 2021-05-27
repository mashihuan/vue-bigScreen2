<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <div class="video-list">
          <div v-for="(item,index) of list" :key="index" class="video-item">
            <video-player
              ref="videoPlayer"
              :playsinline="true"
              :options="{
                ...playerOptions,
                sources: [{
                  src: item,
                  type: 'video/mp4'
                }]
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import { video } from '@/api/dashboard'

import resize from '@/common/mixins/resize'

export default {
  components: {
    videoPlayer
  },
  mixins: [resize],
  data() {
    return {
      title: '视频监控统计',
      totalCount: 0,
      normalCount: 0,
      problemCount: 0,
      list: [
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4',
        '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4'
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: '//video.699pic.com/videos/21/35/97/a_manzkSquSiR51583213597.mp4', // 路径
          type: '' // 类型
        }],
        poster: '', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          fullscreenToggle: true, // 全屏按钮
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false
        }
      }
    }
  },
  mounted() {
    // this.getInfo()
  },
  methods: {
    async getInfo() {
      const res = await video({})
      const data = (res.data && res.data.length && res.data[0]) || {}
      const arr = []
      for (let i = 1; i <= 23; i++) {
        let j = i
        if (j < 10) {
          j = '0' + j
        }
        if (data['chartx' + j]) {
          arr.push(data['chartx' + j])
        }
      }
      this.list = arr
      this.totalCount = data.totalCount
      this.normalCount = data.normalCount
      this.problemCount = data.problemCount
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';

::v-deep.chart-wrapper {
  .chart-inner {
    height: 193px;
    .header {
      background-size: 50% 100%;
    }
    .content {
      height: 163px;
      overflow: auto;
      .video-list {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;

        .video-item {
          width: 19%;
          height: 70px !important;
          margin-top: 10px;
          margin-left: 1%;
          overflow: hidden;

          .video-js {
            .vjs-control-bar {
              .vjs-volume-panel, .vjs-current-time, .vjs-time-control, .vjs-duration, .vjs-progress-control, .vjs-playback-rate {
                display: none;
              }
            }
            &.vjs-fullscreen {
              .vjs-control-bar {
                .vjs-volume-panel, .vjs-current-time, .vjs-time-control, .vjs-duration, .vjs-progress-control, .vjs-playback-rate {
                  display: inherit;
                }
              }
            }
          }
          .vjs-big-play-button {
            left: 50%;
            top: 35%;
            width: 40px;
            height: 40px;
            transform: translate(-50%, -50%);
            line-height: 40px;
            border-radius: 50% !important;
          }
        }
      }
    }
  }
}

@media screen and(max-width: 992px) {
  .video-item {
    min-height: 100px !important;
  }
}
</style>
