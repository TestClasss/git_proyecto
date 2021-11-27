import Card from "./Card";
import { useNavigate } from 'react-router-dom'

const Post = ({post = []}) => { 
  const navigate = useNavigate();
  return (
    <div className=" w-full flex justify-center items-center gap-4 flex-wrap">
    {
      post.map( post => {
        return <Card
          
          identify={post._id}
          post={post.title}
          date={post.createdAt}
          image={post.image}
          description={post.description}
          likes={post.likes}
          user={post.user}
          />
      })
    }
    
        <button onClick={() => navigate('/admin')} className='bg-red-900'>back</button>
  </div>  
  );
}

export default Post;