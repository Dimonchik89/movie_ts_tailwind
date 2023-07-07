import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttpHook from '../../hooks/useHttpHook';

interface IInterfaceState {
    mainPopular: Array<ISearchMovie>;
    popularLoading: boolean;
    popularError: boolean;
    popularCategory: string;
}

const initialState: IInterfaceState = {
    mainPopular: [],
    popularLoading: false,
    popularError: false,
    popularCategory: "/tv/on_the_air"
}

export const fetchMainPopular = createAsyncThunk<ISearchResponse, string>(
    "fetchMainPopular",
    (url) => {
        const { getData } = useHttpHook(url)
        return getData()
    }
)

const mainPopularSlice = createSlice({
    name: "mainPopular",
    initialState,
    reducers: {
        changePopularCategory: (state, action) => {
            state.popularCategory = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMainPopular.pending, state => {
                state.popularLoading = true;
                state.popularError = false;
            })
            .addCase(fetchMainPopular.fulfilled, (state, action) => {
                state.popularLoading = false;
                state.mainPopular = action.payload.results
            })
            .addCase(fetchMainPopular.rejected, state => {
                state.popularLoading = false;
                state.popularError = true;
            })
    }
})

const { actions, reducer } = mainPopularSlice
export const { changePopularCategory } = actions
export default reducer;