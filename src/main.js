// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import VueTypedJs from 'vue-typed-js'
import '~/styles/main.scss'
import Glitch from 'vue-glitch';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Buefy)
  Vue.use(VueTypedJs)
  Vue.component('Layout', DefaultLayout)
  Vue.component('glitch', Glitch);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap'
  })
}
