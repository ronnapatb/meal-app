import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constant/color";

function MealSubTitle({ duration, complexity, affordability, color }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={[styles.subTitleText, { color }]}>{duration}m</Text>
      <Text style={[styles.subTitleText, { color }]}>{complexity}</Text>
      <Text style={[styles.subTitleText, { color }]}>{affordability}</Text>
    </View>
  );
}

export default MealSubTitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  subTitleText: {
    color: Colors.itemListColor,
    marginHorizontal: 2,
  },
});
