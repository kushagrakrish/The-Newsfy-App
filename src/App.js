import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails";
const App = () => {
  return (
    <div className=''>
      <>
        <h1 className='text-center text-3xl pt-12 pb-10 font-semibold '>
          The <span className='border-b-orange-500 border-b-4'>Newsfy</span> App
        </h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsCard />} />
          <Route path='/newsDetails/:newsId' element={<CardDetails />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
