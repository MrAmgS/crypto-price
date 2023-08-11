import {Routes , Route , Navigate} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/coins' element={<Home />} />
      <Route path='/*'  element={<Navigate to='/coins' />} />  
      </Routes>
    </div>
  );
}

export default App;
