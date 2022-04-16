<template>
  <div>
    <v-container>
      <v-carousel height="auto" hide-delimiters>
        <v-carousel-item v-for="(top,i) in tops" :key="i" :src="top.src"></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <div class="nav-bar">
        <div class="nav-bar-item">
          <img src="https://s1.ax1x.com/2022/04/05/qOf27j.png" alt />
          <div @click="test">课程中心</div>
        </div>
        <div class="nav-bar-item">
          <img src="https://s1.ax1x.com/2022/04/05/qOfWAs.png" alt />
          <div>本周作业</div>
        </div>
        <div class="nav-bar-item">
          <img src="https://s1.ax1x.com/2022/04/05/qOfgBQ.png" alt />
          <div>我的收藏</div>
        </div>
      </div>
    </v-container>
    <v-container>
      <v-tabs v-model="tab">
        <v-tab v-for="item in data" :key="item">{{ item }}</v-tab>
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
                        style="font-size:1em"
                      ></v-card-title>
                      <v-card-subtitle v-text="course.fields.teacherName"></v-card-subtitle>
                      <v-card-actions>
                        <v-btn class="ml-2 mt-5" outlined rounded small @click="routerTo(course)">进入课堂</v-btn>
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
import axios from 'axios'
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
      courses: [],
    };
  },
  created(){
      this.request();
  },
  methods: {
    test() {
      console.log(this.courses);
    },
    request(){
      axios.get(`http://localhost:8080/courses/getcourses`).then(
        response => {
          let randcl = ['#58A1EF','#BBA180','#BBA180']
          let res = ''
          res = response.data.courses
          let courses = eval(res);
          //console.log(courses);
          for( var i = 0,len = courses.length;i<len;i++){
            let color_index = Math.floor(Math.random()*(randcl.length))
            courses[i].fields.color = randcl[color_index]
            // console.log(courses[i].fields.color);
            // console.log(courses[i].fields.courseName);
          }
          console.log(courses);
          this.courses = courses;
        }
      ).catch(function (error){
        console.log(error);
      })
    },
    routerTo(item){
      let course_name = item.fields.courseName;
      this.$router.push({path: '/course',query: {course: course_name}}); 
    }
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