import{ useEffect, useState } from 'react';

const useViews = (videoId, apiKey) => {
    const [views, setViews]=useState([]);
    const [isLoad, setIsLoad]= useState(true);
    useEffect(()=>{
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`)
        .then(res=>res.json)
        .then(data=>setViews(data, setIsLoad(false)))
    },[isLoad])
    return {views, setViews, isLoad, setIsLoad};
};

export default useViews;
