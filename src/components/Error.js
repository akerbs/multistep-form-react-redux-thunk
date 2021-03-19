import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/actions";

const Error = () => {
  const message = useSelector((state) => state.price.message);
  const dispatch = useDispatch();

  const resetHandler = (event) => {
    event.preventDefault();
    dispatch(reset());
  };

  return (
    <>
      <form>
        <h5 className="text-center text-secondary">Calculation result</h5>

        <div className="card text-center">
          <div className="card-header">
            <h5 className="text-primary">Error</h5>
          </div>
          <div className="card-body">
            <h5 className="text-danger">{message}</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary mr-3" onClick={resetHandler}>
            New calculation
          </button>
        </div>
      </form>
    </>
  );
};

export default Error;
