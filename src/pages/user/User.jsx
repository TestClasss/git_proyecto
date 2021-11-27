<<<<<<< HEAD
import { useUserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

=======
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import {Post} from '../../Components/Post/Post'
>>>>>>> d962972b15f4b4850cc836e5a1f89307f368c0b8

export default function User() {
    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
            <div className="p-10 w-11/12 lg:w-1/2 h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
            <button onClick={logoutHandler} className="fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Log out</button>
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Main user page</h2>
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
                <Post  
                    owner = "User 4"
                    url = "https://www.tonica.la/__export/1601829332328/sites/debate/img/2020/10/04/gta-v-portada_1.jpg_463833556.jpg"
                    tittle = "GTA V"
                    desc = "Rockstar Games"
                />
                <Post  
                    owner = "User 5"
                    url = "http://pm1.narvii.com/6949/8f66718b4cbd790911a0b69fc064af0f373289ecr1-1024-982v2_uhq.jpg"
                    tittle = "Hitler-san "
                    desc = "Sitler siendo tan humildee como siempre"
                />
            </div>
        </section>
    )
    
}