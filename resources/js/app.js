require('./bootstrap');

window.Vue = require('vue').default;
import router from './router'
import Buefy from 'buefy'

Vue.use(Buefy)
import VueAutonumeric from 'vue-autonumeric/dist/vue-autonumeric.min.js';
Vue.component('VueAutonumeric', VueAutonumeric);

//Vue.config.devtools = false
import register from './views/Register.vue'
import login from './views/Login.vue'
import homepage from './views/admin/Homepage.vue'

const app = new Vue({
    router,
    data: {
      sidebar: true
    },
    components: {
        register,
        login,
        homepage
    }
}).$mount('#app');

