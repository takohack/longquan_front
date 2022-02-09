<template>
  <v-card>
    <v-toolbar color="cyan" dark flat dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>青年之家活动</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn depressed color="primary">更多</v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab">
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item.tag">{{ item.tag }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.title">
        <v-card flat>
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in item.content" :key="i" cols="12">
                <v-card color="#1F7087" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title class="text-h6" v-text="item.title"></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                      <v-card-actions>
                        <v-btn class="ml-2 mt-5" outlined rounded small>{{item.place}}</v-btn>
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
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          tag: "全部",
          content: [
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvh36.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv5jO.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvxv8.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvL4I.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvouD.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv7HH.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvbEd.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvXCt.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            }
          ]
        },
        {
          tag: "旗舰店",
          content: [
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvh36.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv5jO.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvxv8.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvL4I.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvouD.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv7HH.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvbEd.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvXCt.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            }
          ]
        },
        {
          tag: "功能店",
          content: [
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvh36.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv5jO.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvxv8.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvL4I.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvouD.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv7HH.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvbEd.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvXCt.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            }
          ]
        },
        {
          tag: "共赢店",
          content: [
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvh36.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv5jO.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvxv8.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvL4I.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvouD.jpg",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJv7HH.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvbEd.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            },
            {
              src: "https://s4.ax1x.com/2022/02/09/HJvXCt.png",
              title: "兴趣-演讲与辩论",
              artist: "前进的意义应该是什么",
              place: "龙泉驿青年之家旗舰店"
            }
          ]
        }
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tops: [
        {
          src: "https://s4.ax1x.com/2022/02/08/H3KNRg.jpg"
        },
        {
          src: "https://s4.ax1x.com/2022/02/08/H3KtJS.jpg"
        }
      ]
    };
  }
};
</script>

