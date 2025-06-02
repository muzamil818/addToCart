import './App.css'
import LandingPage from './pages/landingPage/landingPage'
import chess from "./assets/chess.png";
import coke from "./assets/coke.png";
import mouce from "./assets/mouce.png";
import { useState } from 'react';
import ViewCart from './pages/CartPage/ViewCart';
import Nav from './components/navbar/Nav';
function App() {

    const [tab, setTab] = useState(0);

  return ( 
   <div className='container'>
     <Nav setTab={setTab}/>
   {tab === 0 && <div className='boxCon'>
    <LandingPage id="1" image={chess} title="Chess board with 32 pieces" price={3000} qt={1}/>
    <LandingPage id="2" image={coke} title="Coke tin Cold drink 500ml"  price={80} qt={1}/>
    <LandingPage id="3" image={mouce} title="Wireless mouse with 20 feet of range" price={5000} qt={1} />
   </div>}

   {tab === 1 && <div  className='boxCon'>
    <ViewCart />
    </div>}

   </div>
  )
}

export default App
