import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttpHook from '../../hooks/useHttpHook';

interface IInitialState {
    mainTrand: ISearchMovie[];
    loading: boolean;
    error: boolean;
}

const initialState: IInitialState = {
    mainTrand: [],
    loading: false,
    error: false
}

export const fetchMainTrand = createAsyncThunk<ISearchResponse, string>(
    "fetchMainTrand",
    (url) => {
        const { getData } = useHttpHook(url)
        return getData()
    }
)


const mainTrandSlice = createSlice({
    name: "mainTrand",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMainTrand.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchMainTrand.fulfilled, (state, action) => {
                state.loading = false;
                state.mainTrand = action.payload.results;
            })
            .addCase(fetchMainTrand.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    }
})

const { actions, reducer } = mainTrandSlice;
export default reducer