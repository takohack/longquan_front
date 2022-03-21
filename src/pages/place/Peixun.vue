<template>
  <v-card>
    <div class="top-header">
      <div class="mui-input-row mui-search mui-active">
        <input
          type="search"
          name="keyword"
          id="keyword"
          class="mui-input-clear"
          placeholder="请输入培训活动名称"
          data-input-clear="1"
          data-input-search="1"
        />
        <span class="mui-icon mui-icon-clear mui-hidden"></span>
        <span class="mui-placeholder">
          <span class="mui-icon mui-icon-search"></span>
          <span></span>
        </span>
      </div>
    </div>
    <div class="mui-content">
      <div style="padding: 10px 10px 0;">
        <div class="mui-segmented-control">
          <div class="mui-control-item mui-active">公益培训</div>
          <div class="mui-control-item {$act=='my_book'?'mui-active':''}" data="#item2">我报名的课程</div>
        </div>
        <input type="hidden" id="curtype" value="0" />
      </div>
      <div>
        <div id="item1" class="mui-control-content mui-active common-list">
          <ul class="mui-table-view" id="gongyi_train">
            <li class="mui-table-view-cell mui-media">
              <a href="https://s4.ax1x.com/2022/02/09/HJvh36.jpg" class>
                <div class="mui-media-object">
                  <img src="https://s4.ax1x.com/2022/02/09/HJvh36.jpg" />
                </div>
                <div class="mui-media-body">
                    <span class="act_status status">报名中</span>
                    <span class="list-title">青少年宫2021年暑假公益培训</span>
                    <span class="short-desc">成都市龙泉驿区青少年</span>
                    <span class="ages">6-65岁</span>
                    <span class="join_count" style="margin-left:10px;">报名人数：563名</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div id="item2" class="mui-control-content {$act=='my_book'?'mui-active':''} common-list">
          <div class="filter-box">
            <div class="filter-tab c_status" style="display: none;">
              <div class="filter-tab-line active" data="0">全部</div>
              <div class="filter-tab-line" data="1">审核中</div>
              <div class="filter-tab-line" data="2">已通过</div>
              <div class="filter-tab-line" data="3">未通过</div>
            </div>
          </div>
          <ul class="mui-table-view" id="activity_booking"></ul>
        </div>
      </div>
      <div class="backhome">
        <a href="/index/activitys/gongyi_index">回首页</a>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #f7f8fa;
}
.mui-search {
  margin: 10px auto 10px;
  width: 90%;
  background: #f0f0f0;
  border-radius: 20px;
}
.mui-search:before {
  left: 10px !important;
  margin-top: -9px;
  color: #cbdbe8;
}
.mui-search input {
  margin: 0;
  padding-left: 35px !important;
  background: transparent;
}
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
.mui-card-header.active {
  justify-content: flex-start;
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
  margin-top: 10px !important;
}
.mui-table-view .mui-media-body .list-title {
  margin-top: 0 !important;
}
.mui-table-view .mui-media-body .short-desc {
  max-height: 30px !important;
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
#news {
  width: 100%;
  margin: 0;
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
.mui-content .mui-media-body .list-title {
  padding-right: 56px;
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
.mui-segmented-control {
  display: flex;
  border: none;
}
.mui-segmented-control .mui-control-item {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  font-size: 15px;
  color: #000;
}
.mui-segmented-control .mui-control-item + .mui-control-item:before {
  position: absolute;
  top: 10px;
  left: 0;
  content: "";
  height: 16px;
  border-left: #bfbfbf solid 1px;
}
.mui-segmented-control .mui-control-item.mui-active {
  background: none;
  font-weight: bold;
  color: #000;
}
.mui-segmented-control .mui-control-item.mui-active:after {
  content: "";
  width: 30px;
  height: 3px;
  background: #17b2f7;
}
.filter-box {
  margin-top: 12px;
}
.act_status {
  right: 0;
  top: -10px;
  border-radius: 3px;
}
.status2 {
  background: #17b2f7;
}
.status3 {
  background: #ff4a60;
}
.status4 {
  background: #666;
}
.book_status1 {
  border-radius: 3px;
  background: #17b2f7;
  color: #fff !important;
}
.book_status2 {
  border-radius: 3px;
  background: #ff4a60;
  color: #fff !important;
}
.book_status3 {
  border-radius: 3px;
  background: #666;
  color: #fff !important;
}
.backhome {
  position: fixed;
  bottom: 26px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(180deg, #00d0d7 0%, #0eaeaf 100%);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  transform: rotateZ(45deg);
}
.backhome a {
  transform: rotateZ(-45deg);
  color: #fff;
}
</style>