require('./bootstrap');

import router from './router'
import Buefy from 'buefy'
import VueAutonumeric from 'vue-autonumeric/dist/vue-autonumeric.min.js'
import homepage from './views/manager/Homepage.vue'
import createSite from './views/manager/site/NewSite.vue'

Vue.use(Buefy)
Vue.component('VueAutonumeric', VueAutonumeric);
//Vue.config.devtools = false

const turkishDate = function (value) {
    if (value == "" || value == null) {
      return value;
    } else {
      value = new Date(value).toLocaleDateString('tr-TR');
      return value;
    }
  };

  const turkishMoney = function (value) {
    if (value == "" || value == null) {
      return value;
    } else {
      value = new Intl.NumberFormat('tr-TR', {currency: 'TRY', minimumFractionDigits: 2 }).format(value)+" TL";
      return value;
    }
  };

  Vue.filter('turkishDate', turkishDate);
  Vue.filter('turkishMoney', turkishMoney);


const app = new Vue({
    router,
    data: {
      sidebar: true
    },
    components: {
        homepage,
        createSite
    }
}).$mount('#app');

