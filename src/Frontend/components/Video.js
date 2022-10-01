import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { videoContext } from '../../App';
import LikeDislike from './LikeDislike';
import View from './View';

const Video = () => {
  const { videos } = useContext(videoContext);
  const singleVideo = useNavigate();

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.stopVideo();
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      {videos.map((video) =>
        //onClick={()=>singleVideo(`/video/${video._id}`)}
        <div key={video.videoId} className='grid bg-gray-100 p-2 relative rounded-md'>
          <YouTube videoId={video.videoId} opts={opts} onReady={onPlayerReady} />
          <View
            videoId={video.videoId}
            apiKey={video.apiKey}
          />
          <LikeDislike
            videoId={video.videoId}
            apiKey={video.apiKey}
            likes={video.likes}
            dislikes={video.dislikes}
          />
        </div>
      )}
    </>
  );
};

export default Video;