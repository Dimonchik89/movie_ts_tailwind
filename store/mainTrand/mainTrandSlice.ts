import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttpHook from '../../hooks/useHttpHook';

interface IInitialState {
    mainTrand: ISearchMovie[];
    trandLoading: boolean;
    trandError: boolean;
    period: string;
}

const initialState: IInitialState = {
    mainTrand: [],
    trandLoading: false,
    trandError: false,
    period: "day"
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
    reducers: {
        changePeriod: (state, action) => {
            state.period = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMainTrand.pending, state => {
                state.trandLoading = true;
                state.trandError = false;
            })
            .addCase(fetchMainTrand.fulfilled, (state, action) => {
                state.trandLoading = false;
                state.mainTrand = action.payload.results;
            })
            .addCase(fetchMainTrand.rejected, state => {
                state.trandLoading = false;
                state.trandError = true;
            })
    }
})

const { actions, reducer } = mainTrandSlice;
export const { changePeriod } = actions
export default reducer