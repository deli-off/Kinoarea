import axios from "axios"
const base_url = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    const res = await axios.get(base_url + path + `?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)

    return res
}


export const searchMethod = async (path, query) => {
    const res = await axios.get(base_url + path + `?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)

    return res
}