import React from 'react';
import PropTypes from 'prop-types';
import { default as MUIAlert } from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

// icons
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

const styledBy = (property: any, mapping: any) => (props: any) => mapping[props[property]];

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: '9px 30px',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '40px',
    },
    '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
      fontSize: '20px',
    },
    '& .MuiAlert-icon': {
      marginRight: 12,
      marginLeft: 0,
    },
    '& .MuiAlert-action': {
      marginLeft: 'auto',
      marginRight: -8,
      paddingLeft: 16,
      paddingRight: 0,
    },
  },
  filledSuccess: {
    backgroundColor: theme.colors.funGreen,
  },
  filledError: {
    backgroundColor: theme.colors.vividPink,
  },
  filledInfo: {
    backgroundColor: theme.colors.darkCyan,
  },
  filledWarning: {
    backgroundColor: theme.colors.brightBlue,
  },
  outlinedSuccess: {
    color: theme.colors.limeGreen,
    backgroundColor: styledBy('transparent', {
      true: 'transparent',
      false: theme.colors.lightLimeGreen,
    }),
    border: 0,
    '& .MuiAlert-icon': {
      color: theme.colors.limeGreen,
    },
  },
  outlinedError: {
    color: theme.colors.vividPink,
    borderColor: styledBy('transparent', {
      true: 'transparent',
      false: theme.colors.mediumGray,
    }),
  },
  outlinedInfo: {
    color: theme.colors.brightBlue,
    borderColor: styledBy('transparent', {
      true: 'transparent',
      false: theme.colors.mediumGray,
    }),
  },
  outlinedWarning: {
    color: 'rgba(0, 0, 0, 0.54)',
    borderColor: styledBy('transparent', {
      true: 'transparent',
      false: theme.colors.mediumGray,
    }),
    '& .MuiAlert-icon': {
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
}));

export const Alert = (props: any) => {
  const { children, transparent, ...rest } = props;
  const classes = useStyles({ transparent });

  const iconMapping = {
    success: <CheckCircleOutlineIcon />,
    error: <ReportProblemOutlinedIcon />,
    info: <ErrorOutlineOutlinedIcon />,
    warning: <HelpOutlineOutlinedIcon />,
  };

  return (
    <MUIAlert
      classes={classes}
      iconMapping={iconMapping}
      {...rest}
    >
      <div>{children}</div>
    </MUIAlert>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
  transparent: PropTypes.bool,
};

Alert.defaultProps = {
  children: null,
  transparent: false,
};

export default Alert;
