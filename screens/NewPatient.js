import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class NewPatientScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    New Patient page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})