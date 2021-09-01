
import { Reddit } from './api/reddit';
import { Navbar } from './components/navbar/navbar';
import Posts from './components/posts/Posts';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Posts/>
    </div>
  );
}

export default App;
