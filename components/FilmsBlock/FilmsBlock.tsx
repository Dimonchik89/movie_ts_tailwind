import { Box, Typography } from "@mui/material"
import FilmsBlockButtons from "./FilmsBlockButtons";
import FilmsBlockContent from "./FilmsBlockContent";

const FilmsBlock = () => {

    return (
        <Box className="mt-6">
            <Box className="flex items-center">
                <Typography
                    className="text-xl"
                >
                    В тренде
                </Typography>
                <FilmsBlockButtons/>
            </Box>
            <FilmsBlockContent/>
        </Box>
    )
}
export default FilmsBlock;