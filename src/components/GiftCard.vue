<template>
  <div class="card" style="width: 22rem;">
    <img :src="`${gift.url == '' ? 'https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60' : gift.url}`" class="card-img-top gift-image rounded-top" :alt="gift.title">
    <div class="card-body">
      <h5 class="card-title">{{ gift.title }}</h5>
      <p class="card-text">{{ gift.tag }}</p>
      <div v-if="!gift.opened">
        <button class="btn btn-primary">Open</button>
      </div>
    </div>
  </div>
</template>


<script>
import { Gift } from "../models/Gift.js";

export default {
  props: {
    gift: { type: Gift }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>