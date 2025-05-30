import './App.css'
import LandingPage from './pages/landingPage/landingPage'
import chess from "./assets/chess.png";
import coke from "./assets/coke.png";
import mouce from "./assets/mouce.png";
function App() {


  return ( 
   <div className='container'>
    <div className='boxCon'>
    <LandingPage id="1" image={chess} title="Chess board with 32 pieaces" price="Rs:3000" />
    <LandingPage id="2" image={coke} title="Coke tin Cold drink 500ml"  price="Rs:80"/>
    <LandingPage id="3" image={mouce} title="Wireless mouse with 20 feet of range" price="Rs:5000" />
   </div>
   </div>
  )
}

export default App
