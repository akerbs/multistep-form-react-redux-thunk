import React from "react";
import BuildingType from "./BuildingType";
import NumberOfFloors from "./NumberOfFloors";
import WallMaterial from "./WallMaterial";
import SquaringWalls from "./SquaringWalls";
import Success from "./Success";
import Error from "./Error";
import { useSelector } from "react-redux";

const MainForm = () => {
  const step = useSelector((state) => state.step);

  return (
    <>
      <h1 className="text-center">Construction price calculator</h1>
      {step === 1 && <BuildingType />}
      {step === 2 && <NumberOfFloors />}
      {step === 3 && <WallMaterial />}
      {step === 4 && <SquaringWalls />}
      {step === "success" && <Success />}
      {step === "error" && <Error />}
    </>
  );
};

export default MainForm;
