import { useEffect } from "react"
import style from "./indes.module.css"
export default function Home() {

    async function fetching() {
        const feting = await fetch("/api")
        console.log(feting.status)
        const texting = await feting.text()
        console.log(texting) 
    }

    useEffect(() => {
        fetching()
    }, [])

    return(
        <div className={style.container}>
            Test
        </div>
    )
}