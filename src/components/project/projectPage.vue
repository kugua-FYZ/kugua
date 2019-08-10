<template>
  <v-container
    align-content-center grid-list-xl
    class="page-layout project-layout">
    <v-layout
      row wrap>

      <titleSection :model="title" />

      <v-flex
        v-for="(card, index) in projectData" :key="index"
        md6 xs12
        @click="dialog = !dialog">
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            color="blue-grey lighten-4">
            <v-card-media>
              <v-img
                aspect-ratio=2.5
                :src=' card.image '/>
            </v-card-media>

            <v-card-title
              primary-title>
              <div>
                <div class="project-card-title font-weight-medium fontcolor">{{ card.title }} </div>
                <div class="subheading">{{ card.subtitle }}</div>
                <div class="body-1 font-italic">{{ card.date }}</div>
              </div>
            </v-card-title>

            <v-divider />
            <v-card-text>
              <div class="caption">{{ card.description }}</div>
            </v-card-text>


            <v-divider />
            <v-dialog
                    v-model="dialog"
                    width="500"
            >
              <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                  想知道更多吗？可通过APP免费浏览 还可获取精美礼品哦！！
                </v-card-title>

                <v-card-text style="text-align: center">
<!--                  获取相对应应用商城的的二维码-->
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
            <v-divider />
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { projectData} from './projectData.js'
  import titleSection from './../titleSection'

  export default {
    components: {
      titleSection
    },
    data() {
      return {
        projectData: projectData,
        dialog:false,
        title: "产品相关"
      }
    }
  }
</script>

<style>
  .project-layout {
    max-width: 100%;
    margin: 0px;
    padding: auto 25% 0 25%;
    background-color: rgb(50, 90, 110);
    color: rgb(233, 245, 255);
  }

  .project-card-title {
    font-size: 20px;
    line-height: 25px;
  }
  .fontcolor{
    font-size: 25px;
    color:crimson;
  }


</style>
