import React, { useEffect, useState } from 'react';

const Views = ({videoId, videoKey}) => {
    //  const apiKey = 'AIzaSyAWiAiaU3_zOIVw-8jpHMtN80rMCdQbCmA'
    //  const videoId = 'Km4owdmu5Bo'
    // const channelId = 'UCIAFjhWrfEh4HtlDWPaQBbQ'
    const [views, setViews] = useState();
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${videoKey}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data=> setViews(data.items[0].statistics.viewCount))
    }, [])
    return (
        <div>
            <h1>{views}</h1>
        </div>
    );
};

export default Views;