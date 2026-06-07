import React from 'react'
import Navbar from './navbar';
import AboutMe from "./AboutMe.jsx";
import Contacts from "./Contacts.jsx";
import Experience from "./Experience.jsx";
import Projects from './Projects.jsx';
import Footer from "./Footer.jsx";
import profile from "../assets/images/myphoto.jpeg"

function Home() {
    return (
        <>
            <Navbar />
            <div id="home">
                <img src={profile} alt="profile" id="profile-picture" />
            </div>
            <AboutMe />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home;