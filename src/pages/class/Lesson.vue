<template>
  <div>
    <v-container>
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
      items: [
        {
          data: 1,
          header: "课堂练习",
          icon: "mdi-message-text",
          content: ["书p123页习题1.2.3", "书xxp123习题5",]
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
    test:function(value) {
      let myMap = new Map();

      myMap.set("高等代数.pdf","https://www.jiangnan.edu.cn/")

      let url = myMap.get(value);
      console.log(url);
      window.open(url,"_blank");
    },
  }
};
</script>

<style>
</style>