import { Inter } from '@next/font/google'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { MutableRefObject, useEffect, useRef } from 'react'
import Image from 'next/image'
import blurPlaceholder from "../public/logo_blur.svg"
import mountains from '../public/mountains.jpg'
import BlurImage from '../components/BlurImage/BlurImage'
import Preview from '../components/Preview/Preview'
import FilmsBlock from '../components/FilmsBlock/FilmsBlock'


interface IHomeProps {
  bgImageFilm: ISearchMovie
}

const Home: React.FC<IHomeProps> = ({bgImageFilm}) => {

  return (
    <Layout>
      <main className='text-darkBlue'>
          <Preview bgImageFilm={bgImageFilm}/>
          <FilmsBlock/>
      </main>
    </Layout>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`
    }
  };

  const responseFilmsBg = await fetch(`${process.env.BASE_URL}/movie/now_playing?language=en-US&page=1`, options)
  let bgImageFilms = await responseFilmsBg.json();
  const filmsForBg = bgImageFilms.results
  const numFiln = Math.floor(Math.random() * (filmsForBg.length - 1 - 0 + 1)) + 0;

  return {
    props: {
      bgImageFilm: filmsForBg[numFiln]
    }
  }
}