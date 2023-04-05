import axios from "axios"
const base_url = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    const res = await axios.get(base_url + path + `?api_key=${import.meta.env.VITE_API_KEY}&language=china`)

    return res
}

