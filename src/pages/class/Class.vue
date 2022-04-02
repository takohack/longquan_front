<template>
  <div>
    <v-container>
      <h3>多元统计与数值分析</h3>
      <v-divider></v-divider>
      <v-card>
        <div style="background-color:lightblue;height:120px"></div>
      </v-card>
      <v-divider></v-divider>
      <h3>学习日志</h3>
      <v-tabs v-model="tab" align-with-title light>
        <v-tabs-slider></v-tabs-slider>
        <v-tab v-for="item in data" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-timeline>
            <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
              </template>
              <v-card :color="year.color" dark>
                <v-card-title class="text-h6">数学思想与数模文化8</v-card-title>
                <v-card-text class="white text--primary">
                  <v-btn :color="year.color" class="mx-0" outlined to="/lesson">课堂详情</v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "多元统计与数值分析",
      tab: null,
      data: ["课堂", "公告", "讨论"],
      years: [
        {
          color: "cyan",
          year: "4月25日"
        },
        {
          color: "green",
          year: "4月14日"
        },
        {
          color: "pink",
          year: "4月13日"
        },
        {
          color: "amber",
          year: "4月07日"
        },
        {
          color: "orange",
          year: "4月06日"
        }
      ]
    };
  }
};
</script>

<style>
</style>