<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center p-5">
        <h1>form-generator-k-884983x-hel</h1>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          class="btn btn-lg btn-primary m-5"
          :to="link.to"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
// import { SchemaForm } from 'formvuelate'
export default {
  components: {
    // SchemaForm,
  },
  data() {
    return {
      links: [
        {
          to: 'no/checkout',
          text: 'Checkout NO',
        },
        {
          to: 'se/checkout',
          text: 'Checkout SE',
        },
      ],
    }
  },
  async mounted() {
    try {
      this.schema = await this.$axios.$get('/forms')
    } catch (e) {
      console.log('Error I guess', e)
    }
  },
}
</script>
