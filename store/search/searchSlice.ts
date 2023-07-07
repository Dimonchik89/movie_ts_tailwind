import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttpHook from "../../hooks/useHttpHook";

interface IInitialState {
    films: Array<ISearchMovie>;
    loading: boolean;
    error: boolean
}

const initialState: IInitialState = {
    films: [],
    loading: false,
    error: false
}

export const fetchSearchMovie = createAsyncThunk<ISearchMovie[]>(
    "searchFilms/fetch",
    async () => {
        const { getData } = useHttpHook("https://api.themoviedb.org/3/trending/all/day?language=en-US?limit=5")
        return (await getData()).results.slice(0, 10)
    }
)

const searchSlice = createSlice({
    name: "searchFilms",
    initialState,
    reducers: {},
    extraReducers: build => {
        build
            .addCase(fetchSearchMovie.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchSearchMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
            })
            .addCase(fetchSearchMovie.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    }
})
const { actions, reducer } = searchSlice
export default reducer