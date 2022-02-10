<template>
  <div class="d-flex p-2 m-4 bd-highlight"></div>
  <Form :title="title" :message="message" @submitClicked="onClickRegister" />
</template>
<script>
import Form from '@/components/Form.vue'
import { mapActions } from 'vuex'

export default {
  name: 'SignupPage',
  components: {
    Form,
  },
  data() {
    return {
      title: 'Register',
      message: 'Already have a member?',
      newUser: {},
    }
  },
  methods: {
    ...mapActions({
      addNewUser: 'register',
    }),
    onClickRegister(value) {
      this.addNewUser(value)
    },
  },
}
</script>
