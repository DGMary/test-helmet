import { BrowserRouter, Link  } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <>  
     <BrowserRouter>
     <nav>
        <ul>
          <li>
              <Link to={`/`}>HOME</Link>
            </li>
            <li>
              <Link to={`about`}>ABOUT</Link>
            </li>
            <li>
              <Link to={`post`}>POST</Link>
            </li>
          </ul>
        </nav>  
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
