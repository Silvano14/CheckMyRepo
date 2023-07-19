import { Button } from "@chakra-ui/react";
import styles from "./done.module.css";
import { useNavigate } from "react-router-dom";
import { paths } from "../App";

export const Done = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Repository mandato!</h1>
      <Button colorScheme="blue" onClick={() => navigate(paths.home)}>
        Home
      </Button>
    </div>
  );
};
