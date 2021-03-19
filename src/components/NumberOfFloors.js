import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { enterNumberOfFloors, goToNextStep, reset } from "../redux/actions";

const NumbersOfFloor = () => {
  const [numberOfFloors, setNumberOfFloors] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setNumberOfFloors(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(enterNumberOfFloors(Number(numberOfFloors)));
    dispatch(goToNextStep());
  };

  const resetHandler = (event) => {
    event.preventDefault();
    dispatch(reset());
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h5 className="text-center text-secondary">Step 2</h5>
        <div className="card text-center">
          <div className="card-header">
            <h5 className="text-primary">Number of floors:</h5>
          </div>
          <div className="card-body">
            <input
              type="number"
              name="numberOfFloors"
              onChange={changeHandler}
              value={numberOfFloors}
              required
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

export default NumbersOfFloor;
