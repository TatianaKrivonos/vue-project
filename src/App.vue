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
    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>

    <h2>Form inputs</h2>
    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>
    <label>
      <input type="checkbox" value="vk" v-model="social"> VK
    </label>
    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>
    <ul>
      <li v-for="s in social">{{ s }}</li>
    </ul>

    <label>
      <input type="radio" value="instagram" v-model="radioSocial"> Instagram
    </label>
    <label>
      <input type="radio" value="vk" v-model="radioSocial"> VK
    </label>
    <label>
      <input type="radio" value="facebook" v-model="radioSocial"> Facebook
    </label>
    <p>{{ radioSocial }}</p>

    <select v-model="socialSelect">
      <option v-for="s in socialList">{{ s }}</option>
    </select>
    <p>{{ socialSelect }}</p>
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
        textarea: 'I am initial text',
        social: [],
        radioSocial: '',
        socialList: ['instagram', 'vk', 'facebook'],
        socialSelect: 'vk'
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
  textarea {
    height: 100px;
    width: 400px;
    resize: none;
  }

  p {
    white-space: pre;
  }
</style>

