import { useRouter } from "next/router";

const HeaderMobileMainList = () => {
    const router = useRouter()

    return (
        <ul className='flex flex-col flex-auto  pb-4'>
            <li 
                className="mobile-menu__list-item"
                onClick={() => {
                    router.push("/movie")
                }}
            >
                Фильмы
            </li>
            <li
                className="mobile-menu__list-item"
            >
                Сериалы
            </li>
            <li
                className="mobile-menu__list-item"
            >
                Люди
            </li>
        </ul>
    )
}
export default HeaderMobileMainList;