
import { useNavigate } from 'react-router-dom'
import Allpostcard from './Allpostcard';

const Userpost = ({post = []}) => { 
    const navigate = useNavigate();
    return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
    <div className="p-11 w-11/12 lg:w-1/2 h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">All post</h2>
      {
        post.map( post => {
          return <Allpostcard
            
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
      
          {/* <button onClick={() => navigate('/admin')} className='bg-red-900'>back</button> */}
    </div>
    </section>
    );
  }
  
  export default Userpost;