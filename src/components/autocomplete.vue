<template>
  <div>
    <md-autocomplete v-model="selectedValue" :md-options="values" :md-fuzzy-search="false" :md-open-on-focus="false" :md-input-max-length="10">
      <label>Values</label>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteStatic',
    data: () => ({
      selectedValue: null,      
      values: [
        'cirrhosis',
        'female',
        'male'
      ]
    })
  }
</script>
