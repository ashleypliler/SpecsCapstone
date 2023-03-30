import React from "react";
import family from "../../images/family.jpg"
import {Link} from "react-router-dom";

const Video = () => {
    return (
        <div
        className='videoCss'
        style={{
          background: `
            url(${family})`,
          backgroundSize: "cover",
        }}
      ></div>
    )
}

export default Video;