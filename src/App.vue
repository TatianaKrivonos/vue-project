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

    <input type="text" v-model.number="age">
    <p>{{ age }}</p>

    <app-onoff v-model="switched">

    </app-onoff>
    <div>
      <h3 v-if="switched">component is enabled</h3>
      <h3 v-else="switched">component is disabled</h3>
    </div>

    <div class="container">
      <form class="pt-3" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email"
                 id="email"
                 class="form-control"
                 :class="{'is-invalid': $v.email.$error}"
                 @blur="$v.email.$touch()"
                 v-model="email">
          <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
          <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
          <div class="invalid-feedback" v-if="!$v.email.newEmail">This email is already exists</div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password"
                 id="password"
                 class="form-control"
                 :class="{'is-invalid': $v.password.$error}"
                 @blur="$v.password.$touch()"
                 v-model="password">
          <div class="invalid-feedback" v-if="!$v.password.minLength">Min Length of passwoed is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>
        </div>
        <div class="form-group">
          <label for="confirm">Confirm password</label>
          <input type="password"
                 id="confirm"
                 class="form-control"
                 :class="{'is-invalid': $v.confirmPassword.$error}"
                 @blur="$v.confirmPassword.$touch()"
                 v-model="confirmPassword">
          <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Password should match</div>
        </div>
        <button class="btn btn-success"
        type="submit"
        :disabled="$v.$invalid"
        >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Car from './Car.vue'
import listMixin from './listMixin'
import onOff from './onOff'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

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
      socialSelect: 'vk',
      age: 23,
      switched: false,
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('Email', this.email)
      console.log('Password', this.password)
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function(newEmail) {
        if(newEmail === '') return true

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@mail.ru'
            resolve(value)
          }, 1000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs((vue) => {
        return vue.password
      })
      // sameAs: sameAs('password')
    }
  },
  watch: {
    age(val) {
      console.log(val)
      console.log(typeof val)
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
    appOnoff: onOff
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

