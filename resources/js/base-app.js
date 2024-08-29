import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import store from './store';

library.add(fas);
const app = createApp({});


app.use(store);
app.component('fontAwesomeIcon', FontAwesomeIcon);
export default app;