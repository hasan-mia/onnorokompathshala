import { useEffect, useState } from "react";

const useVideo = (id) => {
    const [video, setVideo] = useState([])
    const [isLoad, setIsLoad] = useState(true)
	useEffect(() => {
		fetch(`https://onnorokompathshala.herokuapp.com/video/${id}`)
		.then((res) => res.json())
        .then((data) => setVideo(data, setIsLoad(false)));
    }, [isLoad])

    return {video, setVideo, isLoad, setIsLoad}
};

export default useVideo;