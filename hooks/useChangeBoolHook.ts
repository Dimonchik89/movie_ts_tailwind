import { useState } from "react";

const useChangeBoolHook = () => {
    const [value, setValue] = useState<boolean>(false)

    const toggleValue = () => {
        setValue(prev => !prev)
    }

    const falseValue = () => {
        setValue(false)
    }

    return { value, toggleValue, falseValue }
}

export default useChangeBoolHook;