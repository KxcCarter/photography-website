import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    color: 'rgb(244,244,244, 0.5)',
    paddingBottom: '8px',
  },
});

function Copyright() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/KxcCarter">
          Kenneth Carter
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}

export default Copyright;
