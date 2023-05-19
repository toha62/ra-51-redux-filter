import { nanoid } from 'nanoid';
import {ADD_SERVICE, UPDATE_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../actions/actionTypes'

const initialState = {
  items: [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
  ],
  filteredItems: [],
};
initialState.filteredItems = [...initialState.items];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return {...state, items: [...state.items, {id: nanoid(), name, price: Number(price)}]};
    case UPDATE_SERVICE: {
      const {id, name, price} = action.payload;      
      return {...state, items: [...state.items.map(item => item.id === id ? {id, name, price: Number(price)} : item)]};     
    }
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return {...state, items: [...state.items.filter(service => service.id !== id)]};
    case FILTER_SERVICE:      
      const { filter } = action.payload;

      if (!filter.trim()) {
        return {...state, filteredItems: [...state.items]};
      }      
      return {...state, filteredItems: state.items.filter(item => item.name.toLowerCase().includes(filter.trim().toLowerCase()))};    
    default:
      return state;
  }
}
