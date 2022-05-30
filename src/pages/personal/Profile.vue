<template>
  <div>
    <v-container>
      <!-- 个人资料修改 -->
      <v-dialog v-model="dialog1" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            个人资料修改
          </v-card-title>

          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-subheader class="text-h6 lighten-2">姓名</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field :value="username"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader class="text-h6 lighten-2">学号</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field :value="userid"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-subheader class="text-h6 lighten-2">邮箱</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-text-field value="1349607493@qq.com"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" elevation="2" text @click="dialog1 = false">
              保存
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- 笔记上传-->
      <v-dialog v-model="dialog2" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> 笔记管理 </v-card-title>

          <v-card-text> 还没有上传过笔记 </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" elevation="2" text @click="dialog2 = false">
              关闭
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- 作业管理 -->
      <v-dialog v-model="dialog3" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> 作业管理 </v-card-title>

          <v-card-text> 还未上传过作业 </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" elevation="2" text @click="dialog3 = false">
              关闭
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card max-width="375" class="mx-auto">
        <v-img
          src="https://pic4.zhimg.com/v2-c80bda88f55543e015fc6016ae31bc28_r.jpg?source=1940ef5c"
          height="300px"
          dark
        >
          <v-row class="fill-height">
            <v-card-title>
              <v-btn dark icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-4">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-12 pt-12">
              <div class="text-h5 pl-12 pt-12">江南大学_理学院</div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list one-line>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item @click="dialog1 = true">
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-account-circle-outline </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>个人信息修改</v-list-item-title>
                <!-- <v-list-item-subtitle>Mobile</v-list-item-subtitle> -->
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item @click="dialog2 = true">
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-arrow-collapse-down </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>笔记管理</v-list-item-title>
                <!-- <v-list-item-subtitle>Work</v-list-item-subtitle> -->
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item @click="dialog3 = true">
              <v-list-item-icon>
                <v-icon color="indigo">mdi-arrow-collapse-down</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>作业管理</v-list-item-title>
                <!-- <v-list-item-subtitle>Personal</v-list-item-subtitle> -->
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-divider inset></v-divider>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.request();
  },
  methods: {
    request() {
      axios.get(`http://localhost:8080/user/getinfo`).then(
        (response) => {
          if (response.data.result === "success") {
            this.username = response.data.username;
            this.userid = response.data.userid;
          } else {
            console.log(response.data);
            this.dialog = false;
          }
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
  data: () => ({
    selectedItem: null,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    username: null,
    userid: null,
  }),
};
</script>

<style>
</style>