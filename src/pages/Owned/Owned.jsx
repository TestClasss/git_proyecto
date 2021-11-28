
import { useUserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import  usecreate from '../../services/create'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useowned } from '../../services/owned';
import Post from './Page';


export default function Owned() {

const {token } = useUserContext();
const limit = 20;
const page = 0;
const gettoken = localStorage.getItem('token');

const [post, setPost] = useState([]);



useEffect(() => {
const onSubmitHandler =  async () => {
    try {
        console.log('click')
    const data =  await useowned(limit, page, gettoken );
    
    setPost(data);
    }
    
   
    catch (error) {
        console.log(error)
    console.log("esta es post", post._id)
    }
    
    
    
};
onSubmitHandler();
}, [])



const navigate = useNavigate();


return (
        
        <Post post={post}/>
            
            
        
        
    
)
}