<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-toolbar color="orange lighten-1" dark>
              <v-toolbar-title>数学思想与建模文化8</v-toolbar-title>
            </v-toolbar>

            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header" inset>
                  {{
                  item.header
                  }}
                </v-subheader>

                <v-divider v-else-if="item.divider" :key="index" inset></v-divider>

                <v-list-item v-else :key="item.title" ripple>
                  <v-list-item-avatar>
                    <img :src="item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          header: "课件资料"
        },
        { divider: true },
        {
          avatar: "https://picsum.photos/250/300?image=660",
          title: "高等代数",
          subtitle: `<a href="chrome-extension://cdonnmffkdaoajfknoeeecmchibpmkmg/assets/pdf/web/viewer.html?file=http%3A%2F%2Fcslibrary.stanford.edu%2F103%2FLinkedListBasics.pdf" target="_blank">高等数学第四版</a>`
        },
        {
          avatar: "https://picsum.photos/250/300?image=821",
          title: '数学分析',
          subtitle:
            '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.'
        },
        {
          avatar: "https://picsum.photos/250/300?image=783",
          title: "图像处理",
          subtitle:
            '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations'
        },
        {
          header: "作业"
        },
        { divider: true },
        {
          avatar: "https://picsum.photos/250/300?image=1006",
          title: "书面作业",
          subtitle:
            '完成书p64页 1.2.3.4'
        }
      ]
    };
  }
};
</script>

<style>
</style>