import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header'

const About = () => {
    const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้าแบบโปรแกรม
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => navigate('/')}>Go Back to Home</button>
        </div>
    );
};

export default About