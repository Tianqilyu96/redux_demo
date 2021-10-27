import React, { Component } from 'react'

export default class Count extends Component {

    state={sum: 0}

    incrementNum =()=>{
        const {value} = this.selectedNum;
        let {sum} = this.state;
        sum  += value*1
        this.setState({sum})
    } 
    
    decrementNum =()=>{
        
    }  

    oddIncrement =()=>{
        
    }  

    incrementAsync =()=>{
        
    }  

    render() {
        return (
            <div>
                <h2>Result is : {this.state.sum}</h2>
                <select ref={c=>this.selectedNum=c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.incrementNum}>+</button>
                <button onClick={this.decrementNum}>-</button>
                <button onClick={this.oddIncrement}>increment if odd</button>
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
