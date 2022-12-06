import React from 'react'
import styles from './styles.module.css'

export default function WhatIsBMI() {
    return (
        <div className={styles.whats}>
            <h1>What is BMI</h1>
            <p>
                Body mass index (BMI) is a measure of body fat based on your weight in relation to your height. It is a calculation that is used to determine if a person is underweight, a healthy weight, overweight, or obese. The formula for calculating BMI is weight (in kilograms) divided by height (in meters) squared. For example, a person who weighs 70 kilograms and is 1.75 meters tall would have a BMI of 22.9. This is considered to be within a healthy range.
            </p>
        </div>
    )
}
