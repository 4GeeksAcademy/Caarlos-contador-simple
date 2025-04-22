import React from "react";


const SecondsCounter = () => {


    const SixDigit = document.querySelector('.SixDigit');
    const FiveDigit = document.querySelector('.FiveDigit');
    const FourDigit = document.querySelector('.FourDigit');
    const ThreeDigit = document.querySelector('.ThreeDigit');
    const TwoDigit = document.querySelector('.TwoDigit');
    const OneDigit = document.querySelector('.OneDigit');

    let counter = 0;

const IncrementCrono = () => {

        const SixDigitV = Math.floor(counter / 100000)
        const FiveDigitV = Math.floor(counter / 10000)
        const FourDigitV = Math.floor(counter / 1000)
        const ThreeDigitV = Math.floot(counter / 100)
        const TwoDigitV = Math.floor(counter / 10)
        const OneDigitV = Math.floor(counter / 1)
        counter++;

        SixDigit.textContent = SixDigitV;
        FiveDigit.textContent = FiveDigitV;
        FourDigit.textContent = FourDigitV;
        ThreeDigit.textContent = ThreeDigitV;
        TwoDigit.textContent = TwoDigitV;
        OneDigit.textContent = OneDigitV;


    };



    return (
        <div className="container">
            <div className="counter">

                <i className="fa-solid fa-clock mx-3 mt-4"></i>
                <div className="SixDigit mx-3">0</div>
                <div className="FiveDigit mx-3">0</div>
                <div className="FourDigit mx-3">0</div>
                <div className="ThreeDigit mx-3">0</div>
                <div className="TwoDigit mx-3">0</div>
                <div className="OneDigit mx-3">0</div>

            </div>
        </div>

    );
};


setInterval(IncrementCrono, 1000);



export default SecondsCounter;
