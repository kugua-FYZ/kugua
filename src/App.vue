<template>
  <v-app id="app">
    <navbar/>

    <v-content class="page">
      <homePage id="home" />
      <aboutPage id="about" />
      <projectPage id="projects"/>
      <skillPage id="skills"/>

      <!-- <router-view></router-view> -->
      <!-- <home/> -->
    </v-content>
  </v-app>

</template>

<script>
import homePage from './components/home/homePage'
import aboutPage from './components/about/aboutPage'
import projectPage from './components/project/projectPage'
import skillPage from './components/skill/skillPage'

import navbar from './components/navbar'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homePage
    },

    {
      path: '/about',
      name: 'About',
      component: aboutPage
    },

    {
      path: '/projects',
      name: 'Projects',
      component: projectPage
    },

    {
      path: '/skills',
      name: 'Skills',
      component: skillPage
    },

  ]
})
export default {
  name: 'App',
  router,
  components: {
    navbar,
    homePage,
    aboutPage,
    projectPage,
    skillPage,

  },
  data () {
    return {
      drawer: null
      //
    }
  }
}
</script>

<style>
.page {
  margin-top: 0;
  padding: 0 !important;
  background-color: rgb(255, 255, 255)
}
</style>
