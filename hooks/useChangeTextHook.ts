import React, { useState } from "react";

const useChangeTextHook = (text: string) => {
    const [value, setValue] = useState<string>(text)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const resetValue = () => {
        setValue("")
    }

    return { value, handleChange, resetValue }
}
export default useChangeTextHook;