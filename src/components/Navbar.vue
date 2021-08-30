<template>
    <v-container fluid>
      <v-app-bar
        color="blue"
        dark
      >
        <v-spacer/>
        <v-btn outlined class="ml-3">
          <router-link to="/" style="text-decoration:none;">Главная</router-link>
        </v-btn>
        <v-btn outlined class="ml-3">
          <router-link to="/photo" style="text-decoration:none;">Фотографии</router-link>
        </v-btn>
      </v-app-bar>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>