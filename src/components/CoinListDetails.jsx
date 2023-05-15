import React from 'react'
import './Coins.css';


const CoinListDetails = ({coinList}) => {
  return (
    <div className='coin-row'>
        <p>{coinList?.market_cap_rank}</p>

        <div className='img-symbol'>
            <img src={coinList?.image} alt="coin_image" />
            <p>{coinList?.symbol.toUpperCase()}</p>
        </div>
        <p>${coinList?.current_price.toLocaleString()}</p>
        <p>{coinList?.price_change_percentage_24h.toFixed()}%</p>
        <p className='hide-mobile'>${coinList?.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${coinList?.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinListDetails