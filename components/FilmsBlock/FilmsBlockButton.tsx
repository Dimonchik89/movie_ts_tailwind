import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface IFilmsBlockButtonProps {
    title: string;
    handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
    activeButton: string;
    atr: string;
}

const FilmsBlockButton: React.FC<IFilmsBlockButtonProps> = ({title, handleChange, activeButton, atr}) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [style, setStyle] = useState("form-block__button")

    useEffect(() => {
        if(buttonRef.current?.dataset.btn === activeButton) {
            setStyle("form-block__button _active")
        } else {
            setStyle("form-block__button")
        }
    }, [activeButton])

    return (
        <Button 
            className={style}
            data-btn={atr}
            onClick={handleChange} 
            ref={buttonRef}  
        >
            {title}
        </Button>
    )
}
export default FilmsBlockButton;