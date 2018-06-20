<template>
  <div>

    <h1>Search </h1>
    <br/>
    <form @submit.prevent="submit">
<input placeholder="Enter Artist Name" 
v-model="search" autofocus/>
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
  },
  methods: {
    submit(event){
     this.$router.push(`results/${this.search}`);
    }
  }
}
</script>


<style>
*{
  text-align: center;
}
h1{
  padding: 20px;
}
</style>
