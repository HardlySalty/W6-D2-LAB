<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-secondary">
        <div class="row justify-content-around">
          <div class="col-3 my-4 d-flex justify-content-center" v-for="gifts in gifts">
            <GiftCard :gift="gifts" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- STUB MODELS -->
  <GiftModal></GiftModal>

</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { giftsService } from "../services/GiftsService.js"
import {AppState} from "../AppState.js"

export default {
  setup() {

    async function getGifts(){
      await giftsService.getGifts()
    }

    onMounted(() => {
      getGifts()
    })

    return {
      gifts: computed(() => AppState.gifts )
    }
  }
}
</script>

<style scoped lang="scss">
.gift-image{
  height: 15rem
}
</style>
