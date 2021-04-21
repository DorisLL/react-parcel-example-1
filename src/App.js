import React from "react";

const viewHeight = 500;
const viewWidth = 500;
const circleCX = 50;

const App = () => {
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

    return (
        <div>
            <p>from App rerender</p>
            <p>now for a worldview demo</p>
            <p>class on April 13</p>
            <p> blue </p>
            <div style={{ width:"50vw", height:"50vh"}}>
                <WorldviewDemo />
            </div>
        </div>
    );
};

export default App;