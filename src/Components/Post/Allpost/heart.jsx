import {BsFillEyeSlashFill} from 'react-icons/bs';
import  like  from '../../../services/like';
import { useEffect, useState } from 'react';
import { IoHeartOutline} from 'react-icons/io5';




const Heart = ({identifier, likes=[]}) => {
   
    const newtoken = localStorage.getItem('token');
    const [temporal, setTemporal] = useState(null);
    const words = ["gp26_user"];
    const isFav = likes.findIndex(like => like.username === words[0] ) != -1 ? true : false
    const isLiked = temporal != null ? temporal : isFav

    useEffect(() => {
        setTemporal(isLiked);
    }, [ isLiked, likes]);

   
    


    
    
   
    // const showVisible = temporal !== null? temporal : active;
    
    // useEffect(() => {
    //     setTemporal(active);
    // }, [identifier]);
    
    const data = async () => {
        const data =  await like(identifier, newtoken);
        // setTemporal(!active);
        console.log(temporal);
        console.log(data);
        console.log("estos son los likes",likes);
        console.log("este es is fav",isFav);
        console.log("este es el username", words[0]);
        setTemporal(!isLiked);
        
        
        
        
        
        
        
    }


return (
    <IoHeartOutline onClick={data} className={`cursor-pointer ${isLiked ? "text-red-400" : "text-gray-400"} `}/>
   
    

)
};

export default Heart;