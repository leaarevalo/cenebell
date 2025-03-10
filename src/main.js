import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as allComponents from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components: {
      ...allComponents
    },
    directives,
    icons: {
      defaultSet: "mdi",
    }
  });

createApp(App).use(vuetify).use(router).mount('#app')
