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
    
    temporal?
                <span>
                    <BsFillEyeSlashFill onClick={data} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span> :
                <span>
                    <BsFillEyeSlashFill onClick={data} className="cursor-pointer text-red-600 transition-all hover:text-gray-400 transform hover:scale-125"/>

                </span>
   
    

)
};

export default Toogle;