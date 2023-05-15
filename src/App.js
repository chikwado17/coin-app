import React from 'react';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom';
import Coin from './pages/Coin';

function App() {
  return (
    <div>
      <Navbar/>

        <>
        <Routes>
          <Route path='/' element={<Coins />} />
            <Route path='/coin' element={<Coin />}>
                <Route path=':coinId' element={<Coin/>} />
            </Route>
        </Routes>
        </>
    </div>
    
  );
}

export default App;
