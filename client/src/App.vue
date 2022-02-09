<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="">Neelam | Bidding Heaven</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul
            class="navbar-nav ms-auto"
            v-if="loggedInUser.isLoggedIn === true"
          >
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/signup">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Login</router-link>
            </li> -->
            <li class="nav-item">
              <button
                @click="signOutUser({ id: loggedInUser.id })"
                class="btn btn-link"
              >
                Sign Out
              </button>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto" v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Login</router-link>
            </li>
            <!-- <li class="nav-item">
              <button @click="signOutUser" class="btn btn-link">
                Sign Out
              </button>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SocketService from './services/sockets.service'

export default {
  data() {
    return {
      logInStatus: false,
      currentUser: '',
      isConnected: false,
      socketMessage: '',
    }
  },
  created() {
    SocketService.setupSocketConnection()
  },
  beforeUnmount() {
    SocketService.disconnect()
  },
  methods: {
    ...mapActions({
      userSignout: 'userSignout',
    }),
    signOutUser(usr) {
      this.userSignout(usr)
    },
  },
  computed: {
    ...mapGetters({
      loggedInUser: 'loggedInUser',
    }),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #15121a;
}

#nav {
  padding-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #b7cce0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav button.btn-link {
  font-weight: bold;
  color: #d0d4d8;
  text-decoration: none;
}
</style>
