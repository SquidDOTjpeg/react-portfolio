import React, { useState } from "react";
import ContactContainer from "../components/ContactContainers/index";
import Title from "../components/Title/index";
import { Row, Col } from "../components/Grid/index";
import ContactLinks from "../components/ContactLinks/index";
import "./style.css";
import EmailForm from "../components/EmailForm";
import axios from "axios"

function Contact() {
  const [formObject, setFormObject] = useState();

  function handleFormInput(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject)
  }

  function submitForm(event){
    event.preventDefault()
    console.log(formObject)
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data: formObject
    }).then((response) => {
      console.log(response)
      if(response.data.status === "success"){
        alert("message sent")
        setFormObject({})
      }else if(response.data.status === "failed"){
        alert("message failed to send")
      }
    }) 
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
      </div>
    </>
  );
}

export default Contact;
