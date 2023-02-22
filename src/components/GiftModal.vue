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
            <input v-model="formData.url" type="url" id="url" name="url" class="w-100 py-1 my-2 fs-5" placeholder="https://..." required>
          </div>
          <div class="text-center fs-3">
            <label for="tag">Note</label>
            <input v-model="formData.tag" type="text" id="tag" name="tag" class="w-100 py-1 my-2" placeholder="Note" required>
          </div>
          <button type="submit" class="btn btn-success">Wrap Gift</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { logger } from "../utils/Logger.js";
import { giftsService } from "../services/GiftsService.js";

export default {
  setup() {
    const formData = ref({})

    return {
      formData,
      
      async createGift(){
      const form = formData.value
      await giftsService.createGift(form)
    }

    }
  }
}
</script>


<style lang="scss" scoped></style>