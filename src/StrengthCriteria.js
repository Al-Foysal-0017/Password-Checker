import React from 'react'
import ProgressBar from './ProgressBar'

const StrengthCriteria = ({passwordLength, containsNumber, isUppercase, containsSymbols, count}) => {
   
    return (
        <div>
            <ProgressBar count={count}/>
                <div style={{marginTop:"10px"}}>
                    <div className={passwordLength ? 'green' : 'red'}>
                        {passwordLength ? "Minimum 8 characters long" : "X Minimum 8 characters long"}
                    </div>
                    <div className={containsSymbols ? 'green' : 'red'}>
                        {containsSymbols ? "At least 1 special character" : "X At least 1 special character"}
                    </div>
                    <div className={containsNumber ? 'green' : 'red'}>
                        {containsNumber ? "At least 1 number" : "X At least 1 number"}
                    </div>
                    <div className={isUppercase ? 'green' : 'red'}>
                        {isUppercase ? "At least 1 capital letter" : "X At least 1 capital letter"}
                    </div>
                </div>
        </div>
    )
}

export default StrengthCriteria
