import React, { useEffect, useState } from "react";

function Counter(props) {

    const [count, setCount] = useState(props.count)

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));

        return () => {
            console.log("There's no counter anymore")
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count])

    function add() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Click</button>
        </div>
    )
}

export default Counter;