import {
  ENTER_NUMBER_OF_FLOORS,
  ENTER_WALL_HEIGHT,
  ENTER_WALL_WIDTH,
  FETCH_RESULT,
  GO_TO_NEXT_STEP,
  RESET,
  SELECT_BUILDING_TYPE,
  SELECT_WALL_MATERIAL,
  FINISH,
} from "./types";

const initialState = {
  step: 1,
  buildingType: "",
  numberOfFloors: 1,
  wallMaterial: "",
  wallWidth: "",
  wallHeight: "",
  price: "",
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_BUILDING_TYPE:
      return { ...state, buildingType: action.payload };

    case ENTER_NUMBER_OF_FLOORS:
      return { ...state, numberOfFloors: action.payload };

    case SELECT_WALL_MATERIAL:
      return { ...state, wallMaterial: action.payload };

    case ENTER_WALL_WIDTH:
      return { ...state, wallWidth: action.payload };

    case ENTER_WALL_HEIGHT:
      return { ...state, wallHeight: action.payload };

    case GO_TO_NEXT_STEP:
      if (state.buildingType === 2 && state.step === 1) {
        return { ...state, step: state.step + 2 };
      } else {
        return { ...state, step: state.step + 1 };
      }

    case RESET:
      return { ...initialState, step: 1 };

    case FETCH_RESULT:
      return { ...state, price: action.payload };

    case FINISH:
      if (state.price.result === "ok") {
        return { ...state, step: "success" };
      } else {
        return { ...state, step: "error" };
      }

    default:
      return state;
  }
}
