<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">人员进出</h4>
      </div>
      <div class="content">
        <div class="left">
          <div class="top">
            <div class="label">在场人数</div>
            <div class="value"><span>136</span>人</div>
          </div>
          <div class="bottom">
            <div class="item">
              <span class="label">姓名：</span>
              <span class="value">张三</span>
            </div>
            <div class="item">
              <span class="label">工号：</span>
              <span class="value">0028</span>
            </div>
            <div class="item">
              <span class="label">入场日期：</span>
              <span class="value">2021-5-21</span>
            </div>
            <div class="item">
              <span class="label">当前状态：</span>
              <span class="value">进场</span>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/img/logo.png" alt="">
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
    padding: 0 10px;
    margin: 0;
    color: #fff;
    margin-top: 10px;
    color: #fff;
    .top {
      .value {
        margin-top: 5px;
        span {
          font-weight: bold;
          font-size: 28px;
          color: #4BF3F9;
        }
      }
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5px;
      span {
        display: inline-block;
      }
      .item {
        width: 50%;
        margin-top: 10px;
        .label {
          min-width: 80px;
        }
        .value {
          color: #1399F9;
        }
      }
    }
    .right {
      flex-shrink: 0;
      width: 80px;
      height: 110px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media screen and(max-width: 992px) {
  .right {
    min-width: 80px;
    min-height: 115px;
  }
}
</style>
