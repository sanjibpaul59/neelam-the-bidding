<template>
  <div class="container">
    <div class="row g-2">
      <div v-for="item in items" :key="item.id" class="col-6">
        <router-link :to="`/item/${item.id}`">
          <Item />
          <!-- <Item :item="item">
            <template #baseValue>
              <div class="m-1 badge rounded-pill bg-success font-monospace">
                Base Value: {{ item.baseValue }}$
              </div>
            </template>
            <template #bidAmount>
              <div
                class="m-1 badge rounded-pill bg-warning text-black font-monospace"
              >
                Bid Amount: {{ item.bidAmount }}$
              </div>
            </template>
            <template #currentPrice>
              <div
                class="m-1 badge rounded-pill text-danger bg-info font-monospace"
              >
                Current Price:
                <span class="fw-bold text-black">{{ item.baseValue }}$</span>
              </div>
            </template>
            <template #openModal>
              <button
                class="float-end text-white fw-bolder btn btn-sm rounded-pill bg-success font-monospace"
                data-bs-toggle="modal"
                data-bs-target="#bidAmountModal"
                @click="launchModal(item.bidAmount)"
              >
                Place Bid
              </button>
            </template>
            <template #bidPlaceModal>
              <BidPlaceModal :amount="item.bidAmount">
                <template #bidLimit>
                  <p class="form-text">
                    Bid Limit is
                    <span class="text-bolder text-black"
                      >{{ item.bidAmount }}$</span
                    >
                    <br />
                    Please be in the limit to proceed.
                    {{ item.id }}
                  </p>
                </template>
              </BidPlaceModal>
            </template>

            <template #imageUrl>
              <img
                :src="item.imageUrl"
                class="img-fluid rounded-start"
                alt="itemImage"
              />
            </template>
          </Item> -->
        </router-link>
      </div>
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
