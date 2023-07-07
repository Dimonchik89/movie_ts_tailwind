import { Box, Typography } from "@mui/material"
import FilmsBlockButtons from "./FilmsBlockButtons";
import FilmsBlockContent from "./FilmsBlockContent";
import { useEffect } from "react";

interface IFilmsBlockProps {
    title: string;
    buttonsArray: Array<IButton>;
    films: Array<ISearchMovie>;
    loading: boolean;
    error: boolean;
    changeParams: (arg: string) => void;
    param: string;
}

const FilmsBlock: React.FC<IFilmsBlockProps> = ({title, buttonsArray, films, loading, error, changeParams, param}) => {

    useEffect(() => {
        changeParams(buttonsArray[0].atr)
    }, [])

    return (
        <Box className="mt-6">
            <Box className="flex items-center">
                <Typography
                    className="text-xl"
                >
                    {title}
                </Typography>
                <FilmsBlockButtons 
                    buttonsArray={buttonsArray}
                    changeParams={changeParams}  
                    param={param}  
                />
            </Box>
            <FilmsBlockContent 
                films={films}
                loading={loading}
                error={error} 
                param={param}      
            />
        </Box>
    )
}
export default FilmsBlock;