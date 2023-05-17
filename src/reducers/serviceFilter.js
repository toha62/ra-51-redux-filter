import { CHANGE_FILTER_FIELD, INIT_FILTERED_ITEMS, FILTER_ITEMS } from "../actions/actionTypes";

const initialState = {
  value: '',
  filteredItems: [],
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_FILTERED_ITEMS:
      const { filteredItems } = action.payload;
      return {...state, filteredItems};     
    case CHANGE_FILTER_FIELD:
      const { value } = action.payload;
      return {...state, value};     
    case FILTER_ITEMS:
      const { filter } = action.payload;
      if (!filter.trim()) {
        return state;
      }
      const arr = state.filteredItems.filter(item => item.name.toLowerCase().includes(filter.trim().toLowerCase()));
      return {...state, filteredItems: arr};     
    default:
      return state;
  }
}
