import './index.css';
import React, { createContext } from 'react';
import { useState, useContext } from 'react';
import Modal from './components/Modal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from './pages/Privacy';
import Detail from "./pages/Detail";
import NoPage from './pages/NoPage';

export const CarContext = createContext(null);

function App() {
  const [carInfo, setCarInfo] = useState({});

  return (
    <CarContext.Provider
      value={{
        carInfo,
        setCarInfo
      }}
    >
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="detail" element={<Detail />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarContext.Provider>
  );
}

export default App;