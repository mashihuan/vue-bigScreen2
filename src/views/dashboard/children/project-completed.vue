<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <div class="line" />
        <div class="list">
          <div class="item">
            <div class="time-wrap">
              <div class="time">
                <div class="year">2021年</div>
                <div class="date">05月20日</div>
              </div>
              <div class="tag">
                <img src="@/assets/img/icon-plan.png" alt="">
              </div>
            </div>
            <div class="name">里程碑任务名称</div>
            <div class="times">
              <div class="time">
                <div class="label">计划开始时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">实际开始时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">计划结束时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">实际结束时间：</div>
                <div class="value">2021-5-21</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="time-wrap">
              <div class="time">
                <div class="year">2021年</div>
                <div class="date">05月20日</div>
              </div>
              <div class="tag">
                <img src="@/assets/img/icon-plan.png" alt="">
              </div>
            </div>
            <div class="name">里程碑任务名称</div>
            <div class="times">
              <div class="time">
                <div class="label">计划开始时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">实际开始时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">计划结束时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">实际结束时间：</div>
                <div class="value">2021-5-21</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="time-wrap">
              <div class="time">
                <div class="year">2021年</div>
                <div class="date">05月20日</div>
              </div>
              <div class="tag">
                <img src="@/assets/img/icon-plan.png" alt="">
              </div>
            </div>
            <div class="name">里程碑任务名称</div>
            <div class="times">
              <div class="time">
                <div class="label">计划开始时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">实际开始时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">计划结束时间：</div>
                <div class="value">2021-5-21</div>
              </div>
              <div class="time">
                <div class="label">实际结束时间：</div>
                <div class="value">2021-5-21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'

export default {
  mixins: [resize, config],
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
  height: 380px;
  .content {
    display: flex;
    padding: 0 10px;
    .line {
      flex-shrink: 0;
      width: 1px;
      margin-right: 10px;
      margin-top: 15px;
      background: rgba(255, 255, 255, 0.9);
    }
    .list {

      .item {
        margin-top: 10px;
        .time-wrap {
          display: flex;
          color: #fff;
          .time {
            .year {
              position: relative;
              font-size: 14px;
              &:before {
                position: absolute;
                left: -13.5px;
                top: 5px;
                content: '';
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.9);
              }
            }
            .date {
              margin-top: 5px;
              font-size: 18px;
            }
          }
          .tag {
            img {
              width: 40px;
              height: 40px;
              margin-left: 20px;
            }
          }
        }
        .name {
          margin-top: 5px;
          color: #fff;
          font-size: 14px;
        }
        .times {
          display: flex;
          flex-wrap: wrap;
          margin-top: 5px;
          .time {
            display: flex;
            width: 50%;
            margin-top: 5px;
            color: #0096ff;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
