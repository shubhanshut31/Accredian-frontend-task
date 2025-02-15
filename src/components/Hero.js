import React from "react";
import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero">
            <h1>Let’s Learn & Earn</h1>
            <p>Get a chance to win up to <span className="highlight">Rs. 15,000</span></p>
            <button className="btn-primary">Refer Now</button>
        </section>
    );
}

export default Hero;