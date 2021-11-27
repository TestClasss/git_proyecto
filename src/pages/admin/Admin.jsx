import { useUserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Admin() {
    const navigate = useNavigate()
    const { logout } = useUserContext()
    const [post, newPost] = useState('');

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    const createHandler = () => {
        navigate("/Create")

    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
                <button onClick={logoutHandler} className="fixed bottom-5 right-2 uppercase w-max w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Log out</button>
            <button className ="fixed bottom-16 lg:bottom-20 right-2 uppercase w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white" onClick={createHandler}>Crear post</button>               
            <div className="p-10 w-11/12 lg:w-1/2 h-max min-h-screen flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Admin page</h2>
            </div>
            <div className="w-4/5 lg:w-1/2 flex justify-center items-center">
            </div>
        </section>
    )

}
    