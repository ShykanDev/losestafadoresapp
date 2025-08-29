import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import './style.css';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh7SLebc5aHCXHcv1KvQzapUZ__XT_tgQ",
  authDomain: "los-estafadores-web.firebaseapp.com",
  projectId: "los-estafadores-web",
  storageBucket: "los-estafadores-web.firebasestorage.app",
  messagingSenderId: "48466918627",
  appId: "1:48466918627:web:f97508d8817b7aba3a99d6",
  measurementId: "G-VPQJVZC9G9"
};

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill,MdLockreset,MdArrowbackOutlined,FaUserTie,FaUserPlus, PrUserPlus, RiUserVoiceLine,FaUserCircle, IoEnterOutline, MdLoginRound,HiSolidUserAdd, GiScrollUnfurled, MdSecurityTwotone,MdSupportagentRound,BiTelephoneInboundFill,MdEmail,  MdInfo,MdAlternateemail} from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill,MdLockreset,MdArrowbackOutlined,FaUserTie,FaUserPlus, PrUserPlus, RiUserVoiceLine,FaUserCircle, IoEnterOutline, MdLoginRound,HiSolidUserAdd, GiScrollUnfurled, MdSecurityTwotone,MdSupportagentRound,BiTelephoneInboundFill,MdEmail,MdInfo,MdAlternateemail);


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) 
const app = createApp(App)
.use(pinia)
.use(IonicVue)
.use(router)
.component("v-icon", OhVueIcon);

router.isReady().then(() => {
  app.mount('#app');
});
