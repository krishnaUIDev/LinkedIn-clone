import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

const Confirm = (props) => {
  const { nextStep, prevStep, setOpen } = props;
  return (
    <div>
      <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button color="primary" onClick={prevStep}>
          Back
        </Button>
        <Button color="primary" autoFocus onClick={() => setOpen(false)}>
          Confirm
        </Button>
      </DialogActions>
    </div>
  );
};

export default Confirm;
