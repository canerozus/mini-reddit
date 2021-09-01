import axios from 'axios';

export const Reddit = {
    posts: async (url='popular') =>{
        
        const response = await axios.get(`https://www.reddit.com/r/${url}.json`);
        const data = response.data.data.children;
        return(data)
    }
}