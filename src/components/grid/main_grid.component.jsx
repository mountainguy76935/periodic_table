import React from 'react';
import { RequestElements } from '../../redux-files/actions'
import './main_grid.styles.css'
import AllBox from '../all-boxes/all-boxes.component';
import { LoadBar } from '../load-bar/load-bar.component';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    elements: state.AsyncReducer.elements, 
    isPending: state.AsyncReducer.isPending,
    error: state.AsyncReducer.error,
    allSuccess: state.AsyncReducer.allSuccess
})

const mapDispatchToProps = (dispatch) => ({
    submitFetchElements: () => RequestElements(dispatch)
})

class Grid extends React.Component{

    componentDidMount() {
        this.props.submitFetchElements()
    }

    render(){
        let data = this.props.elements;
        return (
            <div className='main_box'>
                <p>{this.props.allSuccess}</p>
                {this.props.allSuccess ?  
                <AllBox 
                    symbol = {[...Object.keys(data).map(a => data[a]['symbol'])]}
                    color = {[...Object.keys(data).map(a => data[a]['color'])]}
                    name = {[...Object.keys(data).map(a => data[a]['name'])]}
                    mass = {[...Object.keys(data).map(a =>  data[a]['atomicMass'])]}
                    group ={[...Object.keys(data).map(a =>  data[a]['groupBlock'])]}
                    yearDiscovered ={[...Object.keys(data).map(a =>  data[a]['yearDiscovered'])]}
                    number = {[...Object.keys(data)]} /> : 
                    <LoadBar loadNum={Object.keys(data).length}/>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)