<template>
  <div id="app">   
      <div id="andor">
        <andor>
        </andor>
      </div>
      <div id="slot1">
        <slot1>
        </slot1>
      </div>
      <div id="valueop">
        <valueop>
        </valueop>
      </div>
      <div id="slot2">
        <slot2>
        </slot2>
      </div>
       <div id="addbutton">
        <addbutton>
        </addbutton>
      </div>
  </div>
</template>

<script>
import andor from './components/andor.vue'
import slot1 from './components/slot1.vue'
import slot2 from './components/slot2.vue'
import valueop from './components/valueop.vue'
import addbutton from './components/addbutton.vue'

export default {
  name: 'app',
  components: {
    andor, slot1, valueop, slot2, addbutton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 15px;
}
#andor, #slot1, #valueop, #slot2, #addbutton{
  display: inline-block;
}

</style>
