<template>
  <div class="d-flex p-2 m-4 bd-highlight"></div>
  <Form :title="title" :message="message" @submitClicked="onClickLogin" />
</template>

<script>
import Form from '@/components/Form.vue'
import { mapActions } from 'vuex'
export default {
  name: 'SigninPage',
  components: {
    Form,
  },
  data() {
    return {
      title: 'Login',
      message: "Don't have an account?",
    }
  },

  methods: {
    ...mapActions({
      authUser: 'login',
    }),
    onClickLogin(value) {
      this.authUser(value)
    },
  },
}
</script>
