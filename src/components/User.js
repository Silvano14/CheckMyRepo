import { useContext } from "react";
import { DataStore, paths } from "../App";
import { Header } from "./shared/Header";
import { Input } from "./shared/Input";
import styles from "./user.module.css";

export const User = () => {
  const { user } = useContext(DataStore);

  return (
    <div className={styles.container}>
      <Header
        label={"Username"}
        backPath={paths.home}
        forwardPath={paths.repository}
      />
      <Input
        placeholder={"Scrivi lo username di GitHub"}
        onChange={(val) => user.setUser(val)}
        value={user.value}
        spaceFrame={true}
      />
    </div>
  );
};
