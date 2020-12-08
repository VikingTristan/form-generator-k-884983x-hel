<template>
  <form @submit.prevent="submit">
    <fieldset
      v-for="(fieldset, index) in schema.fieldsets"
      :key="`fieldset-${index}`"
    >
      <legend v-if="fieldset.legend">
        <span> {{ fieldset.legend }} </span>
      </legend>
      <div class="row">
        <div
          v-for="field in fieldset.fields"
          :key="field.name"
          class="form-group"
          :class="field.class ? field.class : 'col-12'"
        >
          <label :for="field.name">{{ field.label }}</label>
          <p v-if="field.helpBlock" class="help-block">{{ field.helpBlock }}</p>
          <Component
            :is="field.as"
            :id="field.name"
            class="form-control"
            :name="field.name"
          />
          <!-- <Field :id="field.name" :as="field.as" :name="field.name" /> -->
        </div>
      </div>
    </fieldset>

    <button class="btn btn-lg btn-primary">Submit</button>
  </form>
</template>
<script>
// import { Form, Field } from 'vee-validate'
export default {
  name: 'DynamicForm',
  // components: {
  //   Form,
  //   Field,
  // },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
}
</script>
