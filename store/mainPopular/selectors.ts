import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const baseState = (state: RootState) => state.mainPopular;
export const mainPopular = createSelector(baseState, state => state.mainPopular)
export const popularLoading = createSelector(baseState, state => state.popularLoading)
export const popularError = createSelector(baseState, state => state.popularError)
export const popularCategory = createSelector(baseState, state => state.popularCategory)