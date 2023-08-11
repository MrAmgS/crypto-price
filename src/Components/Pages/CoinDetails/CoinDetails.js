import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

//API
import { ChartAPI, CoinDetailsAPI } from "../../../service/API";

//Styles
import styles from "./CoinDetails.module.css";

//Icons
import homeIcon from '../../../assets/home.png'

const CoinDetails = () => {
  const params = useParams();
  const [chartData, setChartData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getChartsData = async () => {
      setChartData(await ChartAPI(params.id));
    };
    getChartsData();

    const fetchAPI = async () => {
      setDetail(await CoinDetailsAPI(params.id));
      setIsLoaded(true);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className={styles.detailContainer}>
        {!isLoaded ? (
            <div className={styles.loading} >
          <div className={styles.spinner}> </div>
          Loading ...
          </div>
        ) : (
          <div className={styles.details}>
            <div className={styles.nameImage}>
              <img src={detail.image.large} alt="coin-icon" />
              <h2>{detail.name}</h2>
            </div>
            <div className={styles.price}>
              <span>Current price: </span>
              {detail.market_data.current_price.usd} $
            </div>
          </div>
        )}
        <div className={styles.chart}>
          <AreaChart
            width={700}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis
              type="number"
              domain={[(dataMin) => dataMin * 0.8, (dataMax) => dataMax * 1.1]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#000"
              fill="#219EBC"
            />
          </AreaChart>
        </div>
        {!isLoaded ? (
          ""
        ) : (
          <div className={styles.moreDescription}>
            <div
              className={
                detail.market_data.price_change_percentage_24h > 0
                  ? styles.green
                  : styles.red
              }
            >
              <h4>
                24h Change : {detail.market_data.price_change_percentage_24h} %
              </h4>
            </div>
            <div className={styles.lowHigh}>
              <h3>24h high : {detail.market_data.high_24h.usd} $</h3>
              <h3>24h Low : {detail.market_data.low_24h.usd} $</h3>
            </div>
            <h4 className={styles.marketCap}>
              Market Cap : {detail.market_data.market_cap.usd}
            </h4>
            <p>{detail.description.en}</p>
          </div>
        )}
      </div>
      <div className={styles.homeLink}>
        <Link to="/coins">
          <img src={homeIcon} alt="home" />
        </Link>
      </div>
    </>
  );
};

export default CoinDetails;
