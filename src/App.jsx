import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect } from 'react';
import Home from './component/page/Home';
import Blog from './component/page/Blog';
import About from './component/page/About';
import Detail from './component/page/Detail';
import ScrollToTop from './component/common/ScrollToTop'

import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const ConText = createContext()

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/me' element={<About />} />
            <Route path='/post/:id/:slug' element={<Detail />} />
            <Route path='/*' element={<h2 className='font-bold m-4 text-6xl'>404 NOT FOUND</h2>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
