import { Box, CircularProgress, Typography } from "@mui/material";
import BlurImage from "../BlurImage/BlurImage";
import Link from "next/link";

interface IFilmsBlockCardProps {
    film: ISearchMovie;
}

const FilmsBlockCard: React.FC<IFilmsBlockCardProps> = ({film}) => {

    const rating = Number((+film.vote_average * 10).toString().split('.')[0])

    return (
        <Box className="w-40 mr-3 cursor-pointer flex flex-col" key={film.id}>
            <BlurImage
                alt="logo"
                src={`${process.env.NEXT_PUBLIC_POSTER_IMAGE_URL}${film.poster_path}`}
                width={220}
                height={330}
                propStyle="rounded-lg"
            />
            <Box className="translate-y-[-20px]">
                <Box className="relative w-9 h-9 ml-3 bg-darkBlue rounded-full">
                    <CircularProgress 
                        size={30} 
                        color="secondary" 
                        variant="determinate" 
                        value={rating} 
                        className="films-card__progress"    
                    />
                    <Typography 
                        
                        className="films-card__progress-num"
                    >
                        {rating}
                    </Typography>
                </Box>
                <Box>
                    <Link href={""}>
                        <Typography>
                            {film.name || film.title}
                        </Typography>
                    </Link>
                    <Typography>
                        {film.release_date}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default FilmsBlockCard;