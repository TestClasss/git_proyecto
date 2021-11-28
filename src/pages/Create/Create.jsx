import { useUserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import  usecreate from '../../services/create'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Create() {

const {token } = useUserContext();
const [tittle, newTittle] = useState('');
const [description, newDescription] = useState('');
const [image, newImage] = useState('');
const gettoken = localStorage.getItem('token');

const onChange = (e, save) => {
    save(e.target.value);

}

const onSubmitHandler =  async (e) => {
    e.preventDefault();
    const Data =  usecreate(tittle, description, image, gettoken, );
   
}

const navigate = useNavigate();


return (    
    <div className = "border border-red-500 w-screen h-screen py-20 px-10">
        <div className ="border border-blue-500 h-full">
            <form onSubmit={onSubmitHandler}>
                <h2>Crea una nueva publicacion!</h2>
                <input 
                    type="text"
                    placeholder="tittle"
                    value={tittle}
                    onChange={(e) => onChange(e, newTittle)}
                    
                    />
                <input 
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => onChange(e, newDescription)}
                    
                    />
                <input 
                    type="text"
                    placeholder="image"
                    value={image}
                    onChange={(e) => onChange(e, newImage)}
                    
                    />

                <button type="submit">create</button>

                
            </form>
                <button onClick={() => navigate('/admin')} className='bg-red-900'>back</button>
            
        </div>
    </div>   
)




}