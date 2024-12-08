import react from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Manu from './components/Manu';
import Footer from './components/Footer';

const router= createBrowserRouter([
{
  path:"/",
  element:<div>
    <Navbar />
    <Home />
    <Footer/>
  </div>
},
{
  path:"/about",
  element:<div>
  <Navbar />
  <About />
  <Footer/>
</div>
},
{
  path:"/contact",
  element:<div>
  <Navbar />
  <Contact />
  <Footer/>
</div>
},
{
  path:"/manu",
  element:<div>
  <Navbar />
  <Manu />
  <Footer/>
</div>
},
]);

function App() {
  

  return (
    <>
    <div className='App'>
       <RouterProvider router={router}/>
    </div>     
    </>
  )
}

export default App
