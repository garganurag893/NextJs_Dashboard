import React, { PureComponent } from "react";
import NavBar from "../../src/components/NavBar";
import Card from "../../src/components/Card";
import "./styles.css";

class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      n: [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  }

  render() {
    const { state } = this;
    return (
      <>
        <NavBar />
        <div className="mainContainer">
          <div className="headingContainer">
            <p className="headingDescriptionText">
              Lorem Ipsum is simply dummy
            </p>
            <h1 className="headingText">Welcome To Dashboard</h1>
          </div>
          <div className="cardsContainer">
            {state.n.map(() => {
              return <Card />;
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Home;
