const BASE_URL = 'https://posts-pw2021.herokuapp.com/api/v1'
const userServices = {
    login: async (username, password) => {
        try{
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
                
            };
            const response = await fetch(`${BASE_URL}/auth/sigin`, config);
            if(response.ok){
                const data = await response.json();
                return data;
            }
        }
        catch(err){
            console.error(error);
            return {};
        }
    }
}