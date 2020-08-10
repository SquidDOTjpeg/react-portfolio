import React from "react"
import "./style.css"

function EmailNotification({ message, clearNotificationState, sent, show }) {
    return(
        <div className={show === true? "notification-box" : "hide"}>
            <p className="notification-message">{message}</p>
            <button className="notification-btn" onClick={clearNotificationState}>Clear</button>
        </div>
    )
}

export default EmailNotification