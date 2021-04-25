import React from "react";
import { csv } from "d3-fetch";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// const viewHeight = 500;
// const viewWidth = 500;
// const circleCX = 50;

const App = () => {
    csv(
        "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
    )
    // fetch(
    //     "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
    // )
    //     .then((response) => response.json())
        .then((data) => console.log(data));
    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
            <p>Data!</p>
        </div>
    );
}

export default App;




    // return <div>hello world from react</div>; 
    // https://developer.mozilla.org/en-US/docs/Web/SVG
    // return 里面： <rect x = {200} y = {100} width="10" height="10" fill="rgb(200,200,200)"/>
    // 在一级里，别用颜色
    
// // 0406 LAB EXAMPLE
//     return <svg style={{
//         border: "1px solid lightgrey", 
//         width: viewHeight,
//         height: viewHeight }}>
//     <circle cx={circleCX} cy={50} r="5"/>
//     <rect x = {200} y = {100} width="10" height="10" fill="rgb(230,230,230)"/>
//     <rect x = {212} y = {100} width="10" height="10" fill="rgb(230,230,230)"/>
//     <rect x = {224} y = {100} width="10" height="10" fill="rgb(230,230,230)"/>
//     <rect x = {236} y = {100} width="10" height="10" fill="rgb(230,230,230)"/>
//     <rect x = {248} y = {100} width="10" height="10" />
//     <line x1="20" y1={viewHeight - 20} x2={150} y2={100} stroke="black"> </line>
//     <text x="20" y="35" style={{font: "italic 16px sans-serif"}}>
//         Price history of 100 randomly selected Pokemon cards
//     </text>
// </svg> 