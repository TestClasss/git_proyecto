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
            <button onClick={logoutHandler} className="fixed bottom-5 right-2 uppercase w-max w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Log out</button>
            <button className ="fixed bottom-16 lg:bottom-20 right-2 uppercase w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white" onClick={createHandler}>Crear post</button>               
            <div className="p-10 w-11/12 lg:w-1/2 h-max min-h-screen flex flex-col items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Admin page</h2>
<<<<<<< HEAD
=======
                <h3 className="text-lg font-medium text-gray-700 text-center">Only users with the admin role can view this page</h3>

                <p className="text-xl font-medium text-gray-400 text-center mt-6">If you want to see this page you have to ask permission from the administrators of the application</p>

                <button onClick={logoutHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Log out</button>
            </div>

            <div className="w-4/5 lg:w-1/2 flex justify-center items-center">
             <div >
                <button onClick={createHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Crear post</button>
                <button onClick={updateHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Actualizar post</button>
                <button onClick={ownedHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Ver mis posts</button>
                </div>
               
>>>>>>> main
            </div>
        </section>
    )

}
    