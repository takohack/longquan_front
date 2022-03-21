<template>
  <div>
    <v-container>
      <v-carousel height="auto" hide-delimiters>
        <v-carousel-item v-for="(top,i) in tops" :key="i" :src="top.src"></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <div style="background-color:lightblue;height:120px"></div>
    </v-container>
    <v-container>
      <v-tabs v-model="tab">
        <v-tab v-for="item in data" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" dark>
                  <v-card-title class="text-h5">Unlimited music now</v-card-title>

                  <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                  <v-card-actions>
                    <v-btn text>Listen Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                      <v-card-actions>
                        <v-btn
                          v-if="item.artist === 'Ellie Goulding'"
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="40px"
                          right
                          width="40px"
                        >
                          <v-icon>mdi-play</v-icon>
                        </v-btn>

                        <v-btn v-else class="ml-2 mt-5" outlined rounded small>START RADIO</v-btn>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">An awesome title</v-card-title>
            <v-card-text>
              <p>Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.</p>

              <p>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.</p>

              <p
                class="mb-0"
              >Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tops: [
        {
          src: "https://s1.ax1x.com/2022/03/21/qmxotO.jpg"
        },
        {
          src: "https://s1.ax1x.com/2022/03/21/qmxThD.jpg"
        },
        {
          src: "https://s1.ax1x.com/2022/03/21/qmxIAK.jpg"
        }
      ],
      tab: null,
      data: ["我听的课", "我教的课"],
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People"
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        }
      ]
    };
  }
};
</script>