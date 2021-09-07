import axios from 'axios';

export const Reddit = {
    posts: async (url = 'popular') => {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${url}.json`);
            const data = response.data.data.children;
            return (data)
        } catch (error) {
            throw new Error(error);
        }

    },
    subReddits: async () => {
        try {
            const ressponse = await axios.get("https://www.reddit.com/subreddits.json");
            const data = ressponse.data.data.children;
            return (data)
            
        } catch (error) {
            throw new Error(error)
            
        }

    },
    Comments: async (url) => {
        try {
            const response = await axios.get(`https://www.reddit.com${url}.json?limit=25`);
            const data = response.data[1].data.children;
            return(data)
            
        } catch (error) {
            throw new Error(error)
        }
    }
}
