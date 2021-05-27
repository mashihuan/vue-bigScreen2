<template>
  <div ref="myChart" class="chart" />
</template>

<script>
import echarts from 'echarts'
import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Array,
      default() {
        return [
          { name: '本月实际完成', value: [20, 1, 3, 12, 16, 17, 16, 12, 16, 20, 14, 13], color: '#298d45' },
          { name: '本月计划完成', value: [20, 1, 3, 23, 22, 10, 13, 14, 12, 15, 12, 6], color: '#ffa200' },
          { name: '累计实际完成', value: [20, 23, 32, 43, 63, 102, 110, 155, 200, 230, 240, 250], type: 'line', color: '#ffd200' },
          { name: '累计计划完成', value: [20, 22, 33, 45, 63, 102, 120, 165, 203, 230, 234, 240], type: 'line', color: '#4B5F65' }
        ]
      }
    },
    chartX: {
      type: Array,
      default() {
        return ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    }
  },
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
      // this.showLoading()
      this.setOptions()
    },
    setOptions() {
      const series = this.chartData.map(item => {
        return {
          type: item.type ? item.type : 'bar',
          data: item.value,
          name: item.name,
          barWidth: 5,
          itemStyle: {
            color: item.color
          }
        }
      })
      this.chart.setOption({
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
            show: false,
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
.chart {
  height: 512px;
}
</style>
