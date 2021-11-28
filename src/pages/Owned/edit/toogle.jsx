import {BsFillEyeSlashFill} from 'react-icons/bs';
import  usetoogle  from '../../../services/toogle';
import { useState } from 'react';
import Icon from './edit';



const Toogle = ({identifier, active}) => {
    
    const newtoken = localStorage.getItem('token');
    const [temporal, setTemporal] = useState(active);
    
    const data = async () => {
        const data =  await usetoogle(identifier, newtoken);
        setTemporal(!temporal);
        console.log(temporal);
    }
    

return (
    
    <BsFillEyeSlashFill onClick={data} className={`cursor-pointer ${temporal ? "text-gray-700": "text-red-700"}`} />
   
    

)
};

export default Toogle;