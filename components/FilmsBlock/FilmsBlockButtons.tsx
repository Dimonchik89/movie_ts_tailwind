import { Box, Button } from "@mui/material"
import FilmsBlockButton from "./FilmsBlockButton"
import { useEffect, useRef, useState } from "react"

const FilmsBlockButtons = () => {
    const [activeButton, setActiveButton] = useState<any>("Сегодня")
    const bgRef = useRef<HTMLElement>()
    const containerRer = useRef<HTMLElement>()

    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const offsetLeft = e.currentTarget.offsetLeft
        const buttonWidth = e.currentTarget.clientWidth
        
        setActiveButton(e.currentTarget.textContent)
        if(bgRef.current !== undefined) {
            bgRef.current.style.transform = `translateX(${offsetLeft}px)`
            bgRef.current.style.width = `${buttonWidth}px`
        }
    }

    useEffect(() => {
        const firstBgWidth = containerRer.current?.children[0].clientWidth
        if(bgRef.current !== undefined) {
            bgRef.current.style.width = `${firstBgWidth}px`
        }
    }, [containerRer])

    return (
        <Box className="ml-3">
            <Box 
                ref={containerRer}
                className="border-2 border-darkBlue rounded-3xl overflow-hidden relative"
            >
                <FilmsBlockButton 
                    title="Сегодня" 
                    handleChange={handleChange}
                    activeButton={activeButton}
                />
                <FilmsBlockButton 
                    title="На этой неделе" 
                    handleChange={handleChange}
                    activeButton={activeButton}
                />
                <Box 
                    className="active__btn"
                    ref={bgRef}
                >
                </Box>
            </Box>
        </Box>
    )
}
export default FilmsBlockButtons