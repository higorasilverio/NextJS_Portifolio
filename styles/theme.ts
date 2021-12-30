const gridBasedSizes = {
  xxs: '0rem',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xlm: '3rem',
  xxl: '4rem',
  xxlm: '6rem'
}

export const theme = {
  pallete: {
    dark: {
      100: '#B7C1C6',
      300: '#1B2734',
      500: '#0F1020'
    },
    light: {
      100: '#FFFFFF',
      300: '#0082FF',
      500: '#02279E'
    },
    grey: {
      100: '#F0F0F0',
      300: '#CCCCCC',
      500: '#333333'
    },
    blue: {
      100: '#E0F2FE',
      300: '#BAE6FD',
      500: '#0369A1'
    },
    success: {
      100: '#01B36A',
      300: '#01D17C',
      500: '#019257'
    },
    error: {
      100: '#FFCECE',
      300: '#FF4949',
      500: '#B33333'
    },
    warning: {
      100: '#FFDCB1',
      300: '#FF8B3D',
      500: '#FF672D'
    }
  },
  rawSizes: {
    ...gridBasedSizes
  }
}
