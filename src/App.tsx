import React from 'react';
import './App.css';
import NavBar from './Components/organisms/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/home/Home';
import About from './Components/pages/about/About';
import Gallery from './Components/pages/gallery/Gallery';
import AddReview from './Components/pages/addReview/addReview';
import NotFound from './Components/pages/notFound/NotFound';
import GameDetails from './Components/pages/gameDetails/GameDetails';
import EditReview from './Components/pages/editReview/EditReview';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/editReview/:id" element={<EditReview />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
