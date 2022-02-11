<template>
  <!--Modal-->
  <div
    class="modal fade"
    id="bidAmountModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Enter Bid Amount</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- <select
                class="form-select"
                aria-label="Default select example"
                v-model="placedBidAmount"
              >
                <option
                  v-for="amount in item.bidAmount"
                  :key="amount"
                  :value="amount"
                >
                  {{ amount }}
                </option>
              </select> -->
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              aria-describedby="inputHelp"
              min="1"
              :max="bidAmount"
              v-model="placedBidAmount"
            />
            <div id="inputHelp">
              <slot name="bidLimit"></slot>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            @click="handleBidAmount(bidAmount)"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['amount'],
  data() {
    return {
      placedBidAmount: null,
      bidAmount: this.amount,
    }
  },
  methods: {
    handleBidAmount(bidAmount) {
      console.log(bidAmount)
    },
  },
}
</script>
