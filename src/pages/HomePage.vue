<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-dark">
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
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
  setup() {

    async function getGifts(){
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    onMounted(() => {
      getGifts()
    })

    return {
      gifts: computed(() => AppState.gifts ),
      
    }
  }
}
</script>

<style scoped lang="scss">

</style>
