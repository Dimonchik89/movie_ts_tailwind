import Image from "next/image"
import { useRouter } from "next/router"

interface IHeaderMenuProps {
    closeSearch: () => void;
}

const HeaderMenu: React.FC<IHeaderMenuProps> = ({closeSearch}) => {
    const router = useRouter()

    return (
        <div className='hidden flex-[0_0_calc(483/1300*100%)] xl:flex'>
            <Image
                src={"./logo.svg"}
                width={154}
                height={20}
                alt="logo"
                className='cursor-pointer mx-4'
                onClick={() => {
                    closeSearch()
                    router.push("/")
                }}
            />
            <ul className='flex flex-auto justify-between text-white font-semibold text-sm'>
                <li onClick={() => {
                    router.push("/movie")
                }}>
                    Фильмы
                </li>
                <li>
                    Сериалы
                </li>
                <li>
                    Люди
                </li>
                <li>
                    Еще
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenu