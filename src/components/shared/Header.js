import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export const Header = ({
  label = "",
  backPath,
  forwardPath,
  showForwardButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <IconButton
        icon={<ArrowBackIcon />}
        onClick={() => navigate(`../${backPath}`, { replace: true })}
      >
        Back
      </IconButton>
      <h1 className={styles.title}>{label}</h1>
      {showForwardButton && (
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={() => navigate(`../${forwardPath}`, { replace: true })}
        >
          Next
        </IconButton>
      )}
    </div>
  );
};
