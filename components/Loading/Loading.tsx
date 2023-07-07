import { Box, CircularProgress } from "@mui/material"

const Loading = () => {

    return (
        <Box className="w-full flex items-center justify-center">
            <CircularProgress color="secondary"/>
        </Box>
    )
}
export default Loading;