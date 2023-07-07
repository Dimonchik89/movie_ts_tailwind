import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const baseState = (state: RootState) => state.mainTrand;

export const mainTrand = createSelector(baseState, state => state.mainTrand);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);