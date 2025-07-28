import { Route, Routes, Link } from "react-router"
import Home from "./home";
import About from "./about";
import Login from "./login";
import "./app.css";

function App() {
  return( 
    
  <>
  <div className='container'>
    
   <Link className="link" to= "/"> Home </Link>
   <Link className="link" to="/login">Login</Link>
   <Link className="link" to="/about">About </Link>
   </div>
   <br/><br/>
   <div className="routeClass">
  <Routes>
   <Route path="/about" element={<About/>}/>
   <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </div>
  </> 

)
}

export default App
