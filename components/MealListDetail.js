import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constant/color";

function MealListDetail({ title, itemList }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {itemList.map((item) => (
          <View key={item} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default MealListDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  innerContainer: {
    width: "70%",
  },
  titleContainer: {
    borderBottomColor: Colors.itemListColor,
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.itemListColor,
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: Colors.itemListColor,
    borderRadius: 6,
    marginVertical: 5,
    padding: 5,
  },
  itemText: {
    textAlign: "center",
  },
});
