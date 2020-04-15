import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import ReactHTMLParser from 'react-html-parser';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    textAlign: 'center',
    '& h6': {
      fontSize: '16px',
      margin: '0',
      padding: '0',
      '& img': {
        verticalAlign: 'middle',
        maxWidth: '32px',
        maxHeight: '32px'
      },
      '& span': {
        marginLeft: '10px'
      }
    }
  },
  mainTitle: {
    padding: '0',
    margin: '0',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '42px'
  },
  contentContainer: {
    textAlign: 'center',
    fontSize: '14px',
    paddingTop: '0'
  },
  errorModal: {
    
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const OpenModal = withStyles(styles)((props) => {
  const [open, setOpen] = useState(true);
  const { parentCallback, content, classes, modalName } = props;

  const handleClose = () => {
    setOpen(false);
    parentCallback(false)
  };

  return (
    <div>
      <Dialog onClose={handleClose} className={classes[modalName]} aria-labelledby="customized-dialog-title" open={open}>
      { content.NAME && <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.title}>
          <img src={ReactHTMLParser(content.IMAGE)} alt={content.NAME} />
          <span>{content.NAME}</span>
        </DialogTitle>
      }
        <DialogContent className={classes.contentContainer}>
        {content.TITLE && <h3 className={classes.mainTitle}>{ReactHTMLParser(content.TITLE)}</h3> }
        {ReactHTMLParser(content.CONTENT)}
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default OpenModal;