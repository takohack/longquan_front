<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">John Leider</v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" active-class>
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

      <v-toolbar-title>{{current_title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="test">
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

export default {
  name: "App",

  components: {
    // Activity,
    // ActivityCenter
  },

  data: () => ({
    drawer: false,
    items: [
      { title: "首页", icon: "mdi-account-group-outline", link: "/index" },
      { title: "青年之家", icon: "mdi-account", link: "/teenhome" },
      {
        title: "青少年活动中心",
        icon: "mdi-home-city",
        link: "/activitycenter"
      },
      { title: "青年志愿者", icon: "mdi-help-box" }
    ]
  }),
  methods: {
    test() {
      console.log(this.$route.path);
    }
  },
  computed: {
    current_title: function() {
      let current = this.$route.path;
      if (current === "/teenhome") {
        return "青年之家";
      } else if (current === "/activitycenter") {
        return "青少年活动中心";
      } else if (current === "/place") {
        return "青少年宫";
      } else if (current === "/index"){
        return "雨课堂";
      } else {
        return "还没有做";
      }
    }
  }
};
</script>

<style>
</style>