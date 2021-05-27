<template>
  <div ref="myChart" class="Chart" />
</template>

<script>
import echarts from 'echarts'
import 'echarts-liquidfill/src/liquidFill.js'
import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  props: {
    color: {
      type: String,
      default: ''
    },
    gradient: {
      type: Array,
      default() {
        return []
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
      this.chart.setOption({
        series: [{
          type: 'liquidFill',
          radius: '90%',
          data: [0.6],
          outline: {
            borderDistance: 3,
            itemStyle: {
              borderWidth: 3,
              borderColor: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: this.gradient[0]
                  },
                  {
                    offset: 0.5,
                    color: this.gradient[1]
                  },
                  {
                    offset: 1,
                    color: this.gradient[2]
                  }
                ],
                globalCoord: false
              },
              shadowBlur: 10,
              shadowColor: 'rgba(13, 13, 46, 1)'
            }
          },
          backgroundStyle: 'transparent',
          color: [this.color],
          label: {
            fontSize: 18,
            color: '#fff'
          }
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 60px;
  height: 60px;
}
</style>
