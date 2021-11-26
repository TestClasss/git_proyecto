import { IoHeartOutline} from 'react-icons/io5';
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

export const Post = (props) => {
    return (
        <div className ="p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white">
            <h1 className = "lg:text-4xl text-2xl uppercase font-bold"> {props.owner}</h1>
            <img className="rounded my-2 lg:my-8" src = {props.url} alt = {`Image posted from user ${props.owner} `} />
            <IoHeartOutline></IoHeartOutline>
            <AiOutlineMessage></AiOutlineMessage>
            <IoBookmarkOutline></IoBookmarkOutline>
            <p className = "font-RobotoSlab lg:text-2xl">{props.tittle}</p>
            <p className ="font-RobotoSlab font-light lg:text-lg text-xs">{props.desc}</p>
        </div>
    )
}
