import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MainLayout from './components/layouts/MainLayout';
import Course from './components/course/Course';
import Login from './components/Pages/login/Login';
import Register from './components/Pages/register/Register';
import Archive from './components/Pages/archive/archive';
import SingleCourse from './components/course/SingleCourse';


const App = () => {
   useEffect(()=>{
      require('./utils/script');
   },[])
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
         <ToastContainer />
      </BrowserRouter>
   );
}

export default App;