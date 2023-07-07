import { useRouter } from "next/router";
import { useEffect } from "react";

const Movie = () => {
    const router = useRouter()

    useEffect(() => {
        console.log(router);
        
    }, [])

    return (
        <>
            Movie page
            <p>
                {router.asPath}
            </p>
        </>
    )
}
export default Movie;