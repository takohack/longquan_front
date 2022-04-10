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
        <v-expansion-panel v-for="(item,i) in items" :key="i">
          <v-expansion-panel-header>{{item.header}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-list dense>
                <v-list-item-group v-model="item.data" color="primary">
                  <v-list-item v-for="(todo,i) in item.content " :key="i">
                    <v-list-item-action>
                      <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title @click="test(todo)">{{ todo }}</v-list-item-title>
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
export default {
  data() {
    return {
      dialog: false,
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
  methods: {
    test: function(value) {
      let myMap = new Map();

      myMap.set("高等代数.pdf", "https://www.jiangnan.edu.cn/");

      let url = myMap.get(value);
      window.open(url, "_blank");
    }
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
    }
  }
};
</script>

<style>
</style>