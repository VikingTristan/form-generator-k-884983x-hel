<template>
  <div>
    <!-- Optional checkbox slot
		This is positioned outside of the Form group component for the sole purpose 
		of not confusing the provider with an additional input element [THN] -->
    <slot name="checkbox" />
    <!-- <FormGroup
      :id="id"
      :rules="localRules"
      :name="id"
      :vid="id"
      :disabled="disabled || isPrefilled"
      :valid-digits="validDigits"
    > -->
    <ValidationProvider
      v-slot="{ errors }"
      :rules="localRules"
      :name="id"
      :vid="id"
    >
      <div
        :class="[
          'form-group',
          { 'has-error': errors[0] || !validDigits, disabled: disabled },
        ]"
      >
        <label :for="id">{{ label }}</label>
        <p v-if="helpBlock" class="help-block">
          {{ helpBlock }}
        </p>
        <input
          v-if="
            type === 'text' ||
            type === 'social-security-number' ||
            type === 'organization-number' ||
            type === 'email' ||
            type === 'phone' ||
            type === 'postal-code' ||
            type === 'money' ||
            type === 'url'
          "
          :id="id"
          v-model="currentValue"
          :name="id"
          v-bind="$attrs"
          class="form-control"
          :inputmode="inputmode"
          :disabled="disabled || isPrefilled"
          @blur="urlScheme"
          @input="validate()"
        />
        <select
          v-else-if="type === 'select'"
          :id="id"
          v-model="currentValue"
          v-bind="$attrs"
          :name="id"
          class="form-control"
          :disabled="isPrefilled || disabled"
          @change="validate()"
        >
          <option
            v-for="(option, index) in options"
            :key="`select-option-${option}-${index}`"
            :value="option.value || option"
          >
            {{ option.label || option }}
          </option>
        </select>
        <div
          v-for="(option, index) in options"
          v-else-if="type === 'radio'"
          :key="`${id}-radio-option-${index}`"
          class="radio"
        >
          <input
            :id="`${id}-radio-option-${index}`"
            v-model="currentValue"
            type="radio"
            v-bind="$attrs"
            :name="id"
            :value="
              option.value || typeof option.value === 'boolean'
                ? option.value
                : option
            "
            :disabled="disabled || isPrefilled"
            @change="validate()"
          />
          <label
            :id="`${id}-radio-option-${index}-label`"
            :for="`${id}-radio-option-${index}`"
          >
            {{ option.label || option }}
          </label>
        </div>

        <!-- :value="(option.value || typeof(option.value) === 'boolean') ? option.value : option" -->
        <div v-else-if="type === 'checkbox'">
          <div
            v-for="(option, index) in options"
            :key="`${id}-checkbox-option-${index}`"
            class="checkbox"
          >
            <input
              :id="`${id}-checkbox-option-${index}`"
              v-model="selectedValues"
              type="checkbox"
              v-bind="$attrs"
              :name="id"
              :disabled="disabled || isPrefilled"
              :value="option.value || option"
              @change="validateCheckbox($event)"
            />
            <label
              :id="`${id}-checkbox-option-${index}-label`"
              :for="`${id}-checkbox-option-${index}`"
            >
              {{ option.label || option }}
            </label>
          </div>

          <!-- <div v-if="optionsOther" class="checkbox mb-5">
            <input
              id="selected-other"
              type="checkbox"
              :checked="selectedOther"
              @change="validateCheckboxOther()"
            />
            <label for="selected-other">
              {{ optionsOther.label }}
            </label>
          </div>

          <FormGroup v-if="selectedOther">
            <div class="conditional-element fade-in form-group">
              <label> {{ optionsOther.inputLabel }} </label>
              <input
                id="business-purpose-other-input"
                v-model.trim="selectedOtherValue"
                class="form-control"
                type="text"
                @input="validateSelectedOtherValue($event.target.value)"
              />
            </div>
          </FormGroup> -->
        </div>

        <textarea
          v-else-if="type === 'textarea'"
          :id="id"
          v-model="currentValue"
          v-focus-if-empty
          :name="id"
          v-bind="$attrs"
          class="form-control"
          :disabled="disabled || isPrefilled"
          @input="validate()"
        />
        <p v-else class="text-danger border bg-danger p-3">
          Unable to render input with type <b>{{ type }}</b>
        </p>
        <span v-if="!validDigits" :data-error="digitError" class="help-block" />
        <span
          v-else-if="country && country.code === 'NO' && errorNorway"
          :data-error="errorNorway"
          class="help-block"
        />
        <span
          v-else-if="country && country.code === 'SE' && errorSweden"
          :data-error="errorSweden"
          class="help-block"
        />
        <span v-else :data-error="error" class="help-block" />
      </div>
    </ValidationProvider>
    <!-- </FormGroup> -->
  </div>
</template>

<script>
import utils from '@/helpers/utils'
import { setupFormField, emitFormField } from '@/helpers/formField.js'
import {
  createCheckDigitValidationRules,
  createPostalCodeValidationRules,
} from '@/helpers/validationRules'
import { validateCheckDigits } from '@/helpers/digitChecker'
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Object, Number, Boolean, Array],
      default: () => '',
    },
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        // The type must be one of these strings
        return [
          'text',
          'textarea',
          'select',
          'social-security-number',
          'organization-number',
          'email',
          'phone',
          'postal-code',
          'money',
          'radio',
          'url',
          'checkbox',
        ].includes(value)
      },
    },
    rules: {
      type: [String, Object],
      default: () => {
        return { required: true, regex: /^.{1,200}$/ }
      },
    },
    error: {
      type: String,
      default: 'Error',
    },
    errorNorway: {
      type: String,
      default: null,
    },
    errorSweden: {
      type: String,
      default: null,
    },
    digitError: {
      type: String,
      default: null,
    },
    helpBlock: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    country: {
      type: Object,
      required: false,
      default: () => ({ code: window.currentLanguageTag }),
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionsOther: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      currentValue: '',
      isFormField: false,
      isPrefilled: false,
      localRules: '',
      validDigits: true,
      validationRegex: '',
      selectedValues: [],
      selectedOther: false,
      selectedOtherValue: '',
    }
  },
  computed: {
    inputmode() {
      let mode
      switch (this.type) {
        case 'social-security-number':
        case 'organization-number':
        case 'postal-code':
        case 'money':
          mode = 'numeric'
          break
        case 'email':
          mode = 'email'
          break
        case 'phone':
          mode = 'tel'
          break
        default:
          mode = 'text'
      }
      return mode
    },
  },
  watch: {
    'country.code'() {
      this.createLocalRules()
    },
    value(val) {
      setupFormField(this, val)
    },
  },
  mounted() {
    setupFormField(this, this.value)

    this.createLocalRules()
  },
  methods: {
    validate() {
      emitFormField(this, this.currentValue)

      if (
        this.type === 'social-security-number' ||
        this.type === 'organization-number'
      )
        this.validDigits = validateCheckDigits(
          this.type,
          this.country.code,
          this.currentValue
        )
    },
    validateCheckbox() {
      this.$emit('input', this.selectedValues)
    },
    validateSelectedOtherValue(value) {
      this.selectedValues = this.selectedValues.filter((x) =>
        this.options.some((option) => x === option.value)
      )

      if (value) this.selectedValues.push(value)

      this.validateCheckbox()
    },
    validateCheckboxOther() {
      this.selectedOther = !this.selectedOther

      if (!this.selectedOther)
        this.selectedValues = this.selectedValues.filter((x) =>
          this.options.some((option) => x === option.value)
        )
      else if (this.selectedOtherValue)
        this.selectedValues.push(this.selectedOtherValue)

      this.validateCheckbox()
    },
    urlScheme() {
      if (this.type !== 'url') return

      this.currentValue = utils.createUrlString(this.currentValue)
      this.validate()
    },
    createLocalRules() {
      if (
        this.type === 'social-security-number' ||
        this.type === 'organization-number'
      )
        this.localRules = createCheckDigitValidationRules(
          this.country,
          this.type
        )
      else if (this.type === 'postal-code')
        this.localRules = createPostalCodeValidationRules(
          this.country,
          this.type
        )
      else this.localRules = this.rules
    },
  },
}
</script>
