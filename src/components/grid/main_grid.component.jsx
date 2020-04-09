import React from 'react';
import './main_grid.styles.css'
import { AllBox } from '../all-boxes/all-boxes.component';
import { LoadBar } from '../load-bar/load-bar.component';

export default class Grid extends React.Component{
    constructor() {
        super();
        this.state={}
    }

    handleDisplay = (arr) =>{
        arr.map(val =>
        fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${val}`)
            .then(resp => resp.json())
            .then(data => {
              this.setState({
                  [data['atomicNumber']]: [
                      data['symbol'], 
                      data['cpkHexColor'], 
                      data['name'], 
                      data['atomicMass'], 
                      data['groupBlock']]
                })
            })
        )
        console.log(Object.keys(this.state))
    }

    componentDidMount(){
        const elements = new Array(118).fill(118).map((a,i) => a-i).reverse();
        this.handleDisplay(elements)
    }

    render() {
        let data = this.state;
        return (
            <div className='main_box'>
                {Object.keys(this.state).length > 117 ?  
                <AllBox 
                symbol = {[...Object.keys(data).map(a => [data[a]][0][0])]}
                color = {[...Object.keys(data).map(a => [data[a]][0][1])]}
                name = {[...Object.keys(data).map(a => [data[a]][0][2])]}
                mass = {[...Object.keys(data).map(a =>  [data[a]][0][3])]}
                group ={[...Object.keys(data).map(a =>  [data[a]][0][4])]}
                number = {[...Object.keys(data)]} /> : 
                <LoadBar loadNum={Object.keys(this.state).length}/>
            }
            </div>
        )
    }
}