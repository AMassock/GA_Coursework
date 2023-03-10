import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout, Header, Footer, Home, ParkDetail, ParksList } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {

return (
  <div>
    <Layout />
    <Main />
  </div>
);

}

export default App;
