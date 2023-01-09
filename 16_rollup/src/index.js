import Vue from "vue";
import _ from "lodash";
import App from "./App.vue";
import "./style/index.css";

Vue.prototype._ = _;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
