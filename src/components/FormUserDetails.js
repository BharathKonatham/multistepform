import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
    const {values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter user Details"/>
                <TextField hintText="Enter your first name"
                floatingLableText = "First Name"
                onChange={handleChange('firstName')}
                defaultValue = {values.firstName}
                />
                <br />
                <TextField hintText="Enter your last name"
                floatingLableText = "Last Name"
                onChange={handleChange('lastName')}
                defaultValue = {values.lastName}
                />
                <br/>
                <TextField hintText="Enter your email"
                floatingLableText = "Email"
                onChange={handleChange('email')}
                defaultValue = {values.email}
                />
                <br />
                <button style={styles.button}
                onClick={this.continue}>Continue</button>
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
export default FormUserDetails