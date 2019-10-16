import React from "react";
import { Header, Image } from "semantic-ui-react";
import Link from "next/link";
import logo from "../../../static/logo.png";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="topnav">
      <Link href="/Register">
        <div className="leftContainer">
          <Header as="h2" content="Dashboard">
            <img src={logo} alt="Logo" />
            Dashboard
          </Header>
        </div>
      </Link>
      <div className="rightContainer">
        <Link href="/Register">
          <div className="link">
            <p className="linkText">Documentation</p>
          </div>
        </Link>
        <Link href="/Register">
          <div className="link">
            <p className="linkText">Documentation</p>
          </div>
        </Link>
        <Link href="/Register">
          <div className="link">
            <p className="linkText">Documentation</p>
          </div>
        </Link>
        <Link href="/Register">
          <div className="link">
            <p className="linkText">Documentation</p>
          </div>
        </Link>
        <Link href="/Register">
          <Image circular src="../../../../static/matthew.png" size="tiny" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
