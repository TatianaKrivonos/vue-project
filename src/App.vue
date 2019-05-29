<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ title | upperCase }}</h2>
    <app-car>
      <h2 v-colored:background.font="'#ccc'" v-if="visible">{{ carName }}</h2>
      <h2 v-colored:color.delay.font="'blue'" v-if="visible">{{ carName }}</h2>
      <h2 v-font>Local font directive</h2>
      <p >Далеко-далеко за.</p>
      <button  @click="visible = !visible">Toggle</button>
      <button @click="carName = 'New title'">Change title</button>
    </app-car>

    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <app-list>

    </app-list>

  </div>
</template>

<script>
import Car from './Car.vue'
import listMixin from './listMixin'

export default {
  data() {
      return {
        carName: 'Audi',
        visible: true,
        title: 'Hello Tatiana',
      }
  },
  filters: {
    lowerCase(val) {
      return val.toLowerCase()
    }
  },
  mixins: [listMixin],
  components: {
    appCar: Car,
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize= '40px'
      }
    }
  }
}
</script>
<style scoped>

</style>

