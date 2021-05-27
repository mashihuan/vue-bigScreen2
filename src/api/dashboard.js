import request from '@/utils/request'

// 周跟踪
export function weekMonitor(data) {
  return request({
    url: '/screem/t014-gld-week-monitor-entity/list',
    method: 'POST',
    data
  })
}

export function video(data) {
  return request({
    url: '/screem/t011-video-statistics/list',
    method: 'POST',
    data
  })
}
