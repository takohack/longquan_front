<template>
  <div>
    <v-container>
      <v-container>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </v-container>

      <!-- 签到 -->
      <v-dialog v-model="sign_diag" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">签到</v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">签到成功</v-card-title>
          <v-card-text>签到时间: {{ time }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="sign_diag = false"
              >完成</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- 聊天室 -->
      <v-dialog v-model="chat_diag" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            dark
            v-bind="attrs"
            v-on="on"
            >课堂聊天室</v-btn
          >
        </template>
        <v-card>
          <v-container>
            <Chat/>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="chat_diag = false"
              >关闭聊天室</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <h3>{{ course_title }}</h3>
      <v-divider></v-divider>
      <v-container>
        <div>
          <v-alert type="warning">
            <strong>公告: </strong>{{ newest_notice }}
          </v-alert>
          <v-alert type="info">
            <strong>本周作业</strong>: {{ newest_homework }}
          </v-alert>
        </div>
      </v-container>
      <v-divider></v-divider>
      <h3>学习日志</h3>
      <v-container>
        <v-tabs v-model="tab" align-with-title light>
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="item in data" :key="item">{{ item }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-timeline>
              <v-timeline-item
                v-for="(chapter, i) in chapters"
                :key="i"
                color="cyan"
                small
              >
                <template v-slot:opposite>
                  <span
                    :class="`headline font-weight-bold cyan--text`"
                    v-text="chapter.date"
                  ></span>
                </template>
                <v-card color="cyan" dark>
                  <v-card-title style="font-size: 1rem; line-height: 1.1rem">{{
                    chapter.chapter
                  }}</v-card-title>
                  <v-card-text class="white text--primary">
                    <v-btn
                      color="cyan"
                      class="mx-0"
                      outlined
                      @click="routerTo(chapter)"
                      >课堂详情</v-btn
                    >
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-tab-item>
          <!-- 讨论 -->
          <v-tab-item>
            <v-container>
              <ArticleComment></ArticleComment>
            </v-container>
          </v-tab-item>
          <!-- 公告 -->
          <v-tab-item>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on"
                  >添加笔记</v-btn
                >
              </template>
              <v-container>
                <mavon-editor
                  v-model="markdown"
                  :toolbars="toolbars"
                  @save="savemd"
                />
                <el-button @click="savemd" type="primary">保存笔记</el-button>
              </v-container>
            </v-dialog>
            <v-container>
              <v-expansion-panels>
                <v-expansion-panel v-for="(md, i) in markdownToHtml" :key="i">
                  <v-expansion-panel-header>{{
                    md.md_date
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p v-html="md.html"></p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import ArticleComment from "./Discuss.vue";
import Chat from "./Chat.vue";
import { marked } from "marked";
import moment from "moment";
export default {
  props: ["user_photo"],
  watch: {
    user_photo: function (val) {
      console.log(val); // 接收父组件的值
    },
  },
  components: {
    ArticleComment,
    Chat,
  },
  created() {
    this.request();
  },
  methods: {
    savemd() {
      let content = {};
      content.md_content = this.markdown;
      content.md_date = moment().format("YYYY-MM-DD HH:mm");
      this.mdlist.push(content);
      let md_str = JSON.stringify(this.mdlist);
      let key = "mdlist" + this.course_title;
      console.log(key);
      localStorage.setItem(key, md_str);
      console.log("本地存储成功");
      this.markdown = "## 课堂笔记";
      this.dialog = false;
    },
    routerTo(chapter) {
      let lesson_name = chapter.chapter;
      let course_title = this.course_title;
      this.$router.push({
        path: "/lesson",
        query: { lesson: lesson_name, course: course_title },
      });
    },
    request() {
      axios
        .get(`http://localhost:8080/courses/getcoursesinfo`)
        .then((response) => {
          let rest_data = eval(response.data.coursesinfo);
          for (let i = 0, len = rest_data.length; i < len; i++) {
            let data_name = rest_data[i].fields.courseName;
            if (data_name === this.course_title) {
              let chapter_str = rest_data[i].fields.coursechapters;
              let notice_str = rest_data[i].fields.coursenotice;
              let homework_str = rest_data[i].fields.coursehomework;
              this.chapters = JSON.parse(chapter_str);
              this.notices = JSON.parse(notice_str);
              this.homeworks = JSON.parse(homework_str);
              let array_chapters = [];
              let array_notices = [];
              let array_homeworks = [];
              for (let key in this.chapters) {
                let item = {
                  date: key,
                  chapter: this.chapters[key],
                };
                array_chapters.push(item);
              }
              this.chapters = array_chapters;
              for (let key in this.notices) {
                let item = {
                  id: key,
                  notice: this.notices[key],
                };
                array_notices.push(item);
              }
              this.notices = array_notices;
              this.newest_notice = this.notices[this.notices.length - 1].notice;
              for (let key in this.homeworks) {
                let item = {
                  week: key,
                  homework: this.homeworks[key],
                };
                array_homeworks.push(item);
              }
              this.homeworks = array_homeworks;
              this.newest_homework =
                this.homeworks[this.homeworks.length - 1].homework;
            }
          }
          // console.log("================");
          // console.log(this.chapters);
          // console.log(this.notices);
          // console.log(this.homeworks);
        })
        .catch(function (error) {
          console.log(error);
        });
      let key = "mdlist" + this.course_title;
      let local_str = localStorage.getItem(key);
      if (local_str === null) {
        this.mdlist = [
          {
            md_date: "2022年5月14日14点18分",
            md_content: "## 课堂笔记",
          },
        ];
      } else {
        this.mdlist = JSON.parse(local_str);
      }
    },
  },
  data() {
    return {
      chat_diag: false,
      sign_diag: false,
      md_index: 1,
      dialog: false,
      markdown: "## 课堂笔记",
      mdlist: [
        {
          md_date: "2022年5月14日14点18分",
          md_content: "## 课堂笔记",
        },
      ],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        save: true,
      },
      playerOptions: {
        width: "350px",
        height: "160px",
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "http://vjs.zencdn.net/v/oceans.mp4",
          },
        ],
        poster: "https://pic4.zhimg.com/v2-c80bda88f55543e015fc6016ae31bc28_r.jpg?source=1940ef5c",
      },
      chapters: [],
      notices: [],
      homeworks: [],
      newest_homework: null,
      newest_notice: null,
      tab: null,
      data: ["课堂", "讨论", "笔记"],
    };
  },
  computed: {
    course_title: function () {
      return this.$route.query.course;
    },
    markdownToHtml() {
      let result = [];
      for (let i = 0, len = this.mdlist.length; i < len; i++) {
        let temp = {};
        temp.md_date = this.mdlist[i].md_date;
        temp.html = marked(this.mdlist[i].md_content);
        result.push(temp);
      }
      return result;
    },
    time: {
      cache: false,
      get: function () {
        return moment().format("YYYY-MM-DD HH:mm");
      },
    },
  },
};
</script>

<style>
</style>

<style scoped>
.nav-bar {
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

.nav-bar-item {
  margin-left: 8vw;
  float: left;
}

.nav-bar-item > img {
  width: 80px;
  height: 70px;
}

.nav-bar-item > div {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

/* 讨论区 */
.info-box {
  width: 315px;
  height: 100px;
  margin: 10px auto;
  box-sizing: border-box;
}

.info-box-left > img {
  margin-top: 3px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.info-box-left {
  width: 50px;
  height: 80px;
  float: left;
}

.info-box-right {
  width: 265px;
  height: 80px;
  float: left;
}

.info-box-right-top > span:nth-child(1) {
  font-size: 15px;
  color: #337ab7;
  margin-left: 8px;
}

.info-box-right-top > span:nth-child(2) {
  font-size: 13px;
  color: #999999;
  margin-left: 8px;
}

.info-box-right-top > span:nth-child(3) {
  font-size: 13px;
  color: #999999;
  margin-left: 8px;
}
.info-box-right-content {
  margin-left: 8px;
  font-size: 14px;
  color: #333333;
}
</style>