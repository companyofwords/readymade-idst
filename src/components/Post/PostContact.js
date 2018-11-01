import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Article from "../Main/Article";
import Content from "../Main/Content";
import Form from "../ContactForm";
import config from "../../../content/meta/config";

const styles = theme => ({});

const Contact = () => {
  return (
    
      <Article>
        <Content>
        I am looking for web development opportunities, particularly those with a social or creative side. If you would like me to be part of your team (and would like my full CV), please feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        <Form netlify/>
        </Content>
        
      </Article>
    
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
