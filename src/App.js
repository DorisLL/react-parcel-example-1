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

// const App = () => {
export default function App() {
    csv(
        "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
    )
    // fetch(
    //     "https://raw.githubusercontent.com/DorisLL/react-parcel-example-1/main/data/education.csv"
    // )
    //     .then((response) => response.json())
        .then((data) => console.log(data));
    // return (
    //     <div>
    //         <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
    //         <p>Data!</p>
    //     </div>
    // );
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
    
            <hr />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }

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