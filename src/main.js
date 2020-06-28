/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-03-11 15:55:13
 * @LastEditors: zhan
 * @LastEditTime: 2020-03-12 13:27:39
 */
/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-03-11 15:15:09
 * @LastEditors: zhan
 * @LastEditTime: 2020-03-11 15:27:29
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import 'normalize.css'
import {   
  popup,   
  Button,
  Form,
  Field,
  picker
} from 'vant';

Vue.use(popup)  
    .use(Button)
    .use(Form)
    .use(picker)
    .use(Field);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')