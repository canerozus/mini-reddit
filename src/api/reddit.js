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
            const ressponse = await axios.get("https://www.reddit.com/subreddits.json?limit=20");
            const data = ressponse.data.data.children;
            return (data)
            
        } catch (error) {
            throw new Error(error)
            
        }

    }
}
Reddit.posts();
Reddit.subReddits();
