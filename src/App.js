import { Navbar } from './components/navbar/navbar';
import Posts from './components/posts/Posts';
import SubReddits from './components/subreddits/subReddits';
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='reddit-body'>
        <Posts />
        <SubReddits/>
      </div>
    </div>
  );
}

export default App;
