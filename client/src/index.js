import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './complate/Navbar';
import Homepages from './pages/Homepages';
import OurExprest from './pages/OurExprest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Navbar/>
 <Homepages/>
 <OurExprest/>
 </>
);


