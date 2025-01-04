import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, []); // <- add the count variable here
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>


        </div>
    )
}

export default Demo
