import React from "react";
import NavBar from "../../src/components/NavBar";
import { MainContainer } from "../../src/styledComponents/container";
import Card from "../../src/components/Card";
import "./styles.css";

const n = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Home = () => (
  <MainContainer>
    <NavBar />
    <div className="mainContainer">
      <div className="headingContainer">
        <p className="headingDescriptionText">Lorem Ipsum is simply dummy</p>
        <h1 className="headingText">Welcome To Login</h1>
      </div>
      <div className="cardsContainer">
        {n.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  </MainContainer>
);
export default Home;
