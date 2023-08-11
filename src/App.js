import {Routes , Route , Navigate} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import CoinDetails from './Components/Pages/CoinDetails/CoinDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/coins' element={<Home />} />
      <Route path='/coins/:id' element={<CoinDetails />} />
      <Route path='/*'  element={<Navigate to='/coins' />} />  
      </Routes>
    </div>
  );
}

export default App;
