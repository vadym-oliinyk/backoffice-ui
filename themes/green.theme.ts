import _merge from 'lodash.merge';
import commonThemeConfig from './_common.theme';
import * as colors from './_colors';
import { GREEN_THEME } from './constants';

export const greenThemeConfig = {
  name: GREEN_THEME,
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  palette: {
    background: {
      default: colors.veryLightGray,
    },
    primary: {
      light: colors.limeGreen,
      main: colors.darkLimeGreen,
      dark: colors.veryDarkLimeGreen,
      contrastText: colors.textWhite,
    },
    secondary: {
      light: colors.lightGray,
      main: colors.mediumGray,
      dark: colors.darkGray,
    },
  },
};

export default _merge({}, commonThemeConfig, greenThemeConfig);
