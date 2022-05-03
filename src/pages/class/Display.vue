<template>
  <v-container>
    <v-toolbar flat color="transparent">
      <v-btn icon>
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
                    >订阅</v-btn
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
    items() {
      let items = [];
      for (let i = 0, len = this.courses.length; i < len; i++) {
        let a = {};
        a.image = this.courses[i].fields.courseImg;
        a.title = this.courses[i].fields.courseName;
        a.category =
          this.courses[i].fields.teacherName +
          " 开课学期:" +
          this.courses[i].fields.courseTerm;
        a.keyword = "理学院";
        console.log(a);
        items.push(a);
      }
      console.log(items);
      return items;
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
    routerTo(item) {
      let course_name = item.fields.courseName;
      this.$router.push({ path: "/course", query: { course: course_name } });
    },
  },
};
</script>

<style>
</style>