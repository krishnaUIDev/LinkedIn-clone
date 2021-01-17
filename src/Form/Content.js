import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";

export class Content extends Component {
  state = {
    step: 1,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;
    const { setOpen } = this.props;
    switch (step) {
      case 1:
        return <FormUserDetails nextStep={this.nextStep} setOpen={setOpen} />;
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            setOpen={setOpen}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            setOpen={setOpen}
            prevStep={this.prevStep}
          />
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default Content;
