import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataStore, paths } from "../App";
import styles from "./sender.module.css";
import { Header } from "./shared/Header";
import { Button } from "@chakra-ui/react";
export const Sender = () => {
  const navigate = useNavigate();
  const { user, repository } = useContext(DataStore);

  return (
    <div className={styles.container}>
      <Header
        label="Controllo dati inseriti"
        backPath={paths.repository}
        forwardPath={paths.done}
        showForwardButton={false}
      />
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.div} to={`/${paths.user}`}>
            /<p className={styles.p}>{user.value}</p>
          </div>

          <div className={styles.div} to={`/${paths.repository}`}>
            /<p className={styles.p}>{repository.value}</p>
          </div>
        </div>
      </div>
      <Button
        colorScheme="orange"
        onClick={() =>
          sendData(
            navigate,
            `repoUrl: https://github.com/${user.value}/${repository.value}, sender: ${user.value}`
          )
        }
      >
        Invia!
      </Button>
    </div>
  );
};

const config = {
  url: "https://pushmore.io/webhook/TkF1Y6Am5zz4vt3kVmwpxHjN",
  method: "POST",
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  credentials: "same-origin",
};

const sendData = (
  navigate,
  data = "repoUrl: 'https://github.com/Silvano14/CheckMyRepo', sender: 'Silvano14'"
) =>
  axios
    .post(config.url, data)
    .then((result) => {
      if (result.status === 200)
        navigate(`../${paths.done}`, { replace: true });
    })
    .catch((err) => console.log(err));
