// CSS styling & importing CSS files in React JS


import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name = "Piyush";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.google.com/";


ReactDOM.render(
    <>
        <h1 className="heading"> Hello, My name is {name}</h1>,
        <div className="img_div">
        <img src={img1} alt="randomImages" />
        <img src={img2} alt="randomImages" />
        <a href={links} target="_hello">
            <img src={img3} alt="randomImages" />
        </a>
        </div>
    </>,
    document.getElementById("root")
);
