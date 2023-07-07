import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import PreviewForm from "./PreviewForm";

interface IPreviewProps {
    bgImageFilm: ISearchMovie
}

const Preview: React.FC<IPreviewProps> = ({bgImageFilm}) => {

    return (
            <Box>
              <Box 
                className="h-[300px]" 
                style={{
                  background: `linear-gradient(to right, rgba(3, 37, 67, .9), rgba(3, 37, 67, .5)), url(${process.env.NEXT_PUBLIC_BG_IMAGE_URL}${bgImageFilm.backdrop_path}) center`
                }}  
              >
                {/* <BlurImage
                  alt='bg'
                  src={`${process.env.NEXT_PUBLIC_BG_IMAGE_URL}${bgImageFilm.backdrop_path}`}
                  height={300}
                  width={1300}
                  propStyle='max-h-[300px] object-cover'
                /> */}
                <Box className="p-5 flex flex-col justify-around relative z-10 h-full">
                  <Box className="text-white">
                    <Typography
                      variant='h4'
                      component="h1"
                      className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold pb-3'
                    >
                      Добро пожаловать.
                    </Typography>
                    <Typography
                      variant='h3'
                      component="h2"
                      className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'
                    >
                      Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
                    </Typography>
                  </Box>
                  <PreviewForm/>
                </Box>

              </Box>
            </Box>
    )
}
export default Preview;