<template>
  <div>
    <h2>List</h2>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
  </div>
</template>
<script>
  import listMixin from './listMixin'
  export default {
    mixins: [listMixin]
  }
</script>
