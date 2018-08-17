<template>
  <div>
    <app-NavBar></app-NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  export default {
    components:{
      'app-Home':Home
    }
  }
</script>
