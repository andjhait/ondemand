import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ENUMS from '../../assets/js/enum';
import Dropzone from 'react-dropzone';
import OpenModal from '../OpenModal/OpenModal';
import trello from '../Uploads/trello';
import App from '../Stripe';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '40px'
  },
  formInput: {
    width: '100%',
    height: '40px',
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'center',
    borderRadius: '5px',
    outline: 'none',
    border: '1pt solid black',
    padding: '0'
  },
  button: {
    background: '#707070',
    width: '100%',
    marginTop: '20px',
    padding: '0',
    height: '200px',
    '&:hover': {
      background: '#707070',
    }
  },
  dBlock: {
    display: 'block',
    fontSize: '14px',
    textTransform: 'none',
    fontWeight: 'bold'
  },
  buttonText: {
    paddingTop: '45px',
    height: '180px',
    marginTop: '20px',
    border: '1pt solid black',
    borderRadius: '5px'

  },
  extensions: {
    fontWeight: 'normal',
    marginTop: '10px'
  },
  getStarted: {
    width: '100%',
    background: '#fff',
    color: '#000',
    fontWeight: 'bold',
    marginTop: '20px',
    textTransform: 'none',
    fontSize: '18px',
    '&:hover': {
      background: '#53C1DE'
    }
  },
  file: {
    marginTop: '10px',
    display: 'block'
  },
  lowOpacity: {
    opacity: '0.7'
  },
  errors: {
    color: 'red',
    marginTop: '7px',
    display: 'block'
  },
  success: {
    color: 'green',
    marginTop: '10px',
    display: 'block',
    fontSize: '18px',
    fontWeight: '600'
  }
}));



function UploadForm() {
  const [selectedFile, setSelectedFile] = useState('');
  const [validFile, setvalidFile] = useState(true);
  const [fieldsVal, setFieldsVal] = useState({});
  const [errorsVal, setErrorsVal] = useState({});
  const [successVal, setSuccessVal] = useState('');

  const classes = useStyles();
  
  const validationOnUpload = (file) => {
      var _validFileExtensions = [".psd", ".Xd", ".Sketch", ".Fig"];
      setvalidFile(true);
      setSelectedFile(`${file}`);
        var sFileName = file;
        if (sFileName.length > 0) {
          var blnValid = false;
          for (var j = 0; j < _validFileExtensions.length; j++) {
            var sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() === sCurExtension.toLowerCase()) {
              blnValid = true;
              setvalidFile(true);
              break;
            }
          }
          if (!blnValid) {
            setSelectedFile();
            setvalidFile(false);
            return false;
          }
        }
      return true;
  };

  const handleValidation = () => {
    let fieldsNew = fieldsVal;
    let fields = fieldsVal.fields;
    let errors = {};
    let formIsValid = true;

    if (!selectedFile) {
      errors["file"] = "Please select a file.";
      formIsValid = false;
    }

    //Email
    if(Object.keys(fieldsVal).length === 0 && !fieldsNew["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(fields && typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  

   setErrorsVal({errors: errors});
   return formIsValid;
};

const contactSubmit = (e) => {
  e.preventDefault();

  if(handleValidation()){
    setSuccessVal("Form submitted");
    trello(selectedFile);
    App();
  }

};
const handleChange = (field, e) => {
  setErrorsVal({});
  let fields = fieldsVal;
  fields[field] = e.target.value;        
  setFieldsVal({fields});
};

const openModal = (value) => {
  setvalidFile(value);
};
  return (
    <div className={classes.container}>
    <Grid container justify="center">
    <Grid item lg={6} md={9} xs={12}>
      <form className={classes.root} onSubmit={(e) => contactSubmit(e)} method="post" enctype="multipart/form-data">
        <input placeholder='Email' type='email' onChange={(e) => handleChange("email", e)} className={classes.formInput} />
        { errorsVal.errors && errorsVal.errors['email'] && <span className={classes.errors}>{errorsVal.errors && errorsVal.errors['email']}</span> }
        <Dropzone onDrop={(acceptedFiles) => validationOnUpload(acceptedFiles[0].name)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={classes.buttonText}>
                  <span className={classes.dBlock}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="33.07" height="30" viewBox="0 0 33.07 30">
                    <g id="upload" transform="translate(0.001 0)">
                      <path id="Tracé_3900" data-name="Tracé 3900" d="M26.706,8.326A10.347,10.347,0,0,0,6.413,8.32a7.243,7.243,0,0,0,.834,14.438h5.173a1.035,1.035,0,0,0,0-2.069H7.248a5.173,5.173,0,1,1,.061-10.347,1.034,1.034,0,0,0,1.028-.921,8.277,8.277,0,0,1,16.445,0,1.1,1.1,0,0,0,1.089.921,5.173,5.173,0,1,1,0,10.347H20.7a1.035,1.035,0,0,0,0,2.069h5.173a7.243,7.243,0,0,0,.835-14.431Zm0,0" transform="translate(0 0)" fill="#fff" />
                      <path id="Tracé_3901" data-name="Tracé 3901" d="M181.317,198.312a1.035,1.035,0,0,0,1.489-1.437l-.025-.025-4.388-4.389a1.035,1.035,0,0,0-1.463,0l0,0-4.388,4.389a1.035,1.035,0,1,0,1.438,1.488l.025-.025,2.623-2.624V208.71a1.035,1.035,0,1,0,2.069,0V195.688Zm0,0" transform="translate(-161.1 -179.744)" fill="#fff" />
                    </g>
                  </svg>

                  </span>
                  <span className={classes.dBlock}>{ENUMS.DRAG_TEXT}</span>
                  <span className={`${classes.dBlock} ${classes.lowOpacity} ${classes.extensions}`}>{ENUMS.EXTENSION_TEXT}</span>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
        { errorsVal.errors && errorsVal.errors['file'] && <span className={classes.errors}>{errorsVal.errors && errorsVal.errors['file']}</span> }
        {selectedFile &&  <span className={classes.file}>{selectedFile}</span> }
        <Button variant="outlined" className={classes.getStarted} onClick={(e) => contactSubmit(e)}>{ENUMS.BUTTON}</Button>
        { successVal && <span className={classes.success}>{successVal}</span> }
        <p className={classes.lowOpacity}>{ENUMS.TERM_TEXT}</p>
      </form>
      </Grid>
      </Grid>
      { !validFile && <OpenModal parentCallback={openModal} modalName='errorModal' content={ENUMS.ERROR} /> }
    </div>
  );
}

export default UploadForm;