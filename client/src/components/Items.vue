<template>
  <div class="container">
    <div class="row g-4">
      <ul class="list-group">
        <li
          v-for="item in items"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="ms-2 me-auto">
            <router-link class="router" :to="`/item/${item.id}`">
              <div class="fw-bold">{{ item.itemName }}</div>
            </router-link>
            {{ item.description }}
          </div>
          <span
            class="badge rounded-pill"
            :class="item.bidStatus === true ? 'bg-success' : 'bg-danger'"
            >{{ item.bidStatus === true ? 'Active' : 'Inactive' }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import { mapGetters } from 'vuex'
import BidPlaceModal from './BidPlaceModal.vue'
export default {
  components: {
    BidPlaceModal,
    Item,
  },
  computed: {
    ...mapGetters({
      items: 'getItems',
    }),
  },
  methods: {
    launchModal(amount) {
      console.log(amount)
    },
  },
}
</script>
<style>
.router {
  text-decoration: none;
}
</style>
