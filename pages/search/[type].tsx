import { useRouter } from "next/router";
import React, { useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps, NextPageContext } from 'next'
import axios from "axios";

interface ISearchMovieProps {
    films: ISearchMovie[],
    collection: any
}

const SearchPage: React.FC<ISearchMovieProps> = ({films, collection}) => {

    useEffect(() => {
        console.log("films", films);
        console.log("collection", collection);
        
    }, [films, collection])

    return (
        <>
            SearchPage
        </>
    )
}

export default SearchPage

export const getServerSideProps: GetServerSideProps<{films: ISearchMovie[]}> = async ({req, res}) => {
    console.log(req.url);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`
        }
    };
    
    const response = await fetch(`${process.env.BASE_URL}${req.url}`, options)
    const films = await response.json()

    const responseCollections = await fetch(`${process.env.BASE_URL}/search/collection`, options)
    const collection = await responseCollections.json()
    console.log(films);
    
    return {
        props: {
            films,
            collection
        }
    }
}

// SearchPage.getInitialProps = async (ctx: NextPageContext) => {
//         console.log("ctx", ctx?.req?.url);
//         console.log("process.env.BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);
        
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`
//         }
//     };
    
//     const response = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}${ctx.req?.url}`, options)
//     const films = await response.data
//     console.log("films", films);
    

//     return {
//         films: "lalalal"
//     }
// }