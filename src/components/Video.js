import React from 'react'
import video1 from "../images/video1.mp4";
import './Video.css';

const Video = () => {
    return (
        <div className='div'>
        <video className='video' src={video1} width="100%" height="300" autoPlay muted loop/>
      </div>
    )
};

export default Video;