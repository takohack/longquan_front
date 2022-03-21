<template>
  <div >
    <v-container>
      <v-carousel height="150px" hide-delimiters>
        <v-carousel-item v-for="(top,i) in tops" :key="i" :src="top.src"></v-carousel-item>
      </v-carousel>
    </v-container>

    <SubCard/>
  </div>
</template>

<script>
import SubCard from './SubCard.vue'
export default {
  components: {
    SubCard
  },
  data() {
    return {
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tops: [
        {
          src: "https://s4.ax1x.com/2022/02/09/HJv4gK.jpg"
        },
        {
          src: "https://s4.ax1x.com/2022/02/09/HJvf9x.jpg"
        }
      ]
    };
  }
};
</script>

