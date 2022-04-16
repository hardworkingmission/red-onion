import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BreakFast from './components/Breakfast/BreakFast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner'
import FoodContainer from'./components/FoodContainer/FoodContainer'
import Footer from './components/Footer/Footer';
import FoodDetail from './components/FoodDetail/FoodDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='/breakfast' element={<BreakFast/>}/>
            <Route path='/' element={<BreakFast/>}/>
            <Route path='/lunch' element={<Lunch/>}/>
            <Route path='/dinner' element={<Dinner/>}/>
        </Route>
        <Route path='/fooddetail/'>
          <Route path=':id' element={<FoodDetail/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
