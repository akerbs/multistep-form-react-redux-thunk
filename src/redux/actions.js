import {
  ENTER_NUMBER_OF_FLOORS,
  ENTER_WALL_HEIGHT,
  ENTER_WALL_WIDTH,
  SELECT_BUILDING_TYPE,
  SELECT_WALL_MATERIAL,
  GO_TO_NEXT_STEP,
  RESET,
  FETCH_RESULT,
  FINISH,
} from "./types";

export function selectBuildingType(type) {
  return {
    type: SELECT_BUILDING_TYPE,
    payload: type,
  };
}

export function enterNumberOfFloors(number) {
  return {
    type: ENTER_NUMBER_OF_FLOORS,
    payload: number,
  };
}

export function selectWallMaterial(material) {
  return {
    type: SELECT_WALL_MATERIAL,
    payload: material,
  };
}

export function enterWallWidth(width) {
  return {
    type: ENTER_WALL_WIDTH,
    payload: width,
  };
}

export function enterWallHeight(height) {
  return {
    type: ENTER_WALL_HEIGHT,
    payload: height,
  };
}

export function goToNextStep() {
  return {
    type: GO_TO_NEXT_STEP,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function fetchResult(URL) {
  return async (dispatch) => {
    const response = await fetch(URL);
    const json = await response.json();
    dispatch({ type: FETCH_RESULT, payload: json });
    dispatch({ type: FINISH });
  };
}
