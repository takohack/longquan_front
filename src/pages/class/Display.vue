<template>
  <v-container>
    <v-toolbar flat color="transparent">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        append-icon="mdi-magnify"
        label="搜索课程"
        single-line
      ></v-text-field>
    </v-toolbar>
    <v-container v-for="i in 5" :key=i>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">理学院</div>
            <v-list-item-title class="text-h6 mb-1">
              数学建模与数学文化
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text> 订阅 </v-btn>
        </v-card-actions>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </v-container>
</template>

<script>
</script>

<style>
</style>