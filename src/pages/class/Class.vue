<template>
  <div>
    <v-container>
      <h3>多元统计与数值分析</h3>
      <v-divider></v-divider>
      <v-container>
        <div>
          <v-alert type="warning">
            <strong>公告:</strong>
          </v-alert>
          <v-alert type="info">
            <strong>本周作业</strong>: 1.完成书上习题2.xxxxxxxxxxxxxxxxxxxx
          </v-alert>
        </div>
      </v-container>
      <v-divider></v-divider>
      <h3>学习日志</h3>
      <v-container>
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
                  <v-card-title style="font-size:1rem;line-height:1.1rem">{{year.lesson}}</v-card-title>
                  <v-card-text class="white text--primary">
                    <v-btn :color="year.color" class="mx-0" outlined to="/lesson">课堂详情</v-btn>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-tab-item>
          <!-- 讨论 -->
          <v-tab-item>
            <v-container v-for="(year,i) in years" :key="i">
              <div class="info-box">
                <div class="info-box-left">
                  <img
                    src="https://cdn.acwing.com/media/user/profile/photo/81390_lg_6e28d2487c.jpg"
                    alt
                  />
                </div>
                <div class="info-box-right">
                  <div class="info-box-right-top">
                    <span>EverSleeping</span>
                    <span>2019-10-15 20:34</span>
                    <span>回复</span>
                  </div>
                  <div
                    class="info-box-right-content"
                    style="border-style: bold;"
                  >测试测试测试测试测试测试测试测试测试测试测试测试</div>
                </div>
              </div>
              <v-divider></v-divider>
            </v-container>
          </v-tab-item>
          <!-- 公告 -->
          <v-tab-item>
            <v-alert type="warning">
              <strong>公告:</strong>
            </v-alert>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    enter() {
      this.$router.push("/lesson");
    }
  },
  data() {
    return {
      title: "多元统计与数值分析",
      tab: null,
      data: ["课堂", "讨论", "通知"],
      years: [
        {
          color: "cyan",
          year: "4月25日",
          lesson: "第六章:差分方程"
        },
        {
          color: "green",
          year: "4月14日",
          lesson: "第五章:复习"
        },
        {
          color: "pink",
          year: "4月13日",
          lesson: "第四章:稳定性与定性理论初步"
        },
        {
          color: "amber",
          year: "4月07日",
          lesson: "第三章:线性微分方程组"
        },
        {
          color: "orange",
          year: "4月06日",
          lesson: "第二章:线性微分方程"
        }
      ]
    };
  }
};
</script>

<style>
</style>

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

/* 讨论区 */
.info-box {
  width: 315px;
  height: 100px;
  margin: 10px auto;
  box-sizing: border-box;
}

.info-box-left > img {
  margin-top: 3px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.info-box-left {
  width: 50px;
  height: 80px;
  float: left;
}

.info-box-right {
  width: 265px;
  height: 80px;
  float: left;
}

.info-box-right-top > span:nth-child(1) {
  font-size: 15px;
  color: #337ab7;
  margin-left: 8px;
}

.info-box-right-top > span:nth-child(2) {
  font-size: 13px;
  color: #999999;
  margin-left: 8px;
}

.info-box-right-top > span:nth-child(3) {
  font-size: 13px;
  color: #999999;
  margin-left: 8px;
}
.info-box-right-content {
  margin-left: 8px;
  font-size: 14px;
  color: #333333;
}
</style>