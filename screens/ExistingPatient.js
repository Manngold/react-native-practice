import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { patientdb } from '../patientdb';

export class ExistingPatientScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    style={styles.flatStyle}
                    data={patientdb}
                    renderItem={({item}) => 
                        <View style={styles.box}>
                            <Image style={styles.profileImg} 
                                   source={require('../assets/images/robot-dev.png')}>
                            </Image>
                            <Text>{item.name}</Text>
                        </View>
                    }
                />
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
    },
    flatStyle: {
        flexDirection: "row",
        paddingTop: 20,
    },
    box:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    profileImg: {
        width: 70,
        height: 70,
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 35,
    }
})