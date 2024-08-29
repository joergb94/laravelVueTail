import { createStore } from 'vuex';
import storeLogin from '../components/login/store'

const store = createStore({
    modules: {
        storeLogin,
    },
});

export default store;
