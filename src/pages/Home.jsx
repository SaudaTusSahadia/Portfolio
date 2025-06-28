import React from 'react';
import Banner from '../components/Banner';
import About from './About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ProjectSection from '../components/ProjectSection';
import Contact from './Contact';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <ProjectSection></ProjectSection>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;