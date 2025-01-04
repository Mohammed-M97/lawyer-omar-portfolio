import React from "react";
import aboutPic from '../assets/images/lay-1.jpg'

function AboutSection() {
    return (
        <div className="bg-dark text-light py-5" id="about">
            <div className="container">
                <div className="flex-column-reverse flex-md-row row">
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid w-75 shadow" src={aboutPic} alt="about img" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-5">About me</h2>
                        <p className="text-start">Our Law firm was established after a fruitful career and a cumulative experience in the advocacy world and legal advice of more than 10 years of advisors, the Company has been actively involved in the field of law, legal advice for government agencies and private sector, and case follow-up.</p>
                        <p className="text-start mb-5">We are distinguished by high quality and professional specialization in many areas, which are litigation, pleading, and providing legal advice to companies and individuals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;