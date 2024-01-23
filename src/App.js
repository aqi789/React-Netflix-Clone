import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row";
import {
  originals,
  action,
  comedy,
  horror,
  romance,
  documentary,
} from "./urls";

function App() {
  return (

    <>
    <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        url={originals}
      />
      <Row title="Action Movies" isSmall url={action} />
      <Row title="Comedy" isSmall url={comedy} />
      <Row title="Horror" isSmall url={horror} />
      <Row title="Romance" isSmall url={romance} />
      <Row title="Documentary" isSmall url={documentary} />
    </>
  );
}

export default App;
