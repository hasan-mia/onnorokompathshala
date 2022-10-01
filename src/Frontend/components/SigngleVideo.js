import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import useVideo from '../../Hooks/useVideo';
import Video from './Video';
import View from './View';

const SigngleVideo = () => {
    const { id } = useParams();
    const {video} = useVideo(id)
    const { title, description, videoId, apiKey } = video;

    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.stopVideo();
    }

    const opts = {
        height: '500vh',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <section className='my-2 lg:my-4'>
            <div className="flex flex-col lg:flex-row gap-2">
                <div className="grid w-full lg:w-9/12 bg-gray-100 p-2 relative">
                    <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
                    <View
                        videoId={videoId}
                        apiKey={apiKey}
                    />
                </div>
                <div className="w-full lg:w-3/12">
                    <Video></Video>
                </div>
            </div>
        </section>
    );
};

export default SigngleVideo;