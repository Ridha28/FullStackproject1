import React from 'react';
import '../assets/styles/Home.css';
import Carousel from "./Carousel";
import Footer from "./Footer";
function Home() {
    return (
        <div className="home">
           <Carousel />
           <div className="content">
               <h2>What is a Tax Calculator?</h2>
               <p>
                   A tax calculator is a tool designed to help you estimate your tax liability based on your income, deductions, and credits. It simplifies the process of calculating the amount of tax you owe to the government by taking into account various factors and applying the relevant tax rates.
               </p>
               <h2>Why Use a Tax Calculator?</h2>
               <ul>
                   <li><strong>Accuracy:</strong> Ensure that your tax calculations are accurate and avoid any mistakes that could lead to penalties.</li>
                   <li><strong>Time-Saving:</strong> Quickly estimate your taxes without having to manually perform complex calculations.</li>
                   <li><strong>Planning:</strong> Better plan your finances by understanding your tax obligations in advance.</li>
                   <li><strong>Maximize Deductions:</strong> Identify all the deductions and credits you are eligible for to reduce your tax liability.</li>
                   <li><strong>Peace of Mind:</strong> Gain confidence in your tax calculations and avoid the stress of uncertainty.</li>
               </ul>
           </div>
           <Footer />
        </div>
    );
}

export default Home;







