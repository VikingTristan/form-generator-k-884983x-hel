<template>
  <ValidationObserver ref="form">
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
            :key="field.id"
            :class="field.class ? field.class : 'col-12'"
          >
            <!-- <label :for="field.id">{{ field.label }}</label>
            <p v-if="field.helpBlock" class="help-block">
              {{ field.helpBlock }}
            </p> -->
            <SignupInput
              :id="field.id"
              v-model="data[field.id]"
              :type="field.as"
              :name="field.id"
              :rules="field.rules"
              :label="field.label"
              :options="field.options"
            />
            <!-- <Field :id="field.name" :as="field.as" :name="field.name" /> -->
          </div>
        </div>
      </fieldset>

      <button class="btn btn-lg btn-primary">Submit</button>
    </form>
  </ValidationObserver>
</template>
<script>
// import { Form, Field } from 'vee-validate'
import { ValidationObserver } from 'vee-validate'
import SignupInput from './SignupInput'
export default {
  name: 'DynamicForm',
  // components: {
  //   Form,
  //   Field,
  // },
  components: {
    ValidationObserver,
    SignupInput,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: {},
    }
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.form.validate()

      if (!isValid) return

      try {
        const res = await this.$axios.$post(
          `/forms${this.schema.path}`,
          this.data
        )

        this.$router.push(res.url)
      } catch (e) {
        console.log('Unable to post', e)
      }
    },
  },
}
</script>
