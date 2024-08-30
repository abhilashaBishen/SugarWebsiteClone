
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BannerProducts from './Components/Banner/BannerProducts';
import UpperNav from './Components/UpperNav/UpperNav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

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
      <Route path = '/product' element = {<Product/>}/>
      <Route path = ':productId' element = {<Product/>}/>
    
     <Route path = '/cart' element ={<Cart/>}/>

     <Route path = '/login' element ={<LoginSignup/>}/>
   </Routes>
     <BannerProducts />
      </BrowserRouter>
    

    </div>
  );
}

export default App;
