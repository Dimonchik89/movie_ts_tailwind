import { useRouter } from "next/router"

const HeaderMobileSubmainList = () => {
    const router = useRouter()

    return (
        <ul className='flex flex-col flex-auto '>
            <li 
                className="mobile-menu__info-item"
                onClick={() => {
                    router.push("/movie")
                }}
            >
                Библия редакторов
            </li>
            <li
                className="mobile-menu__info-item"
            >
                Обсуждения
            </li>
            <li
                className="mobile-menu__info-item"
            >
                Доска почета
            </li>
            <li
                className="mobile-menu__info-item"
            >
                API
            </li>
            <li
                className="mobile-menu__info-item"
            >
                Поддержка
            </li>
            <li
                className="mobile-menu__info-item"
            >
                Инфо
            </li>
            <li
                className="mobile-menu__info-item pt-3"
            >
                Выйти
            </li>
        </ul>
    )
}
export default HeaderMobileSubmainList;