import { useState } from "react"
import Button from "./Button"
export default function Output(){
    const [count, setCount] = useState(0);
    return <div>
        <h1>Your clicked {count} times</h1>
        <button onClick={()=>setCount(count+1)}>✊</button>
        <button onClick={()=>setCount(count+1)}>✋ </button>
        <button onClick={()=>setCount(count+1)}>✌️ </button>
    </div>
}