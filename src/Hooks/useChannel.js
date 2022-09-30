import { useEffect, useState } from "react";

const useChannel = (Userid, apiKey) => {
   const [channel, setChannel] = useState([]);
   const [isLoad, setIsLoad]=useState(true);
   useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${apiKey}`)
    .then(res=>res.json())
    .then(data=>setChannel(data, setIsLoad(false)))
   }, [isLoad])
   return{video: channel, setVideo: setChannel, isLoad, setIsLoad}
};

export default useChannel;
