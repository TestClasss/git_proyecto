import { useNavigate } from 'react-router-dom'
 

const Card = ({identify, post, image, date, description, likes=[], user }) => {
    
    const navigate = useNavigate();
    return (
       <div>
       <ol>
            <li>Id: {identify}</li>
            <li>Fecha: {date}</li>
            <li>Descripcion: {description}</li>
            <li>Likes: {likes.length}</li>
            <li>titulo: {post}</li>
            <li>Usuario: {user.username}</li>
            <li><img src={image} alt={post.title}/></li>
            
        </ol>
        </div>
        
            
        
    );
};

export default Card;