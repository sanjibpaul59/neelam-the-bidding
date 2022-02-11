<template>
  <div class="text-start">
    <h2>Item</h2>
    <!-- <div class="card mb-3 mt-5" style="max-width: 660px">
      <div class="card-header">
        <slot name="baseValue"></slot>
        <slot name="bidAmount"></slot>
        <slot name="currentPrice"></slot>
        <slot name="openModal"></slot>
      </div>
      <slot name="bidPlaceModal"></slot> -->
    <!--Item Card -->
    <!-- <div class="row g-0">
        <div class="col-md-4">
          <slot name="imageUrl"></slot>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="card-title">
              <span class="card-title fw-bold text-bolder">{{
                item.itemName
              }}</span>
              <span
                class="card-title badge rounded-pill float-end"
                :class="item.bidStatus ? 'bg-success' : 'bg-danger'"
              >
                {{ item.bidStatus == true ? 'Active' : 'Inactive' }}
              </span>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="fs-6">
              {{ item.description }}
            </p>
            <p class="card-text">
              <small class="text-muted"
                >Bidding Starts at {{ formatDate(item.biddingStartsAt) }}</small
              >
            </p>
            <p class="card-text">
              <small
                class="badge bg-info text-black text-wrap"
                style="width: 11rem"
                >Time Left {{ formatDate(item.biddingStartsAt) }}</small
              >
            </p>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        <p>Posted on {{ formatDate(item.createdAt) }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'
export default {
  props: ['item'],
  mounted() {
    const route = useRoute()
    console.log(route)
  },

  data() {
    return {
      bidAmount: 8,
      placedBidAmount: null,
      backgroundColor: 'indigo-900',
    }
  },

  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString)
      return date.format('dddd, MMMM D, YYYY h:mm A')
    },
    handleBidAmount(placedAmount, bidAmount) {
      if (placedAmount > bidAmount) {
        console.log('error')
      }
      console.log(placedAmount, bidAmount)
    },
    launchModal(name) {
      console.log(name)
    },
  },
}
</script>
