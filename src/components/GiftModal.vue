<template>
  <div class="offcanvas offcanvas-start bg-primary" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
    aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Gift Contents</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body bg-dark">

      <form @submit.prevent="createGift()">
        <div>
          <div class="text-center fs-3">
            <label for="url">Image for your gift</label>
            <input v-model="formData.url" type="url" id="url" name="url" class="w-100 py-1 my-2 fs-5"
              placeholder="https://..." required>
          </div>
          <div class="text-center fs-3">
            <label for="tag">Note</label>
            <input v-model="formData.tag" type="text" id="tag" name="tag" class="w-100 py-1 my-2" placeholder="Note"
              required>
          </div>
          <button type="submit" class="btn btn-success">Wrap Gift</button>
        </div>
      </form>

      <form @submit.prevent="searchGifs()" class="my-5">
        <div class="text-center fs-3">
          <div class="d-flex justify-content-between">
            <label for="text">Search for a gif</label>
            <button type="submit" class="myFontSize">Search</button>
          </div>
          <input v-model="searchData.q" type="text" id="search" name="search" class="w-100 py-1 my-2 fs-5"
            placeholder="Bunnies" required>
        </div>
      </form>

      <div class="container" v-if="gifsArray.length > 0">
        <div class="row">
          <div class="col-6 my-2" v-for="gif in gifsArray">
            <img :src="gif.url" alt="" class="imageSize img-fluid" @click="changeUrl(gif.url)">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>


<script>
import { ref, computed } from 'vue';
import { logger } from "../utils/Logger.js";
import { giftsService } from "../services/GiftsService.js";
import { gifsService } from "../services/GifsService"
import { AppState } from '../AppState';


export default {
  setup() {
    const formData = ref({})
    const searchData = ref({})

    return {
      formData,
      searchData,

      gifsArray: computed(()=> AppState.gifs),

      async createGift() {
        const form = formData.value
        await giftsService.createGift(form)
      },

      async searchGifs() {
        const form = searchData.value
        const gifs = await gifsService.searchGifs(form)
      },

      changeUrl(imageUrl){
        logger.log(formData.tag)
        formData.value.url = imageUrl
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.myFontSize{
  font-size: .8em;
}
.imageSize{
  height: 10rem;
  width: 10rem;
}
</style>