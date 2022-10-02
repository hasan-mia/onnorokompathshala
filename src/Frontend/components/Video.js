import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import { videoContext } from '../../App';
import Loader from '../../Shared/Loader';
import LikeDislike from './LikeDislike';
import View from './View';

const Video = () => {
  const { videos, isLoad } = useContext(videoContext);
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
  if (isLoad) {
    return <Loader></Loader>
  }
  return (
    <>
      {videos.map((video) =>
        //onClick={()=>singleVideo(`/video/${video._id}`)}
        <div key={video.videoId} className='grid bg-gray-100 p-2 relative rounded-md'>
          <YouTube videoId={video.videoId} opts={opts} onReady={onPlayerReady} />
          <View
            videoId={video?.videoId}
            apiKey={video?.apiKey}
          />
          <LikeDislike
            id={video?._id}
            videoId={video?.videoId}
            apiKey={video?.apiKey}
            likes={video?.likes}
            dislikes={video?.dislikes}
            author={video?.author}
          />
        </div>
      )}
    </>
  );
};

export default Video;