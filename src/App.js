
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import {io} from 'socket.io-client';


const initSocket = ()=>{
  const options = {
    'force new connection': true,
    reconnectionAttempt: 'Infinity',
    timeout: 10000,
    transports: ['websocket']
  };

  return io(process.env.REACT_APP_BACKEND_URL,options);
}

function toggleBtn(){
  let toggleBtn = document.querySelector('.toggleBtn');
   let nav = document.querySelector('.nav-links');
   nav.classList.toggle('active');
 }




function App() {
  return (
    
    <Router>
   <Navbar toggle={toggleBtn}/>
   <Routes>
<Route path='/' exact element={<Landing/>}/>
<Route path='/about' exact element={<About/>}/>
<Route path='/skills' exact element={<Skills/>}/>
<Route path='/dashboardnishan123' exact element={<Dashboard/>}/>
<Route path='/contact' exact element={<Contact/>} socket={initSocket}/>

   </Routes>
   <Footer/>
   </Router>
   
  );
}




export default App;


