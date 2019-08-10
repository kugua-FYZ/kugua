<template>
  <v-flex 
    xs12
    :class="{'display-2': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.smAndUp}"
    class="text-xs-center text-md-left display-3 font-weight-light section-title">
    {{ model }}
    <v-divider v-for="i in 6" :key="i" dark/>
    

  </v-flex>
</template>

<script>
  export default {
    props: {
      model: String
    },
  }
</script>

<style>
  .section-title {
    color: rgb(233, 245, 255);
    font-family: futura-book !important;
  }
</style>