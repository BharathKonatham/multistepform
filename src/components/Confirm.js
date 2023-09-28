import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';

export class Confirm extends Component {
    continue = e =>{
        e.preventDefault();
        //Process Form
        this.props.nextStep();
    }

    goBack = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    const {values} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm Your Details"/>
                <List>
                    <ListItem primaryText="First Name"
                            secondaryText={values.firstName}
                    >
                            
                    </ListItem>
                    <ListItem primaryText="Last Name"
                            secondaryText={values.firstName}>
                        
                    </ListItem>
                    <ListItem primaryText="Email"
                            secondaryText={values.firstName}>
                        
                    </ListItem>
                    <ListItem primaryText="Occupation"
                            secondaryText={values.firstName}>
                        
                    </ListItem>
                    <ListItem primaryText="City"
                            secondaryText={values.firstName}>
                        
                    </ListItem>
                    <ListItem primaryText="Bio"
                            secondaryText={values.firstName}>
                        
                    </ListItem>
                    
                </List>
                <button style={styles.button}
                onClick={this.continue}>Confirm</button>
                 <button style={styles.button}
                onClick={this.goBack}>Go back</button>
            </React.Fragment>
        </MuiThemeProvider>
      
    )
  }
}

const styles ={
    button:{
        height:'25px',
        margin:15
    }
}
export default Confirm