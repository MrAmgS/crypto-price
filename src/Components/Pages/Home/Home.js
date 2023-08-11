import React, { useEffect, useState } from "react";

//API
import { HomeAPI, SearchedAPI } from "../../../service/API";

//Icons
import searchIcon from "../../../assets/Search.png";

//Styles
import styles from "./Home.module.css";
import ShowCoin from "./ShowCoin";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchCoin, setSearchCoin] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await HomeAPI());
    };

    fetchAPI();
  }, []);

  const changeHandler = (e) => {
    if (e.target.value.length < 3) {
      return;
    } else {
      setSearchCoin(e.target.value);
    }
  };

  const searchHandler = async () => {
    if (searchCoin.length < 2) {
      setIsSearch(false);
      setSearchResult([]);
      return;
    } else {
      setSearchResult(await SearchedAPI(searchCoin));
      setIsSearch(true);
      return;
    }
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search Coin . . ."
          onChange={changeHandler}
        />
        <button onClick={searchHandler}>
          <img src={searchIcon} alt="icon" />
        </button>
      </div>
      {!isSearch ? (
        <ShowCoin coins={coins} isSearch={isSearch} />
      ) : (
        <ShowCoin coins={searchResult} isSearch={isSearch} />
      )}
    </>
  );
};

export default Home;
