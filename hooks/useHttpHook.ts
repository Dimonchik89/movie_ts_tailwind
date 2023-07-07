import axios from "axios";

const useHttpHook = (url: string) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`
        }
    };

    const getData = async () => {
        try {
            const response = await axios(url, options)
            return await response.data
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }

    }

    return { getData }
}

export default useHttpHook;