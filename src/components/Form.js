import { useState } from 'react'

export default function Form({ getBmi }) {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        getBmi(weight / (height * height));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="weight">Enter your weight</label>
            <input
                type="number"
                id="weight"
                name="name"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <label htmlFor="height">Enter your height</label>
            <input
                type="number"
                id="email"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    )
}
