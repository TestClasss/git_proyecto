import Icon from './Icon/Icon';
import {Comments} from './Comments/Comments';

const Post = ({identify, post, image, date, description, comments=[], likes=[], user }) => {

    return (
        <div className ="w-9/12 p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white relative">
            <h1 className = "lg:text-4xl text-2xl uppercase font-bold"> {user.username}</h1>
            <img className="rounded my-2 lg:my-8 m-auto" src = {image} alt = {`Image posted from user ${user.username} `} />

            <div className ="w-max right-8 mt-1  flex flex-row absolute lg:text-4xl gap-2">
                <Icon type="like"></Icon>
                <Icon type="comment"></Icon>
                <Icon type="fav"></Icon>
            </div>

            <p className = "font-RobotoSlab lg:text-2xl truncate">{post}</p>
            <p className ="font-RobotoSlab font-light lg:text-lg text-xs mb-2 text-truegray-600 overflow-ellipsis overflow-hidden">{description}</p>
            <Comments content = {comments} postID = {identify}/>
        </div>
        
    );
};

export default Post;