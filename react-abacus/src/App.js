import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header';
import CounterList from './CounterList';

function App() {
  const [counters, setCounters] = useState(0);

  function increaseCounters() {
    setCounters(counters + 1)
  }

  function decreaseCounters() {
    setCounters(counters - 1)
  }

  return (
    <div className='container'>
      <Header increase={increaseCounters} decrease={decreaseCounters} />
      <CounterList counters={counters} className="counter"/>
    </div>
  );
}

export default App;
