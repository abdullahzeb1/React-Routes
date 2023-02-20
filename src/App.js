import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import OurPeople from './Components/OurPeople';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Pricing from './Components/Pricing';
import ProjectsAll from './Components/ProjectsAll';
import ProjectsSingle from './Components/ProjectsSingle';
import ServicesAll from './Components/ServicesAll';
import ServicesSingle from './Components/ServicesSingle';
import Typography from './Components/Typography';
import F404 from './Components/F404';
import NewsLeftSidebar from './Components/NewsLeftSidebar';
import NewsRightSidebar from './Components/NewsRightSidebar';
import NewsSingle from './Components/NewsSingle';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ourpeople' element={<OurPeople />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/projects-all' element={<ProjectsAll />} />
          <Route path='/projects-single' element={<ProjectsSingle />} />
          <Route path='/services' element={<ServicesAll />} />
          <Route path='/service-single' element={<ServicesSingle />} />
          <Route path='/typography' element={<Typography />} />
          <Route path='/f404' element={<F404 />} />
          <Route path='/news-left-sidebar' element={<NewsLeftSidebar />} />
          <Route path='/news-right-sidebar' element={<NewsRightSidebar />} />
          <Route path='/news-single' element={<NewsSingle />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
