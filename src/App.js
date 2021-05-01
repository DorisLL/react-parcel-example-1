import React from "react";
import { useFetch } from "./hooks/useFetch";
import { A2 } from "./A2";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { extent, max, min } from "d3-array";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  // const [data, loading] = useFetch(
  //     "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
  // )
  // console.log("from hook", loading, data);
// csv(
  //     "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
  // )
  // fetch(
  //     "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
  // )
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/assignment2">Assignment2</Link></li>
          <li><Link to="/assignment3">Assignment3</Link></li>
            <li><Link to="/assignment4">Assignment4</Link></li>
        </ul>
        <hr />
          <Switch>
            <Route exact path="/"><Dashboard /></Route>
            <Route exact path="/assignment2"><Assignment2 /></Route>
            <Route path="/assignment3"><Assignment3 /></Route>
            <Route path="/assignment4"><Assignment4 /></Route>
          </Switch>
      </div>
    </Router>
  );
}

  

  // You can think of these components as "pages"
  // in your app.
  
  function Dashboard() {
    const [data, loading] = useFetch(
      "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
    )

    const [minValueOfAdoOutSchool, maxValueOfAdoOutSchool] = extent(data, (d) => {
      return +d['Adolescents out of school (% of lower secondary school age)'];
    })
    console.log(minValueOfAdoOutSchool, maxValueOfAdoOutSchool)

    // const maxValueOfAdoOutSchool = max(
    //   data.map((data) => {
    //     return +data['Adolescents out of school (% of lower secondary school age)'];
    //   })
    // )
    // const minValueOfAdoOutSchool = min(
    //   data.map((data) => {
    //     return +data['Adolescents out of school (% of lower secondary school age)'];
    //   })
    // )
    // console.log(maxValueOfAdoOutSchool, minValueOfAdoOutSchool) // 177.3314666748046 0

    const size = 500;
    const margin = 20;
    const axisTextAlignmentFactor = 3;
    const yScale = scaleLinear()
      .domain([minValueOfAdoOutSchool, maxValueOfAdoOutSchool]) // unit: km
      .range([size, size - 250]); // unit: pixels

  console.log("from hook", loading, data);
    return (
      <div>
        <h1>Lecture Example 0406 - 0420</h1>
        <p>{loading && "Loading Data!"} </p>
        <h2>Data: The World Bank Data, 1960-2017</h2>
        <p>The World Bank has tracked global human development by indicators education.</p>
        <p>URL: https://github.com/ZeningQu/World-Bank-Data-by-Indicators </p>
      
        <h3>Scales in D3</h3>
        <svg width={size} height={size} style={{ border: "1px solid black" }}>
          <text
            x={size / 2 - 12}
            textAnchor="end"
            y={size - margin + axisTextAlignmentFactor}
            style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
          >0</text>

          <text
            x={size / 2 - 12}
            textAnchor="end"
            y={size - margin - 100 + axisTextAlignmentFactor}
            style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
          >100</text>
          <line
            x1={size / 2 - 10}
            y1={size - margin - 100}
            x2={size / 2 - 5}
            y2={size - margin - 100}
            stroke={"black"}
          />
          <line
            x1={size / 2 - 10}
            y1={size - margin}
            x2={size / 2 - 5}
            y2={size - margin}
            stroke={"black"}
          />
          {data.slice(0,1000).map((data, index) => {
            //console.log('drawing circle');
            const highlight = data['Country Code'] === "AUS";
            return (
              <line 
                key={index} 
                x1 = {size / 2}
                y1 = {yScale(data['Adolescents out of school (% of lower secondary school age)'])}
                x2 = {size / 2 + 20}
                y2 = {yScale(data['Adolescents out of school (% of lower secondary school age)'])}
                stroke={highlight ? "red" : "steelblue"}
                strokeOpacity={highlight ? 1 : 0.1}
              />
            );
          })}
        </svg>
        
        <h3>Scatterplot</h3>
        <svg width={size} height={size} style={{ border: "1px solid black" }}>
          {data.slice(0, 1000).map((data, index) => {
            const highlight = data['Country Code'] === "AUS";
            return (
              <circle
                key={index}
                cx={100 - data['Adolescents out of school (% of lower secondary school age)']}
                cy={size - margin - data['Adolescents out of school (% of lower secondary school age)']}
                r="3"
                fill="none"
                stroke={highlight ? "red" : "steelblue"}
                strokeOpacity="0.2"
              />
            );
          })}
        </svg>

        <h3>Barcode Plot</h3>
        <svg width={size} height={size} style={{ border: "1px solid black" }}>
          <text
            x={size / 2 - 12}
            textAnchor="end"
            y={size - margin + axisTextAlignmentFactor}
            style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
          >0</text>

          <text
            x={size / 2 - 12}
            textAnchor="end"
            y={size - margin - 100 + axisTextAlignmentFactor}
            style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif" }}
          >100</text>
          <line
            x1={size / 2 - 10}
            y1={size - margin - 100}
            x2={size / 2 - 5}
            y2={size - margin - 100}
            stroke={"black"}
          />
          {/* <line
            x1={size / 2 - 10}
            y1={size - margin}
            x2={size / 2 - 5}
            y2={size - margin}
            stroke={"black"}
          /> */}
          {data.slice(0,1000).map((data, index) => {
            //console.log('drawing circle');
            const highlight = data['Country Code'] === "AUS";
            return (
              <line 
                key={index} 
                x1 = {size / 2}
                y1 = {size - margin - data['Adolescents out of school (% of lower secondary school age)']}
                x2 = {size / 2 + 20}
                y2 = {size - margin - data['Adolescents out of school (% of lower secondary school age)']}
                stroke={highlight ? "red" : "steelblue"}
                strokeOpacity={highlight ? 1 : 0.1}
              />
            );
          })}
        </svg>


        <h3>Rendering Circles: Example 2</h3>
        <svg 
          width={size} 
          height={size}  
          style={{ border: "1px solid black" }}>
          {data.slice(0,1000).map((data, index) => {
            //console.log('drawing circle');
            const highlight = data['Country Name'] === "China";
            return (
              <circle 
                key={index} 
                cx={highlight ? size / 2 : size / 2 +20} 
                cy={size - margin - data['Adolescents out of school (% of lower secondary school age)']}  
                // cy={size - margin - 5}
                r="3" 
                fill="none"
                stroke={
                  data['Country Name'] ==="China" 
                    ? "red"
                    : "steelblue"
                }
                strokeOpacity="0.2"
                // opacity=".2"
              />
            );
          })}
        </svg> 
      </div>
    );
  }
  

  function Assignment2() {
    const Assignment2 = A2();
    return Assignment2
  }
  

  function Assignment3() {
    return (
      <div>
        <h2>Assignment3</h2>
      </div>
    );
  }
  
  function Assignment4() {
    return (
      <div>
        <h2>Assignment4</h2>
      </div>
    );
  }

// const App = () => {
//     csv(
//         "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
//     )
//     // fetch(
//     //     "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
//     // )
//     //     .then((response) => response.json())
//     .then((data) => console.log(data));
//     return (
//         <div>
//             <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
//             <p>Data!</p>
//         </div>
//     );
// }

// export default App;




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