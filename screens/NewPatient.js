import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';

export class NewPatientScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: true,
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <FormLabel>Name</FormLabel>
                <FormInput></FormInput>
                <FormLabel>Age</FormLabel>
                <FormInput></FormInput>
                <View style={styles.checkBox}>
                    <CheckBox title='Male' checked={this.state.checked} containerStyle={{backgroundColor: 'white', borderColor: 'white'}} checkedColor='#1E89DC'/>
                    <CheckBox title='Female' checked={this.state.checked} containerStyle={{backgroundColor: 'white', borderColor: 'white'}}  checkedColor='#1E89DC'/>
                </View>
                <FormLabel>Height</FormLabel>
                <FormInput></FormInput>
                <FormLabel>Weight</FormLabel>
                <FormInput></FormInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    checkBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: 'white'
    }
})