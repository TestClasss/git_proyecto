import {BsFillEyeSlashFill} from 'react-icons/bs';
import favorite from '../../../services/favorite';
import { useEffect, useState } from 'react';
import { IoHeartOutline} from 'react-icons/io5';
import { IoBookmarkOutline} from 'react-icons/io5';
import { getToken } from '../../../context/userContext';



const Flag = ({identifier,}) => {
   
    const flagclick = () => {
        const token = getToken();
        favorite(identifier,token);
        
    }

return (
    <IoBookmarkOutline onClick={flagclick} />
   
    

)
};

export default Flag;