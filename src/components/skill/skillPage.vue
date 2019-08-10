<template>
  <v-container
    align-content-center
    class="page-layout skill-layout">

    <titleSection :model="title" />

    <v-layout
      text-xs-center
      justify-center
      wrap>

      <v-flex md6 xs12 class="skill-chart">
        <skillChart></skillChart>
      </v-flex>

      <v-container fluid grid-list-lg>
        <v-layout row wrap>

          <skillCard
            v-for="(card, index) in skillData.card"
            :key="index"
            :model="card"></skillCard>

        </v-layout>
      </v-container>

    </v-layout>
      <v-footer
              padless
              class="bottoncolor"
      >
        <v-flex
                text-center
                xs12
                class="bottoncolor"
        >
          {{ new Date().getFullYear() }} — <strong>Copyright © 2019 Quanzhou CoachFat Network Technology Co., Ltd. All rights reserved.</strong>
        </v-flex>
      </v-footer>
  </v-container>

</template>

<script>
  import skillChart from './skillChart'
  import skillData from './skillData.js'
  import skillCard from './skillCard'
  import titleSection from './../titleSection'

  export default {
    components: {
      skillChart,
      skillCard,
      titleSection
    },
    data() {
      return {
        skillData: skillData,
        title: 'App介绍'
      }
    }
  }
</script>

<style>
  .skill-layout {
    max-width: 100%;
    margin: 0;
    padding: auto 25% auto 25%;
    background-color: rgb(56, 89, 126);
    color: rgb(218, 238, 255);
  }

  .skill-chart {
    margin: 10vh;
  }
  .card {
    background-color: blue;
  }
  .bottoncolor{
    background-color: rgb(56, 89, 126);
    background: rgb(56, 89, 126);
    text-align: center;
    font-size: 18px;
    color: rgb(218, 238, 255);
  }
</style>
