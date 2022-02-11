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
          @click="launchModal()"
        >
          Place Bid
        </button>
      </div>
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
              <h5 class="modal-title" id="exampleModalLabel">
                Enter Bid Amount
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
                  <p class="form-text">
                    Bid Limit is
                    <span class="text-bolder text-black"
                      >{{ item.bidAmount }}$</span
                    >
                    <br />
                    Please be in the limit to proceed.
                  </p>
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
              <span class="card-title fw-bold text-bolder">
                {{ item.itemName }}
              </span>

              <span
                :class="item.bidStatus ? 'bg-success' : 'bg-danger'"
                class="card-title badge rounded-pill float-end"
              >
              </span>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="fs-6">{{ item.description }}</p>
            <p class="card-text">
              <small class="text-muted">Bidding Starts at</small>
            </p>
            <p class="card-text">
              <small
                class="badge bg-info text-black text-wrap"
                style="width: 11rem"
                >Time Left
              </small>
            </p>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        <p>Posted on</p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      clientSide: false,
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapGetters({
      item: 'getItem',
    }),
  },
  async created() {
    await this.showItem(this.$route.params.id)
  },

  methods: {
    ...mapActions({
      showItem: 'showItem',
    }),

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
