// Utility functions commonly used by other files
import cloneDeep from 'lodash/fp/cloneDeep'
// Setup local values to support both the form field architecture and normal string [THN]
const setupFormField = (vueComponent, val) => {
  if (typeof val === 'boolean') vueComponent.currentValue = val
  else if (!val) {
    vueComponent.currentValue = ''
  } else if (typeof val === 'object' && (val.value || val.isPrefilled)) {
    vueComponent.isFormField = true
    vueComponent.currentValue = cloneDeep(val.value)
    vueComponent.isPrefilled = val.isPrefilled
  } else if (typeof val === 'object') {
    vueComponent.currentValue = val.value
  } else {
    vueComponent.currentValue = val
  }
}
// Emit local values to support both the form field architecture and normal string [THN]
const emitFormField = (vueComponent, val) => {
  if (vueComponent.isFormField)
    vueComponent.$emit('input', {
      value: val,
      isPrefilled: vueComponent.isPrefilled,
    })
  else vueComponent.$emit('input', val)
}

export { setupFormField, emitFormField }
