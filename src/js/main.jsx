import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './SecondsCounter';

let counter = 0

const root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {

        const SixDigitValue = Math.floor(counter / 100000) % 10;
        const FiveDigitValue = Math.floor(counter / 10000) % 10;
        const FourDigitValue = Math.floor(counter / 1000) % 10;
        const ThreeDigitValue = Math.floor(counter / 100) % 10;
        const TwoDigitValue = Math.floor(counter / 10) % 10;
        const OneDigitValue = Math.floor(counter / 1) % 10;
        counter++;

        root.render(
            <SecondsCounter
              SixDigit={SixDigitValue}
              FiveDigit={FiveDigitValue}
              FourDigit={FourDigitValue}
              ThreeDigit={ThreeDigitValue}
              TwoDigit={TwoDigitValue}
              OneDigit={OneDigitValue}
            />
          );
        

}, 1000);

