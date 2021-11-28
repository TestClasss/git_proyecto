const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const useupdate = async (title, description, image, newtoken, id) => {
    
    const response = await fetch(`${BASE_URL}/post/${id}`, {
        method: "PUT",
        headers: {
        
            Authorization: `Bearer ${newtoken}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            description: description,
            image: image
        })
    });

    if (response.ok) {
        console.log(response);
        const data = await response.json();
        return data;
        
        
    }
    else {
        console.log(response);
        return {};
    
        
        }
    

   
}

export default useupdate;
