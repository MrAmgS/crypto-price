import React , {useEffect , useState }from 'react';
import { Link } from 'react-router-dom';

//API
import { HomeAPI } from '../../../service/API';

//Styles
import styles from './Home.module.css'
import ShowCoin from './ShowCoin';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
          setCoins(await HomeAPI());
        };
    
        fetchAPI();
      }, []);

    return (
        <>
            {!search ? (<ShowCoin coins={coins} />) : ""}
        </>
    );
};

export default Home;