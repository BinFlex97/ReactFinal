import { GET_BANNER } from "../Type/HomeType"

const initialState = {
}

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
  case "":
  return {...state}
  default:
    return state
  }
}
