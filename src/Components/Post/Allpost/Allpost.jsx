import { useUserContext } from '../../../context/userContext';
import { useState, useEffect } from 'react';
import { useallowned } from '../../../services/allowned';
import Userpost from './Allpage';

export default function Allowned() {

    const {token } = useUserContext();
    const limit = 20;
    const page = 0;
    const gettoken = localStorage.getItem('token');
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        const onSubmitHandler =  async () => {
            try {
                console.log('click')
            const data =  await useallowned(limit, page, gettoken );
            
            setPost(data);
            }
            
           
            catch (error) {
                console.log(error)
            console.log("esta es post", post._id)
            }
            
            
            
        };
        onSubmitHandler();
        }, [])

        return (
        
            <Userpost post={post}/>
                
                
            
            
        
    )
}

