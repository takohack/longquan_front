<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-carousel height="150px" hide-delimiters>
        <v-carousel-item v-for="(top,i) in tops" :key="i" :src="top.src"></v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span>活动报名</span>
          <v-btn depressed color="primary">更多</v-btn>
        </v-card-title>

        <v-carousel v-model="step" hide-delimiters cycle show-arrows-on-hover>
          <v-carousel-item v-for="(item,i) in activities" :value="i" :key="i">
            <v-card class="mx-auto" max-width="450">
              <v-img :src="item.fields.at_img" :aspect-ratio="16/9"></v-img>
              <v-card-title>
                <div class="text-h4 mb-2">{{item.fields.at_name}}</div>
                <div class="text-h6 font-weight-regular grey--text">{{item.fields.at_signbegintime}}</div>
              </v-card-title>
              <v-row class="px-4 grey--text" align="center">
                <v-avatar color="red" size="15px">
                  <span class="white--text text-h5"></span>
                </v-avatar>

                <span>未开始</span>
              </v-row>

              <v-divider class="mt-6 mx-4"></v-divider>

              <v-card-text>
                <v-chip class="mr-2">
                  <v-icon left>mdi-brightness-5</v-icon>
                  {{item.fields.at_age}}
                </v-chip>
                <v-chip class="mr-2">
                  <v-icon left>mdi-alarm-check</v-icon>
                  已报名人数:{{item.fields.at_signin}}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
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
    ],
    tops: [
      {
        src: "https://s4.ax1x.com/2022/02/08/H3KNRg.jpg"
      },
      {
        src: "https://s4.ax1x.com/2022/02/08/H3KtJS.jpg"
      }
    ],
    activities: [
      {
        model: "acapp.activity",
        pk: 1,
        fields: {
          at_name: "小龙人书语",
          at_signcode: null,
          at_tag: "vol",
          at_recommand: true,
          at_img: "https://s4.ax1x.com/2022/02/08/H3043j.png",
          at_incpoint: 10,
          at_status: "prepare",
          at_age: "3~7岁",
          at_signbegintime: "2022-02-01T14:15:37Z",
          at_signendtime: "2022-02-06T14:15:37Z",
          at_begintime: "2022-02-07T14:15:37Z",
          at_endtime: "2022-02-10T14:15:37Z",
          at_signin: 11,
          at_takein: 12,
          at_main:
            "绘本主题:学会自我接纳\r\n绘本分享:《蓝色小龙阿祖罗》\r\n活动环节:",
          at_fuze: "哩哩啦",
          at_phone: "1314946565656"
        }
      },
      {
        model: "acapp.activity",
        pk: 2,
        fields: {
          at_name: "趣味科学",
          at_signcode: null,
          at_tag: "vol",
          at_recommand: true,
          at_img: "https://s4.ax1x.com/2022/02/08/H30hCQ.png",
          at_incpoint: 12,
          at_status: "prepare",
          at_age: "7~10岁",
          at_signbegintime: "2022-02-08T14:17:16Z",
          at_signendtime: "2022-02-08T14:17:16Z",
          at_begintime: "2022-02-08T14:17:16Z",
          at_endtime: "2022-02-08T14:17:16Z",
          at_signin: 12,
          at_takein: 23,
          at_main:
            "1、拓展小朋友的科学知识领域，从而培养小朋友的科学素养，深化小朋友的创想能力。",
          at_fuze: "哩哩啦",
          at_phone: "2314234234234"
        }
      },
      {
        model: "acapp.activity",
        pk: 3,
        fields: {
          at_name: "童心画祖国",
          at_signcode: null,
          at_tag: "study",
          at_recommand: true,
          at_img: "https://s4.ax1x.com/2022/02/08/H30cHf.png",
          at_incpoint: 12,
          at_status: "finish",
          at_age: "6~11岁",
          at_signbegintime: "2022-02-14T14:19:06Z",
          at_signendtime: "2022-02-23T14:19:06Z",
          at_begintime: "2022-02-08T14:19:06Z",
          at_endtime: "2022-02-14T14:19:06Z",
          at_signin: 13,
          at_takein: 23,
          at_main: "龙泉驿区青少年活动中心一楼青年之窗四、参与人数",
          at_fuze: "芜湖",
          at_phone: "1234234234"
        }
      }
    ],
    show: false,
    step: 1
  }),
  // created(){
  //     this.get_activities();
  // },
  // methods: {
  //     get_activities: function (){
  //         axios.get(`http://localhost:8080/activities/getactivities`).then(
  //             response => {
  //                 let res = ''
  //                 res = response.data.activities
  //                 this.activities = eval(res)
  //                 console.log(this.activities);
  //             }
  //   )
  //     }
  // },
  // computed: {}
};
</script>

<style>
</style>