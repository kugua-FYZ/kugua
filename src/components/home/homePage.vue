<template>
<!--  这里将显示主页-->
  <v-container
    class="home-layout parallax">

    <v-layout
      wrap class="parallax-black">

      <v-flex xs12 class="text-sm-left display-3 home-title m-4">
        <div
          :class="{'display-2': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.smAndUp}"
          class="font-weight-light home-title">欢迎来到 脂教练
        </div>
        <v-divider dark/>
        <div
          :class="{'headline': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.smAndUp}"
          class="font-weight-light">脂肪燃烧从这里开始</div>
      </v-flex>

      <v-layout
        wrap
        justify-center
        class="home-button">

        <v-flex
          md2 xs6
          :class="{'home-link-item': $vuetify.breakpoint.smAndUp}"
          class="text-xs-center">
          <v-btn
            outline
            class="home-link"
            color="white"
            text
            @click="dialog = !dialog"
            target="_blank">
            <v-icon small left class="fab fa-github-square home-icon" />
            <div class="caption">App直达</div>
          </v-btn>
          <v-dialog
                  v-model="dialog"
                  width="500"
          >
            <v-card>
              <v-card-title
                      class="headline grey lighten-2"
                      primary-title
              >
                扫码下载APP获取精美礼品！！
              </v-card-title>

              <v-card-text style="text-align: center">
                <img src="../../static/二维码.png">
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                >
                  确认
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
<!--   再点击后以该邮箱为收件人 收取一份邮件-->
        <v-flex
          md2 xs6
          :class="{'home-link-item': $vuetify.breakpoint.smAndUp}"
          class="text-xs-center">
          <v-btn
            outline
            class="home-link"
            color="white"
            href="mailto:kugua-fyz@foxmail.com">
            <v-icon small left class="fas fa-envelope-square home-icon"/>
            <div class="caption">联系邮箱</div>
          </v-btn>
        </v-flex>

      </v-layout>

    </v-layout>
  </v-container>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    data(){
      return{
        dialog:false
      }
    },
    components: {
      pdf : pdf,
    },
    computed: {
      fontSize() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '3em';
          default: return '5em';
        }
      }
    }
  }
</script>

<style>
  .home-layout {
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    padding-left: 20vw;
    padding-right: 20vw;
    padding-top: 30vh !important;
    margin: 0px;
    background-color:gray;
    font-family: futura-book !important;
    letter-spacing: 1px !important
  }

  .home-title {
    color: white;
    text-transform: thin;
    font-family: futura-book !important;
  }

  .home-button {
    margin-top: 3vh;
  }

  .home-icon {
    margin-right: 6px !important;
  }

  .home-link-item {
    max-width: 20% !important;
  }

  .home-link {
    /* width: 10vw; */
    margin: 5 0 5 0;
    max-width: 10px;
  }

  .title {
    font-size: 180px
  }

  .parallax {
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),

      url('./home-bg.jpg');

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
