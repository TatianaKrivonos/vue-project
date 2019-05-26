<template>
  <div class="car">
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{carYear}} </p>
    <button @click="changeName">Change name</button>
  </div>
</template>
<script>
  export default {
    props: {
      carName: String,
      carYear: Number
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      }
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    }
  }
</script>
<style>
  .car {
    padding: 10px;
    border: 1px solid #000;
  }

  .car h3 {
    margin-bottom: 10px;
  }
</style>
