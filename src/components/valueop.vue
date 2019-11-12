<template>
  <div id="valueop">   
      <dropdown 
        :config="config"
        @setSelectedOption="setNewSelectedOption($event);">        
      </dropdown>       
  </div>
</template>

<script>
import dropdown from './dropdown.vue'

export default {
  name: 'valueop',
  components: {
    dropdown
  },
  data: function() {
    return {
      config: {
        options: [
          {
            value: "equal"
          },
          {
            value: "not equal"
          },
          {
            value: ">="
          }
        ],
        placeholder: "Value operator",
        backgroundColor: "#cde4f5",
        textColor: "black",
        borderRadius: "1.5em",
        border: "1px solid gray"
      }
    };
  },
  methods: {
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    }
  }
}
</script>

<style>
#valueop {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
