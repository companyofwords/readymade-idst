import React from "react"
import PropTypes from "prop-types"
import injectSheet from "react-jss"
//import Obfuscate from "react-obfuscate"

import Form from "../ContactForm"
import config from "../../../data/SiteConfig"

const styles = theme => ({});

const Contact = () => {
  return (
    <div>
        I am looking for web development opportunities, particularly those with a social or creative side. If you would like me to be part of your team (and would like my full CV), please feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        <Form netlify/>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Contact
