import * as colors from './_colors';

// This is base theme props used in every theme.
const commonThemeConfig = {
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  shape: {
    borderRadius: '2px',
  },
  palette: {
    error: {
      main: colors.formError,
    },
  },
  breakpoints: {
    values: {
      lg: 1216, md: 960, sm: 600, xl: 1920, xs: 0,
    },
  },
  colors: {
    veryLightGray: colors.veryLightGray,
    lightGray: colors.lightGray,
    mediumLightGray: colors.mediumLightGray,
    mediumGray: colors.mediumGray,
    mediumDarkGray: colors.mediumDarkGray,
    darkGray: colors.darkGray,
    black: colors.black,
    white: colors.white,
    lightLimeGreen: colors.lightLimeGreen,
    limeGreen: colors.limeGreen,
    darkLimeGreen: colors.darkLimeGreen,
    veryDarkLimeGreen: colors.veryDarkLimeGreen,
    desaturatedDarkLimeGreen: colors.desaturatedDarkLimeGreen,
    funGreen: colors.funGreen,
    lightGreen: colors.lightGreen,
    softBlue: colors.softBlue,
    brightBlue: colors.brightBlue,
    strongBlue: colors.strongBlue,
    facebook: colors.facebook,
    twitter: colors.twitter,
    linkedin: colors.linkedin,
    darkCyan: colors.darkCyan,
    textWhite: colors.textWhite,
    textBlack: colors.textBlack,
    vividPink: colors.vividPink,
    formLightGreen: colors.formLightGreen,
    formSuccess: colors.formSuccess,
    formError: colors.formError,
    gold: colors.gold,
    red: colors.red,
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '80px',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '60px',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '30px',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '24px',
    },
    h5: {
      fontWeight: 'bold',
      fontSize: '22px',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '16px',
    },
    caption: {
      fontWeight: 'normal',
      fontSize: '18px',
    },
  },
};

export default commonThemeConfig;
