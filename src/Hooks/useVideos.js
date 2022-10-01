import { useEffect, useState } from "react";

const useVideos = () => {
    const [videos, setVideos] = useState([])
    const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch('https://onnorokompathshala.herokuapp.com/videos')
		.then((res) => res.json())
        .then((data) => setVideos(data, setIsLoad(false)));
    }, [isLoad])

    return {videos, setVideos, isLoad, setIsLoad}
};

export default useVideos;