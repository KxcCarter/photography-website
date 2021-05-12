import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import HeaderNavMenu from './Header/HeaderNavMenu';

// TEST
import Modal from './Modal';

const useStyles = makeStyles({
  footer: {
    color: 'rgb(244,244,244, 0.5)',
    paddingBottom: '8px',
  },

  menu: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
});

function Copyright() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Modal>
        <div className={classes.menu}>
          <HeaderNavMenu />
        </div>
      </Modal>
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
