<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center p-5">
        <h1 v-if="schema">
          {{ schema.service }} {{ schema.country.code }} - {{ step }}
        </h1>
      </div>
      <div class="col-8">
        <h2>Rendered form</h2>
        <DynamicForm v-if="schema" :schema="schema" />
        <!-- <SchemaForm v-if="form" v-model="form" :schema="schema[0]" /> -->
      </div>
      <div class="col-4">
        <h2>Response from API</h2>
        <pre>{{ schema }}</pre>
        <pre v-if="error">{{ error }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
// import { SchemaForm } from 'formvuelate'
import layoutChooser from '@/middleware/layoutChooser'
export default {
  components: {
    // SchemaForm,
  },
  layout: layoutChooser,
  asyncData({ params }) {
    return {
      countryCode: params.countryCode,
      service: params.service,
      step: params.step,
    }
  },
  data() {
    return {
      schema: null,
      error: null,
    }
  },
  async fetch() {
    try {
      this.schema = await this.$axios.$get(
        `/forms/${this.countryCode}/${this.service}/${this.step}`
      )
    } catch (e) {
      this.error = e
      console.log('Error I guess', e)
    }
  },
  async mounted() {},
}
</script>
