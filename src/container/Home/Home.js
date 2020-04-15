import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ENUMS from '../../assets/js/enum';
import UploadForm from '../../component/UploadForm/UploadForm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '20px',
    textAlign: 'center'
  },
  header: {
    fontSize: '40px',
    fontWeight: 'bold',
    margin: '0'
  },
  subHeader: {
    fontSize: '18px',
    fontWeight: 'normal'
  },
  listContainer: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    paddingTop: '25px',
    '& li': {
      display: 'inline-block',
      fontSize: '16px',
      '&:nth-child(even)': {
        [theme.breakpoints.up('md')]: {
          padding: '0 30px'
        }
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      }
    }
  },
  checkBox: {
    verticalAlign: 'middle',
    '& path': {
      fill: '#53C1DE'
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>{ENUMS.CONTENT.HEADER}</h1>
      <h2 className={classes.subHeader}>{ENUMS.CONTENT.SUBHEADER}</h2>
      <ul className={classes.listContainer}>
        {ENUMS.CONTENT.KEY.map}
        { ENUMS.CONTENT.KEY.map(text => <li key={text}><CheckCircleIcon className={classes.checkBox} /> {text}</li>) }
      </ul>
      <UploadForm />
    </div>
  );
}