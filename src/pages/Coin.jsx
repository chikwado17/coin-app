import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Coin.css';

const Coin = () => {

    const params = useParams();
    const [coinDetails, setCoinDetails] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
        .then(res => {
            setCoinDetails(res.data)
            // console.log(res.data)
           }).catch(error => console.log(error))

           // eslint-disable-next-line
    }, [])


  return (
    <div>
        <div className='coin-container'>
            <div className='content'>
                <h1>{coinDetails?.name}</h1>
            </div>

            <div className='content'>
                <div className='rank'> 
                    <span className='rank-btn'>Rank # {coinDetails?.market_cap_rank}</span>
                </div>

                <div className="info">
                    <div className="coin-heading">
                        {coinDetails.image ? <img src={coinDetails.image.small} alt='' /> : null}
                    </div>
                    <p>{coinDetails?.name}</p>
                    <p>{coinDetails?.symbol}/USD</p>
                </div>
                <div className='coin-price'>
                    <h1>${coinDetails?.market_data?.current_price?.usd.toLocaleString()}</h1>
                </div>
            </div>

            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{coinDetails?.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(1)}%</td>
                            <td>{coinDetails?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(1)}%</td>
                            <td>{coinDetails?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(1)}%</td>
                            <td>{coinDetails?.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(1)}%</td>
                            <td>{coinDetails?.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(1)}%</td>
                            <td>{coinDetails?.market_data?.price_change_percentage_1yr_in_currency?.usd.toFixed(1)}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='content'>
                <div className='stats'>
                    <div className='left'>
                        <div className='row'>
                            <h4>24 Hour Low</h4>
                            <p>${coinDetails?.market_data?.low_24h?.usd.toLocaleString()}</p>
                        </div>
                        <div className='row'>
                            <h4>24 Hour High</h4>
                            <p>${coinDetails?.market_data?.high_24h?.usd.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className='right'>

                        <div className='row'>
                            <h4>Market Cap</h4>
                            <p>${coinDetails?.market_data?.market_cap?.usd.toLocaleString()}</p>
                        </div>
                        <div className='row'>
                            <h4>2Circulating Supply</h4>
                            <p>{coinDetails?.market_data?.circulating_supply}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='content'>
                <div className="about">
                    <h3>About</h3>
                    <p>{coinDetails?.description?.en}</p>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Coin