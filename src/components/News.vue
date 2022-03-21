<template>
  <v-card>
    <div class="mui-card">
      <div class="mui-card-header">
        信息资讯
        <a class="more" href="/index/newss/list?group_id=1">更多</a>
      </div>
      <div class="mui-card-content scroll-news common-list index-news">
          <ul class="mui-slider-group mui-slider-loop mui-table-view" id="news">
            <li class="mui-table-view-cell mui-media">
                <div class="mui-media-object">
                    <a href="#" class>
                  <img src="https://s4.ax1x.com/2022/02/09/HJvh36.jpg" />
                    </a>
                </div>
                <div class="mui-media-body">
                  <span class="list-title">'+data[d].title+'</span>
                  <span class="short-desc">'+data[d].short_desc+'</span>
                  <span class="viewcount">阅读数：'+data[d].view_count+'</span>
                  <span class="createtime">'+data[d].createtime_text+'</span>
                </div>
              
            </li>
          </ul>
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
.news-slider {
  width: auto;
}
.mui-slider .mui-slider-group .mui-slider-item {
  border-radius: 0;
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
  padding: 0;
  background: none;
}
.filter-tab-line {
  padding: 0 15px 0;
  max-width: 260px;
  font-size: 15px;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.filter-tab-line + .filter-tab-line {
  margin-left: -15px;
}
.filter-tab-line.active {
  background: none;
  font-weight: bold;
  color: #333;
}
.filter-tab-line.active:after {
  content: "";
  display: block;
  margin: 3px auto 0;
  width: 30px;
  height: 3px;
  background: #17b2f7;
}
.act_status {
  right: 0;
  top: -6px;
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
.recharge ul {
  display: flex;
  flex-wrap: wrap;
}
.recharge li {
  margin-top: 10px;
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
.colorred {
  font-size: 12px;
  color: #ff4a60;
}
.mui-card-header.active div {
  flex: 1;
  font-weight: bold;
  color: #000;
}
.more {
  float: right;
  display: flex;
  align-items: center;
  color: #b4b4b4;
  font-size: 12px;
}
</style>