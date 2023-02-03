// counter component
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1)
    }

    function decreaseCount() {
        setCount(count - 1)
    }

    return(
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}