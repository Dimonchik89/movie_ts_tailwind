import { Box, CircularProgress, Typography } from "@mui/material";
import BlurImage from "../BlurImage/BlurImage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IFilmsBlockCardProps {
    film: ISearchMovie;
    checkedCard: number | null;
    handleChangeCheckedCard: (id: number) => void;
    param: string;
}

const FilmsBlockCard: React.FC<IFilmsBlockCardProps> = ({film, checkedCard, handleChangeCheckedCard, param}) => {
    const [filterCard, setFilterCard] = useState<string>("")
    const router = useRouter()

    const rating = Number((+film.vote_average * 10).toString().split('.')[0])
    const alternativeMediaType = param.split("/").filter(item => !!item)[0]

    useEffect(() => {
        console.log(param.split("/").filter(item => !!item)[0])
    }, [param])

    useEffect(() => {
        if(checkedCard === film.id) {
            setFilterCard("_active")
        } else {
            setFilterCard("")
        }
        
    }, [checkedCard])

    return (
        <Box className="w-40 mr-3 cursor-pointer flex flex-col relative backdrop-opacity-60 rounded-lg overflow-hidden" key={film.id}>
            <BlurImage
                alt="logo"
                src={`${process.env.NEXT_PUBLIC_POSTER_IMAGE_URL}${film.poster_path}`}
                width={220}
                height={330}
                propStyle="rounded-lg"
                onClick={() => {
                    router.push(`${film.media_type || alternativeMediaType}/${film.id}`)
                }}
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
                <Box className="mt-2">
                    <Link href={`${film.media_type}/${film.id}`}>
                        <Typography
                            className="text-sm font-semibold _text_overflow_3"
                        >
                            {film.name || film.title}
                        </Typography>
                    </Link>
                    <Typography
                        className="text-sm mt-1"
                    >
                        {film.release_date || film.first_air_date}
                    </Typography>
                </Box>
            </Box>
            <Box 
                className="bg-white rounded-full w-5 h-5 absolute top-2 right-2 z-10 opacity-50 hover:bg-lightBlue ease-linear duration-300 flex items-center justify-between px-[2px]"
                onClick={() => handleChangeCheckedCard(film.id)}
            >
                <span className="dotted"></span>
                <span className="dotted"></span>
                <span className="dotted"></span>
            </Box>
            <Box 
                className={`card-filter ${filterCard}`}
                style={{backgroundImage: "url(" + process.env.NEXT_PUBLIC_POSTER_IMAGE_URL+film.poster_path + ")"}}
            >
            </Box>
        </Box>
    )
}
export default FilmsBlockCard;