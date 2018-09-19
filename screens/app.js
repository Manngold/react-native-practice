import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Hello React-Native
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContents: 'center',
        alignItems: 'center',
    }
})