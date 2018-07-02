import Vue from 'vue';
import Vuetify from 'vuetify';

require('../../../../node_modules/vuetify/dist/vuetify.min.css');

Vue.use(Vuetify,{
    theme:{
        primary: "#0072c6",
        secondary: "#03A9F4",
        accent: "#B0BEC5",
        error: "#f44336",
        warning: "#FF9800",
        info: "#2196f3",
        success: "#4caf50"
      }
});