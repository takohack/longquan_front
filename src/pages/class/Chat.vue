<template>
  <chat-window
    :current-user-id="currentUserId"
    :rooms="rooms"
    :messages="messages"
    :text-messages="display_message"
    :messages-loaded="true"
    :single-room="true"
    @send-message="send"
  />
</template>

<script>
import axios from "axios";
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";
import moment from "moment";

export default {
  created() {
    //获取用户信息
    axios.get(`http://localhost:8080/user/getinfo`).then(
      (response) => {
        if (response.data.result === "success") {
          console.log("success");
          console.log(response.data);
          this.username = response.data.username;
          this.user_photo = response.data.photo;
          console.log(this.user_photo);
        } else {
          console.log(response.data);
          this.dialog = false;
        }
      },
      (error) => {
        console.log("请求失败", error.message);
      }
    );

    const _this = this;

    const socketUrl = "ws://127.0.0.1:8000/lesson/wuhu";
    if (this.socket == null) {
      console.log("创建新的socket连接");
      this.socket = new WebSocket(socketUrl);
      this.socket.onopen = function () {
        console.log("浏览器WebSocket已打开");
      };
      // 监听socket消息接收
      this.socket.onmessage = function (msg) {
        // 追加到内容显示列表中
        let recive_data = JSON.parse(msg.data);
        console.log("收到websocket是");
        console.log(recive_data);
        _this.message_index += 1;
        console.log(_this.user_photo);
        let temp_senderId = 999;
        if (recive_data.user_photo === _this.user_photo) {
          console.log("是自己发的");
          temp_senderId = 1234;
        }
        let send_message = {
          _id: 1234,
          indexId: _this.message_index,
          content: recive_data.message,
          senderId: temp_senderId,
          username: recive_data.name,
          avatar: recive_data.user_photo,
          date: _this.time,
          timestamp: _this.time,
          saved: true,
          distributed: true,
          seen: true,
        };
        let temp_arr = JSON.parse(JSON.stringify(_this.messages));
        console.log(_this.messages.length);
        temp_arr.push(send_message);
        console.log(_this.messages.length);
        console.log(temp_arr.length);
        _this.messages = JSON.parse(JSON.stringify(temp_arr));
        console.log(_this.messages.length);
        temp_arr = [];
        send_message = [];
      };
      // 监听socket错误
      this.socket.onerror = function () {
        _this.$notify({
          title: "错误",
          message: "服务器错误，无法接收实时报警信息",
          type: "error",
          duration: 0,
        });
      };
      // 监听socket关闭
      this.socket.onclose = function () {
        console.log("WebSocket已关闭");
      };
    }
  },
  methods: {
    send(data) {
      console.log("发送数据");
      console.log(data.content);
      this.webSocket(data.content);
      console.log("发送数据结束");
    },
    webSocket(data) {
      this.socket.send(
        JSON.stringify({
          message: data,
          photo: this.user_photo,
          name: this.username,
        })
      );
    },
  },
  components: {
    ChatWindow,
  },
  data() {
    return {
      // course_title: "",
      user_photo: "",
      username: "",
      display_message: {
        CONVERSATION_STARTED: "最后一条消息 :",
        LAST_SEEN: "课堂会话开始于 ",
      },
      socket: null,
      message_index: 10,
      rooms: [
        {
          roomId: 1,
          roomName: "课堂聊天室",
          avatar: "https://s1.ax1x.com/2022/04/05/qOf27j.png",
          unreadCount: 4,
          index: 3,
          lastMessage: {
            content: "Last message received",
            senderId: 1234,
            username: "John Doe",
            timestamp: "10:20",
            saved: true,
            distributed: false,
            seen: false,
            new: true,
          },
          users: [
            {
              _id: 1234,
              username: "John Doe",
              avatar: "assets/imgs/doe.png",
              status: {
                state: "online",
                lastChanged: "today, 14:30",
              },
            },
            {
              _id: 4321,
              username: "John Snow",
              avatar: "assets/imgs/snow.png",
              status: {
                state: "offline",
                lastChanged: "14 July, 20:00",
              },
            },
            {
              _id: 4322,
              username: "John Snow",
              avatar: "assets/imgs/snow.png",
              status: {
                state: "offline",
                lastChanged: "14 July, 20:00",
              },
            },
            {
              _id: 4323,
              username: "John Snow",
              avatar: "assets/imgs/snow.png",
              status: {
                state: "offline",
                lastChanged: "14 July, 20:00",
              },
            },
          ],
        },
      ],
      messages: [
        // {
        //   _id: 7890,
        //   indexId: 12092,
        //   content: "Message 1",
        //   senderId: 1234,
        //   username: "John Doe",
        //   avatar:
        //     "https://cdn.acwing.com/media/user/profile/photo/97206_lg_708621592e.jpg",
        //   date: "13 November",
        //   timestamp: "10:20",
        //   saved: true,
        //   distributed: true,
        //   seen: true,
        // },
      ],
      currentUserId: 1234,
    };
  },
  computed: {
    course_title: function () {
      return this.$route.query.course;
    },
    time: {
      cache: false,
      get: function () {
        // return moment().format("YYYY-MM-DD HH:mm");
        return moment().format("HH:mm");
      },
    },
  },
};
</script>