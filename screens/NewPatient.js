import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox} from 'react-native-elements';
import Button from 'react-native-button';

export class NewPatientScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: null,
            height: null,
            weight: null,
            maleChecked: false,
            femaleChecked: false, 
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.formWrapper}>
                    <FormLabel>Name</FormLabel>
                    <FormInput onChangeText={(name) => this.setState({name})}></FormInput>
                    <FormLabel>Age</FormLabel>
                    <FormInput onChangeText={(age) => this.setState({age})}></FormInput>
                    <View style={styles.checkBox}>
                        <CheckBox title='Male' onPress={() => !this.state.maleChecked ? this.setState({maleChecked: true}) || this.setState({femaleChecked: false}) : this.setState({maleChecked: false})} 
                                checked={this.state.maleChecked} 
                                containerStyle={{backgroundColor: 'white', borderColor: 'white'}} checkedColor='#1E89DC'/>
                        <CheckBox title='Female' onPress={() => !this.state.femaleChecked ? this.setState({femaleChecked: true}) || this.setState({maleChecked: false}) : this.setState({femaleChecked: false})}  
                                checked={this.state.femaleChecked} 
                                containerStyle={{backgroundColor: 'white', borderColor: 'white'}}  checkedColor='#1E89DC'/>
                    </View>
                    <FormLabel>Height</FormLabel>
                    <FormInput onChangeText={(height) => this.setState({height})}></FormInput>
                    <FormLabel>Weight</FormLabel>
                    <FormInput onChangeText={(weight) => this.setState({weight})}></FormInput>
                </View>
                <View>
                    <Button containerStyle={{backgroundColor: '#1E89DC', height: 60, justifyContent: 'center'}} style={{color: 'white'}} 
                            onPress={() => {
                                
                            }}>
                        Check Your Body
                        </Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    formWrapper: {
        marginTop: 20,
        paddingTop: 20,
    },
    checkBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
})