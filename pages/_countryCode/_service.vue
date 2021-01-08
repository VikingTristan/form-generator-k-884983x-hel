<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center p-5">
        <h1 class="text-danger">Goblins are tinkering...</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      countryCode: params.countryCode,
      service: params.service,
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/no/checkout')
      // const res = await this.$axios.$get(`/${this.countryCode}/${this.service}`)
      console.log('res', res)
    } catch (e) {
      console.log('Error I guess', e)
    }
  },
  mounted() {},
}
</script>
