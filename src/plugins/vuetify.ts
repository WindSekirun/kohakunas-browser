/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'

const nordTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#2E3440',
    surface: '#3B4252',
    primary: '#D8DEE9',
    'primary-darken-1': '#E5E9F0',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'nordTheme',
    themes: {
      nordTheme
    },
  },
})
