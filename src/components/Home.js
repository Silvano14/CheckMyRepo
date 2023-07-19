import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../App";
import { Informations } from "./shared/Informations";
import { NewHome } from "./NewHome";

export const Home = () => {
  const navigate = useNavigate();

  return <NewHome />;

  return (
    <Informations
      firstText={paths.user}
      secondText={"repo"}
      buttonText={"CHECK"}
      onClickButton={() => navigate(`../${paths.user}`, { replace: true })}
      spaceFrame={true}
    />
  );
};
