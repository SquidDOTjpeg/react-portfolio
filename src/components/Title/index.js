import React from "react"
import "./style.css"

function Title(props) {
    return (
        <div>
            <p className="title">{props.children}</p>
        </div>
    )
}

export default Title