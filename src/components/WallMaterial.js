import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWallMaterial, goToNextStep, reset } from "../redux/actions";

const WallMaterial = () => {
  const [wallMaterial, setWallMaterial] = useState("");

  const buildingType = useSelector((state) => state.buildingType);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setWallMaterial(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(selectWallMaterial(Number(wallMaterial)));
    dispatch(goToNextStep());
  };

  const resetHandler = (event) => {
    event.preventDefault();
    dispatch(reset());
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h5 className="text-center text-secondary">
          {buildingType === 1 ? "Step 3" : "Step 2"}
        </h5>

        <div className="card text-center">
          <div className="card-header">
            <h5 className="text-primary">Wall material:</h5>
          </div>
          <div className="card-body">
            {buildingType === 1 && (
              <select
                className=" custom-select"
                multiple
                required
                onChange={changeHandler}
              >
                <option value="1" onClick={submitHandler}>
                  Brick
                </option>
                <option value="2" onClick={submitHandler}>
                  Cinder block
                </option>
                <option value="3" onClick={submitHandler}>
                  Wooden beams
                </option>
              </select>
            )}

            {buildingType === 2 && (
              <select
                className=" custom-select"
                multiple
                required
                onChange={changeHandler}
              >
                <option value="2" onClick={submitHandler}>
                  Cinder block
                </option>
                <option value="4" onClick={submitHandler}>
                  Metal
                </option>
                <option value="5" onClick={submitHandler}>
                  Sandwich panels
                </option>
              </select>
            )}
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

export default WallMaterial;
