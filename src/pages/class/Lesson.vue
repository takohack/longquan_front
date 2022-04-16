<template>
  <div>
    <v-container>
      <v-container>
        <v-alert color="blue">
          <strong>{{lesson_title}}</strong>
        </v-alert>
      </v-container>
      <v-container>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">签到</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">签到成功</v-card-title>
              <v-card-text>签到时间: {{time}}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">完成</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
      <v-expansion-panels focusable multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>课堂练习</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-list dense>
                <v-list-item-group v-model=exe_data color="primary">
                  <v-list-item  v-for="(exe,i) in exrcises " :key="i">
                    <v-list-item-action>
                      <v-icon>{{exe_icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ exe.exrcise }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>课堂资料</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-list dense>
                <v-list-item-group v-model=ref_data color="primary">
                  <v-list-item  v-for="(ref,i) in references " :key="i">
                    <v-list-item-action>
                      <v-icon>{{ref_icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ ref.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>课堂作业</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-list dense>
                <v-list-item-group v-model=hom_data color="primary">
                  <v-list-item  v-for="(hom,i) in homeworks " :key="i">
                    <v-list-item-action>
                      <v-icon>{{exe_icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ hom.homework }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    this.request();
  },
  methods: {
    test: function(value) {
      let myMap = new Map();

      myMap.set("高等代数.pdf", "https://www.jiangnan.edu.cn/");

      let url = myMap.get(value);
      window.open(url, "_blank");
    },
    request() {
      axios.get(`http://localhost:8080/courses/getlessons`).then(
        response => {
          let rest_data = eval(response.data.lessons)
          for (let i = 0,len = rest_data.length;i<len;i++){
            let data_name = rest_data[i].fields.lessonbelong;
            let current_lesson = rest_data[i].fields.lessonname;
            //console.log(current_lesson);
            //console.log(this.lesson_title);
            if (data_name == this.lesson_belong && current_lesson == this.lesson_title){
              //console.log(rest_data[i].fields);
              let exrcise_str = rest_data[i].fields.lessonexrcise
              let homework_str = rest_data[i].fields.lessonhomework
              let reference_str  = rest_data[i].fields.lessonreference
              this.exrcises = JSON.parse(exrcise_str)
              this.references = JSON.parse(reference_str)
              this.homeworks = JSON.parse(homework_str)
              // console.log("test");
              // console.log(this.homeworks);
              let array_exrcises = [];
              let array_references = [];
              let array_homeworks = [];
              for (let key in this.exrcises){
                let item = {
                  id : key,
                  exrcise : this.exrcises[key]
                }
                array_exrcises.push(item);
              }
              this.exrcises = array_exrcises;
              //console.log(this.exrcises);
              for (let key in this.references){
                let item = {
                  id : key,
                  title: this.references[key]["title"],
                  url : this.references[key]["url"]
                }
                array_references.push(item);
              }
              this.references = array_references;
              //console.log(this.references);
              for(let key in this.homeworks){
                let item = {
                  id : key,
                  homework : this.homeworks[key]
                }
                array_homeworks.push(item)
              }
              this.homeworks = array_homeworks;
              //console.log(this.homeworks);
            }
          }
        }
      ).catch(function (error){
        console.log(error);
      })
    }
  },
  data() {
    return {
      dialog: false,
      exe_data: 1,
      exe_icon : "mdi-message-text",
      ref_data: 1,
      ref_icon : "mdi-cloud-upload",
      hom_data: 1,
      homeworks: [],
      references: [],
      exrcises: [],
      items: [
        {
          data: 1,
          header: "课堂练习",
          icon: "mdi-message-text",
          content: ["书p123页习题1.2.3", "书xxp123习题5"]
        },
        {
          data: 1,
          header: "课堂资料",
          icon: "mdi-cloud-upload",
          content: ["高等代数.pdf", "ch03.ppt"]
        },
        {
          data: 1,
          header: "课后作业",
          icon: "mdi-message-text",
          content: ["书p234习题1.3"]
        }
      ]
    };
  },
  computed: {
    time: {
      cache: false,
      get: function() {
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth() + 1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf =
          new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes();
        let ss =
          new Date().getSeconds() < 10
            ? "0" + new Date().getSeconds()
            : new Date().getSeconds();
        return yy + "/" + mm + "/" + dd + " " + hh + ":" + mf + ":" + ss;
      }
    },
    lesson_title: function() {
      return this.$route.query.lesson;
    },
    lesson_belong: function() {
      return this.$route.query.course;
    }
  }
};
</script>

<style>
</style>