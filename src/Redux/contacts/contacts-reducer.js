import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContact } from "./contacts-actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) =>
    state.find(({ name }) => name !== payload.name)
      ? [...state, payload]
      : alert(`${payload.name} is already in contacts`),
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
