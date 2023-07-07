import { useRouter } from "next/router";

const Tv = () => {
    const router = useRouter()

    return (
        <>
            <h1>Tv</h1>
            <p>{router.asPath}</p>
        </>
    )
}
export default Tv;