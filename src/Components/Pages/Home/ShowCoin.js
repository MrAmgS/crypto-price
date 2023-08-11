import React from 'react';
import { Link } from 'react-router-dom';


//styles
import styles from './ShowCoins.module.css'

const ShowCoin = ({coins}) => {
    return (
        <div>
            <div className={styles.container}>
        { coins.map((coin) => (
              <Link to='/coins' >
                <div key={coin.item.id} className={styles.coin}>
                  <img src={coin.item.large} alt="coin" />
                  <h2>{coin.item.name}</h2>
                  <h3>{coin.item.symbol}</h3>
                  <p>Rank : {coin.item.market_cap_rank}</p>
                </div>
              </Link>
            ))}
      </div>
        </div>
    );
};

export default ShowCoin;