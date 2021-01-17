import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

const FormPersonalDetails = (props) => {
  const { nextStep, prevStep } = props;
  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        {"Instance Availabiltiy"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary" onClick={prevStep}>
          Back
        </Button>
        <Button color="primary" autoFocus onClick={nextStep}>
          Continue
        </Button>
      </DialogActions>
    </div>
  );
};

export default FormPersonalDetails;
