<template>
  <div>
    <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
      <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
      <div class="reply-info">
        <div
          tabindex="0"
          contenteditable="true"
          id="replyInput"
          spellcheck="false"
          placeholder="输入评论..."
          class="reply-input"
          @focus="showReplyBtn"
          @input="onDivInput($event)"
        ></div>
      </div>
      <div class="reply-btn-box" v-show="btnShow">
        <el-button
          class="reply-btn"
          size="medium"
          @click="sendComment"
          type="primary"
          >发表评论</el-button
        >
      </div>
    </div>
    <div
      v-for="(item, i) in comments"
      :key="i"
      class="author-title reply-father"
    >
      <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
      <div class="author-info">
        <span class="author-name">{{ item.name }}</span>
        <span class="author-time">{{ item.time }}</span>
      </div>
      <div class="icon-btn">
        <span @click="showReplyInput(i, item.name, item.id)"
          ><i class="iconfont el-icon-s-comment"></i>{{ item.commentNum }}</span
        >
        <i class="iconfont el-icon-caret-top"></i>{{ item.like }}
      </div>
      <div class="talk-box">
        <p>
          <span class="reply">{{ item.comment }}</span>
        </p>
      </div>
      <div class="reply-box">
        <div v-for="(reply, j) in item.reply" :key="j" class="author-title">
          <el-avatar
            class="header-img"
            :size="40"
            :src="reply.fromHeadImg"
          ></el-avatar>
          <div class="author-info">
            <span class="author-name">{{ reply.from }}</span>
            <span class="author-time">{{ reply.time }}</span>
          </div>
          <div class="icon-btn">
            <span @click="showReplyInput(i, reply.from, reply.id)"
              ><i class="iconfont el-icon-s-comment"></i
              >{{ reply.commentNum }}</span
            >
            <i class="iconfont el-icon-caret-top"></i>{{ reply.like }}
          </div>
          <div class="talk-box">
            <p>
              <span>回复 {{ reply.to }}:</span>
              <span class="reply">{{ reply.comment }}</span>
            </p>
          </div>
          <div class="reply-box"></div>
        </div>
      </div>
      <div v-show="_inputShow(i)" class="my-reply my-comment-reply">
        <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
        <div class="reply-info">
          <div
            tabindex="0"
            contenteditable="true"
            spellcheck="false"
            placeholder="输入评论..."
            @input="onDivInput($event)"
            class="reply-input reply-comment-input"
          ></div>
        </div>
        <div class="reply-btn-box">
          <el-button
            class="reply-btn"
            size="medium"
            @click="sendCommentReply(i)"
            type="primary"
            >发表评论</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
const clickoutside = {
  // 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.vueClickOutside = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener("click", el.vueClickOutside);
    delete el.vueClickOutside;
  },
};
export default {
  name: "ArticleComment",
  created() {
    this.request();
  },
  data() {
    return {
      btnShow: false,
      index: "0",
      replyComment: "",
      myName: "Lana Del Rey",
      myHeader:
        "https://cdn.acwing.com/media/user/profile/photo/97206_lg_708621592e.jpg",
      myId: 19870621,
      to: "",
      toId: -1,
      comments: [
        {
          name: "李振宁",
          id: 19870621,
          headImg:
            "https://cdn.acwing.com/media/user/profile/photo/97206_lg_708621592e.jpg",
          comment: "代数余子式和对应元素取值无关证明不明白?",
          time: "2022年5月16日 18:43",
          commentNum: 2,
          like: 15,
          inputShow: false,
          reply: [
            {
              from: "徐涛",
              fromId: 19891221,
              fromHeadImg:
                "https://cdn.acwing.com/media/user/profile/photo/122318_lg_d6425e163c.jpg",
              to: "李振宁",
              toId: 19870621,
              comment:
                "Aij是行列式划掉第i行第j列的n-1阶子式乘(-1)^{i+j}，当然和第i行没关系啦",
              time: "2019年9月16日 18:43",
              commentNum: 1,
              like: 15,
              inputShow: false,
            },
            {
              from: "周成昊",
              fromId: 1123,
              fromHeadImg:
                "https://cdn.acwing.com/media/user/profile/photo/189259_lg_8256a640bc.jpg",
              to: "李振宁",
              toId: 19870621,
              comment:
                "就是证明kA与(k^-1)(A^-1)的乘积为单位阵。k与k^-1都是数，可以交换次序，立即得证。",
              time: "2019年9月16日 18:43",
              commentNum: 0,
              like: 5,
              inputShow: false,
            },
          ],
        },
        {
          name: "李振宁",
          id: 19891221,
          headImg:
            "https://cdn.acwing.com/media/user/profile/photo/97206_lg_708621592e.jpg",
          comment: "伴随矩阵的秩与原矩阵的秩的关系是什么样的",
          time: "2019年9月16日 18:43",
          commentNum: 1,
          like: 5,
          inputShow: false,
          reply: [
            {
              from: "周成昊",
              fromId: 19870621,
              fromHeadImg:
                "https://cdn.acwing.com/media/user/profile/photo/189259_lg_8256a640bc.jpg",
              to: "李振宁",
              toId: 19891221,
              comment: "r(A)=n,r(A*)=n;r(A)=n-1,r(A*)=1;r(A)<n-1,r(A*)=0",
              time: "2019年9月16日 18:43",
              commentNum: 25,
              like: 5,
              inputShow: false,
            },
          ],
        },
      ],
    };
  },
  directives: { clickoutside },
  computed: {
    course_title: function () {
      return this.$route.query.course;
    },
    course_id: function () {
      let map = new Map();
      map.set("数据结构", 3);
      map.set("数学思想与数模文化", 1);
      map.set("多元统计与数学分析", 2);
      map.set("高等代数", 4);
      map.set("数学分析", 5);
      map.set("解析几何", 6);
      map.set("常微分方程", 8);
      map.set("离散数学", 7);

      return map;
    },
  },
  methods: {
    request() {
      axios.get(`http://localhost:8080/user/getinfo`).then(
        (response) => {
          if (response.data.result === "success") {
            this.myName = response.data.username;
            this.myHeader = response.data.photo;
            this.myId = response.data.photo.userid;
            // this.choose_Lesson = response.data.lesson;
            // this.user_photo = response.data.photo;
            // this.is_login = true;
            // this.dialog = false;
          } else {
            console.log(response.data);
            this.dialog = false;
          }
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
      let course_title = this.course_title;
      let course_id = this.course_id.get(course_title);
      //console.log(course_id);
      axios.get(`http://localhost:8080/getcomments?courseid=${course_id}`).then(
        (response) => {
          if (response.data.result !== "fail") {
            let str_comments = response.data.result;
            let comments = JSON.parse(str_comments);
            this.comments = comments;
            // console.log(str_comments);
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
    inputFocus() {
      var replyInput = document.getElementById("replyInput");
      replyInput.style.padding = "8px 8px";
      replyInput.style.border = "2px solid blue";
      replyInput.focus();
    },
    showReplyBtn() {
      this.btnShow = true;
    },
    hideReplyBtn() {
      this.btnShow = false;
      replyInput.style.padding = "10px";
      replyInput.style.border = "none";
    },
    showReplyInput(i, name, id) {
      this.comments[this.index].inputShow = false;
      for (let j = 0; j < this.comments.length; ++j) {
        if (j !== i) {
          this.comments[j].inputShow = false;
        }
      }
      this.index = i;
      this.comments[i].inputShow = true;
      this.to = name;
      this.toId = id;
    },
    _inputShow(i) {
      return this.comments[i].inputShow;
    },
    update() {
      let str_comments = JSON.stringify(this.comments);
      let course_title = this.course_title;
      let course_id = this.course_id.get(course_title);
      axios
        .get(
          `http://localhost:8080/updatecomments?comments=${str_comments}&courseid=${course_id}`
        )
        .then(
          (response) => {
            if (response.data.result !== "fail") {
            } else {
              this.notice = response.data.result;
              console.log(response.data);
            }
          },
          (error) => {
            console.log("请求失败", error.message);
          }
        );
    },
    sendComment() {
      if (!this.replyComment) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "评论不能为空",
        });
      } else {
        let a = {};
        let input = document.getElementById("replyInput");
        let timeNow = new Date().getTime();
        let time = moment().format("YYYY-MM-DD HH:mm");
        a.name = this.myName;
        a.comment = this.replyComment;
        a.headImg = this.myHeader;
        a.id = this.myId;
        a.time = time;
        a.reply = [];
        a.commentNum = 0;
        a.like = 0;
        this.comments.push(a);
        this.update();
        this.replyComment = "";
        input.innerHTML = "";
      }
    },
    sendCommentReply(i) {
      if (!this.replyComment) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "评论不能为空",
        });
      } else {
        let a = {};
        let timeNow = new Date().getTime();
        let time = moment().format("YYYY-MM-DD HH:mm");
        a.from = this.myName;
        a.to = this.to;
        a.fromHeadImg = this.myHeader;
        a.comment = this.replyComment;
        a.time = time;
        a.commentNum = 0;
        a.like = 0;
        this.comments[i].reply.push(a);
        this.update();
        this.replyComment = "";
        document.getElementsByClassName("reply-comment-input")[i].innerHTML =
          "";
      }
    },
    onDivInput: function (e) {
      this.replyComment = e.target.innerHTML;
    },
    dateStr(date) {
      //获取js 时间戳
      var time = new Date().getTime();
      //去掉 js 时间戳后三位，与php 时间戳保持一致
      time = parseInt((time - date) / 1000);
      //存储转换值
      var s;
      if (time < 60 * 10) {
        //十分钟内
        return "刚刚";
      } else if (time < 60 * 60 && time >= 60 * 10) {
        //超过十分钟少于1小时
        s = Math.floor(time / 60);
        return s + "分钟前";
      } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
        //超过1小时少于24小时
        s = Math.floor(time / 60 / 60);
        return s + "小时前";
      } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
        //超过1天少于30天内
        s = Math.floor(time / 60 / 60 / 24);
        return s + "天前";
      } else {
        //超过30天ddd
        var date = new Date(parseInt(date));
        return (
          date.getFullYear() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getDate()
        );
      }
    },
  },
};
</script>



<style scoped lang="css">
.my-reply {
  padding: 10px;
  background-color: #fafbfc;
}

.my-reply .header-img {
  display: inline-block;
  vertical-align: top;
}

.my-reply .reply-info {
  display: inline-block;
  margin-left: 5px;
  width: 90%;
}

@media screen and (max-width: 1200px) {
  .my-reply .reply-info {
    width: 80%;
  }
}

.my-reply .reply-info .reply-input {
  min-height: 20px;
  line-height: 22px;
  padding: 10px 10px;
  color: #ccc;
  background-color: #fff;
  border-radius: 5px;
}

.my-reply .reply-info .reply-input:empty:before {
  content: attr(placeholder);
}

.my-reply .reply-info .reply-input:focus:before {
  content: none;
}

.my-reply .reply-info .reply-input:focus {
  padding: 8px 8px;
  border: 2px solid #00f;
  box-shadow: none;
  outline: none;
}

.my-reply .reply-btn-box {
  height: 25px;
  margin: 10px 0;
}

.my-reply .reply-btn-box .reply-btn {
  position: relative;
  float: right;
  margin-right: 15px;
}

.my-comment-reply {
  margin-left: 50px;
}

.my-comment-reply .reply-input {
  width: flex;
}

.author-title:not(:last-child) {
  border-bottom: 1px solid rgba(178, 186, 194, 0.3);
}

.author-title {
  padding: 10px;
}

.author-title .header-img {
  display: inline-block;
  vertical-align: top;
}

.author-title .author-info {
  display: inline-block;
  margin-left: 5px;
  width: 60%;
  height: 40px;
  line-height: 20px;
}

.author-title .author-info > span {
  display: block;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.author-title .author-info .author-name {
  color: #000;
  font-size: 18px;
  font-weight: bold;
}

.author-title .author-info .author-time {
  font-size: 14px;
}

.author-title .icon-btn {
  width: 30%;
  padding: 0 !important;
  float: right;
}

@media screen and (max-width: 1200px) {
  .author-title .icon-btn {
    width: 20%;
    padding: 7px;
  }
}

.author-title .icon-btn > span {
  cursor: pointer;
}

.author-title .icon-btn .iconfont {
  margin: 0 5px;
}

.author-title .talk-box {
  margin: 0 50px;
}

.author-title .talk-box > p {
  margin: 0;
}

.author-title .talk-box .reply {
  font-size: 16px;
  color: #000;
}

.author-title .reply-box {
  margin: 10px 0 0 50px;
  background-color: #efefef;
}
</style>