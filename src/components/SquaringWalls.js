import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enterWallWidth,
  enterWallHeight,
  fetchResult,
  reset,
} from "../redux/actions";

const SquaringWalls = () => {
  const [form, setForm] = useState({
    wallWidth: "",
    wallHeight: "",
  });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(enterWallWidth(Number(form.wallWidth)));
    dispatch(enterWallHeight(Number(form.wallHeight)));
    dispatch(
      fetchResult(
        `https://data.techart.ru/lab/json/?building=${state.buildingType}&height=${state.numberOfFloors}&material=${state.wallMaterial}&sizex=${form.wallWidth}&sizey=${form.wallHeight}`
      )
    );
  };

  const resetHandler = (event) => {
    event.preventDefault();
    dispatch(reset());
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h5 className="text-center text-secondary">
          {state.buildingType === 1 ? "Step 4" : "Step 3"}
        </h5>

        <div className="card text-center">
          <div className="card-header">
            <h5 className="text-primary">Square of walls (in meters):</h5>
          </div>
          <div className="card-body ">
            <input
              type="number"
              name="wallWidth"
              required
              onChange={changeHandler}
              value={form.wallWidth}
            />{" "}
            X{" "}
            <input
              type="number"
              name="wallHeight"
              required
              onChange={changeHandler}
              value={form.wallHeight}
            />
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

export default SquaringWalls;
