import React from "react";
import Spinner from "react-svg-spinner";

const CenteredSpinner = () => {
  const centerMe = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <div style={centerMe}>
      <Spinner size="64px" color="white" />
    </div>
  );
};

export default CenteredSpinner;
