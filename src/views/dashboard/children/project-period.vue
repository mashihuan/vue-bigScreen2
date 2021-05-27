<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">工期管理</h4>
      </div>
      <div class="content">
        <div class="item">
          <div class="project">
            <div class="tag">逾期预警</div>
            <div class="name">任务名称1</div>
          </div>
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
          <div class="project">
            <div class="tag">逾期预警</div>
            <div class="name">任务名称1</div>
          </div>
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
          <div class="project">
            <div class="tag">逾期预警</div>
            <div class="name">任务名称1</div>
          </div>
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
  height: 280px;
  .content {
    padding: 0 10px;
    .item {
      margin-top: 10px;
      .project {
        display: flex;
        align-items: center;
        .tag {
          padding: 2px;
          border: 1px solid #ffcf3e;
          font-size: 12px;
          color: #ffcf3e;
          transform: scale(0.9);
          &.red {
            border-color: #ff100a;
            color: #ff100a;
          }
          &.yellow {
            border-color: #ffcf3e;
            color:#ffcf3e;
          }
          &.green {
            border-color: #3eff47;
            color: #3eff47;
          }
        }
        .name {
          margin-left: 15px;
          color: #fff;
        }
      }
      .times {
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        .time {
          display: flex;
          width: 50%;
          margin-bottom: 5px;
          color: #0096ff;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
