import React from "react"

function ContactLinks(props) {
    return(
    <a href={props.link} className="link">{props.children}</a>
    )
}

export default ContactLinks