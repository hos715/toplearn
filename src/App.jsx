import React from 'react';

import MainLayout from './components/layouts/MainLayout';
import Course from './components/course/Course';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';


const App = () => {
   return (
      <BrowserRouter>
         <MainLayout>

            <Routes>
               <Route path="/login" element={<Login />} />
               <Route
                  path="/"
                  element={
                     <Course />
                  }
               />
            </Routes>
         </MainLayout>
      </BrowserRouter>
   );
}

export default App;