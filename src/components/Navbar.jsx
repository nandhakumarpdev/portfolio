import { useState } from "react";
import "../assets/css/navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <h3 >Portfolio</h3>
                </div>
                <button
                    type="button"
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <a href="#" className="nav-item">Home</a>
                    <a href="#AboutMe" className="nav-item">About</a>
                    <a href="#Experience" className="nav-item">Experience</a>
                    <a href="#Projects" className="nav-item">Projects</a>
                    <a href="#Contacts" className="nav-item">Contacts</a>
                </div>
            </nav>
        </>
    );
}