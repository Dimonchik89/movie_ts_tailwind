import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import useHttpHook from "../../hooks/useHttpHook";
import { films, loading, error, fetchSearchMovie } from "../../store/search";
import { bindActionCreators } from "@reduxjs/toolkit";
import {createStructuredSelector} from 'reselect'
import { ConnectedProps, connect } from "react-redux";
import { AppDispatch } from "../../store/store";
import useChangeTextHook from "../../hooks/useChangeTextHook";
import SearchBlockListItem from "./SearchBlockListItem";
import SearchBlockListTitle from "./SearchBlockListTitle";

interface ISearchBlockProps extends propsFromRedux {
    show: boolean
}

const SearchBlock: React.FC<ISearchBlockProps> = ({show, films, loading, error, fetchSearchMovie}) => {
    const {value, handleChange, resetValue} = useChangeTextHook("")

    useEffect(() => {
        if(show && films.length === 0) {
            fetchSearchMovie()
        }
    }, [show])

    const formButton = loading ? <CircularProgress size={20} /> :
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>

    return (
        <Box className={`fixed top-16 w-full bg-white ${show ? "block": "hidden"}`}>
            <Box className="_container">
                <Box className="flex items-center">
                    <form className="flex items-center items-center flex-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <input 
                            className="w-full p-2 focus:outline-0"
                            type="text" 
                            placeholder="Найди фильм, сериалю, персону..."
                            value={value}
                            onChange={handleChange}
                        />
                    </form>
                    <button
                        className="flex-[0_0_20px]"
                        onClick={resetValue}
                    >
                        {formButton}
                    </button>
                </Box>
            </Box>
            {
                loading ? null : 
                    <Box>
                        <SearchBlockListTitle/>
                        {
                            films?.map(item => <SearchBlockListItem key={item.id} film={item}/>)
                        }
                    </Box>
            }
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    films,
    error,
    loading
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchSearchMovie: bindActionCreators(fetchSearchMovie, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type propsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchBlock);