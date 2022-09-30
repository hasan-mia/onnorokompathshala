import React from 'react';
import YouTube from 'react-youtube';
import useVideos from '../../Hooks/useVideos';
import Views from './Views';

const Video = () => {
    const { videos } = useVideos();
    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

      const opts = {
        height: '390',
        width: '440',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <div className='flex gap-2 mt-8'>
            {videos.map(video =>
                <>
                <YouTube videoId={video.videoId} opts={opts} onReady={onPlayerReady} />
                <div className='flex'>
                  <Views videoId={video.videoId} videoKey={video.videoKey}/>
                </div>
                </>
            )}
        </div>
    );
};

export default Video;