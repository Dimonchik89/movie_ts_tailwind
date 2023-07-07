import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps } from "react-redux";
import {fetchMainTrand, mainTrand, loading, error} from "../../store/mainTrand";
import { AppDispatch } from "../../store/store";
import BlurImage from "../BlurImage/BlurImage";
import Link from "next/link";
import FilmsBlockCard from "./FilmsBlockCard";

interface FilmsBlockContentProps extends FilmsContentsReduxProps {

}

const FilmsBlockContent: React.FC<FilmsBlockContentProps> = ({fetchMainTrand, mainTrand, loading, error}) => {
    const carouselRef = useRef<HTMLElement>()
    const testRef = useRef<HTMLElement>()

    useEffect(() => {
        fetchMainTrand(`${process.env.NEXT_PUBLIC_BASE_URL}/trending/all/day?language=en-US`)
    }, [])

    carouselRef.current?.addEventListener("scroll", (e) => {
        // console.log("ok", testRef.current?.offsetParent.offsetLeft);
        console.log(e);
    })

    return (
        <Box 
            className="carousel__wrapper mt-5 relative"
            ref={testRef}
        >
            <Box className="overflow-x-scroll carousel pb-1 md:pb-3" ref={carouselRef}>
                <Box 
                    className="flex w-max"
                >
                    {
                        mainTrand.map(item => <FilmsBlockCard key={item.id} film={item}/>)
                    }
                </Box>
        </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    mainTrand,
    loading,
    error
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchMainTrand: bindActionCreators(fetchMainTrand, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type FilmsContentsReduxProps = ConnectedProps<typeof connector>

export default connector(FilmsBlockContent);