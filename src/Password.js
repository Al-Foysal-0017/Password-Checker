import StrengthCriteria from "./StrengthCriteria"
import React, { Component } from 'react'

export default class PWGenerate extends Component {
    state={
        password: '',
        passwordLength: false,
        containsNumber: false,
        isUppercase: false,
        containsSymbols: false
    }
    

    //check for numbers 
    checkForNumbers = (string) => {
        var matches = string.match(/\d+/g);
        this.setState({containsNumber: matches != null ? true : false})
    }

    //checkForUppercase
    checkForUppercase = (string) => {
        var matches = string.match(/[A-Z]/);
        this.setState({isUppercase: matches != null ? true : false})
    }


    //checkForSymbols
    checkForSymbols = (string) => {
        // var matches = string.match(/[*, #, %, @]/);
        var symbols = new RegExp(/[^A-Z a-z 0-9]/)
        this.setState({containsSymbols: symbols.test(string) ? true : false})
    }

    //handle change
    handleChange = input => e => {
        let targetValue = e.target.value;
        console.log(targetValue);

        this.checkForNumbers(targetValue)
        this.checkForUppercase(targetValue);
        this.checkForSymbols(targetValue);
        
        this.setState({
            passwordLength: targetValue.length > 7 ? true : false
        })
    }
    
    
    render() {
        let {passwordLength, containsNumber, isUppercase, containsSymbols} = this.state;

        let count = 0
        if(passwordLength){count = count+1}
        if(containsNumber){count = count+1}
        if(isUppercase){count = count+1}
        if(containsSymbols){count = count+1}
        console.log("COUNT:>>>", count)

        return (
            <>

                <div className="content">
                    <form style={{display:"flex", flexDirection:"column"}}>
                        <input 
                            style={{height: "30px", width:"250px", paddingLeft:"10px"}}
                            type="text" 
                            placeholder="Enter password"
                            onChange={this.handleChange('password')}
                        />
                       <StrengthCriteria 
                            passwordLength={passwordLength} 
                            containsNumber={containsNumber} 
                            isUppercase={isUppercase} 
                            containsSymbols={containsSymbols} 
                            count={count}
                        />
                    </form>
                </div>
            </>
        )
    }
}
