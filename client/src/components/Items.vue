<template>
  <div class="container">
    <div class="row g-2">
      <div v-for="item in items" :key="item.id" class="col-6">
        <Item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Item,
  },
  computed: {
    ...mapGetters({
      items: 'getItems',
    }),
  },
}
</script>
