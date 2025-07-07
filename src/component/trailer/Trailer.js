import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React from 'react'

const Trailer = () => {
    let params = useParams();
    let key =params.ytTrailerId;
      console.log("Trailer Key:", key); 
    return(
    <div className="react-player-container">
    {key?<ReactPlayer url={`https://www.youtube.com/watch?v=${key}`}
        autoplay={true} 
        muted={true} 
        controls={true} 
        width= '100%' height='100%' />:null} 
    </div>
    );
};
export default Trailer;
