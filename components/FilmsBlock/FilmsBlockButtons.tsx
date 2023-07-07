import { Box } from "@mui/material"
import FilmsBlockButton from "./FilmsBlockButton"
import { useEffect, useRef } from "react"

interface IFilmsBlockButtonsProps{
    buttonsArray: Array<IButton>;
    changeParams: (arg: string) => void;
    param: string;
}

const FilmsBlockButtons: React.FC<IFilmsBlockButtonsProps> = ({buttonsArray, changeParams, param}) => {
    const bgRef = useRef<HTMLElement>()
    const containerRer = useRef<HTMLElement>()

    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const offsetLeft = e.currentTarget.offsetLeft
        const buttonWidth = e.currentTarget.clientWidth
        
        if(e.currentTarget.dataset.btn) {
            changeParams(e.currentTarget.dataset.btn)
        }
        
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

    const buttonsContent = buttonsArray.map(item => <FilmsBlockButton 
                                                        key={item.atr}
                                                        title={item.title} 
                                                        atr={item.atr}
                                                        handleChange={handleChange}
                                                        activeButton={param}
                                                    />)

    return (
        <Box className="ml-3">
            <Box 
                ref={containerRer}
                className="border-2 border-darkBlue rounded-3xl overflow-hidden relative"
            >
                {buttonsContent}
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