import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/home/Home';
import UserCard from './components/userCard/UserCard';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route path="/user/:id" element={<UserCard data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
