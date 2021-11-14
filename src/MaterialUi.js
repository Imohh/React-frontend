import React from 'react'
import './App.css'
import logo from './logo.svg'
import Button from '@material-ui/core/Button'

function MaterialUi() {
    return (
        <div>
            <h2>Material Ui</h2>

            <header className="App-header">
                <Button 
                size="large"
                onClick={()=> alert("hello")} 
                href="#" 
                variant="contained" color="secondary">
                    Hellow World
                </Button>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            
        </div>
    )
}

export default MaterialUi
