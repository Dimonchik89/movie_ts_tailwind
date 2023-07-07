interface ISearchMovie {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title?: string,
    name?: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: Array<number>,
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface ISearchResponse {
    page: number;
    results: Array<ISearchMovie>,
    total_pages: number,
    total_results: number
}
