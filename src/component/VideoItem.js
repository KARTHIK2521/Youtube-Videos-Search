import './VideoItem.css'
import React from 'react'

 const VideoItem = ({video , onVideoSelect}) => {
    return (
              
        // user click the side videos onVideoselect is call back to APp.js then update the state obejct in single video
        <div onClick={ () => onVideoSelect(video)}  className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
            <div className="header"> {video.snippet.title}</div>
            </div>
           
           
        </div>
    )
}

export default VideoItem;