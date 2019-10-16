import React from "react";
import { Header } from "semantic-ui-react";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "../../../static/logo.png";
import "./styles.css";

const Card = () => {
  return (
    <motion.div
      className="container"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40
      }}
      whileTap={{
        scale: 0.8,
        borderRadius: "100%"
      }}
      whileHover={{ scale: 1.1 }}
    >
      <Link href="/Login">
        <a href="/Login">
          <Header as="h2">
            <img src={logo} alt="Logo" />
            Welcome
          </Header>
        </a>
      </Link>
    </motion.div>
  );
};

export default Card;
