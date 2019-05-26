<template>
  <div>
    <app-car>
      <h2 slot="title" v-colored>{{ carName }}</h2>
      <p slot="text">Далеко-далеко за.</p>
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  data() {
      return {
        carName: 'Ford'
      }
  },
  components: {
    appCar: Car,
  }
}
</script>
<style scoped>

</style>

