// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      // dark: {
      //   colors: {
      //     background: '#292930'
      //   }
      // },
      light: {
        colors: {
          background: '#f8f9fd',
          'clicksign-sky-blue': '#68a0fa',
          'clicksign-pale-olive-green': '#90d26c',
          'clicksign-dark': '#2a2d3b',
          'clicksign-bluey-grey': '#9198af',
          'clicksign-light-yellowish-green': '#dbff90',
          'clicksign-white-two': '#ffffff',
          'clicksign-white': '#e1e1e1',
          'clicksign-very-light-pink': '#fff3f2',
          'clicksign-pale-grey': '#e4e7f4',
          'clicksign-black-8': '#000000'
        }
      }
    }
  }
})
