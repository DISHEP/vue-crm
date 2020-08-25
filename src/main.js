import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import 'materialize-css/dist/js/materialize.min'
import Loader from './components/app/Loader';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)


firebase.initializeApp({
  apiKey: "AIzaSyDwsE0MHPm4lmMZ6MaHZhYCeKam3M8Mdh4",
  authDomain: "vue-crm-44ea7.firebaseapp.com",
  databaseURL: "https://vue-crm-44ea7.firebaseio.com",
  projectId: "vue-crm-44ea7",
  storageBucket: "vue-crm-44ea7.appspot.com",
  messagingSenderId: "260330117604",
  appId: "1:260330117604:web:fa2407d485d02adb968ff1"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



