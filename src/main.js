import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//axios
import axios from 'axios';
import VueAxios from 'vue-axios'; 
import moment from 'moment';

import CountryFlag from 'vue-country-flag';

Vue.component('country-flag', CountryFlag);

Vue.use(VueAxios, axios); 

Vue.config.productionTip = false;

// Filters
Vue.filter('normalizeDate', (value) =>{
  return moment(String(value)).format('DD/MM/YYYY');
});

Vue.filter('number', (value) => {
  return Intl.NumberFormat('en').format(value);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
