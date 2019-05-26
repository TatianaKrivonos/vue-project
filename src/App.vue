<template>
  <div>
    <app-car>
      <h2 v-colored:background="'#ccc'" v-if="visible">{{ carName }}</h2>
      <h2 v-colored:color="'blue'" v-if="visible">{{ carName }}</h2>
      <p >Далеко-далеко за.</p>
      <button  @click="visible = !visible">Toggle</button>
      <button @click="carName = 'New title'">Change title</button>
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  data() {
      return {
        carName: 'Audi',
        visible: true
      }
  },
  components: {
    appCar: Car,
  }
}
</script>
<style scoped>

</style>

