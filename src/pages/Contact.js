import React, { useState } from "react";
import ContactContainer from "../components/ContactContainers/index";
import Title from "../components/Title/index";
import { Row, Col } from "../components/Grid/index";
import ContactLinks from "../components/ContactLinks/index";
import "./style.css";
import EmailForm from "../components/EmailForm";
import EmailNotification from "../components/EmailNotification/index";
import axios from "axios";

function Contact() {
  const [formObject, setFormObject] = useState();
  const [emailNotificationState, setEmailNotification] = useState({
    message: "",
    sent: false,
    show: false,
  });

  function handleFormInput(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function clearNotificationState(event) {
    event.preventDefault();
    setEmailNotification({ message: "", sent: false, show: false });
  }

  function submitForm(event) {
    event.preventDefault();
    if (formObject === undefined) {
      setEmailNotification({
        message: "Please fill out all forms correctly before sending an email.",
        sent: false,
        show: true,
      });
      console.log(emailNotificationState);
    } else {
      console.log(formObject);
      setEmailNotification({
        message: "Sending...",
        sent: false,
        show: true,
      });
      axios({
        method: "POST",
        url: "https://squid-portfolio.herokuapp.com/send",
        data: formObject,
      }).then((response) => {
        if (response.data.status === "success") {
          console.log("message sent");
          setEmailNotification({
            message: "Email succesfully sent",
            sent: true,
            show: true,
          });
          console.log(emailNotificationState);
          setFormObject({});
        } else if (response.data.status === "failed") {
          setEmailNotification({
            message: "Email failed to send",
            sent: false,
            show: true,
          });
          console.log("message failed to send");
          console.log(emailNotificationState);
        }
      });
    }
  }

  return (
    <>
      <div className="skew">
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <div className="big-stuff-container">
              <Title>Contact Me</Title>

              <ContactContainer>
                <ContactLinks link="https://github.com/SquidDOTjpeg">
                  <i className="fab fa-github link"></i>
                </ContactLinks>
                <ContactLinks link="https://www.linkedin.com/in/anthony-pillow-81a0a518a/">
                  <i className="fab fa-linkedin-in link"></i>
                </ContactLinks>
              </ContactContainer>

              <EmailForm
                handleFormInput={handleFormInput}
                submitForm={submitForm}
              />
              <EmailNotification
                message={emailNotificationState.message}
                sent={emailNotificationState.sent}
                show={emailNotificationState.show}
                clearNotificationState={clearNotificationState}
              />
            </div>
          </Col>
          <Col size="md-3" />
        </Row>
      </div>
    </>
  );
}

export default Contact;
