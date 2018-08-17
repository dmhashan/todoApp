<template>
  <div>
    <app-NavBar></app-NavBar>
    <app-Home></app-Home>
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
