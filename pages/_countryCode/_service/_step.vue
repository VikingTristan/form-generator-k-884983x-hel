<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center p-5">
        <h1>form-generator-k-884983x-hel</h1>
      </div>
      <div class="col-6">
        <h2>Rendered form</h2>
        <DynamicForm v-if="schema" :schema="schema[0]" />
        <!-- <SchemaForm v-if="form" v-model="form" :schema="schema[0]" /> -->
      </div>
      <div class="col-6">
        <h2>Response from API</h2>
        <pre>{{ schema }}</pre>
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
  asyncData({ params }) {
    return {
      countryCode: params.countryCode,
      service: params.service,
    }
  },
  data() {
    return {
      schema: null,
    }
  },
  async fetch() {
    console.log('Fetch language', this.language)
    console.log('Fetch service', this.service)
    try {
      this.schema = await this.$axios.$get('/forms')
    } catch (e) {
      console.log('Error I guess', e)
    }
  },
  async mounted() {},
}
</script>
