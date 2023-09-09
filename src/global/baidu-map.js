import BaiduMap, { BmlMarkerClusterer } from 'vue-baidu-map'

export function registerBaiDuMap(Vue) {
  Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: '78ypfMHfinEebgGEmkdWvdNue8L1O65i'
  })
  Vue.use(BmlMarkerClusterer)
}
