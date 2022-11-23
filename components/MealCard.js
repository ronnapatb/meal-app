import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealSubTitle from "./MealSubTitle";

function MealCard({
  id,
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectedMealHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={selectedMealHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innterContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }}></Image>
          <View style={styles.mealDetailContainer}>
            <Text style={styles.title}>{title} test</Text>
            <MealSubTitle
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            ></MealSubTitle>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealCard;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 7,
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innterContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  mealDetailContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 18,
  },
  detail: {
    padding: 6,
    fontSize: 12,
  },
});
