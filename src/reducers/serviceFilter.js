import { CHANGE_FILTER_FIELD } from "../actions/actionTypes";

const initialState = {value: ''};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_FIELD:
      const {value} = action.payload;
      return {...state, value};     
    default:
      return state;
  }
}
