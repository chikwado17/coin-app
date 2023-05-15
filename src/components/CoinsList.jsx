import React from 'react'
import CoinListDetails from './CoinListDetails';

import { Link } from 'react-router-dom';

import './Coins.css';

const CoinsList = ({coins}) => {

  return (

    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>
        </div>

        {coins && coins.map(coinList => (
            <Link to={`/coin/${coinList.id}`} key={coinList.id}>
                <CoinListDetails coinList={coinList} />
            </Link>
        ))}
    </div>
  )
}

export default CoinsList