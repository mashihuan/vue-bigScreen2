<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">项目概况</h4>
      </div>

      <div class="content">
        <div class="list">
          <div class="item">
            <span class="label">大洲：</span>
            <span class="value">亚洲</span>
          </div>
          <div class="item">
            <span class="label">国家：</span>
            <span class="value">中国</span>
          </div>
          <div class="item">
            <span class="label">省：</span>
            <span class="value">江苏</span>
          </div>
          <div class="item">
            <span class="label">市：</span>
            <span class="value">南京</span>
          </div>
          <div class="item">
            <span class="label">县(区)：</span>
            <span class="value">玄武</span>
          </div>
          <div class="item">
            <span class="label">详细地址：</span>
            <span class="value">珠江路688号</span>
          </div>
          <div class="item">
            <span class="label">工程名称：</span>
            <span class="value">某某某某工程</span>
          </div>
          <div class="item">
            <span class="label">计划开始时间：</span>
            <span class="value">2021-5-21</span>
          </div>
          <div class="item">
            <span class="label">计划结束时间：</span>
            <span class="value">2021-11-21</span>
          </div>
          <div class="item">
            <span class="label">业主：</span>
            <span class="value">玄武区政府</span>
          </div>
          <div class="item">
            <span class="label">建筑结构：</span>
            <span class="value">钢筋混凝土</span>
          </div>
          <div class="item">
            <span class="label">实际开始时间：</span>
            <span class="value">2021-5-21</span>
          </div>
          <div class="item">
            <span class="label">实际结束时间：</span>
            <span class="value">2021-11-21</span>
          </div>
        </div>

        <div ref="myChart" class="chart" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import chinaJson from '@/common/china'

import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myChart)
      echarts.registerMap('china', chinaJson, {})
      // this.showLoading()
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        geo: {
          map: 'china',
          show: true,
          top: 20,
          right: 0,
          bottom: -40,
          left: 0,
          itemStyle: {
            areaColor: '#4F98F2',
            borderColor: '#222D93'
          }
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            rippleEffect: {
              scale: 10,
              color: '#FFFAFE'
            },
            data: [
              { name: '', value: [7248, 4573] }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-inner {
  height: 285px;
  .content {
    display: flex;
    padding: 10px 10px 0 10px;
    .list {
      flex-shrink: 0;
      .item {
        display: flex;
        margin-bottom: 3px;
        font-size: .0625rem;
        span {
          display: inline-block;
          line-height: 1.3;
          transform: scale(0.9);
        }
        .label {
          min-width: 90px;
          color: rgba(255, 255, 255, 0.9);
        }
        .value {
          color: #028ef4;
          min-width: 100px;
        }
      }
    }
    .chart {
      flex: 1;
    }
  }
}
</style>
