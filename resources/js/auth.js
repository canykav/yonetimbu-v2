require('./bootstrap');

import Buefy from 'buefy'
Vue.use(Buefy)

//Vue.config.devtools = false
import register from './views/Register.vue'
import login from './views/Login.vue'

const app = new Vue({
    components: {
        register,
        login,
    }
}).$mount('#app');

