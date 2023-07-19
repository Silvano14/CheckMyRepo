import React, { useContext } from "react";
import { DataStore, paths } from "../App";
import { Header } from "./shared/Header";
import { Input } from "./shared/Input";
import styles from "./user.module.css";

export const Repository = () => {
  const { repository } = useContext(DataStore);

  return (
    <div className={styles.container}>
      <Header
        label={"Repository"}
        backPath={paths.user}
        forwardPath={paths.sender}
      />
      <Input
        placeholder={"Scrivi il nome del repo di GitHub"}
        onChange={(val) => {
          repository.setRepository(val);
        }}
        value={repository.value}
      />
    </div>
  );
};
