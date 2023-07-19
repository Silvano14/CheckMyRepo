import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../App";
import styles from "./home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Benvenuto</h1>
      <h2 className={styles.text}>
        {`Nelle prossime schermate verrà chiesto di inserire
username e nome repository del tuo progetto GitHub`}
      </h2>
      <Button
        colorScheme="blue"
        className={styles.button}
        onClick={() => navigate(`../${paths.user}`, { replace: true })}
        rightIcon={<ArrowForwardIcon />}
      >
        Procediamo!
      </Button>
    </div>
  );
};
