import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import MenPage from './stores/pages/MenPage';
import AcPage from './stores/pages/AcPage';
import FurniturePage from './stores/pages/FurniturePage';
import KitchenPage from './stores/pages/KitchenPage';
import BooksPage from './stores/pages/BooksPage';
import MobileSingle from './stores/singles/MobileSingle';
import ComputerSingle from './stores/singles/ComputerSingle';
import MenSingle from './stores/singles/MenSingle';
import FurnitureSingle from './stores/singles/FurnitureSingle';
import KitchenSingle from './stores/singles/KitchenSingle';
import BookSingle from './stores/singles/BookSingle';
import AcSingle from './stores/singles/AcSingle';
import UserCart from './stores/UserCart';


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element = {<MobilePage/>}></Route>
        <Route path='/computers' element = {<ComputerPage/>} />
        <Route path='/men' element = {<MenPage />} />
        <Route path='/ac' element = {<AcPage />} />
        <Route path='/furniture' element = {<FurniturePage/>} />
        <Route path='/kitchen' element = {<KitchenPage/>} />
        <Route path='/books' element = {<BooksPage/>} />
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
        <Route path='/computers/:id' element = {<ComputerSingle/>} />
        <Route path='/men/:id' element = {<MenSingle/>} />
        <Route path='/furniture/:id' element = {<FurnitureSingle/>}/>
        <Route path='/kitchen/:id' element = {<KitchenSingle/>}/>
        <Route path='/books/:id' element = {<BookSingle/>}/>
        <Route path='/ac/:id' element = {<AcSingle/>}/>
        <Route path='/cart' element = {<UserCart/>} />
       </Routes>

      {/* <LandingPage /> */}
    </div>
  );
}

export default App;