<template>
  <div class="text-start">
    <div class="card mb-3 mt-5" style="max-width: 660px">
      <div class="card-header">
        <div class="m-1 badge rounded-pill bg-success font-monospace">
          Base Value: {{ item.baseValue }}$
        </div>
        <div
          class="m-1 badge rounded-pill bg-warning text-black font-monospace"
        >
          Bid Amount: {{ item.bidAmount }}$
        </div>
        <div class="m-1 badge rounded-pill text-danger bg-info font-monospace">
          Current Price:
          <span class="fw-bold text-black">{{ item.baseValue }}$</span>
        </div>
        <button
          class="float-end text-white fw-bolder btn btn-sm rounded-pill bg-success font-monospace"
          data-bs-toggle="modal"
          data-bs-target="#bidAmountModal"
          @click="launchModal(item.bidAmount)"
        >
          Place Bid
        </button>
      </div>
      <BidPlaceModal :amount="bidAmount">
        <template #bidLimit>
          <p class="form-text">
            Bid Limit is
            <span class="text-bolder text-black">{{ item.bidAmount }}$</span>
            <br />
            Please be in the limit to proceed.
          </p>
        </template>
      </BidPlaceModal>
      <!--Item Card -->
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="item.imageUrl"
            class="img-fluid rounded-start"
            alt="itemImage"
          />
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
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import BidPlaceModal from './BidPlaceModal.vue'

export default {
  props: ['item'],
  components: {
    BidPlaceModal,
  },
  data() {
    return {
      bidAmount: this.item.bidAmount,
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
