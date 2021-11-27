import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import {Post} from '../../Components/Post/Post'

export default function User() {
    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
            <div className="p-10 w-11/12 lg:w-1/2 h-max flex flex-col items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
            <button onClick={logoutHandler} className="fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Log out</button>
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Bienvenido!</h2>
                <Post 
                    owner = "User 1"
                    url = "https://wallpaperaccess.com/full/4269535.jpg"
                    tittle = "Satisfactory"
                    desc = "Early Acces"
                />
                <Post 
                    owner = "User 2"
                    url = "https://wallpapercave.com/wp/wp7347235.jpg"
                    tittle = "Ark Survival"
                    desc = "Genesis Part 1-2"
                />
                <Post 
                    owner = "User 3"
                    url = "https://images.alphacoders.com/203/thumb-1920-203543.jpg"
                    tittle = "The Elder Scrolls V"
                    desc = "Skyrim"
                />
            </div>
        </section>
    )
    
}