import React from "react";

const SecondsCounter = ({SixDigit, FiveDigit, FourDigit, ThreeDigit, TwoDigit, OneDigit }) => {

    return (
        <div className="container">
            <div className="counter">
    
                <i className="fa-solid fa-clock mx-3 mt-4"></i>
                <div className="SixDigitValue mx-3">{SixDigit}</div>
                <div className="FiveDigitValue mx-3">{FiveDigit}</div>
                <div className="FourDigitValue mx-3">{FourDigit}</div>
                <div className="ThreeDigitValue mx-3">{ThreeDigit}</div>
                <div className="TwoDigitValue mx-3">{TwoDigit}</div>
                <div className="OneDigitValue mx-3">{OneDigit}</div>
    
            </div>
        </div>
    ); 
    
};

export default SecondsCounter;
