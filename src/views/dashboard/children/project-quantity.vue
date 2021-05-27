<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <div class="count">
          <div class="item">
            <div class="desc">本月实际完成</div>
            <div class="num yellow"><span>35470</span>个</div>
          </div>
          <div class="item">
            <div class="desc">本月计划完成</div>
            <div class="num yellow"><span>35470</span>个</div>
          </div>
          <liquid-chart class="chart" color="#ff7800" :gradient="['#ff7800', '#F29440', '#ffd200']" />
        </div>

        <div class="count">
          <div class="item">
            <div class="desc">本月实际数量</div>
            <div class="num green"><span>27868</span>个</div>
          </div>
          <div class="item">
            <div class="desc">本月计划数量</div>
            <div class="num green"><span>35990</span>个</div>
          </div>
          <liquid-chart class="chart" color="#007521" :gradient="['#007521', '#32ba59', '#64ff90']" />
        </div>

        <bar-chart />
      </div>
    </div>
  </div>
</template>

<script>
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'
import LiquidChart from '@/components/chart/liquid-chart'
import BarChart from '@/components/chart/bar-chart'

export default {
  components: {
    LiquidChart,
    BarChart
  },
  mixins: [resize, config],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.content {
  padding: 0 10px;
  .count {
    display: flex;
    justify-content: space-between;
    .item {
      margin-top: 10px;
      .desc {
        color: #fff;
        font-size: 14px;
      }
      .num {
        margin-top: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        span {
          font-size: 26px;
        }
        &.yellow {
          color: #ffd200;
        }
        &.green {
          color: #00d03b;
        }
      }
    }
    .chart {
      flex-shrink: 0;
    }
  }
  .count:last-child {
    margin-top: 20px;
  }
}
</style>
