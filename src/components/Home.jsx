import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx'
import Container from '../components/container.jsx'
import Details from '../components/details.jsx'
function Home() {
  return (
    <div>
        <div><Header/></div>
        <div><Container/></div>
        <div><Details/></div>
        <Link to={Details}>Go to About</Link>
    </div>

  )
}

export default Home