import React from 'react';
import Banner from '../components/Banner';
import About from './About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ProjectSection from '../components/ProjectSection';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;