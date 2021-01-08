<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center p-5">
        <h1>form-generator-k-884983x-hel</h1>
      </div>
      <div class="col-12 justify-content-center d-flex">
        <h2>Available forms</h2>
      </div>
      <div class="col-12 d-flex justify-content-center text-align-center">
        <NuxtLink
          v-for="form in forms"
          :key="form.path"
          class="btn btn-lg btn-primary m-5"
          :to="form.path"
        >
          {{ form.service }} {{ form.country.code }}
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
      forms: [],
    }
  },
  async fetch() {
    try {
      this.forms = await this.$axios.$get('/forms')
    } catch (e) {
      console.log('Error I guess', e)
    }
  },
}
</script>
