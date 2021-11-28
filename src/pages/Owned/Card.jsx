import { useNavigate } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import Icon from './edit/edit';
import {BsFillEyeSlashFill} from 'react-icons/bs';
import Toogle from './edit/toogle';

 

const Card = ({identify, post, image, date, description, likes=[], user, active }) => {
    
    const navigate = useNavigate();
   
  
    return (
        (
            <div className ="p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white relative">
                <h1 className = "lg:text-4xl text-2xl uppercase font-bold"> {user.username}</h1>
                <img className="rounded my-2 lg:my-8" src = {image} alt = {`Image posted from user ${user.username} `} />
                <div className ="w-max right-8 mt-1  flex flex-row absolute lg:text-4xl gap-2">
                {/* <IoBookmarkSharp id="Favorite" className="cursor-pointer text-gray-400 text-opacity-50 hover:text-yellow-600 transition-all transform hover:scale-125" ></IoBookmarkSharp>
                <AiOutlineMessage id="Message" className="cursor-pointer text-gray-400 text-opacity-50 hover:text-black transition-all transform hover:scale-125" ></AiOutlineMessage>
                <AiTwotoneHeart className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-500 transition-all transform hover:scale-125" ></AiTwotoneHeart> */}
                {/* <Icon type="like"></Icon>
                <Icon type="comment"></Icon>
                <Icon type="fav"></Icon> */}
                <AiFillHeart className="text-red-600 transition-all transform hover:scale-125"/><p>{likes.length}</p>
                <Icon type="edit" ></Icon>
                <Toogle identifier={identify}
                active = {active}/>
                
                </div>
                
                <p className = "font-RobotoSlab lg:text-2xl">{post}</p>
                <p className ="font-RobotoSlab font-light lg:text-lg text-xs">{description}</p>
                <p className ="font-RobotoSlab font-light lg:text-lg text-xs">fecha: {date}</p>
                
            </div>
        )
    );
};

export default Card;