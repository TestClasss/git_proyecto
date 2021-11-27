
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    const onClick = (e) => {
        navigate('/login')
    }

    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200">
           
            <h2 className="text-6xl font-roboto text-center">404</h2>
            <h3 className="text-xl font-roboto text-center">Not Found</h3>
            <img className = "rounded-xl shadow-md border-4 lg:my-4 border-white" src="https://th.bing.com/th/id/R.40f7688ccccf1ebd4c11f0cd07ac90ce?rik=%2bB12J7U35vMOZQ&riu=http%3a%2f%2ffmobserver.com%2fwp-content%2fuploads%2f2018%2f04%2fmonkey-business.gif&ehk=eAt6SspQJiCr3Xb55drgB6ijTFCCJZqXvLWB4xeq%2bUM%3d&risl=&pid=ImgRaw&r=0" />
            <p className="text-lg font-roboto text-center">Our developers couldn't find the page you are looking for :(</p>
            <button className="font-roboto bg-gray-300 m-4 py-2 px-4 rounded" onClick={(e) => onClick(e)}>Go to Login</button>
        </div>
    );
}

export default NotFound;