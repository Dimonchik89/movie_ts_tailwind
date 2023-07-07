import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const baseState = (state: RootState) => state.mainTrand;

export const mainTrand = createSelector(baseState, state => state.mainTrand);
export const trandLoading = createSelector(baseState, state => state.trandLoading);
export const trandError = createSelector(baseState, state => state.trandError);
export const period = createSelector(baseState, state => state.period);