import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

const FormUserDetails = (props) => {
  const { nextStep } = props;
  return (
    <div>
      <DialogTitle id="alert-dialog-title">{"New instance"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary" autoFocus onClick={nextStep}>
          Continue
        </Button>
      </DialogActions>
    </div>
  );
};

export default FormUserDetails;
