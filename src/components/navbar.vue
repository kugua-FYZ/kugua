<template>
  <v-container class="nav-container">
    <v-toolbar clipped-left dark app class="navbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-spacer />

      <div justify-center>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-toolbar-title class="headline text-uppercase">
            <v-btn ref="button" class="display-1" flat @click="$vuetify.goTo('#home')">我的</v-btn>
          </v-toolbar-title>

          <v-btn ref="button" flat @click="$vuetify.goTo('#about', options)">关于</v-btn>
          <v-btn ref="button" flat @click="$vuetify.goTo('#projects', options)">产品相关</v-btn>
          <v-btn ref="button" flat @click="$vuetify.goTo('#skills', options)">APP介绍</v-btn>

        </v-toolbar-items>
      </div>

      <v-spacer />
    </v-toolbar>

    <v-navigation-drawer
      dark
      v-model="drawer"
      clipped-left
      app
      width = "2000"
      id = "drawer"
    >
      <v-list dense class="pt-0">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>MENU</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat icon @click="drawer = !drawer">
              <v-icon class="fas fa-times"></v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-divider light />
      <v-flex class="text-sm-center" justify-center>
          <v-toolbar-title class="headline text-uppercase">
            <v-btn ref="button" class="display-1" block flat @click="$vuetify.goTo('#home', options); drawer = !drawer">K P</v-btn>
          </v-toolbar-title>

          <v-btn ref="button" block flat @click="$vuetify.goTo('#about', options); drawer = !drawer">About</v-btn>
          <v-btn ref="button" block flat @click="$vuetify.goTo('#projects', options); drawer = !drawer">PROJECTS</v-btn>
          <v-btn ref="button" block flat @click="$vuetify.goTo('#skills', options); drawer = !drawer">SKILLS</v-btn>
      </v-flex>

    </v-navigation-drawer>
  </v-container>
</template>

<script>

  export default {
    data () {
      return {
        offset: -55,
        drawer: 0
      }
    },
    computed: {
      options () {
        return {
          offset: this.offset,
        }
      }
    }
  }
</script>

<style>
.nav-container {
  margin: 0;
  padding: 0;
  max-height: 64px;
}

.navbar {
  /* background-color: #101224 !important; */
}
</style>
