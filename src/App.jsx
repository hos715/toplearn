import React from 'react';

import MainLayout from './components/layouts/MainLayout';
import Course from './components/course/Course';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Pages/login/Login';
import Register from './components/Pages/register/Register';
import Archive from './components/Pages/archive/archive';
import SingleCourse from './components/course/SingleCourse';


const App = () => {
   return (
      <BrowserRouter>
         <MainLayout>

            <Routes>
               <Route
                  path="/login"
                  element={<Login />}
               />
               <Route
                  path="/register"
                  element={
                     <Register />
                  }
               />
               <Route
                  path="/archive"
                  element={
                     <Archive />
                  }
               />
               <Route
                  path="/single-course"
                  element={
                     <SingleCourse />
                  }
               />
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