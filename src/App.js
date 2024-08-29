
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BannerProducts from './Components/Banner/BannerProducts';
import UpperNav from './Components/UpperNav/UpperNav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';


function App() {
  return (
    <div >
      <BrowserRouter>
      <UpperNav/>
     <Navbar/>
     <Routes>
      <Route path = '/' element ={<Shop/>}/>
      <Route path = '/lips' element ={<ShopCategory category = "lips"/>}/>
      <Route path = '/eyes' element ={<ShopCategory  category = "eyes"/>}/>
      <Route path = '/face' element ={<ShopCategory  category = "face"/>}/>
      <Route path = '/nails' element ={<ShopCategory  category = "nails"/>}/>
     <Route>

     </Route>
     
     </Routes>
     <BannerProducts/>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
