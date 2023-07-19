import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./NewHome.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { paths } from "../App";

export const NewHome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Benvenuto</h1>
      <h2 className={styles.text}>
        {`Nelle prossime schermate ti verrà chiesto di inserire
username e nome repository del tuo progetto github`}
      </h2>
      <Button
        colorScheme="green"
        className={styles.button}
        onClick={() => navigate(`../${paths.user}`, { replace: true })}
        rightIcon={<ArrowForwardIcon />}
      >
        Procediamo!
      </Button>
    </div>
  );
};
