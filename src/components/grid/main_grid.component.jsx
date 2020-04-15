import React from 'react';
import './main_grid.styles.css'
import AllBox from '../all-boxes/all-boxes.component';
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
                  [data['atomicNumber']]: {
                      symbol: data['symbol'], 
                      color: data['cpkHexColor'], 
                      name: data['name'], 
                      mass: data['atomicMass'], 
                      group: data['groupBlock'],
                      yearDiscovered: data['yearDiscovered']
                    }
                })
            })
        )
    }

    componentDidMount(){
        const elements = new Array(118).fill(118).map((a,i) => a-i).reverse();
        this.handleDisplay(elements);
    }

    render() {
        let data = this.state;
        return (
            <div className='main_box'>
                {Object.keys(this.state).length > 117 ?  
                <AllBox 
                symbol = {[...Object.keys(data).map(a => [data[a]][0]['symbol'])]}
                color = {[...Object.keys(data).map(a => [data[a]][0]['color'])]}
                name = {[...Object.keys(data).map(a => [data[a]][0]['name'])]}
                mass = {[...Object.keys(data).map(a =>  [data[a]][0]['mass'])]}
                group ={[...Object.keys(data).map(a =>  [data[a]][0]['group'])]}
                yearDiscovered ={[...Object.keys(data).map(a =>  [data[a]][0]['yearDiscovered'])]}
                number = {[...Object.keys(data)]} /> : 
                <LoadBar loadNum={Object.keys(this.state).length}/>
            }
            </div>
        )
    }
}