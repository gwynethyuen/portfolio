import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import Education from './Education.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Extracurriculars from './Extracurriculars.js';

const Main = (props) => {
  // console.log(props);
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/extracurriculars" element={<Extracurriculars/>}></Route>
    </Routes>
  );
}

export default Main;
