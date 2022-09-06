import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealCard from "../components/MealCard";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitile = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: catTitile,
      headerBackTitle: "Back",
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetail");
    }

    const { title, imageUrl, duration, complexity, affordability } =
      itemData.item;

    const mealProps = {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      onPress: pressHandler,
    };

    return <MealCard {...mealProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
