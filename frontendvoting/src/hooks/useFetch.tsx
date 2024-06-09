import { useEffect, useState } from "react"

export default function useFetch<T>(url : string) : [T| null, boolean, string | null, () => void] {
    const [data, setData] = useState<T | null>(null) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const refetch =async() => {
        setLoading(true);
        await (async() => {
            try {
                const feting = await fetch(url)
                const json = await feting.json()
                console.log(json)
                if(feting.status >= 400) {
                    setError(json.message)
                    return 
                }
                setData(json.data)
            }catch(err) {
                console.log(err)
            }
        })()
        setLoading(false)
       
    }
    useEffect(() => {
        refetch()
    }, [url])
    return [data, loading, error, refetch]
}