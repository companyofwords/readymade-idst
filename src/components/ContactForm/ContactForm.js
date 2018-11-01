import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Button from "@material-ui/core/Button";
import { navigateTo } from "gatsby-link";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const styles = theme => ({
  submit: {
    margin: "1em 0",
    background: "rgb(252,79,8)"
    //width: "100%"
  },
  multilineInput: {
    fontFamily: "Lora",
    color: "rgb(252,79,8)",
    lineHeight: 1.2,
    fontSize: "1em",
    color: "rgb(252,79,8)",
    borderBottom: "rgb(252,79,8) 1px solid",
    "& hover": {
      borderBottom: "rgb(252,79,8) 1px solid"
    },
    "& ::placeholder" : {
      color: "rgb(252,79,8)"
    },
  },
  singleLineInput: {
    color: "rgb(252,79,8)",
    fontFamily: "Lora",
    lineHeight: 1.2,
    fontSize: "1em",
    color: "rgb(252,79,8)",
    borderBottom: "rgb(252,79,8) 1px solid",
    "& hover": {
      borderBottom: "rgb(252,79,8) 1px solid"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "47%",
      marginLeft: "3%",
      "&:first-child": {
        marginRight: "3%",
        marginLeft: 0
      }
    }
  },
  submitError: {
    background: "red",
    color: "white"
  }
});

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitError: ""
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleNetworkError = e => {
    this.setState({ submitError: "There was a network error." });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        console.log("Form submission success");
        navigateTo("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });

    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { email, name, message, submitError } = this.state;

    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
        name="contact"
        color="primary"
        ref={f => (this.form = f)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        variant="outlined"
      >
        {submitError && <p className={classes.submitError}>{submitError}</p>}
        <TextValidator
          id="name"
          name="name"
          color="primary"
          label="Name"
          value={name}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="email"
          name="email"
          color="primary"
          label="E-mail"
          value={email}
          onChange={this.handleChange}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          style={{ color: "red" }}
          id="message"
          color="primary"
          name="message"
          label="Message"
          value={message}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          multiline
          fullWidth
          margin="normal"
          className={classes.multilineInput}
        />
        <input name="bot-field" style={{ display: "none" }} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          className={classes.submit}
        >
          Send
        </Button>
      </ValidatorForm>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ContactForm
