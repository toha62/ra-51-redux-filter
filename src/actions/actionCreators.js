import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  REMOVE_SERVICE,
  FILTER_SERVICE,
  CHANGE_SERVICE_FIELD,
  SET_EDIT_SERVICE_FIELD,
  RESET_EDIT_SERVICE_FIELD,
  RESET_SERVICE_FIELD,
  CHANGE_FILTER_FIELD,  
 } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function updateService(id, name, price) {
  return {type: UPDATE_SERVICE, payload: {id, name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function filterService(filter) {
  return {type: FILTER_SERVICE, payload: {filter}}
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function setEditServiceField(id) {
  return {type: SET_EDIT_SERVICE_FIELD, payload: {id}}
}

export function resetEditServiceField() {
  return {type: RESET_EDIT_SERVICE_FIELD}
}

export function resetServiceField() {
  return {type: RESET_SERVICE_FIELD}
}

export function changeFilterField(filter) {
  return {type: CHANGE_FILTER_FIELD, payload: {filter}}
}
