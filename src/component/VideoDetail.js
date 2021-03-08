import React from 'react'

const VideoDetail = ({video}) => {
    //instead of using props.video => we using props destructring {video} above one
   
    if(!video)
    {
        return  <div>Loading.</div>;
    }
      const Videosrc=`https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div >

          <div className="ui embed">
              <iframe title="videoplayer" src={Videosrc}  />
          </div>

        <div className="ui segment"> 
        <h4 className="ui header"> {video.snippet.title}  </h4>  
        <p> {video.snippet.description} </p>
        </div>

        </div> );
    
};

export default VideoDetail;