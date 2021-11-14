import React from 'react'
import './App.css'
import logo from './logo.svg'
import ButtonGroup from '@material-ui/core/Button'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

function MaterialUi() {
    return (
        <div>
            <h2>Material Ui</h2>

            <header className="App-header">
                <ButtonGroup>
                <Button 
                        startIcon={<SaveIcon />}
                        size="large"
                        href="#" 
                        variant="contained" color="primary">
                            Save
                    </Button>
                    <Button 
                        startIcon={<SaveIcon />}
                        size="large"
                        href="#" 
                        variant="contained" color="secondary">
                            Discard
                    </Button>
                </ButtonGroup>
                    
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            
        </div>
    )
}

export default MaterialUi
