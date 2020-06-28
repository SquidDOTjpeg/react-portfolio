import React from "react";
import "./style.css"

function AnimatedBanners({ color }) {
    return(
        <div className="animated-banner" style={{ backgroundColor: `${color}`}}>
        </div>
    )
}

export default AnimatedBanners