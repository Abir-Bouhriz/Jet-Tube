<template>
  <div>
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="11" class="mx-auto">
          <v-row>
            <v-col cols="12" sm="12" md="8" lg="8">
                <v-skeleton-loader
                type="card-avatar, article, actions"
                :loading="videoLoading"
                tile
                large
              >
                <v-responsive>
                  <iframe width="1000" height="400" :src="this.activeVideo.youtubeURL"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </v-responsive>
                <v-card flat class="transparent">
                  <v-card-title class="pl-0 pb-0">
                      {{ this.activeVideo.title }}</v-card-title>
                  <div class="d-flex flex-wrap justify-space-between" id="btns">
                    <v-card-subtitle
                      class="pl-0 pt-0 pb-0 subtitle-1"
                      style="line-height: 2.4em;"
                    >
                      {{ this.activeVideo.views }} views<v-icon>mdi-circle-small</v-icon
                      >{{ this.activeVideo.createdAt }}
                    </v-card-subtitle>
                    <v-card-actions class="pt-0 pl-0 grey--text">
                      <v-btn text @click="addLike"
                        ><v-icon class="pr-2">mdi-thumb-up</v-icon> 
                        {{this.activeVideo.likes}}</v-btn
                      >
                      <v-btn text @click="disLike">
                          <v-icon class="pr-2">mdi-thumb-down</v-icon>
                       {{this.activeVideo.dislikes}}</v-btn>
                      <v-btn text>
                          <v-icon>mdi-share</v-icon> 
                        Share</v-btn>
                      <v-btn text>
                          <v-icon>mdi-playlist-plus</v-icon> 
                        Save</v-btn
                      >
                      <v-menu offsetY>
                        <template v-slot:activator="{ on: menu }">
                            <v-btn text v-on="menu" > ... </v-btn>
                        </template>
                        <v-list>
                          <v-list-item>
                            <v-list-item-icon class="mr-3"
                              ><v-icon>mdi-flag</v-icon></v-list-item-icon
                            >
                            <v-list-item-title>Report</v-list-item-title>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon class="mr-3"
                              ><v-icon>mdi-message-text</v-icon></v-list-item-icon
                            >
                            <v-list-item-title>Open transcript</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-card-actions>
                  </div>
                </v-card>
                <v-row class="justify-space-between">
                  <v-col cols="6" sm="6" md="5" lg="5">
                    <v-card class="transparent" flat>
                      <v-list-item three-line to="/channel">
                        <v-list-item-avatar size="50"
                          ><v-img
                            src="profile.jpg"
                          ></v-img
                        ></v-list-item-avatar>
                        <v-list-item-content class="align-self-auto">
                          <v-list-item-title class="font-weight-medium mb-1"
                            >Bouhriz Abir</v-list-item-title
                          >
                          <v-list-item-subtitle
                            >{{ this.activeVideo.subscribers }} subscribers
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                  <v-col cols="6" sm="6" md="4" lg="4">
                    <div class="d-flex justify-end align-center">
                      <v-btn class="red white--text mt-6" tile large depressed
                        >Subscribed</v-btn
                      >
                      <v-btn icon class="ml-5 mt-6"
                        ><v-icon>mdi-bell</v-icon></v-btn
                      >
                    </div>
                  </v-col>
                  <v-col class="pl-11" offset="1" cols="11" md="11">
                    <p>
                      {{
                        truncate
                          ? truncateText(this.activeVideo.description, 150)
                          : this.activeVideo.description
                      }}
                    </p>
                    <v-btn text @click="show" class="remove-hover-bg"
                      >Show More</v-btn
                    >
                  </v-col>
                  <v-col>
                    <p class="mb-0">148 Comments</p>
                    <input type="text" ref="hello" />
                    <v-card class="transparent" flat>
                      <v-list-item three-line class="pl-0">
                        <v-list-item-avatar size="50"
                          ><v-img
                            src="profile.jpg"
                          ></v-img
                        ></v-list-item-avatar>
                        <v-list-item-content class="align-self-auto">
                          <v-text-field
                            v-model="comment"
                            placeholder="Add a public comment..."
                            @click="showCommentBtns = true"
                          >
                          </v-text-field>
                          <div
                            v-if="showCommentBtns"
                            class="d-inline-block text-right"
                          >
                            <v-btn
                              text
                              @click="showCommentBtns = !showCommentBtns"
                              >Cancel</v-btn
                            >
                            <v-btn
                              class="blue darken-3 white--text"
                              depressed
                              tile
                              :disabled="comment === ''"
                              >Comment</v-btn
                            >
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>

                    <v-card class="transparent" flat v-for="i in 5" :key="i">
                      <v-list-item three-line class="pl-0 mt-2">
                        <v-list-item-avatar size="50"
                          ><v-img
                            src="profile.jpg"
                          ></v-img
                        ></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            class="font-weight-medium title mb-1"
                            >Bouhriz Abir
                            <span class="font-weight-light grey--text">
                              1 day ago</span
                            ></v-list-item-title
                          >
                          <v-list-item-subtitle
                            class="body-1"
                            >Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Tempore deleniti aspernatur nostrum eius
                            dignissimos repellendus. Fugiat, aspernatur deserunt
                            iusto natus consectetur voluptatem voluptate
                            laboriosam pariatur qui animi repudiandae quae
                            dolorem.</v-list-item-subtitle
                          >
                          <!-- <v-list-item-action> -->
                            
                          <div>
                            <v-btn
                              text
                              small
                              :ripple="false"
                              @click.stop="showReply(`${'reply' + i}`)"
                              >Reply</v-btn
                            >
                          </div>
                          <div class="d-none" :ref="`${'reply' + i}`">
                            <v-list-item three-line class="pl-0">
                              <v-list-item-avatar class="mt-0" size="40"
                                ><v-img
                                  src="profile.jpg"
                                ></v-img
                              ></v-list-item-avatar>
                              <v-list-item-content
                                class="align-self-auto mt-0 pt-0"
                              >
                                <v-form :ref="`form${i}`">
                                  <v-text-field
                                    :ref="`${'input' + i}`"
                                    class="pt-0 mt-0 body-2"
                                    placeholder="Add a public comment..."
                                    :value="repliesInput[`input${i}`]"
                                  >
                                  </v-text-field>
                                </v-form>
                                <div
                                  :ref="i + 'btns'"
                                  class="d-inline-block text-right"
                                >
                                  <v-btn text @click="hideReply(i)" small
                                    >Cancel</v-btn
                                  >
                                  <v-btn
                                    class="blue darken-3 white--text"
                                    depressed
                                    tile
                                    small
                                    @click="addReply(i)"
                                    >Reply</v-btn
                                  >
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <!-- </v-list-item-action> -->
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                </v-row>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-row class="mb-2">
                <v-chip :ripple="false" v-for="(chip, i) in chips" :key="i" class="ma-2">
                {{chip}}
                </v-chip>
            </v-row>
              <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail mb-5" >
                <v-skeleton-loader
                  class="mx-auto"
                  type="list-item-avatar-three-line"
                  :loading="loading"
                  tile
                  large
                >
                <v-hover v-slot:default="{ hover }">
                  <v-card class="card transparent" flat :elevation="hover ? 1 : 0" style="cursor:pointer;">
                    <v-row no-gutters>
                      <v-col class="mx-auto" cols="3" sm="3" md="5" lg="5">
                        <!-- <v-responsive max-height="100%"> -->
                        <v-img
                          class="align-center" 
                          :src="video.thumbnail"
                        >
                        </v-img>
                        <!-- </v-responsive> -->
                      </v-col>
                      <v-col>
                        <div class="ml-2">
                          <v-card-title
                            class="pl-2 pt-0 subtitle-1 font-weight-bold"
                            style="line-height: 1"
                          >
                            {{video.title}}
                          </v-card-title>

                          <v-card-subtitle
                            class="pl-2 pt-2 pb-0"
                            style="line-height: 1"
                          >
                            {{video.creator}}<br />
                            {{video.views}}k views<v-icon>mdi-circle-small</v-icon>{{video.createdAt}}
                            ago
                          </v-card-subtitle>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-hover>
                </v-skeleton-loader>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
let videos = [
  {
    id: 1,
    title: "18-core iMac Pro Review: Not a Trap!",
    thumbnail:
      "https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA",
    youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
    creator: "Marques Brownlee",
    likes: 0,
    dislikes: 0,
    createdAt: '2 years ago',
    subscribers: '100k',
    views: 4526,
    description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus quibusdam incidunt consequuntur, nostrum aperiam, natus quidem qui corrupti reprehenderit quaerat neque voluptatibus? Ullam, maiores temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus'
  },
  {
    id: 2,
    title: "Dope Tech: Camera Robots!",
    thumbnail:
      "https://i.ytimg.com/vi/UIwdCN4dV6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
    youtubeURL: "https://www.youtube.com/embed/UIwdCN4dV6w",
    creator: "Marques Brownlee",
    likes: 0,
    dislikes: 0,
    createdAt: '8 months ago',
    subscribers: '100k',
    views: 1598,
    description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus quibusdam incidunt consequuntur, nostrum aperiam, natus quidem qui corrupti reprehenderit quaerat neque voluptatibus? Ullam, maiores temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus'
  },
  {
    id: 3,
    title: "Let's Talk About Tesla Roadster 2020!",
    thumbnail:
      "https://i.ytimg.com/vi/ctx4YBEdOxo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",
    youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
    creator: "Marques Brownlee",
    likes: 0,
    dislikes: 0,
    createdAt: '6 hours ago',
    subscribers: '100k',
    views: 78,
    description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus quibusdam incidunt consequuntur, nostrum aperiam, natus quidem qui corrupti reprehenderit quaerat neque voluptatibus? Ullam, maiores temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus'
  },
  {
    id: 4,
    title: "Talking Tech with Neil deGrasse Tyson!",
    thumbnail:
      "https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
    youtubeURL: "https://www.youtube.com/embed/pqQrL1K0Z5g",
    creator: "Marques Brownlee",
    likes: 0,
    dislikes: 0,
    createdAt: '10 hours ago',
    subscribers: '100k',
    views: 50,
    description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus quibusdam incidunt consequuntur, nostrum aperiam, natus quidem qui corrupti reprehenderit quaerat neque voluptatibus? Ullam, maiores temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus'
  },
  {
    id: 5,
    title: "The Apple Ecosystem: Explained!",
    thumbnail:
      "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
    youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
    creator: "Marques Brownlee",
    likes: 0,
    dislikes: 0,
    createdAt: '2 months ago',
    subscribers: '100k',
    views: 325,
    description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus quibusdam incidunt consequuntur, nostrum aperiam, natus quidem qui corrupti reprehenderit quaerat neque voluptatibus? Ullam, maiores temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel inventore voluptatum reiciendis delectus'
  }
];

export default {
  name: 'VideoPlayer',
  components:{
    Navbar
  },
  data () {
    return {
        videos,
        activeVideo: videos[0],
        loading: true,
        videoLoading: true,
        truncate: true,
        comment: '',
        showCommentBtns: false,
        repliesInput: {},
        chips: ['All', 'Music', 'Live', 'Movies', 'Coding', 'VueJs'],
    }
  },
  methods:{
    chooseVideo(video){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video;
      //INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1;
    },
    addLike(){
    this.activeVideo.likes += 1;
    },
    disLike(){
    this.activeVideo.dislikes += 1;
    },
    addLikeComment(){
    this.activeVideo.likes += 1;
    },
    disLikeComment(){
    this.activeVideo.dislikes += 1;
    },
    show(event) {
      if (event.target.innerText === 'SHOW MORE') {
        this.truncate = false
        event.target.innerText = 'SHOW LESS'
      } else {
        this.truncate = true
        event.target.innerText = 'SHOW MORE'
      }
    },
    truncateText(string = '', num) {
      if (string.length <= num) {
        return string
      }
      return string.slice(0, num)
    },
    showReply(id) {
      this.$refs[id][0].classList.toggle('d-none')
    },
    hideReply(id) {
      this.$refs[`form${id}`][0].reset()
      this.$refs['reply' + id][0].classList.toggle('d-none')
    },
    addReply(id) {
      this.$refs[`form${id}`][0].reset()
      console.log(this.$refs[`input${id}`][0].$refs.input.value)
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      this.videoLoading = false
      this.activeVideo()
    }, 400)
  }
}
</script>

<style scoped>

</style>