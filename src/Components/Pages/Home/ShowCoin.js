import React from 'react';
import { Link } from 'react-router-dom';


//styles
import styles from './ShowCoins.module.css'

const ShowCoin = ({coins , isSearch}) => {
    if (!isSearch) {

        return (
            <div>
                <div className={styles.container}>
            { coins.map((coin) => (
                  <Link to={`/coins/${coin.item.id}`}  key={coin.item.id} >
                    <div className={styles.coin}>
                      <img src={coin.item.large} alt="coin" />
                      <h2>{coin.item.name}</h2>
                      <h3>{coin.item.symbol}</h3>
                      {coin.item.market_cap_rank === null ? " " :(<p>Rank : {coin.item.market_cap_rank}</p>)}
                    </div>
                  </Link>
                ))}
          </div>
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
            {coins.map((coin) => (
                <Link to={`/coins/${coin.id}`} key={coin.id} >
                  <div className={styles.coin}>
                    <img src={coin.large} alt="coin" />
                    <h2>{coin.name}</h2>
                    <h3>{coin.symbol}</h3>
                    {coin.market_cap_rank === null ? " " :(<p>Rank : {coin.market_cap_rank}</p>)}
                  </div>
                </Link>
              ))}
                </div>
        )
    }
};

export default ShowCoin;