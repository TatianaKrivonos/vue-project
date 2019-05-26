<template>
  <div>
    <app-car>
      <h2 slot="title" v-colored v-if="visible">{{ carName }}</h2>
      <p slot="text">Далеко-далеко за.</p>
      <button slot="btn" @click="visible = !visible">Toggle</button>
      <button slot="btn2" @click="carName = 'New title'">Change title</button>
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

