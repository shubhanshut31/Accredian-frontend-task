import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReferralSteps from "./components/ReferralSteps";
import ReferralBenefits from "./components/ReferralBenefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Hero />
            <ReferralSteps />
            <ReferralBenefits />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
