<template>
  <div>
    <v-dialog v-model="note_dialog" width="500">
      <v-card flat>
        <v-card-title class="text-h5">消息通知列表</v-card-title>
        <v-card-text>
          <div>还没有收到通知</div>
          <div>重要的教学活动通知,在这里提示</div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="favor_dialog" width="500">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> 课堂回放 </v-expansion-panel-header>
          <v-expansion-panel-content>
            列表为空
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header> 课堂笔记</v-expansion-panel-header>
          <v-expansion-panel-content>
            列表为空
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header> 课堂资料 </v-expansion-panel-header>
          <v-expansion-panel-content>
            列表为空
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-dialog>
    <v-container>
      <v-carousel height="auto" hide-delimiters>
        <v-carousel-item
          v-for="(top, i) in tops"
          :key="i"
          :src="top.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <div class="nav-bar">
        <div class="nav-bar-item" @click="routerTo(1)">
          <img src="https://s1.ax1x.com/2022/04/05/qOf27j.png" alt />
          <div>课程中心</div>
        </div>
        <div class="nav-bar-item" @click="note_dialog = !note_dialog">
          <img src="https://s1.ax1x.com/2022/04/05/qOfWAs.png" alt />
          <div>消息通知</div>
        </div>
        <div class="nav-bar-item" @click="favor_dialog = !favor_dialog">
          <img src="https://s1.ax1x.com/2022/04/05/qOfgBQ.png" alt />
          <div>我的收藏</div>
        </div>
      </div>
    </v-container>
    <v-container>
      <v-tabs v-model="tab">
        <v-tab v-for="item in data" :key="item">{{ item }}</v-tab>
        <!-- <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on"
                >添加课程</v-btn
              >
            </template>
            <v-container> -->
        <!-- <textarea v-model="markdown"></textarea> -->
        <!-- <div v-html="markdownToHtml"></div>
            </v-container>
          </v-dialog>
        </div> -->
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-container>
            <v-row dense>
              <v-col v-for="(course, i) in courses" :key="i" cols="12">
                <v-card :color="course.fields.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h8"
                        v-text="course.fields.courseName"
                        style="font-size: 1em"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="course.fields.teacherName"
                      ></v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          class="ml-2 mt-5"
                          outlined
                          rounded
                          small
                          @click="routerTo(course)"
                          >进入课堂</v-btn
                        >
                      </v-card-actions>
                    </div>
                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="course.fields.courseImg"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">当前为学生用户</v-card-title>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
//引入marked
import { marked } from "marked";
export default {
  props: ["choose_Lesson"],
  watch: {
    choose_Lesson: function (val) {
      console.log(val); // 接收父组件的值
    },
  },
  components: {},
  data() {
    return {
      markdown: "# Hello World",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        save: true,
      },
      note_dialog: false,
      favor_dialog: false,
      dialog: false,
      tops: [
        {
          src: "https://s1.ax1x.com/2022/03/21/qmxotO.jpg",
        },
        {
          src: "https://s1.ax1x.com/2022/03/21/qmxThD.jpg",
        },
        {
          src: "https://s1.ax1x.com/2022/03/21/qmxIAK.jpg",
        },
      ],
      tab: null,
      data: ["我听的课", "我教的课"],
      courses: [],
    };
  },
  created() {
    this.request();
  },
  methods: {
    test() {
      console.log(this.value);
    },
    request() {
      axios
        .get(`http://localhost:8080/courses/getcourses`)
        .then((response) => {
          let randcl = ["#58A1EF", "#BBA180", "#BBA180"];
          let res = "";
          res = response.data.courses;
          let courses = eval(res);
          console.log(courses);
          let select_courses = [];
          let course_id = this.choose_Lesson.split(",");
          console.log(course_id);
          for (var i = 0, len = courses.length; i < len; i++) {
            let color_index = Math.floor(Math.random() * randcl.length);
            courses[i].fields.color = randcl[color_index];
            if (course_id.includes(courses[i].fields.courseId)) {
              select_courses.push(courses[i]);
            }
          }
          console.log(select_courses);

          this.courses = select_courses;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    routerTo(item) {
      if (item === 1) {
        this.$router.push("/list");
        return;
      }
      let course_name = item.fields.courseName;
      this.$router.push({ path: "/course", query: { course: course_name } });
    },
  },
};
</script>

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
</style>