<template>
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 36rem">
      <div class="card-body">
        <h5 class="card-title">
          {{ title }}
        </h5>
      </div>
      <div class="class-text m-4">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3 text-start">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              required
              v-model="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Please enter a valid email address.
            </div>
          </div>
          <div class="mb-3 text-start">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              required
              v-model="password"
              id="exampleInputPassword1"
              aria-describedby="passwordHelp"
            />
            <!-- <div id="passwordHelp" class="form-text">
              Password must be 8 digits long.
            </div> -->
          </div>
          <button type="submit" class="btn btn-primary mx-auto">
            {{ title }}
          </button>
          <div class="my-3 text-center">
            <p>
              {{ message }}
              <span
                ><router-link :to="routePath">{{
                  title === 'Login' ? 'Register' : 'Login'
                }}</router-link></span
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  // setup() {
  //   const email = ref('')
  //   const password = ref('')
  //   const handleSubmit = () => {
  //     console.log(email.value, password.value)
  //   }
  //   return { handleSubmit, email, password }
  // },
  props: ['title', 'message'],
  computed: {
    routePath() {
      return this.title === 'Login' ? '/signup' : '/signin'
    },
  },
  methods: {
    handleSubmit(event) {
      this.$emit('submitClicked', {
        email: this.email,
        password: this.password,
        eventName: this.title,
      })
      // console.log(this.email, this.password)
    },
  },
}
</script>

<style></style>
