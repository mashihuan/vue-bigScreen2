<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">周跟踪</h4>
      </div>
      <div class="content">
        <div class="top">
          <img src="@/assets/img/sun.png" alt="">
          <div class="temp">
            <div class="num">26</div>
            <div class="desc">
              <p><span>℃</span><sup>晴</sup></p>
              <p>28℃/30℃</p>
            </div>
          </div>
          <div class="pm">
            PM值<span>48</span>
          </div>
          <div class="wind">
            <div class="label">
              <span>风</span>
              <span>东南4级</span>
            </div>
            <div class="label">
              <span>阵风</span>
              <span>东南2级</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div v-for="item of 6" :key="item" class="item">
            <img src="@/assets/img/sun.png" alt="">
            <div class="date">5月22日</div>
            <div class="temp">28℃/30℃</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  data() {
    return {
      currentData: {},
      list: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-inner {
  height: 175px;
  .content {
    padding: 0 10px;
    color: #fff;
    .top {
      display: flex;
      align-items: center;
      img {
        flex-shrink: 0;
        width: 70px;
        transform: scale(1.2);
      }
      .temp {
        display: flex;
        align-items: center;
        margin-left: 20px;
        .num {
          margin-right: 5px;
          font-size: 40px;
        }
        .desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          p:first-child  {
            span {
              font-size: 24px;
              color: #fff;
            }
          }
          sup {
            position: relative;
            top: -5px;
            right: -10px;
          }
        }
      }
      .pm {
        margin: 0 30px;
        font-size: 12px;
        span {
          font-size: 20px;
        }
      }
      .wind {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        .label {
          margin-bottom: 5px;
          span:first-child {
            display: inline-block;
            min-width: 30px;
          }
        }
      }
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        img {
          width: 40px;
        }
        .date, .temp {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
}
</style>
