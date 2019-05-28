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

  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  data() {
      return {
        carName: 'Audi',
        visible: true,
        title: 'Hello Tatiana',
        searchName: '',
        names: ['Vlad', 'Max', 'Tanya', 'Vera']
      }
  },
  filters: {
    lowerCase(val) {
      return val.toLowerCase()
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
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

