import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export class CheckBodyScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/homebody.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})