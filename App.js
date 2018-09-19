import React, { Component } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { black } from 'ansi-colors';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true}, 2000, () => {
            this.setState({refreshing: false});
        });
    }
    render(){
        let homeImg = {
            uri: require('./assets/images/homebody.png'),
        }
        return(
            <View style={styles.container}>
                <ScrollView refreshing={this.state.refreshing} onRefresh={this._onRefresh}>
                    <View style={styles.topIcon}>
                        <Ionicons style={styles.menuIcon} name="md-menu" size={45} color="#307CBF"/>
                        <Ionicons style={styles.addIcon} name="ios-person-add" size={45} color="#307CBF"/>
                    </View>
                    <View style={styles.bodyContainer}>
                        <Image source={homeImg.uri} style={styles.bodyContainer}/>
                    </View> 
                </ScrollView>
                <View style={styles.staticContainer}>
                    <Ionicons style={styles.staticIcon} name="md-body" size={45} color="#3E3E3E"/>
                    <View style={styles.gagueBar}></View>
                    <View style={styles.textBox}><Text>70%</Text></View>
                </View>
                <View style={styles.staticContainer}>
                    <Ionicons style={styles.staticIcon} name="md-water" size={45} color="#307CBF"/>
                    <View style={styles.gagueBar}></View>
                    <View style={styles.textBox}><Text>70%</Text></View>
                </View>
                <View style={styles.staticContainer}>
                    <Ionicons style={styles.staticIcon} name="ios-water-outline" size={45} color="black"/>
                    <View style={styles.gagueBar}></View>
                    <View style={styles.textBox}><Text>70%</Text></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuIcon: {
        marginLeft: 20,
        marginTop: 30,
    },
    addIcon: {
        marginRight: 20,
        marginTop: 30,
    },
    bodyContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    staticContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    staticIcon: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    gagueBar: {
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        height: 30,
        backgroundColor: "black",
        borderRadius: 5,
    },
    textBox: {
        marginTop: 17,
        marginRight: 30
    }
})