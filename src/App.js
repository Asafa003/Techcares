import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Overview from  './pages/Overview';
import Patients from './pages/Patients';
import Schedule from './pages/Schedule';
import Message from './pages/Message';   
import Transactions from './pages/Transaction';
// import './styles.css';

const App = () => {
  return (
    <Router>
     <NavBar />
     <div className="">
      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/overview" page={Overview} element={<Overview />} />
        <Route path="/schedule" page={Schedule} element={<Schedule />} />
        <Route path="/message" page={Message}  element={<Message />}/>
        <Route path="/transactions" page={Transactions} element={<Transactions />} />
      </Routes>
     </div>
  </Router>
  );
};

export default App;
