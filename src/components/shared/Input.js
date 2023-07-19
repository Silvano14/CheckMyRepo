import React from "react";
import styles from "./input.module.css";

export const Input = ({
  placeholder = "Type a value",
  onChange = () => {},
  value = "",
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        style={{
          width: "100%",
          outline: 0,
          border: 0,
          borderBottom: "3px solid black",
        }}
        value={value}
        autoFocus
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
