import Layout from '../components/Layout/Layout'
import { GetServerSideProps } from 'next'
import Preview from '../components/Preview/Preview'
import FilmsBlock from '../components/FilmsBlock/FilmsBlock'
import { fetchMainTrand, mainTrand, changePeriod, trandLoading, trandError, period } from '../store/mainTrand'
import { bindActionCreators } from '@reduxjs/toolkit'
import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps } from 'react-redux'
import { AppDispatch } from '../store/store'
import { useEffect } from 'react'
import { popularCategory, changePopularCategory, fetchMainPopular, mainPopular, popularError, popularLoading } from '../store/mainPopular'

interface IHomeProps extends HomeRedux {
  bgImageFilm: ISearchMovie
}

const buttonsArrayTrands = [
    {title: "Сегодня", atr: "day"},
    {title: "На этой неделе", atr: "week"},
]

const buttonsArrayPopular = [
    {title: "Онлайн", atr: "/tv/on_the_air"},
    {title: "По ТВ", atr: "/tv/airing_today"},
    {title: "В ожидании", atr: "/movie/upcoming"},
    {title: "В кинотеатрах", atr: "/movie/now_playing"},
]

const Home: React.FC<IHomeProps> = ({bgImageFilm, fetchMainTrand, changePeriod, trandError, trandLoading, mainTrand, period, popularCategory, changePopularCategory, fetchMainPopular, mainPopular, popularError, popularLoading}) => {

    useEffect(() => {
        fetchMainTrand(`${process.env.NEXT_PUBLIC_BASE_URL}/trending/all/${period}?language=en-US`)
    }, [period])

    useEffect(() => {
      fetchMainPopular(`${process.env.NEXT_PUBLIC_BASE_URL}${popularCategory}?language=en-US&page=1`)
    }, [popularCategory])

  return (
    <Layout>
      <main className='text-darkBlue'>
          <Preview bgImageFilm={bgImageFilm}/>
          <FilmsBlock 
            title={"В тренде"} 
            buttonsArray={buttonsArrayTrands} 
            films={mainTrand} 
            loading={trandLoading} 
            error={trandError}
            changeParams={changePeriod}
            param={period}
          />
          <FilmsBlock 
            title={"Что популярно"} 
            buttonsArray={buttonsArrayPopular}
            changeParams={changePopularCategory}
            param={popularCategory}
            films={mainPopular}
            loading={popularLoading}
            error={popularError}
          />
      </main>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  mainTrand,
  trandLoading,
  trandError,
  period,
  popularCategory,
  mainPopular, 
  popularError, 
  popularLoading
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchMainTrand: bindActionCreators(fetchMainTrand, dispatch),
  changePeriod: bindActionCreators(changePeriod, dispatch),
  changePopularCategory: bindActionCreators(changePopularCategory, dispatch),
  fetchMainPopular: bindActionCreators(fetchMainPopular, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type HomeRedux = ConnectedProps<typeof connector>

export default connector(Home);

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