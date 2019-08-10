<template>
  <v-flex 
    md6 xs12>
    <v-card 
      :color="model.color"
      class="skillCard">
      <v-responsive :aspect-ratio="16/9">
        <v-card-title primary-title>
          <div class="headline mb-0 skill-text">{{ model.name }}</div>
        </v-card-title>

        <v-divider light></v-divider>

        <v-card-text class="skill-text">
          {{ model.description }}
        </v-card-text>

        <v-divider light></v-divider>
        <v-card-text>

          <v-chip 
            :color="model.skillColor"
            v-for="(skill, index) in model.skills" 
            :key="index" class="font-weight-medium"
            small>
            <v-avatar
              class="skill-chip-icon"
              :color="model.iconColor">
              <v-img 
                max-height=20px
                max-width=20px
                :src="skill.image"
                />
            </v-avatar>
            {{ skill.name }}
          </v-chip>
        </v-card-text>
      </v-responsive>
    </v-card>
  </v-flex>

</template>

<script>
  export default {
    props: {
      model: Object
    },
  }
</script>

<style>
  .skill-image {
    width: 100px;
  }

  .skill-text {
    color: rgb(218, 238, 255);
  }

  .skill-chip-icon {
    max-height: 24px !important;
    max-width: 20px !important;
    margin-right: 2px !important; 
  }
</style>