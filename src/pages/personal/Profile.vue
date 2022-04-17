<template>
  <div>
    <v-container>
      <v-card max-width="375" class="mx-auto">
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
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
              <div class="text-h5 pl-12 pt-12">1131180229_李龙雨</div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list one-line>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-bookmark-multiple </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>我的课件库</v-list-item-title>
                <!-- <v-list-item-subtitle>Mobile</v-list-item-subtitle> -->
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-bookmark-multiple </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>我的试卷库</v-list-item-title>
                <!-- <v-list-item-subtitle>Work</v-list-item-subtitle> -->
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-bookmark-multiple</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>身份绑定</v-list-item-title>
                <!-- <v-list-item-subtitle>Personal</v-list-item-subtitle> -->
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>绑定手机</v-list-item-title>
                <!-- <v-list-item-subtitle>Work</v-list-item-subtitle> -->
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: null,
    }),
  }
</script>

<style>
</style>