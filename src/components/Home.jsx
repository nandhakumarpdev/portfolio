import React from 'react'
import Navbar from './navbar';
import AboutMe from "./AboutMe.jsx";
import Contacts from "./Contacts.jsx";
import Experience from "./Experience.jsx";
import Projects from './Projects.jsx';
import Footer from "./Footer.jsx";

function Home() {
    return (
        <>
            <Navbar />
            <AboutMe />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home;