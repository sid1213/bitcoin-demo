
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './component/Header'
import Coins from './component/Coins'
import CoinDetails from './component/CoinDetails'
import Exchanges from './component/Exchanges'
import Home from './component/Home'
function App() {
  return (
    <Router >
      <Header/>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1> }/>
      </Routes>
    </Router>
  );
}

export default App;
