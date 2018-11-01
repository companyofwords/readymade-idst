import React from "react"
import PropTypes from "prop-types"
import Obfuscate from "react-obfuscate"

import Form from "../ContactForm"
import config from "../../../data/SiteConfig"



const Contact = () => {
  return (
    <div>
        Contact us by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        <Form netlify/>
    </div>
  );
};

Contact.propTypes = {
  
};

export default Contact
