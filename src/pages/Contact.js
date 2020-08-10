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
        show: true
      })
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
      <div className="big-stuff-container">
        <Row>
          <Col size="md-12">
            <Title>Contact Me</Title>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <ContactContainer>
              <i className="fas fa-envelope"></i>{" "}
              <ContactLinks>anthonypillow18@gmail.com</ContactLinks>
            </ContactContainer>
          </Col>
          <Col size="md-4">
            <ContactContainer>
              <i className="fab fa-github"></i>{" "}
              <ContactLinks link="https://github.com/SquidDOTjpeg">
                SquidDOTjpeg
              </ContactLinks>
            </ContactContainer>
          </Col>
          <Col size="md-4">
            <ContactContainer>
              <i className="fab fa-linkedin-in"></i>{" "}
              <ContactLinks link="https://www.linkedin.com/in/anthony-pillow-81a0a518a/">
                Anthony Pillow
              </ContactLinks>
            </ContactContainer>
          </Col>
        </Row>
      </div>
      <br></br>
      <div className="big-stuff-container">
        <EmailForm handleFormInput={handleFormInput} submitForm={submitForm} />
        <EmailNotification
          message={emailNotificationState.message}
          sent={emailNotificationState.sent}
          show={emailNotificationState.show}
          clearNotificationState={clearNotificationState}
        />
      </div>
    </>
  );
}

export default Contact;
