import React from "react"
import "./style.css"

function Title(props) {
    return (
        <div>
            <p className="title">{props.title}</p>
        </div>
    )
}

export default Title