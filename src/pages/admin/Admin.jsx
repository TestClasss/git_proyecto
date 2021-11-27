import { useUserContext } from '../../context/userContext'
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

    const updateHandler = () => {
        navigate("/Update")
    }
    const ownedHandler = () => {
        navigate("/Owned")
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
            <div className="w-4/5 lg:w-1/2 gap-6 h-full flex flex-col justify-around items-center">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Admin page</h2>
                <h3 className="text-lg font-medium text-gray-700 text-center">Only users with the admin role can view this page</h3>

                <button onClick={logoutHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Log out</button>
            </div>

            <div className="w-4/5 lg:w-1/2 flex justify-center items-center">
             <div >
                <button onClick={createHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Crear post</button>
                <button onClick={updateHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Actualizar post</button>
                <button onClick={ownedHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Ver mis posts</button>
                </div>
               
            </div>
        </section>
    )

}
    