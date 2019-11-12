<template>
  <div id="slot2">   
      <input placeholder="Type values" type="text" v-model="values" id="values">
  </div>
</template>

<script>

export default {
  name: 'slot2',
  data: function() {
    return {
      values: ''
    };
  }
}
</script>

<style>
#slot2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
#input {
    padding:5px;
    margin-left:10px;
}
</style>
