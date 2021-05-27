<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">劳动力</h4>
      </div>
      <div class="content">
        <div class="item left">
          <div class="desc">最近一天劳动力人数</div>
          <div class="num"><span>108</span>人</div>
        </div>

        <div class="item right">
          <div class="desc">最近一天劳动力人数</div>
          <div class="num"><span>126</span>人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-inner {
  height: 160px;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 130px;
    padding: 0 10px;
    color: #fff;
    .item {
      width: 48%;
      height: 90px;
      .desc {
        font-size: 12px;
        margin-top: 5px;
        margin-left: 133px;
      }
      .num {
        margin-top: 20px;
        margin-left: 133px;
        span {
          font-size: 40px;
        }
      }
    }
    .left {
      background: url('~@/assets/img/personnel.png') no-repeat center / 100% 100%;
    }
    .right {
      background: url('~@/assets/img/personnel-max.png') no-repeat center / 100% 100%;
    }
  }
}
</style>
