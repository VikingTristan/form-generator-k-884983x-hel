import { extend, setInteractionMode } from 'vee-validate'
import {
  required,
  email,
  regex,
  numeric,
  min_value as minValue,
  max_value as maxValue,
  max,
} from 'vee-validate/dist/rules'

// Add rules to vee-validate
extend('required', required)
extend('email', email)
extend('regex', regex)
extend('numeric', numeric)
extend('min_value', minValue)
extend('max_value', maxValue)
extend('max', max)

/* Make validation trigger when the user leaves the input (on blur or change)
then if the input is invalid it will behave aggressively until the input
is valid again and it will go back to being lazy */
setInteractionMode('eager')
