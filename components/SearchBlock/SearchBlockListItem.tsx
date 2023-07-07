import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface IFilm {
    film: ISearchMovie
}

const SearchBlockListItem: React.FC<IFilm> = ({film}) => {
    const router = useRouter()

    return (
        <Box 
            key={film.id} 
            className="bg-white bg-opacity-30 border-b border-lightGray cursor-pointer"
        >
            <Box 
                className="_container flex items-center py-1"
                onClick={() => router.push({
                    pathname: `/search/${film.media_type}`,
                    query: {
                        query: film.name || film.title
                    }
                })}    
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <Typography
                    variant="body1"
                    component="p"
                >
                    {film.title || film.name}
                </Typography>
            </Box>
        </Box>
    )
}
export default SearchBlockListItem;