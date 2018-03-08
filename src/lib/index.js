import VDatatables from './VDatatables.vue'
// 导入组件
const datatables = {
  install (Vue, options) {
    Vue.component(VDatatables.name, VDatatables)
  }
}
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(VDatatables)
// }
export default datatables
