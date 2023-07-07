import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FilmsBlockCard from "./FilmsBlockCard";
import Loading from "../Loading/Loading";

interface FilmsBlockContentProps {
    films: Array<ISearchMovie>;
    loading: boolean;
    error: boolean;
    param: string;
}

const FilmsBlockContent: React.FC<FilmsBlockContentProps> = ({films, loading, error, param}) => {
    const carouselRef = useRef<HTMLElement>()
    const testRef = useRef<HTMLElement>()
    const [checkedCard, setCheckedCard] = useState<number | null>(null)

    const handleChangeCheckedCard = (id: number) => {
        if(id === checkedCard) {
            setCheckedCard(null)
        } else {
            setCheckedCard(id)
        }
    }


    // carouselRef.current?.addEventListener("scroll", (e) => {
    //     console.log("ok", testRef.current?.offsetParent.offsetLeft);
    // })

    const loadingContent = loading ? <Loading/> : null
    const errorContent = error ? <Typography>Error</Typography> : null

    return (
        <Box 
            className="carousel__wrapper mt-5 relative bg-[url('/wave2.png')] bg-center-bottom min-h-[375px]"
            ref={testRef}
        >
            {loadingContent}
            {errorContent}
            {
                !loading && !error ?
                <Box className="overflow-x-scroll carousel pb-1 md:pb-2" ref={carouselRef}>
                    <Box className="flex w-max">
                        {
                            films?.map(item => <FilmsBlockCard 
                                                    key={item.id} 
                                                    film={item} 
                                                    checkedCard={checkedCard} 
                                                    handleChangeCheckedCard={handleChangeCheckedCard}
                                                    param={param}
                                                />)
                        }
                    </Box>
                </Box> : null
            }

        </Box>
    )
}

export default FilmsBlockContent;