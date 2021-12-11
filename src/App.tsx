import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router';

import { Header } from './components/Header';
import { Popup } from './components/Popup';
import About from './pages/About';
import Home from './pages/Home';
import { setPage } from './redux/action-creators/page';
import { Page } from './redux/types/page';

const App = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPage(location.pathname as Page));
  }, [location, dispatch]);

  return (
    <>
      <Header />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
