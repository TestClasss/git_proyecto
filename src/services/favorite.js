const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1/post/fav/";

const favorite = async (id, token) => {
    const response = await fetch(`${BASE_URL}${id}`, {
        "method": "PATCH",
        "headers": {
        Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
    console.log("Favorito guardado");
    return data;
    };
export default favorite;
