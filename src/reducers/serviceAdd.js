import {
  CHANGE_SERVICE_FIELD,
  SET_EDIT_SERVICE_FIELD,
  RESET_EDIT_SERVICE_FIELD,
  RESET_SERVICE_FIELD
} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  isEdit: false,
  editId: null,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case SET_EDIT_SERVICE_FIELD:
      const {id} = action.payload;      
      return {...state, isEdit: true, editId: id};
    case RESET_EDIT_SERVICE_FIELD:      
      return {...state, isEdit: false, editId: null};
    case RESET_SERVICE_FIELD:      
      return {...initialState};  
    default:
      return state;
  }
}
