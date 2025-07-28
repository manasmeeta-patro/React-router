import { Route, Routes, Link } from "react-router"
import Home from "./home";
import About from "./about";
import Login from "./login";
import PageNotFound from "./pageNotFound";
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
  {/* <Route path="/*" element={<Home/>}/>
  <Route path="/*" element={<h2>page not found - 404</h2>}/> */}
  <Route path="/*" element={<PageNotFound/>}/>
  </Routes>
  </div>
  </> 

)
}

export default App
