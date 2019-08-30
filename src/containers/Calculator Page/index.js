import React from 'react'
import CalculatorDispaly from '../../components/Calculator/CalculatorDispaly'; 

class Calculator extends React.Component{
    render(){
        return (
            <div className='calculator-container'>
                <CalculatorDispaly />
            </div>
        )
    }
}

export default Calculator;