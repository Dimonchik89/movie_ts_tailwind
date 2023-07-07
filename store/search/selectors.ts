import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const baseState = (state: RootState) => state.searchFilms;
export const films = createSelector(baseState, state => state.films)
export const loading = createSelector(baseState, state => state.loading)
export const error = createSelector(baseState, state => state.error)