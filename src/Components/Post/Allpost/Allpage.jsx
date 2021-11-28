import { useNavigate } from "react-router-dom";
import Allpostcard from "./Allpostcard";
import { useUserContext } from "../../../context/userContext";
import NavButton from "./NavButton/NavButton";

const Userpost = ({ post = [] }) => {
  const navigate = useNavigate();
  const { logout } = useUserContext();

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };
  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
      <div className="p-11 w-11/12 lg:w-1/2 h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">
          All post
        </h2>
        {post.map((post) => {
          return (
            <Allpostcard
              identify={post._id}
              post={post.title}
              date={post.createdAt}
              image={post.image}
              description={post.description}
              likes={post.likes}
              user={post.user}
            />
          );
        })}
        <span>
          <NavButton direction="L" />
          <NavButton direction="R" />
        </span>
        <button onClick={logoutHandler} className="fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Log out</button>
      </div>
    </section>
  );
};

export default Userpost;
