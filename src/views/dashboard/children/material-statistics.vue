<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <h4 class="header">
        <span class="title">{{ title }}</span>
      </h4>
      <div class="content">
        <!-- <div class="title-wrap">
          <div class="title">材料价格统计</div>
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div> -->
        <div ref="myChart" class="chart" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'
import { colors } from '@/common/config'

export default {
  mixins: [resize, config],
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    chartData: {
      type: Array,
      default() {
        return [
          { name: '材料1', value: [10, 20, 30, 10, 0] },
          { name: '材料2', value: [0, 10, 20, 4, 9] }
        ]
      }
    },
    chartX: {
      type: Array,
      default() {
        return [1, 2, 3, 4, 5]
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myChart)
      this.showLoading()
      this.setOptions()
    },
    setOptions() {
      const series = this.chartData.map(item => {
        return {
          type: 'line',
          stack: true,
          data: item.value,
          name: item.name,
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 2,
          areaStyle: {
            opacity: 0.2
          }
        }
      })
      this.chart.setOption({
        color: colors,
        grid: {
          left: 0,
          top: 40,
          bottom: 5,
          right: 15,
          containLabel: true
        },
        legend: {
          right: 0,
          top: 10,
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: '#0085E8'
          }
        },
        xAxis: {
          data: this.chartX,
          name: this.unit,
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#0085E8'
          },
          splitLine: {
            lineStyle: {
              color: '#0085E8',
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#0085E8'
          },
          splitLine: {
            lineStyle: {
              color: '#0085E8',
              type: 'dashed'
            }
          }
        },
        tooltip: {
          confine: true,
          backgroundColor: 'rgba(19,46,108, 0.7)',
          transitionDuration: 0,
          textStyle: { color: '#fff' },
          extraCssText: 'border: 1px solid #007AD8',
          axisPointer: {
            type: 'shadow'
          },
          trigger: 'axis'
        },
        series: series
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-inner {
  height: 220px;
  .content {
    padding: 0 10px;
    color: #fff;
    .chart {
      height: 190px;
    }
  }
}
</style>

