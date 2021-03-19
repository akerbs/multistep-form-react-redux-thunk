import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectBuildingType, goToNextStep, reset } from "../redux/actions";

const BuildingType = () => {
  const [buildingType, setBuildingType] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setBuildingType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(selectBuildingType(Number(buildingType)));
    dispatch(goToNextStep());
  };

  const resetHandler = (event) => {
    event.preventDefault();
    dispatch(reset());
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h5 className="text-center text-secondary">Step 1</h5>

        <div className="card text-center">
          <div className="card-header">
            <h5 className="text-primary">What are we going to build?</h5>
          </div>
          <div className="card-body">
            <select
              className=" custom-select"
              multiple
              onChange={changeHandler}
              required
            >
              <option value="1" onClick={submitHandler}>
                House
              </option>
              <option value="2" onClick={submitHandler}>
                Garage
              </option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary mr-3" onClick={resetHandler}>
            cancel
          </button>
          <button className="btn btn-primary" type="submit">
            next
          </button>
        </div>
      </form>
    </>
  );
};

export default BuildingType;
