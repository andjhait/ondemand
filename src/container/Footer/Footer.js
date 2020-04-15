import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '40px 0',
    textAlign: 'center'
  },
  footerMenu: {
    margin: '0',
    padding: '0',
    '& li': {
      display: 'inline-block',
      margin: '0 20px',
      '& a': {
        textDecoration: 'none',
        color: '#000',
        opacity: '0.7',
        '&:hover':{
          color: '#53C1DE'
        }
      }
    }
  }
}));

export default function Header() {
    const classes = useStyles();

  return (
    <footer className={classes.container}>
      <ul className={classes.footerMenu}>
        <li><Link to='/'>Terms of Services</Link></li>
        <li><Link to='/'>Privacy Policy</Link></li>
      </ul>
    </footer>
  );
}
