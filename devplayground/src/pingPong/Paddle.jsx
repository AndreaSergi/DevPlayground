import { useRef, useEffect } from "react"

export function Paddle({ position }) {  


    return (
        <div className={`paddle ${position}`}></div>
    )
}
