<template>
  <div class="app-header">
    <h1 class="title">{{ title }}</h1>
    <span class="time">{{ date }}</span>
  </div>
</template>

<script>
import { title } from '@/settings'
import { getDate } from '@/utils'

export default {
  data() {
    return {
      title: title,
      date: null,
      timer: null
    }
  },
  mounted() {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.date = getDate()
    }, 1000)
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76px;
  background: url('~@/assets/img/header_bg.png') no-repeat center center / 100% 100%;
  .title {
    color: #efe4e4;
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
  }
  .time {
    position: absolute;
    top: 0;
    right: 20px;
    line-height: 63px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
    z-index: 9;
  }
}
</style>
