<template>
  <v-card>
    <div class="mui-card-content gongyi-icon">
      <a href="/index/activitys/gongyi_train_index">
        <img src="https://img.icons8.com/color-glass/48/000000/apple-app-store.png" />
        <div>公益培训</div>
      </a>
      <a href="/index/activitys/gongyi_activity_index">
        <img src="https://img.icons8.com/color-glass/48/000000/chrome.png" />
        <div>公益活动</div>
      </a>
      <a href="/index/activitys/teacher_job_index">
        <img src="https://img.icons8.com/stickers/100/000000/bookmark-ribbon.png" />
        <div>教师招募</div>
      </a>
      <a href="/index/activitys/teacher_show_index">
        <img src="https://img.icons8.com/stickers/100/000000/opened-folder.png" />
        <div>教师风采</div>
      </a>
      <a href="/index/products/list?group_id=1">
        <img src="https://img.icons8.com/glyph-neue/100/000000/opened-folder.png" />
        <div>积分兑换</div>
      </a>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">
        信息资讯
        <a class="more" href="#">更多</a>
      </div>
      <div class="mui-card-content scroll-news common-list index-news">
        <ul class="mui-slider-group mui-slider-loop mui-table-view" id="news">
          <li class="mui-table-view-cell mui-media">
            <a href="#" class>
              <div class="mui-media-object">
                <img src="https://s4.ax1x.com/2022/02/09/HJvh36.jpg" />
              </div>
              <div class="mui-media-body">
                <span class="list-title">2020暑期培训活动</span>
                <span class="short-desc">圆满结束</span>
                <span class="viewcount">阅读数：368</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mui-card-header active">
      <div>丰富多彩的公益培训</div>
      <a class="more" href="#">更多</a>
    </div>
    <div class="mui-card-content common-list activity">
      <ul class="mui-table-view" id="gongyi_train_index">
        <li v-for="(item, i) in activities" :key="i">
          <a href="#" class>
            <div class="mui-media-object box-img">
              <img src="https://s4.ax1x.com/2022/02/13/HDRJP0.jpg" height="100px" />
            </div>
            <div class="mui-media-body box">
              <span class="viewcount">
                <h5 style="font-family: 黑体;font-style: bold;">青少年宫2020年秋季培训开始啦</h5>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="mui-card-header active">
      <div>意义非凡的公益活动</div>
      <a class="more" href="#">更多</a>
    </div>
    <div class="mui-card-content common-list activity">
      <ul class="mui-table-view" id="gongyi_activity_index">
        <li v-for="(item, i) in activities" :key="i">
          <a href="#" class>
            <div class="mui-media-object box-img">
              <img :src="item.src" height="100px" />
            </div>
            <div class="mui-media-body box">
              <span class="viewcount">
                <h5 style="font-family: 黑体;font-style: bold;">{{item.name}}</h5>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="mui-card-header active">
      <div>德才兼备的优秀教师</div>
      <a class="more" href="#">更多</a>
    </div>
    <div class="mui-card-content common-list teacher-list">
      <ul class="mui-table-view" id="news_teacher">
        <li class="mui-table-view-cell mui-media">
          <a href="#" class>
            <div class="mui-media-object box-img">
              <img src="https://s4.ax1x.com/2022/02/13/HD2ZX4.png" />
            </div>
            <div class="mui-media-body box">
              <span class="list-title">王命数</span>
              <span class="viewcount">工笔花鸟</span>
              <span class="short-desc">诗书画教师志愿者</span>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="#" class>
            <div class="mui-media-object box-img">
              <img src="https://s4.ax1x.com/2022/02/13/HD2mnJ.png" />
            </div>
            <div class="mui-media-body box">
              <span class="list-title">王命数</span>
              <span class="viewcount">工笔花鸟</span>
              <span class="short-desc">诗书画教师志愿者</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="mui-card-header active">
      <div>各式各样的积分兑换</div>
      <a class="more" href="#">更多</a>
    </div>
    <div class="mui-card-content common-list recharge">
      <ul class="mui-table-view" id="gongyi_product_index">
        <li v-for="(item, i) in goods" :key="i">
          <a href="#" class>
            <div class="thumb-img">
              <img :src="item.src" />
            </div>
            <span class="list-title">{{item.title}}</span>
            <span class="colorred">{{item.price}}积分</span>
          </a>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          src: "https://s4.ax1x.com/2022/02/13/HD2MA1.jpg",
          title: "晴雨两用伞",
          price: 100
        },
        {
          src: "https://s4.ax1x.com/2022/02/13/HD2Jje.jpg",
          title: "皮质笔记本",
          price: 100
        },
        {
          src: "https://s4.ax1x.com/2022/02/13/HD2GcD.jpg",
          title: "保温杯",
          price: 100
        }
      ],
      activities: [
        {
          src: "https://s4.ax1x.com/2022/02/13/HD2u7R.gif",
          name: "青少年爱国主义教育公益"
        },
        {
          src: "https://s4.ax1x.com/2022/02/13/HD2Qtx.jpg",
          name: "青少年传统文化川菜博物青少年应急救援知识"
        },
        {
          src: "https://s4.ax1x.com/2022/02/13/HD2lh6.jpg",
          name: "青少年传统文化川菜博物青少年应急救援知识"
        },
        {
          src: "https://s4.ax1x.com/2022/02/13/HD281O.png",
          name: "爱成都 迎大运"
        }
      ]
    };
  }
};
</script>

<style>
.mui-slider-indicator .mui-indicator {
  background: #fff;
  border-radius: 10px;
  box-shadow: none;
  opacity: 0.3;
}
.mui-slider-indicator .mui-active.mui-indicator {
  width: 30px;
  opacity: 1;
}
.gongyi-icon {
  display: flex;
  margin: 12px 0;
}
.gongyi-icon a {
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: #000;
}
.gongyi-icon img {
  display: block;
  margin: 0 auto;
  width: 48px;
}
.mui-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 14px rgba(159, 159, 159, 0.1);
}
.mui-card-header {
  padding-bottom: 0;
  background: none;
}
.mui-card-header:after {
  display: none;
}
.mui-card-header.active div {
  flex: 1;
  font-weight: bold;
  color: #000;
}
.mui-card-header.active:before {
  content: "";
  margin-right: 6px;
  width: 3px;
  height: 16px;
  background: #38d7e5;
}
.mui-table-view {
  margin: 0 auto !important;
  background: none;
}
.mui-table-view .data-empty {
  background: transparent;
}
.mui-navigate-right span {
  float: right;
  margin-right: 15px;
}
.mui-table-view .mui-media-body {
  overflow: visible;
}
.mui-table-view .mui-media-body span {
  display: block;
  margin-top: 6px !important;
}
.mui-table-view .mui-media-body .list-title {
  margin-top: 0 !important;
}
.mui-table-view .mui-media-body .short-desc {
  height: 30px !important;
  line-height: 1.3 !important;
  overflow: hidden !important;
}
.mui-table-view-cell > a:not(.mui-btn) {
  margin: 0;
  padding: 0;
}
.common-list {
  padding: 0 10px;
}
#news {
  width: 100%;
  margin: 0;
}
.news-slider {
  width: auto;
}
.scroll-news .mui-table-view-cell {
  padding: 0;
}
.more {
  float: right;
  display: flex;
  align-items: center;
  color: #b4b4b4;
  font-size: 12px;
}
.more:after {
  content: "";
  margin-left: 6px;
  width: 6px;
  height: 10px;
  background: url(/assets/tuanwei/arrow_right.png);
  background-size: 100%;
}
.news-slider {
  margin-left: 2.5%;
}
.mui-control-content {
  display: none;
  height: auto;
}
.mui-content {
  padding-bottom: 20px;
  background: none;
  font-size: 14px;
}
#news .mui-media-body .createtime {
  color: #b4b4b4;
}
.index-news {
  height: auto;
}
.mui-table-view .mui-media-object {
  width: 116px !important;
  height: 84px !important;
}
.mui-table-view .mui-media-object img {
  display: block;
  width: 100%;
  max-width: 100% !important;
  border-radius: 6px;
}

.activity {
  margin-top: 12px;
  overflow-x: auto;
}
.activity ul {
  display: flex;
}
.activity li {
  width: 136px;
  margin: 0 12px 0 0;
}
.activity .thumb-img {
  width: 136px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
}
.activity .thumb-img img {
  width: 100%;
  min-height: 100%;
}
.activity .list-title {
  font-weight: bold;
  font-size: 12px !important;
}
.recharge {
  margin: 12px 0;
}
.recharge ul {
  display: flex;
  flex-wrap: wrap;
}
.recharge li {
  margin-bottom: 10px;
  padding: 0 10px;
  width: 33.33%;
  text-align: center;
}
.recharge .thumb-img {
  width: 80px;
  height: 70px;
  border-radius: 6px;
  overflow: hidden;
}
#news_teacher {
  display: flex;
  flex-wrap: wrap;
  width: auto;
}
#news_teacher li {
  padding: 0 10px;
  width: 50%;
  background: none;
}
#news_teacher li a {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  background: rgba(56, 215, 229, 0.1) !important;
  border-radius: 6px !important;
}
#news_teacher li .box-img {
  margin: 0 auto !important;
  width: 60px !important;
  height: 60px !important;
  border-radius: 50%;
  overflow: hidden;
}
#news_teacher li .box-img img {
  display: block;
  width: 100%;
  max-width: 100% !important;
  min-height: 100%;
}
#news_teacher li .box {
  margin: 0;
  width: auto !important;
  height: auto !important;
}
#news_teacher li .viewcount {
  height: 30px;
  overflow: hidden;
  text-align: center;
  color: #0eaeaf !important;
  font-weight: bold;
}
#news_teacher li .list-title {
  text-align: center;
  font-weight: bold;
}
#news_teacher li .short-desc {
  height: 30px;
  overflow: hidden;
}
</style>