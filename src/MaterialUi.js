import React from 'react'
import './App.css'
import logo from './logo.svg'
import ButtonGroup from '@material-ui/core/Button'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'


const useStyles = makeStyles({
    root: {
        background: '#ccc',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '10px 30px'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]
        },
        secondary: {
            main: green[500]
        }
    }
})

function ButtonStyled() {
    const classes = useStyles()
    return <Button className={classes.root}>Test Styled Button</Button>
}


function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
    return (
        <div>
        <FormControlLabel
            control={<Checkbox
                checked={checked}
                icon={<DeleteIcon/>}
                checkedIcon={<SaveIcon/>}
                onChange={(e)=>setChecked(e.target.checked)}
                color="primary"
                inputProps={{
                    'aria-label': 'secondary checkbox'
                }}
            />}
            label="Testing Checkbox"
        />
            
        </div>
    )
}

function MaterialUi() {
    return (
        <ThemeProvider theme={theme} background="red">
            <Container maxWidth="xs">
                <div className="App">
                    <header className="App-header">
                        <AppBar color="secondary">
                            <ToolBar>
                                <IconButton>
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6">
                                    MUI Themeing
                                </Typography>
                                <Button>
                                    Login
                                </Button>
                            </ToolBar>
                        </AppBar>
                        <Typography variant="h2" component="div">
                            Welcome to Grep
                        </Typography>
                        <Typography variant="subtitle1">
                            Learn how to use Material UI
                        </Typography>
                        <ButtonStyled />

                        <Grid container spacing={5} justify="center">
                            <Grid item xs={3} sm={6}>
                                <Paper style={{ height:75, width:100,}}/>
                            </Grid>
                            <Grid item xs={3} sm={6}>
                                <Paper style={{ height:75, width:100,}}/>
                            </Grid>
                            <Grid item xs={3} sm={6}>
                                <Paper style={{ height:75, width:100,}}/>
                            </Grid>
                        </Grid>

                        <TextField
                            variant="filled"
                            color="secondary"
                            type="email"
                            label="The Time"
                            placeholder="starboy@gmail.com"
                        />
                        <CheckboxExample/>
                        <ButtonGroup>
                            <Button 
                                startIcon={<SaveIcon />}
                                size="large"
                                href="#" 
                                variant="contained" 
                                color="primary">
                                    Save
                            </Button>
                            <Button 
                                startIcon={<DeleteIcon />}
                                size="large"
                                href="#" 
                                variant="contained" 
                                color="secondary">
                                    Discard
                            </Button>
                        </ButtonGroup>
                            
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default MaterialUi
