import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class ExistingPatientScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Existing Patient page
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