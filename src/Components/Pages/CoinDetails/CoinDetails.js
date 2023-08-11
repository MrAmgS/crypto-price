import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//API
import { ChartAPI } from "../../../service/API";

//Styles
import styles from "./CoinDetails.module.css";

const CoinDetails = () => {
  const params = useParams();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const getChartsData = async () => {
      setChartData(await ChartAPI(params.id));
    };
    getChartsData();
  }, []);

  return (
    <>
      <div className={styles.detailContainer}>
        <div className={styles.chart}>
          <AreaChart
            width={900}
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
      </div>
    </>
  );
};

export default CoinDetails;
