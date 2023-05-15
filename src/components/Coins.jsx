import axios from 'axios';
import React, { useState, useEffect } from 'react'
import CoinsList from './CoinsList';

import './Coins.css';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
      .then(res => {
       setCoins(res.data)
      }).catch(error => console.log(error))
    },  []);

  return (
    <div>
        <CoinsList coins={coins} />
    </div>
  )
}

export default Coins