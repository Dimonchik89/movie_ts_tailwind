import { configureStore } from "@reduxjs/toolkit";
import searchFilms from "./search/searchSlice";
import mainTrand from "./mainTrand/mainTrandSlice";
import mainPopular from "./mainPopular/mainPopularSlice";

const store = configureStore({
    reducer: {
        searchFilms,
        mainTrand,
        mainPopular
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;