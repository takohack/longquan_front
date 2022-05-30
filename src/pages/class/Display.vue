<template>
  <v-container>
    <v-toolbar flat color="transparent">
      <v-btn icon to="/index">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="检索课程"
        single-line
      ></v-text-field>
    </v-toolbar>
    <v-card-text class="py-0">
      <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">
        {{ keyword }}
      </v-chip>
    </v-card-text>
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in searching" :key="i" cols="12">
          <v-card elevation="2">
            <div class="d-flex justify-space-between">
              <div>
                <v-card-title
                  class="text-h8"
                  v-text="item.title"
                  style="font-size: 1em"
                ></v-card-title>
                <v-card-subtitle v-text="item.category"></v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="routerTo(item)"
                    >{{ item.type }}</v-btn
                  >
                </v-card-actions>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
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
      courses: [],
      search: "",
    };
  },
  created() {
    this.request();
  },
  computed: {
    course_id: function () {
      let map = new Map();
      map.set("数据结构", 3);
      map.set("数学思想与数模文化", 1);
      map.set("多元统计与数学分析", 2);
      map.set("高等代数", 4);
      map.set("数学分析", 5);
      map.set("解析几何", 6);
      map.set("常微分方程", 8);
      map.set("离散数学", 7);
      return map;
    },
    items: {
      get() {
        let items = [];
        let course_id = this.choose_Lesson.split(",");
        for (let i = 0, len = this.courses.length; i < len; i++) {
          let a = {};
          a.image = this.courses[i].fields.courseImg;
          a.title = this.courses[i].fields.courseName;
          a.category =
            this.courses[i].fields.teacherName +
            " 开课学期:" +
            this.courses[i].fields.courseTerm;
          a.keyword = "理学院";
          a.type = "订阅";
          if (course_id.includes(this.courses[i].fields.courseId)) {
            a.type = "取消订阅";
          }
          console.log(a);
          items.push(a);
        }
        return items;
      },
      set(newvalue) {
        for (let i = 0, len = this.items.length; i < len; i++) {
          let a = this.items[i];
          if (a.title === newvalue) {
            if (a.type === "订阅") {
              a.type = "取消订阅";
            } else {
              a.type = "订阅";
            }
            console.log(a.type);
            console.log(this.searching);
          }
        }
        this.$forceUpdate();
      },
    },
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
  methods: {
    request() {
      axios
        .get(`http://localhost:8080/courses/getcourses`)
        .then((response) => {
          let res = "";
          res = response.data.courses;
          let courses = eval(res);
          console.log(courses);
          this.courses = courses;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addcourse(item) {
      console.log("订阅课程" + item);
      let course_id = this.course_id.get(item);
      axios
        .get(`http://localhost:8080/user/addcourse?course_id=${course_id}`)
        .then(
          (response) => {
            if (response.data.result === "success") {
              console.log("修改computed属性" + item);
              this.items = item;
              console.log(this.items);
            }
          },
          (error) => {
            console.log("请求失败", error.message);
          }
        );
      console.log(course_id);
    },
    delcourse(item) {
      console.log("取消订阅课程" + item);
      let course_id = this.course_id.get(item);
      axios
        .get(`http://localhost:8080/user/delcourse?course_id=${course_id}`)
        .then(
          (response) => {
            if (response.data.result === "success") {
              console.log("修改computed属性" + item);
              this.items = item;
              console.log(this.items);
            }
          },
          (error) => {
            console.log("请求失败", error.message);
          }
        );
      console.log(course_id);
    },
    routerTo(item) {
      let type = item.type;
      if (type === "订阅") {
        this.addcourse(item.title);
      } else {
        this.delcourse(item.title);
      }
    },
  },
};
</script>

<style>
</style>