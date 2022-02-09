<template>
  <v-carousel height="auto" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        tops: [
          {
            src: 'https://s4.ax1x.com/2022/02/08/H3KNRg.jpg',
          },
          {
            src: 'https://s4.ax1x.com/2022/02/08/H3KtJS.jpg',
          },
        ],
      }
    },
  }
</script>

<style>

</style>