import { useState, useEffect } from 'react'
import Form from '../../components/Form'

export default function Home() {
    const [bmi, setBmi] = useState();


    useEffect(() => {
        console.log(bmi);
    }, [bmi]);


    return (
        <div>
            <h1>BMI Calculate</h1>
            <Form getBmi={setBmi} />

            {bmi && <h2>Your BMI is {bmi}</h2>}

        </div>
    )
}
