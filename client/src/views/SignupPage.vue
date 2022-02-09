<template>
  <div class="d-flex p-2 m-4 bd-highlight"></div>
  <Form :title="title" :message="message" @submitClicked="onClickRegister" />
</template>
<script>
import Form from '@/components/Form.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignupPage',
  components: {
    Form,
  },
  data() {
    return {
      title: 'Register',
      message: 'Already have a member?',
    }
  },
  methods: {
    ...mapActions({
      addNewUser: 'addUser',
    }),
    onClickRegister(value) {
      this.addNewUser(value)
    },
  },
  computed: {
    ...mapGetters({
      getUsers: 'getUsers',
    }),
  },
}
</script>
