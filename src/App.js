import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Crew from './pages/Crew';
import Destination from './pages/Destination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/tech' element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
