import './App.css';
import Dangky from './pages/Dangky';
import Dangnhap from './pages/Dangnhap';
import Home from './pages/Home';
import "./style.scss"
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Dangnhap /> */}
      {/* <Dangky /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/">
             <Route index element ={<Home />} />
             <Route path='login' element ={<Dangnhap />} />
             <Route path='register' element ={<Dangky />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
