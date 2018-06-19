<template>
  <div>

    <h1>Search </h1>
    <br/>
    <form>
<input placeholder="Enter Artist Name" v-model="search" autofocus/>
    </form>


  </div>

</template>

<script>

import 'babel-polyfill'



export default {
  components: {
  
  },
  data(){
    return{
      search: ''
    }
  }
}
</script>

<style>
</style>
