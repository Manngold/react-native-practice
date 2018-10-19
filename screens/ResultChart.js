import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryBar } from "victory-native";

const data = [
  { quater: 1, earnings: 13000 },
  { quater: 2, earnings: 8000 },
  { quater: 3, earnings: 2200 },
  { quater: 4, earnings: 3000 }
];
export class ResultChartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryBar data={data} x="quater" y="earnings" />
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
  chart: {
    width: 200,
    height: 200
  }
});
