import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './homepage/HomePage/homepage'

export default (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
  </BrowserRouter>
)