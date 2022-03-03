import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme ({
  colors: {
    white: {
      0:   "#FFFFFF",
    },
    gray: {
      100: "#F5F8FA",
      200: "#DADADA",
      300: "#9699B0",
      400: "#797D9A",
      500: "#47585B",
      600: "#394449",
      700: "#364345",
      800: "#2a3336",
      900: "#1f2628",
    },
    yellow: {
      500: "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.500'
      }
    }
  }
})
