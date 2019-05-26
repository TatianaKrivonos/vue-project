<template>
  <div class="">
    <h1>Parent: {{ carName }}</h1>
    <app-counter></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event">
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'
export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2019
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

