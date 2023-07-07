import { Box } from "@mui/material"
import { useEffect, useRef } from "react"
import useChangeTextHook from "../../hooks/useChangeTextHook"
import { useRouter } from "next/router"

const PreviewForm = () => {
    const {value, handleChange} = useChangeTextHook("")
    const findRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    useEffect(() => {  
        if(window?.innerWidth <= 700) {
        // findRef.current?.attributes.getNamedItem("placeholder")?.value
        }
        // console.dir(findRef?.current?.attributes.getNamedItem("placeholder"))
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push({
            pathname: "/search",
            query: {
                query: value
            }
        })
    }

    return (
        <Box>
            <form 
                className='w-full flex rounded-3xl overflow-hidden bg-white'
                onSubmit={handleSubmit}
            >
                <input 
                    ref={findRef}
                    type="text" 
                    className='flex-auto outline-none px-3 bg-transparent min-w-0'
                    placeholder='Найти фильм, сериал...'
                    value={value}
                    onChange={handleChange}
                />
                <button 
                    type='submit'
                    className='bg-gradient-to-r from-lightGreen to-lightBlue text-white px-3 py-2 sm:px-5 sm:py-3 font-semibold rounded-3xl'
                >
                    Search
                </button>
            </form>
        </Box>
    )
}
export default PreviewForm