<template>
  <div class="card text-dark" style="width: 22rem;">
    <img :src="`${gift.url == ''|| null || undefined ? 'https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60' : gift.url}`" class="card-img-top gift-image rounded-top" :alt="gift.title">
    <div class="card-body">
      <h5 class="card-title">{{ gift.title }}</h5>
      <p class="card-text text-center fs-5">{{ gift.tag }}</p>
      <div v-if="!gift.opened">
        <button class="btn btn-primary" @click="() => openGift(gift.id)">Open</button>
      </div>
      <div v-if="gift.opened">
        <button class="btn btn-danger" @click="() => deleteGift(gift.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  props: {
    gift: { type: Gift },
  },
  methods: {
    async openGift(giftId){
      try {
        await giftsService.openGift(giftId)
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    },
    async deleteGift(giftId){
      try {
        giftsService.deleteGift(giftId)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.gift-image{
  height: 15rem
}
</style>
