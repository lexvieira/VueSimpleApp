import VueRouter, { Route } from 'vue-router'/*  */
//Check vue import conflicts - Main.ts App.vue


/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}