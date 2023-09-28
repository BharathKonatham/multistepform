import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    goBack = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    const {values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details"/>
                <TextField hintText="Enter your occupation"
                floatingLableText = "Occupatione"
                onChange={handleChange('occupation')}
                defaultValue = {values.occupation}
                />
                <br />
                <TextField hintText="Enter your city"
                floatingLableText = "City"
                onChange={handleChange('city')}
                defaultValue = {values.city}
                />
                <br/>
                <TextField hintText="Enter Bio"
                floatingLableText = "Bio"
                onChange={handleChange('bio')}
                defaultValue = {values.bio}
                />
                <br />
                <button style={styles.button}
                onClick={this.continue}>Continue</button>
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
export default FormPersonalDetails