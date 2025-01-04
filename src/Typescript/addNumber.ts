import React, { useEffect } from 'react'

const AddNumber: React.FC = () => {
    const [sum, setSum] = React.useState<number>(0);

    useEffect(() => {
        const addNumber = (a: number, b: number): void => {
            let c = a + b;
            setSum(c);
            console.log(c);
        };

        addNumber(10, 20); // Example usage with numbers
    }, []);

    
};

export default AddNumber;

\