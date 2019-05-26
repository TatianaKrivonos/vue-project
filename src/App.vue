<template>
  <div class="">
    <h1>Parent: {{ carName }}</h1>
    <app-car :carName="carName" :carYear="carYear" @nameChanged="carName = $event"></app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2019
    }
  },
  components: {
    appCar: Car
  }
}
</script>

