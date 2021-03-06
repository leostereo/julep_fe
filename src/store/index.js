import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import julepx from "./julepx";


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
let Store = null;
export default function (/* { ssrContext } */) {
  Store = new Vuex.Store({
    modules: {
       julepx
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
export { Store };