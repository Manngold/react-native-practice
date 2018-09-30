import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import Button from 'react-native-button';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import { NewPatientScreen } from './screens/NewPatient';
import { ExistingPatientScreen } from './screens/ExistingPatient';

export class HomeScreen extends Component {
    render(){
            return (
        <View style={styles.mainBox}>
                <Text style={styles.titleText}>Smart Belt</Text>
                <Ionicons name="md-heart" size={80} color="red"/>
                <Text>Check Your Body</Text>
                <View style={styles.buttonBox}>
                        <Button 
                            containerStyle={{backgroundColor: "#4B8FF1", borderRadius: 90, height: 100, 
                                            width: 100, justifyContent: 'center', alignItems: 'center',
                                            marginTop: 30, marginLeft: 20}}
                            style={{color: 'white'}} 
                            onPress={() => this.props.navigation.navigate('NewPatient')}>New Patient</Button>
                            
                        <Button 
                        containerStyle={{backgroundColor: "#3A28BE", borderRadius: 90, height: 100, 
                                         width: 100, justifyContent: 'center', alignItems: 'center',
                                         marginTop: 30, marginLeft: 20}}
                        style={{color: 'white'}}
                        onPress={() => this.props.navigation.navigate('ExistingPatient')}>Existing Patient</Button>
                </View>
            </View>
        )
    }
}

export const RootStack = createStackNavigator({
    Home: HomeScreen,
    NewPatient: NewPatientScreen,
    ExistingPatient: ExistingPatientScreen,
},
{
    initialRouteName: 'Home',
}
);

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 50,
    },
    buttonBox: {
        flexDirection: 'row',   
    },
    newBtn: {
        backgroundColor: "#078C95",
        color: 'white',
        borderRadius: 50
    },
    existBtn: {
        backgroundColor: "#101377",
        color: 'white',
        borderRadius: 50,    
    }   
})