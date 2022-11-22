import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MealListDetail from "../components/MealListDetail";
import MealSubTitle from "../components/MealSubTitle";
import { Colors } from "../constant/color";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const mealDetail = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  useEffect(() => {}, [mealId]);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: mealDetail.imageUrl,
        }}
      ></Image>
      <Text style={styles.title}> {mealDetail.title}</Text>
      <MealSubTitle
        duration={mealDetail.duration}
        complexity={mealDetail.complexity}
        affordability={mealDetail.affordability}
        color={Colors.itemListColor}
      />
      <MealListDetail title="Ingredients" itemList={mealDetail.ingredients} />
      <MealListDetail title="Steps" itemList={mealDetail.steps} />
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  image: {
    height: 300,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginVertical: 10,
  },
});
