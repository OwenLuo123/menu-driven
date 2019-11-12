import Vue from 'vue'
import App from './App.vue'
import Valueop from './components/valueop.vue'
import Andor from './components/andor.vue'
import Slot1 from './components/slot1.vue'
import Slot2 from './components/slot2.vue'
import AddButton from './components/addbutton.vue'
import Autocomplete from './components/autocomplete.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)


new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Valueop),
}).$mount('#valueop')

new Vue({
  render: h => h(Andor),
}).$mount('#andor')

new Vue({
  render: h => h(Slot1),
}).$mount('#slot1')

new Vue({
  render: h => h(Slot2),
}).$mount('#slot2')

new Vue({
  render: h => h(AddButton),  
}).$mount('#addbutton')

Vue.component('autocomplete', Autocomplete)

new Vue({
  render: h => h(Autocomplete), 
}).$mount('#autocomplete')

