<template>
  <v-container
    align-content-center grid-list-xl
    class="page-layout about-layout ">
      <titleSection :model="title" />

    <v-layout
      row wrap
      class="about-section">
      <v-flex
        xs12 md4
        class="text-xs-center">
        <v-avatar

          fill-width
          color="indigo"
          size=200px>
          <img src="@/static/logo.png" alt="avatar">
        </v-avatar>
      </v-flex>

      <v-flex
        xs12 md8
        class="about-content">
        {{ aboutData.main_section.par1 }}
        <br>
        <br>
        {{ aboutData.main_section.par2 }}
        <br>
        <br>
        <!-- <div
          class="title font-weight-light">
          {{ aboutData.main_section.par3 }} <a href="https://medium.com/@KP_Kepra" target="blank">Medium</a>!
        </div> -->
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import aboutData from './aboutData.js'
  import titleSection from './../titleSection'

  export default {
    components: {
      titleSection
    },
    data() {
      return {
        aboutData: aboutData,
        title: "关于脂教练",
      }
    }
  }
</script>

<style>
  .about-layout {
    max-width: 100%;
    margin: 0;
    padding: auto 25% auto 25%;
    background-color: rgb(31, 54, 82);
    color: rgb(233, 245, 255);
    font-family: futura-light;
    font-size: 16px;
  }

  .about-section {
    padding: 3% 3% 3% 3%;
    margin: 0px;
    text-align: justify;
  }
</style>
