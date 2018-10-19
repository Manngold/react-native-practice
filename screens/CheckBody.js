import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "react-native-button";
import Entypo from "@expo/vector-icons/Entypo";

export class CheckBodyScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bodyImg}>
          <Image source={require("../assets/images/homebody.png")} />
        </View>
        <View style={styles.researchBtn}>
          <Entypo
            name="fingerprint"
            size={60}
            onPress={() => this.props.navigation.navigate("ResultChart")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  bodyImg: {
    position: "relative",
    zIndex: 0
  },
  researchBtn: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 100
  }
});
