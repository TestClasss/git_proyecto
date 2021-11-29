const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const addComment = async (newtoken,postID,description) => {

    let response = await fetch(`${BASE_URL}/post/comment/${postID}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${newtoken}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            description: description
        })
    })
    .then(rsp => console.log(rsp))
    .catch(err => console.error(err));

    
}

export default addComment;