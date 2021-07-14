<template>
  <v-dialog
    v-model="dialog"
    transition="fab-transition"
    max-width="1050"
  >
  <template #activator="{ on, attrs }">
          <v-list-item-title v-bind="attrs" v-on="on">Upload Video</v-list-item-title>
      </template>
    <v-card>
      <div class="d-flex justify-space-between mb-5">
        <v-card-title class="py-3">Upload Video</v-card-title>
        <div class="mt-3 mr-2">
          <v-btn text>
            <v-icon color="grey darken-2">mdi-message-alert</v-icon>
          </v-btn>
          <v-btn icon text @click="dialog = false">
            <v-icon color="grey darken-2">mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-text
        class="d-flex flex-column align-center pa-4"
      >
        <div  class="text-center">
            <v-btn
              icon
              class="grey lighten-2 mb-4"
              style="height: 104px;width: 104px;"
              ><v-icon x-large class="grey--text text--darken-1"
                >mdi-upload</v-icon
              ></v-btn
            >
            <p>Drag and drop video files to upload</p>
            <p class="grey--text">your videos will be private until you publish them</p>
          <v-btn
            depressed
            class="blue darken-3 flat white--text mt-4"
            >Select File</v-btn
          >
        </div>
      </v-card-text>
      
      <v-card-actions>
        <p class="text-center grey--text px-12 ">
          By submitting your videos to YouTube, you acknowledge that you agree
          to YouTube's <span class="blue--text">Terms of Service</span>  and <span class="blue--text">Community Guidelines</span>. Please be sure
          not to violate others' copyright or privacy rights. <span class="blue--text"> Learn more</span>
        </p>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
  }),
  
}
</script>

<style lang="scss">


</style>
