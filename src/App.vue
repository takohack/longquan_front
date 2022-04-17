<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-dialog v-model="dialog" width="400">
        <v-card>
          <v-card-title
            class="text-h6 font-weight-regular justify-space-between"
          >
            <span>登录</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="学号"
              type="text"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="密码"
              type="password"
              v-model="password"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              请输入学号和密码
            </span>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login"> 登录 </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-list v-if="is_login == false">
        <v-list-item link @click="show_diag">
          <v-list-item-content>
            <v-list-item-title class="text-h6">登录/注册</v-list-item-title>
            <v-list-item-subtitle>点击这里进行登录/注册</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list v-if="is_login == true">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">轴承昊</v-list-item-title>
            <v-list-item-subtitle>1131180229</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-icon right v-bind="attrs" v-on="on"> mdi-menu-down </v-icon>
              </template>
              <v-list class="grey lighten-3">
                <v-list-item
                  v-for="item in more"
                  :key="item"
                  @click="addItem(item)"
                >
                  {{ item }}
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            active-class
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="deep-purple accent-4" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ current_title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid class="ma-0 pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Activity from './pages/activity/Activity.vue';
// import ActivityCenter from "./pages/activity/ActivityCenter.vue";
import axios from "axios";
export default {
  name: "App",

  components: {
    // Activity,
    // ActivityCenter
  },
  created() {
    this.request();
  },
  methods: {
    show_diag() {
      this.dialog = true;
    },
    login() {
      console.log("登录");
      axios
        .get(
          `http://localhost:8080/user/login?username=${this.username}&password=${this.password}`
        )
        .then(
          (response) => {
            if (response.data.result === "success") {
              console.log("success");
              this.is_login = true;
              this.$router.push("/index");
              this.$router.go(0);
            } else {
              console.log(response.data);
            }
          },
          (error) => {
            console.log("请求失败", error.message);
          }
        );
    },
    request() {
      axios.get(`http://localhost:8080/user/getinfo`).then(
        (response) => {
          if (response.data.result === "success") {
            console.log("success");
            this.is_login = true;
          } else {
            console.log(response.data);
          }
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    addItem(param){
      if (param === "退出"){
        console.log(param);
        this.logout();
      }
      else if (param == "个人中心"){
        this.$router.push('profile')
      }
    },
    logout(){
      axios.get(`http://localhost:8080/user/logout`).then(
                    response => {
                        if (response.data.result === "success") {
                            this.$router.push('/index')
                            this.$router.go(0)
                        }
                    },
                    error => {
                        console.log('请求失败', error.message);

                    }
                )
    }
  },

  data: () => ({
    username: "test",
    password: "Bdy405488",
    is_login: false,
    dialog: false,
    drawer: false,
    more: ["个人中心", "退出"],
    items: [
      { title: "首页", icon: "mdi-account-group-outline", link: "/index" },
      { title: "课程中心", icon: "mdi-account", link: "/teenhome" },
      {
        title: "学习日历",
        icon: "mdi-home-city",
        link: "/activitycenter",
      },
      { title: "TODO", icon: "mdi-help-box" },
    ],
  }),
  computed: {
    current_title: function () {
      let current = this.$route.path;
      if (current === "/teenhome") {
        return "青年之家";
      } else if (current === "/activitycenter") {
        return "青少年活动中心";
      } else if (current === "/place") {
        return "青少年宫";
      } else if (current === "/index") {
        return "雨课堂";
      } else {
        return "还没有做";
      }
    },
  },
};
</script>

<style>
</style>