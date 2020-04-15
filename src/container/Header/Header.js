import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/logo_new.svg';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';
import OpenModal from '../../component/OpenModal/OpenModal';
import ENUMS from '../../assets/js/enum';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '40px 0',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0',
    }
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '-50px',
    '& > *': {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      marginTop: '0px',
    }
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  buttonColor: {
    background: '#53C1DE',
    textTransform: 'none',
    fontFamily: 'GilroyFont',
    fontWeight: '800'
  },
  loadedText: {
    paddingLeft: '10px',
    verticalAlign: 'super'
  }
}));

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState(false);

  const openModal = (value) => {
    setOpen(value);
  };

  const openModalSec = (value) => {
    setModal(value);
  };

  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.buttons}>
      <ButtonGroup variant="contained" aria-label="contained primary button group" size='large'>
        <Button onClick={openModal} className={`${classes.buttonColor} about`}>About</Button>
        <Button onClick={openModalSec} className={classes.buttonColor}>Pricing</Button>
      </ButtonGroup>
      </div>
      {(open) && <OpenModal parentCallback={openModal} modalName='aboutModal' content={ENUMS.ABOUT} />}
      {(modal) && <OpenModal parentCallback={openModalSec} modalName='priceModal' content={ENUMS.PRICE} />}
    </header>
  );
}
